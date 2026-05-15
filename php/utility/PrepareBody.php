<?php
declare(strict_types=1);

// FinalSpace SDK utility: prepare_body

class FinalSpacePrepareBody
{
    public static function call(FinalSpaceContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
