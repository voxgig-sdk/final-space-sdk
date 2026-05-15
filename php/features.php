<?php
declare(strict_types=1);

// FinalSpace SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class FinalSpaceFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new FinalSpaceBaseFeature();
            case "test":
                return new FinalSpaceTestFeature();
            default:
                return new FinalSpaceBaseFeature();
        }
    }
}
