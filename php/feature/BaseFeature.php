<?php
declare(strict_types=1);

// OpenGovernmentPortal SDK base feature

class OpenGovernmentPortalBaseFeature
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

    public function init(OpenGovernmentPortalContext $ctx, array $options): void {}
    public function PostConstruct(OpenGovernmentPortalContext $ctx): void {}
    public function PostConstructEntity(OpenGovernmentPortalContext $ctx): void {}
    public function SetData(OpenGovernmentPortalContext $ctx): void {}
    public function GetData(OpenGovernmentPortalContext $ctx): void {}
    public function GetMatch(OpenGovernmentPortalContext $ctx): void {}
    public function SetMatch(OpenGovernmentPortalContext $ctx): void {}
    public function PrePoint(OpenGovernmentPortalContext $ctx): void {}
    public function PreSpec(OpenGovernmentPortalContext $ctx): void {}
    public function PreRequest(OpenGovernmentPortalContext $ctx): void {}
    public function PreResponse(OpenGovernmentPortalContext $ctx): void {}
    public function PreResult(OpenGovernmentPortalContext $ctx): void {}
    public function PreDone(OpenGovernmentPortalContext $ctx): void {}
    public function PreUnexpected(OpenGovernmentPortalContext $ctx): void {}
}
