package voxgigfinalspacesdk

import (
	"github.com/voxgig-sdk/final-space-sdk/go/core"
	"github.com/voxgig-sdk/final-space-sdk/go/entity"
	"github.com/voxgig-sdk/final-space-sdk/go/feature"
	_ "github.com/voxgig-sdk/final-space-sdk/go/utility"
)

// Type aliases preserve external API.
type FinalSpaceSDK = core.FinalSpaceSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type FinalSpaceEntity = core.FinalSpaceEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type FinalSpaceError = core.FinalSpaceError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCharacterEntityFunc = func(client *core.FinalSpaceSDK, entopts map[string]any) core.FinalSpaceEntity {
		return entity.NewCharacterEntity(client, entopts)
	}
	core.NewEpisodeEntityFunc = func(client *core.FinalSpaceSDK, entopts map[string]any) core.FinalSpaceEntity {
		return entity.NewEpisodeEntity(client, entopts)
	}
	core.NewGetEndpointEntityFunc = func(client *core.FinalSpaceSDK, entopts map[string]any) core.FinalSpaceEntity {
		return entity.NewGetEndpointEntity(client, entopts)
	}
	core.NewLocationEntityFunc = func(client *core.FinalSpaceSDK, entopts map[string]any) core.FinalSpaceEntity {
		return entity.NewLocationEntity(client, entopts)
	}
	core.NewQuoteEntityFunc = func(client *core.FinalSpaceSDK, entopts map[string]any) core.FinalSpaceEntity {
		return entity.NewQuoteEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewFinalSpaceSDK = core.NewFinalSpaceSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewFinalSpaceSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *FinalSpaceSDK  { return NewFinalSpaceSDK(nil) }
func Test() *FinalSpaceSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
