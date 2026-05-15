<?php
declare(strict_types=1);

// OpenGovernmentPortal SDK exists test

require_once __DIR__ . '/../opengovernmentportal_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = OpenGovernmentPortalSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
