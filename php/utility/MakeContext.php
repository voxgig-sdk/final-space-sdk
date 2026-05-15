<?php
declare(strict_types=1);

// FinalSpace SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class FinalSpaceMakeContext
{
    public static function call(array $ctxmap, ?FinalSpaceContext $basectx): FinalSpaceContext
    {
        return new FinalSpaceContext($ctxmap, $basectx);
    }
}
