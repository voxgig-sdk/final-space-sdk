# Typed models for the FinalSpace SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Character:
    ability: Optional[list] = None
    alia: Optional[list] = None
    gender: Optional[str] = None
    hair: Optional[str] = None
    id: Optional[int] = None
    img_url: Optional[str] = None
    name: Optional[str] = None
    origin: Optional[str] = None
    species: Optional[str] = None
    status: Optional[str] = None


@dataclass
class CharacterLoadMatch:
    id: int


@dataclass
class CharacterListMatch:
    ability: Optional[list] = None
    alia: Optional[list] = None
    gender: Optional[str] = None
    hair: Optional[str] = None
    id: Optional[int] = None
    img_url: Optional[str] = None
    name: Optional[str] = None
    origin: Optional[str] = None
    species: Optional[str] = None
    status: Optional[str] = None


@dataclass
class Episode:
    air_date: Optional[str] = None
    character: Optional[list] = None
    director: Optional[str] = None
    id: Optional[int] = None
    img_url: Optional[str] = None
    name: Optional[str] = None
    writer: Optional[str] = None


@dataclass
class EpisodeLoadMatch:
    id: int


@dataclass
class EpisodeListMatch:
    air_date: Optional[str] = None
    character: Optional[list] = None
    director: Optional[str] = None
    id: Optional[int] = None
    img_url: Optional[str] = None
    name: Optional[str] = None
    writer: Optional[str] = None


@dataclass
class GetEndpoint:
    full_url: Optional[str] = None
    name: Optional[str] = None
    path: Optional[str] = None
    query_param: Optional[list] = None
    type: Optional[str] = None


@dataclass
class GetEndpointListMatch:
    full_url: Optional[str] = None
    name: Optional[str] = None
    path: Optional[str] = None
    query_param: Optional[list] = None
    type: Optional[str] = None


@dataclass
class Location:
    id: Optional[int] = None
    img_url: Optional[str] = None
    inhabitant: Optional[list] = None
    name: Optional[str] = None
    notable_resident: Optional[list] = None
    type: Optional[str] = None


@dataclass
class LocationLoadMatch:
    id: int


@dataclass
class LocationListMatch:
    id: Optional[int] = None
    img_url: Optional[str] = None
    inhabitant: Optional[list] = None
    name: Optional[str] = None
    notable_resident: Optional[list] = None
    type: Optional[str] = None


@dataclass
class Quote:
    by: Optional[str] = None
    character: Optional[str] = None
    id: Optional[int] = None
    image: Optional[str] = None
    quote: Optional[str] = None


@dataclass
class QuoteListMatch:
    by: Optional[str] = None
    character: Optional[str] = None
    id: Optional[int] = None
    image: Optional[str] = None
    quote: Optional[str] = None

