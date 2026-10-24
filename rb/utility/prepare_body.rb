# OpenGovernmentPortal SDK utility: prepare_body
require_relative 'media'
module OpenGovernmentPortalUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return OpenGovernmentPortalUtilities.raw_body(ctx.reqdata) if OpenGovernmentPortalUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
