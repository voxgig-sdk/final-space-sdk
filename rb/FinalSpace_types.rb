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
# @!attribute [rw] abilities
#   @return [Array, nil]
#
# @!attribute [rw] alias
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
  :abilities,
  :alias,
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

# Request payload for Character#list.
#
# @!attribute [rw] abilities
#   @return [Array, nil]
#
# @!attribute [rw] alias
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
  :abilities,
  :alias,
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
# @!attribute [rw] characters
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
  :characters,
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

# Request payload for Episode#list.
#
# @!attribute [rw] air_date
#   @return [String, nil]
#
# @!attribute [rw] characters
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
  :characters,
  :director,
  :id,
  :img_url,
  :name,
  :writer,
  keyword_init: true
)

# GetEndpoint entity data model.
#
# @!attribute [rw] fullUrl
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] queryParams
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
GetEndpoint = Struct.new(
  :fullUrl,
  :name,
  :path,
  :queryParams,
  :type,
  keyword_init: true
)

# Request payload for GetEndpoint#list.
#
# @!attribute [rw] fullUrl
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [String, nil]
#
# @!attribute [rw] queryParams
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
GetEndpointListMatch = Struct.new(
  :fullUrl,
  :name,
  :path,
  :queryParams,
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
# @!attribute [rw] inhabitants
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] notable_residents
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Location = Struct.new(
  :id,
  :img_url,
  :inhabitants,
  :name,
  :notable_residents,
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

# Request payload for Location#list.
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] img_url
#   @return [String, nil]
#
# @!attribute [rw] inhabitants
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] notable_residents
#   @return [Array, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
LocationListMatch = Struct.new(
  :id,
  :img_url,
  :inhabitants,
  :name,
  :notable_residents,
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

# Request payload for Quote#list.
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

