# Typed models for the FinalSpace SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Character(TypedDict, total=False):
    ability: list
    alia: list
    gender: str
    hair: str
    id: int
    img_url: str
    name: str
    origin: str
    species: str
    status: str


class CharacterLoadMatch(TypedDict):
    id: int


class CharacterListMatch(TypedDict, total=False):
    ability: list
    alia: list
    gender: str
    hair: str
    id: int
    img_url: str
    name: str
    origin: str
    species: str
    status: str


class Episode(TypedDict, total=False):
    air_date: str
    character: list
    director: str
    id: int
    img_url: str
    name: str
    writer: str


class EpisodeLoadMatch(TypedDict):
    id: int


class EpisodeListMatch(TypedDict, total=False):
    air_date: str
    character: list
    director: str
    id: int
    img_url: str
    name: str
    writer: str


class GetEndpoint(TypedDict, total=False):
    full_url: str
    name: str
    path: str
    query_param: list
    type: str


class GetEndpointListMatch(TypedDict, total=False):
    full_url: str
    name: str
    path: str
    query_param: list
    type: str


class Location(TypedDict, total=False):
    id: int
    img_url: str
    inhabitant: list
    name: str
    notable_resident: list
    type: str


class LocationLoadMatch(TypedDict):
    id: int


class LocationListMatch(TypedDict, total=False):
    id: int
    img_url: str
    inhabitant: list
    name: str
    notable_resident: list
    type: str


class Quote(TypedDict, total=False):
    by: str
    character: str
    id: int
    image: str
    quote: str


class QuoteListMatch(TypedDict, total=False):
    by: str
    character: str
    id: int
    image: str
    quote: str
