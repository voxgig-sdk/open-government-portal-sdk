<?php
declare(strict_types=1);

// OpenGovernmentPortal SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class OpenGovernmentPortalFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new OpenGovernmentPortalBaseFeature();
            case "test":
                return new OpenGovernmentPortalTestFeature();
            default:
                return new OpenGovernmentPortalBaseFeature();
        }
    }
}
