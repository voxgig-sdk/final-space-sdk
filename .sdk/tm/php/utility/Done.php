<?php
declare(strict_types=1);

// FinalSpace SDK utility: done

class FinalSpaceDone
{
    public static function call(FinalSpaceContext $ctx): array
    {
        if ($ctx->ctrl->explain) {
            $ctx->ctrl->explain = ($ctx->utility->clean)($ctx, $ctx->ctrl->explain);
            $er = $ctx->ctrl->explain['result'] ?? null;
            if (is_array($er)) {
                unset($ctx->ctrl->explain['result']['err']);
            }
        }
        if ($ctx->result && $ctx->result->ok) {
            $resdata = $ctx->result->resdata;
            if (is_object($resdata)) {
                $resdata = (array)$resdata;
            }
            return [$resdata, null];
        }
        return ($ctx->utility->make_error)($ctx, null);
    }
}
