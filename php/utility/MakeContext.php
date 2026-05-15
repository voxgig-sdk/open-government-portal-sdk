<?php
declare(strict_types=1);

// OpenGovernmentPortal SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class OpenGovernmentPortalMakeContext
{
    public static function call(array $ctxmap, ?OpenGovernmentPortalContext $basectx): OpenGovernmentPortalContext
    {
        return new OpenGovernmentPortalContext($ctxmap, $basectx);
    }
}
