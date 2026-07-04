// Typed models for the FinalSpace SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Character is the typed data model for the character entity.
type Character struct {
	Ability *[]any `json:"ability,omitempty"`
	Alia *[]any `json:"alia,omitempty"`
	Gender *string `json:"gender,omitempty"`
	Hair *string `json:"hair,omitempty"`
	Id *int `json:"id,omitempty"`
	ImgUrl *string `json:"img_url,omitempty"`
	Name *string `json:"name,omitempty"`
	Origin *string `json:"origin,omitempty"`
	Species *string `json:"species,omitempty"`
	Status *string `json:"status,omitempty"`
}

// CharacterLoadMatch is the typed request payload for Character.LoadTyped.
type CharacterLoadMatch struct {
	Id int `json:"id"`
}

// CharacterListMatch mirrors the character fields as an all-optional match
// filter (Go analog of Partial<Character>).
type CharacterListMatch struct {
	Ability *[]any `json:"ability,omitempty"`
	Alia *[]any `json:"alia,omitempty"`
	Gender *string `json:"gender,omitempty"`
	Hair *string `json:"hair,omitempty"`
	Id *int `json:"id,omitempty"`
	ImgUrl *string `json:"img_url,omitempty"`
	Name *string `json:"name,omitempty"`
	Origin *string `json:"origin,omitempty"`
	Species *string `json:"species,omitempty"`
	Status *string `json:"status,omitempty"`
}

// Episode is the typed data model for the episode entity.
type Episode struct {
	AirDate *string `json:"air_date,omitempty"`
	Character *[]any `json:"character,omitempty"`
	Director *string `json:"director,omitempty"`
	Id *int `json:"id,omitempty"`
	ImgUrl *string `json:"img_url,omitempty"`
	Name *string `json:"name,omitempty"`
	Writer *string `json:"writer,omitempty"`
}

// EpisodeLoadMatch is the typed request payload for Episode.LoadTyped.
type EpisodeLoadMatch struct {
	Id int `json:"id"`
}

// EpisodeListMatch mirrors the episode fields as an all-optional match
// filter (Go analog of Partial<Episode>).
type EpisodeListMatch struct {
	AirDate *string `json:"air_date,omitempty"`
	Character *[]any `json:"character,omitempty"`
	Director *string `json:"director,omitempty"`
	Id *int `json:"id,omitempty"`
	ImgUrl *string `json:"img_url,omitempty"`
	Name *string `json:"name,omitempty"`
	Writer *string `json:"writer,omitempty"`
}

// GetEndpoint is the typed data model for the get_endpoint entity.
type GetEndpoint struct {
	FullUrl *string `json:"full_url,omitempty"`
	Name *string `json:"name,omitempty"`
	Path *string `json:"path,omitempty"`
	QueryParam *[]any `json:"query_param,omitempty"`
	Type *string `json:"type,omitempty"`
}

// GetEndpointListMatch mirrors the get_endpoint fields as an all-optional match
// filter (Go analog of Partial<GetEndpoint>).
type GetEndpointListMatch struct {
	FullUrl *string `json:"full_url,omitempty"`
	Name *string `json:"name,omitempty"`
	Path *string `json:"path,omitempty"`
	QueryParam *[]any `json:"query_param,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Location is the typed data model for the location entity.
type Location struct {
	Id *int `json:"id,omitempty"`
	ImgUrl *string `json:"img_url,omitempty"`
	Inhabitant *[]any `json:"inhabitant,omitempty"`
	Name *string `json:"name,omitempty"`
	NotableResident *[]any `json:"notable_resident,omitempty"`
	Type *string `json:"type,omitempty"`
}

// LocationLoadMatch is the typed request payload for Location.LoadTyped.
type LocationLoadMatch struct {
	Id int `json:"id"`
}

// LocationListMatch mirrors the location fields as an all-optional match
// filter (Go analog of Partial<Location>).
type LocationListMatch struct {
	Id *int `json:"id,omitempty"`
	ImgUrl *string `json:"img_url,omitempty"`
	Inhabitant *[]any `json:"inhabitant,omitempty"`
	Name *string `json:"name,omitempty"`
	NotableResident *[]any `json:"notable_resident,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Quote is the typed data model for the quote entity.
type Quote struct {
	By *string `json:"by,omitempty"`
	Character *string `json:"character,omitempty"`
	Id *int `json:"id,omitempty"`
	Image *string `json:"image,omitempty"`
	Quote *string `json:"quote,omitempty"`
}

// QuoteListMatch mirrors the quote fields as an all-optional match
// filter (Go analog of Partial<Quote>).
type QuoteListMatch struct {
	By *string `json:"by,omitempty"`
	Character *string `json:"character,omitempty"`
	Id *int `json:"id,omitempty"`
	Image *string `json:"image,omitempty"`
	Quote *string `json:"quote,omitempty"`
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

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
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

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
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
