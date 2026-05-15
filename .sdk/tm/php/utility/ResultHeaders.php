<?php
declare(strict_types=1);

// OpenGovernmentPortal SDK utility: result_headers

class OpenGovernmentPortalResultHeaders
{
    public static function call(OpenGovernmentPortalContext $ctx): ?OpenGovernmentPortalResult
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
