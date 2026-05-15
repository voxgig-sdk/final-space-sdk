<?php
declare(strict_types=1);

// FinalSpace SDK base feature

class FinalSpaceBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(FinalSpaceContext $ctx, array $options): void {}
    public function PostConstruct(FinalSpaceContext $ctx): void {}
    public function PostConstructEntity(FinalSpaceContext $ctx): void {}
    public function SetData(FinalSpaceContext $ctx): void {}
    public function GetData(FinalSpaceContext $ctx): void {}
    public function GetMatch(FinalSpaceContext $ctx): void {}
    public function SetMatch(FinalSpaceContext $ctx): void {}
    public function PrePoint(FinalSpaceContext $ctx): void {}
    public function PreSpec(FinalSpaceContext $ctx): void {}
    public function PreRequest(FinalSpaceContext $ctx): void {}
    public function PreResponse(FinalSpaceContext $ctx): void {}
    public function PreResult(FinalSpaceContext $ctx): void {}
    public function PreDone(FinalSpaceContext $ctx): void {}
    public function PreUnexpected(FinalSpaceContext $ctx): void {}
}
