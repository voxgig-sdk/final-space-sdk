// Typed models for the FinalSpace SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Character {
  ability?: any[]
  alia?: any[]
  gender?: string
  hair?: string
  id?: number
  img_url?: string
  name?: string
  origin?: string
  species?: string
  status?: string
}

export interface CharacterLoadMatch {
  id: number
}

export interface CharacterListMatch {
  ability?: any[]
  alia?: any[]
  gender?: string
  hair?: string
  id?: number
  img_url?: string
  name?: string
  origin?: string
  species?: string
  status?: string
}

export interface Episode {
  air_date?: string
  character?: any[]
  director?: string
  id?: number
  img_url?: string
  name?: string
  writer?: string
}

export interface EpisodeLoadMatch {
  id: number
}

export interface EpisodeListMatch {
  air_date?: string
  character?: any[]
  director?: string
  id?: number
  img_url?: string
  name?: string
  writer?: string
}

export interface GetEndpoint {
  full_url?: string
  name?: string
  path?: string
  query_param?: any[]
  type?: string
}

export interface GetEndpointListMatch {
  full_url?: string
  name?: string
  path?: string
  query_param?: any[]
  type?: string
}

export interface Location {
  id?: number
  img_url?: string
  inhabitant?: any[]
  name?: string
  notable_resident?: any[]
  type?: string
}

export interface LocationLoadMatch {
  id: number
}

export interface LocationListMatch {
  id?: number
  img_url?: string
  inhabitant?: any[]
  name?: string
  notable_resident?: any[]
  type?: string
}

export interface Quote {
  by?: string
  character?: string
  id?: number
  image?: string
  quote?: string
}

export interface QuoteListMatch {
  by?: string
  character?: string
  id?: number
  image?: string
  quote?: string
}

