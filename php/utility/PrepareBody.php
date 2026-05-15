<?php
declare(strict_types=1);

// OpenGovernmentPortal SDK utility: prepare_body

class OpenGovernmentPortalPrepareBody
{
    public static function call(OpenGovernmentPortalContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
