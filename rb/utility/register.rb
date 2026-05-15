# OpenGovernmentPortal SDK utility registration
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

OpenGovernmentPortalUtility.registrar = ->(u) {
  u.clean = OpenGovernmentPortalUtilities::Clean
  u.done = OpenGovernmentPortalUtilities::Done
  u.make_error = OpenGovernmentPortalUtilities::MakeError
  u.feature_add = OpenGovernmentPortalUtilities::FeatureAdd
  u.feature_hook = OpenGovernmentPortalUtilities::FeatureHook
  u.feature_init = OpenGovernmentPortalUtilities::FeatureInit
  u.fetcher = OpenGovernmentPortalUtilities::Fetcher
  u.make_fetch_def = OpenGovernmentPortalUtilities::MakeFetchDef
  u.make_context = OpenGovernmentPortalUtilities::MakeContext
  u.make_options = OpenGovernmentPortalUtilities::MakeOptions
  u.make_request = OpenGovernmentPortalUtilities::MakeRequest
  u.make_response = OpenGovernmentPortalUtilities::MakeResponse
  u.make_result = OpenGovernmentPortalUtilities::MakeResult
  u.make_point = OpenGovernmentPortalUtilities::MakePoint
  u.make_spec = OpenGovernmentPortalUtilities::MakeSpec
  u.make_url = OpenGovernmentPortalUtilities::MakeUrl
  u.param = OpenGovernmentPortalUtilities::Param
  u.prepare_auth = OpenGovernmentPortalUtilities::PrepareAuth
  u.prepare_body = OpenGovernmentPortalUtilities::PrepareBody
  u.prepare_headers = OpenGovernmentPortalUtilities::PrepareHeaders
  u.prepare_method = OpenGovernmentPortalUtilities::PrepareMethod
  u.prepare_params = OpenGovernmentPortalUtilities::PrepareParams
  u.prepare_path = OpenGovernmentPortalUtilities::PreparePath
  u.prepare_query = OpenGovernmentPortalUtilities::PrepareQuery
  u.result_basic = OpenGovernmentPortalUtilities::ResultBasic
  u.result_body = OpenGovernmentPortalUtilities::ResultBody
  u.result_headers = OpenGovernmentPortalUtilities::ResultHeaders
  u.transform_request = OpenGovernmentPortalUtilities::TransformRequest
  u.transform_response = OpenGovernmentPortalUtilities::TransformResponse
}
