<?php
declare(strict_types=1);

// FinalSpace SDK utility: result_headers

class FinalSpaceResultHeaders
{
    public static function call(FinalSpaceContext $ctx): ?FinalSpaceResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
