<?php
declare(strict_types=1);

// FinalSpace SDK exists test

require_once __DIR__ . '/../finalspace_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = FinalSpaceSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
