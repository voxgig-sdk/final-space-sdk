<?php
declare(strict_types=1);

// FinalSpace SDK utility registration

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

FinalSpaceUtility::setRegistrar(function (FinalSpaceUtility $u): void {
    $u->clean = [FinalSpaceClean::class, 'call'];
    $u->done = [FinalSpaceDone::class, 'call'];
    $u->make_error = [FinalSpaceMakeError::class, 'call'];
    $u->feature_add = [FinalSpaceFeatureAdd::class, 'call'];
    $u->feature_hook = [FinalSpaceFeatureHook::class, 'call'];
    $u->feature_init = [FinalSpaceFeatureInit::class, 'call'];
    $u->fetcher = [FinalSpaceFetcher::class, 'call'];
    $u->make_fetch_def = [FinalSpaceMakeFetchDef::class, 'call'];
    $u->make_context = [FinalSpaceMakeContext::class, 'call'];
    $u->make_options = [FinalSpaceMakeOptions::class, 'call'];
    $u->make_request = [FinalSpaceMakeRequest::class, 'call'];
    $u->make_response = [FinalSpaceMakeResponse::class, 'call'];
    $u->make_result = [FinalSpaceMakeResult::class, 'call'];
    $u->make_point = [FinalSpaceMakePoint::class, 'call'];
    $u->make_spec = [FinalSpaceMakeSpec::class, 'call'];
    $u->make_url = [FinalSpaceMakeUrl::class, 'call'];
    $u->param = [FinalSpaceParam::class, 'call'];
    $u->prepare_auth = [FinalSpacePrepareAuth::class, 'call'];
    $u->prepare_body = [FinalSpacePrepareBody::class, 'call'];
    $u->prepare_headers = [FinalSpacePrepareHeaders::class, 'call'];
    $u->prepare_method = [FinalSpacePrepareMethod::class, 'call'];
    $u->prepare_params = [FinalSpacePrepareParams::class, 'call'];
    $u->prepare_path = [FinalSpacePreparePath::class, 'call'];
    $u->prepare_query = [FinalSpacePrepareQuery::class, 'call'];
    $u->result_basic = [FinalSpaceResultBasic::class, 'call'];
    $u->result_body = [FinalSpaceResultBody::class, 'call'];
    $u->result_headers = [FinalSpaceResultHeaders::class, 'call'];
    $u->transform_request = [FinalSpaceTransformRequest::class, 'call'];
    $u->transform_response = [FinalSpaceTransformResponse::class, 'call'];
});
