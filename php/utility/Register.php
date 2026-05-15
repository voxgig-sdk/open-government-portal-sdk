<?php
declare(strict_types=1);

// OpenGovernmentPortal SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

OpenGovernmentPortalUtility::setRegistrar(function (OpenGovernmentPortalUtility $u): void {
    $u->clean = [OpenGovernmentPortalClean::class, 'call'];
    $u->done = [OpenGovernmentPortalDone::class, 'call'];
    $u->make_error = [OpenGovernmentPortalMakeError::class, 'call'];
    $u->feature_add = [OpenGovernmentPortalFeatureAdd::class, 'call'];
    $u->feature_hook = [OpenGovernmentPortalFeatureHook::class, 'call'];
    $u->feature_init = [OpenGovernmentPortalFeatureInit::class, 'call'];
    $u->fetcher = [OpenGovernmentPortalFetcher::class, 'call'];
    $u->make_fetch_def = [OpenGovernmentPortalMakeFetchDef::class, 'call'];
    $u->make_context = [OpenGovernmentPortalMakeContext::class, 'call'];
    $u->make_options = [OpenGovernmentPortalMakeOptions::class, 'call'];
    $u->make_request = [OpenGovernmentPortalMakeRequest::class, 'call'];
    $u->make_response = [OpenGovernmentPortalMakeResponse::class, 'call'];
    $u->make_result = [OpenGovernmentPortalMakeResult::class, 'call'];
    $u->make_point = [OpenGovernmentPortalMakePoint::class, 'call'];
    $u->make_spec = [OpenGovernmentPortalMakeSpec::class, 'call'];
    $u->make_url = [OpenGovernmentPortalMakeUrl::class, 'call'];
    $u->param = [OpenGovernmentPortalParam::class, 'call'];
    $u->prepare_auth = [OpenGovernmentPortalPrepareAuth::class, 'call'];
    $u->prepare_body = [OpenGovernmentPortalPrepareBody::class, 'call'];
    $u->prepare_headers = [OpenGovernmentPortalPrepareHeaders::class, 'call'];
    $u->prepare_method = [OpenGovernmentPortalPrepareMethod::class, 'call'];
    $u->prepare_params = [OpenGovernmentPortalPrepareParams::class, 'call'];
    $u->prepare_path = [OpenGovernmentPortalPreparePath::class, 'call'];
    $u->prepare_query = [OpenGovernmentPortalPrepareQuery::class, 'call'];
    $u->result_basic = [OpenGovernmentPortalResultBasic::class, 'call'];
    $u->result_body = [OpenGovernmentPortalResultBody::class, 'call'];
    $u->result_headers = [OpenGovernmentPortalResultHeaders::class, 'call'];
    $u->transform_request = [OpenGovernmentPortalTransformRequest::class, 'call'];
    $u->transform_response = [OpenGovernmentPortalTransformResponse::class, 'call'];
});
