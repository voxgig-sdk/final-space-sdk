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
    public ?array $ability = null;
    public ?array $alia = null;
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
    public ?array $ability = null;
    public ?array $alia = null;
    public ?string $gender = null;
    public ?string $hair = null;
    public ?int $id = null;
    public ?string $img_url = null;
    public ?string $name = null;
    public ?string $origin = null;
    public ?string $species = null;
    public ?string $status = null;
}

/** Episode entity data model. */
class Episode
{
    public ?string $air_date = null;
    public ?array $character = null;
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
    public ?string $air_date = null;
    public ?array $character = null;
    public ?string $director = null;
    public ?int $id = null;
    public ?string $img_url = null;
    public ?string $name = null;
    public ?string $writer = null;
}

/** GetEndpoint entity data model. */
class GetEndpoint
{
    public ?string $full_url = null;
    public ?string $name = null;
    public ?string $path = null;
    public ?array $query_param = null;
    public ?string $type = null;
}

/** Request payload for GetEndpoint#list. */
class GetEndpointListMatch
{
    public ?string $full_url = null;
    public ?string $name = null;
    public ?string $path = null;
    public ?array $query_param = null;
    public ?string $type = null;
}

/** Location entity data model. */
class Location
{
    public ?int $id = null;
    public ?string $img_url = null;
    public ?array $inhabitant = null;
    public ?string $name = null;
    public ?array $notable_resident = null;
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
    public ?int $id = null;
    public ?string $img_url = null;
    public ?array $inhabitant = null;
    public ?string $name = null;
    public ?array $notable_resident = null;
    public ?string $type = null;
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
    public ?string $by = null;
    public ?string $character = null;
    public ?int $id = null;
    public ?string $image = null;
    public ?string $quote = null;
}

