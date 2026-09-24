// Typed models for the FinalSpace SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/final-space-sdk/go/core"
)

// Character is the typed data model for the character entity.
type Character struct {
}

// CharacterLoadMatch is the typed request payload for Character.LoadTyped.
type CharacterLoadMatch struct {
	Id int `json:"id"`
}

// CharacterListMatch is the typed request payload for Character.ListTyped.
type CharacterListMatch struct {
	Sort *string `json:"sort,omitempty"`
}

// Episode is the typed data model for the episode entity.
type Episode struct {
}

// EpisodeLoadMatch is the typed request payload for Episode.LoadTyped.
type EpisodeLoadMatch struct {
	Id int `json:"id"`
}

// EpisodeListMatch is the typed request payload for Episode.ListTyped.
type EpisodeListMatch struct {
	Sort *string `json:"sort,omitempty"`
}

// GetEndpoint is the typed data model for the get_endpoint entity.
type GetEndpoint struct {
}

// GetEndpointListMatch is the typed request payload for GetEndpoint.ListTyped.
type GetEndpointListMatch struct {
	FullUrl *string `json:"fullUrl,omitempty"`
	Name *string `json:"name,omitempty"`
	Path *string `json:"path,omitempty"`
	QueryParams *[]any `json:"queryParams,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Location is the typed data model for the location entity.
type Location struct {
}

// LocationLoadMatch is the typed request payload for Location.LoadTyped.
type LocationLoadMatch struct {
	Id int `json:"id"`
}

// LocationListMatch is the typed request payload for Location.ListTyped.
type LocationListMatch struct {
	Sort *string `json:"sort,omitempty"`
}

// Quote is the typed data model for the quote entity.
type Quote struct {
}

// QuoteListMatch is the typed request payload for Quote.ListTyped.
type QuoteListMatch struct {
	Sort *string `json:"sort,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
