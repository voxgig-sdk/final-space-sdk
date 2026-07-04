package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/final-space-sdk/go"
	"github.com/voxgig-sdk/final-space-sdk/go/core"

	vs "github.com/voxgig-sdk/final-space-sdk/go/utility/struct"
)

func TestGetEndpointEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.GetEndpoint(nil)
		if ent == nil {
			t.Fatal("expected non-nil GetEndpointEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := get_endpointBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "get_endpoint." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set FINALSPACE_TEST_GET_ENDPOINT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		getEndpointRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.get_endpoint", setup.data)))
		var getEndpointRef01Data map[string]any
		if len(getEndpointRef01DataRaw) > 0 {
			getEndpointRef01Data = core.ToMapAny(getEndpointRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = getEndpointRef01Data

		// LIST
		getEndpointRef01Ent := client.GetEndpoint(nil)
		getEndpointRef01Match := map[string]any{}

		getEndpointRef01ListResult, err := getEndpointRef01Ent.List(getEndpointRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, getEndpointRef01ListOk := getEndpointRef01ListResult.([]any)
		if !getEndpointRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", getEndpointRef01ListResult)
		}

	})
}

func get_endpointBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "get_endpoint", "GetEndpointTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read get_endpoint test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse get_endpoint test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"get_endpoint01", "get_endpoint02", "get_endpoint03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("FINALSPACE_TEST_GET_ENDPOINT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"FINALSPACE_TEST_GET_ENDPOINT_ENTID": idmap,
		"FINALSPACE_TEST_LIVE":      "FALSE",
		"FINALSPACE_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["FINALSPACE_TEST_GET_ENDPOINT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["FINALSPACE_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
			},
			extra,
		})
		client = sdk.NewFinalSpaceSDK(core.ToMapAny(mergedOpts))
	}

	live := env["FINALSPACE_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["FINALSPACE_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
