<?php
declare(strict_types=1);

// OpenGovernmentPortal SDK utility: result_body

class OpenGovernmentPortalResultBody
{
    public static function call(OpenGovernmentPortalContext $ctx): ?OpenGovernmentPortalResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
