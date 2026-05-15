<?php
declare(strict_types=1);

// FinalSpace SDK utility: result_body

class FinalSpaceResultBody
{
    public static function call(FinalSpaceContext $ctx): ?FinalSpaceResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
