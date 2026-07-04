-- Typed models for the FinalSpace SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Character
---@field ability? table
---@field alia? table
---@field gender? string
---@field hair? string
---@field id? number
---@field img_url? string
---@field name? string
---@field origin? string
---@field species? string
---@field status? string

---@class CharacterLoadMatch
---@field id number

---@class CharacterListMatch

---@class Episode
---@field air_date? string
---@field character? table
---@field director? string
---@field id? number
---@field img_url? string
---@field name? string
---@field writer? string

---@class EpisodeLoadMatch
---@field id number

---@class EpisodeListMatch

---@class GetEndpoint
---@field full_url? string
---@field name? string
---@field path? string
---@field query_param? table
---@field type? string

---@class GetEndpointListMatch

---@class Location
---@field id? number
---@field img_url? string
---@field inhabitant? table
---@field name? string
---@field notable_resident? table
---@field type? string

---@class LocationLoadMatch
---@field id number

---@class LocationListMatch

---@class Quote
---@field by? string
---@field character? string
---@field id? number
---@field image? string
---@field quote? string

---@class QuoteListMatch

local M = {}

return M
