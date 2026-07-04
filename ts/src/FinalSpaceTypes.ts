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

export type CharacterListMatch = Partial<Character>

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

export type EpisodeListMatch = Partial<Episode>

export interface GetEndpoint {
  full_url?: string
  name?: string
  path?: string
  query_param?: any[]
  type?: string
}

export type GetEndpointListMatch = Partial<GetEndpoint>

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

export type LocationListMatch = Partial<Location>

export interface Quote {
  by?: string
  character?: string
  id?: number
  image?: string
  quote?: string
}

export type QuoteListMatch = Partial<Quote>

