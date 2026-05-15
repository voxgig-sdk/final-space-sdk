# FinalSpace SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

FinalSpaceUtility.registrar = ->(u) {
  u.clean = FinalSpaceUtilities::Clean
  u.done = FinalSpaceUtilities::Done
  u.make_error = FinalSpaceUtilities::MakeError
  u.feature_add = FinalSpaceUtilities::FeatureAdd
  u.feature_hook = FinalSpaceUtilities::FeatureHook
  u.feature_init = FinalSpaceUtilities::FeatureInit
  u.fetcher = FinalSpaceUtilities::Fetcher
  u.make_fetch_def = FinalSpaceUtilities::MakeFetchDef
  u.make_context = FinalSpaceUtilities::MakeContext
  u.make_options = FinalSpaceUtilities::MakeOptions
  u.make_request = FinalSpaceUtilities::MakeRequest
  u.make_response = FinalSpaceUtilities::MakeResponse
  u.make_result = FinalSpaceUtilities::MakeResult
  u.make_point = FinalSpaceUtilities::MakePoint
  u.make_spec = FinalSpaceUtilities::MakeSpec
  u.make_url = FinalSpaceUtilities::MakeUrl
  u.param = FinalSpaceUtilities::Param
  u.prepare_auth = FinalSpaceUtilities::PrepareAuth
  u.prepare_body = FinalSpaceUtilities::PrepareBody
  u.prepare_headers = FinalSpaceUtilities::PrepareHeaders
  u.prepare_method = FinalSpaceUtilities::PrepareMethod
  u.prepare_params = FinalSpaceUtilities::PrepareParams
  u.prepare_path = FinalSpaceUtilities::PreparePath
  u.prepare_query = FinalSpaceUtilities::PrepareQuery
  u.result_basic = FinalSpaceUtilities::ResultBasic
  u.result_body = FinalSpaceUtilities::ResultBody
  u.result_headers = FinalSpaceUtilities::ResultHeaders
  u.transform_request = FinalSpaceUtilities::TransformRequest
  u.transform_response = FinalSpaceUtilities::TransformResponse
}
