<?php
declare(strict_types=1);

// FinalSpace SDK utility: feature_add

class FinalSpaceFeatureAdd
{
    public static function call(FinalSpaceContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
