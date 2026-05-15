<?php
declare(strict_types=1);

// OpenGovernmentPortal SDK utility: feature_add

class OpenGovernmentPortalFeatureAdd
{
    public static function call(OpenGovernmentPortalContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
