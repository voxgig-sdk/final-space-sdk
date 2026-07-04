# frozen_string_literal: true

# Typed models for the FinalSpace SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Character entity data model.
#
# @!attribute [rw] ability
#   @return [Array, nil]
#
# @!attribute [rw] alia
#   @return [Array, nil]
#
# @!attribute [rw] gender
#   @return [String, nil]
#
# @!attribute [rw] hair
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] img_url
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] origin
#   @return [String, nil]
#
# @!attribute [rw] species
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
Character = Struct.new(
  :ability,
  :alia,
  :gender,
  :hair,
  :id,
  :img_url,
  :name,
  :origin,
  :species,
  :status,
  keyword_init: true
)

# Request payload for Character#load.
#
# @!attribute [rw] id
#   @return [Integer]
CharacterLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Match filter for Character#list (any subset of Character fields).
#
# @!attribute [rw] ability
#   @return [Array, nil]
#
# @!attribute [rw] alia
#   @return [Array, nil]
#
# @!attribute [rw] gender
#   @return [String, nil]
#
# @!attribute [rw] hair
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] img_url
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] origin
#   @return [String, nil]
#
# @!attribute [rw] species
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
CharacterListMatch = Struct.new(
  :ability,
  :alia,
  :gender,
  :hair,
  :id,
  :img_url,
  :name,
  :origin,
  :species,
  :status,
  keyword_init: true
)

# Episode entity data model.
#
# @!attribute [rw] air_date
#   @return [String, nil]
#
# @!attribute [rw] character
#   @return [Array, nil]
#
# @!attribute [rw] director
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] img_url
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] writer
#   @return [String, nil]
Episode = Struct.new(
  :air_date,
  :character,
  :director,
  :id,
  :img_url,
  :name,
  :writer,
  keyword_init: true
)

# Request payload for Episode#load.
#
# @!attribute [rw] id
#   @return [Integer]
EpisodeLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Match filter for Episode#list (any subset of Episode fields).
#
# @!attribute [rw] air_date
#   @return [String, nil]
#
# @!attribute [rw] character
#   @return [Array, nil]
#
# @!attribute [rw] director
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] img_url
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] writer
#   @return [String, nil]
EpisodeListMatch = Struct.new(
  :air_date,
  :character,
  :director,
  :id,
  :img_url,
  :name,
  :writer,
  keyword_init: true
)

# GetEndpoint entity data model.
#
# @!attribute [rw] full_url
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] query_param
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
GetEndpoint = Struct.new(
  :full_url,
  :name,
  :path,
  :query_param,
  :type,
  keyword_init: true
)

# Match filter for GetEndpoint#list (any subset of GetEndpoint fields).
#
# @!attribute [rw] full_url
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] query_param
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
GetEndpointListMatch = Struct.new(
  :full_url,
  :name,
  :path,
  :query_param,
  :type,
  keyword_init: true
)

# Location entity data model.
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] img_url
#   @return [String, nil]
#
# @!attribute [rw] inhabitant
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] notable_resident
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Location = Struct.new(
  :id,
  :img_url,
  :inhabitant,
  :name,
  :notable_resident,
  :type,
  keyword_init: true
)

# Request payload for Location#load.
#
# @!attribute [rw] id
#   @return [Integer]
LocationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Match filter for Location#list (any subset of Location fields).
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] img_url
#   @return [String, nil]
#
# @!attribute [rw] inhabitant
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] notable_resident
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
LocationListMatch = Struct.new(
  :id,
  :img_url,
  :inhabitant,
  :name,
  :notable_resident,
  :type,
  keyword_init: true
)

# Quote entity data model.
#
# @!attribute [rw] by
#   @return [String, nil]
#
# @!attribute [rw] character
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] quote
#   @return [String, nil]
Quote = Struct.new(
  :by,
  :character,
  :id,
  :image,
  :quote,
  keyword_init: true
)

# Match filter for Quote#list (any subset of Quote fields).
#
# @!attribute [rw] by
#   @return [String, nil]
#
# @!attribute [rw] character
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] quote
#   @return [String, nil]
QuoteListMatch = Struct.new(
  :by,
  :character,
  :id,
  :image,
  :quote,
  keyword_init: true
)

