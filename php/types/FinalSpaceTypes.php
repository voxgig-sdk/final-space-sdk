<?php
declare(strict_types=1);

// Typed models for the FinalSpace SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Character entity data model. */
class Character
{
    public ?array $abilities = null;
    public ?array $alias = null;
    public ?string $gender = null;
    public ?string $hair = null;
    public ?int $id = null;
    public ?string $img_url = null;
    public ?string $name = null;
    public ?string $origin = null;
    public ?string $species = null;
    public ?string $status = null;
}

/** Request payload for Character#load. */
class CharacterLoadMatch
{
    public int $id;
}

/** Request payload for Character#list. */
class CharacterListMatch
{
    public ?string $sort = null;
}

/** Episode entity data model. */
class Episode
{
    public ?string $air_date = null;
    public ?array $characters = null;
    public ?string $director = null;
    public ?int $id = null;
    public ?string $img_url = null;
    public ?string $name = null;
    public ?string $writer = null;
}

/** Request payload for Episode#load. */
class EpisodeLoadMatch
{
    public int $id;
}

/** Request payload for Episode#list. */
class EpisodeListMatch
{
    public ?string $sort = null;
}

/** GetEndpoint entity data model. */
class GetEndpoint
{
    public ?string $fullUrl = null;
    public ?string $name = null;
    public ?string $path = null;
    public ?array $queryParams = null;
    public ?string $type = null;
}

/** Request payload for GetEndpoint#list. */
class GetEndpointListMatch
{
    public ?string $fullUrl = null;
    public ?string $name = null;
    public ?string $path = null;
    public ?array $queryParams = null;
    public ?string $type = null;
}

/** Location entity data model. */
class Location
{
    public ?int $id = null;
    public ?string $img_url = null;
    public ?array $inhabitants = null;
    public ?string $name = null;
    public ?array $notable_residents = null;
    public ?string $type = null;
}

/** Request payload for Location#load. */
class LocationLoadMatch
{
    public int $id;
}

/** Request payload for Location#list. */
class LocationListMatch
{
    public ?string $sort = null;
}

/** Quote entity data model. */
class Quote
{
    public ?string $by = null;
    public ?string $character = null;
    public ?int $id = null;
    public ?string $image = null;
    public ?string $quote = null;
}

/** Request payload for Quote#list. */
class QuoteListMatch
{
    public ?string $sort = null;
}

