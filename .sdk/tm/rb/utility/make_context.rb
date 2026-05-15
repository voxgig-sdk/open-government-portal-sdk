# OpenGovernmentPortal SDK utility: make_context
require_relative '../core/context'
module OpenGovernmentPortalUtilities
  MakeContext = ->(ctxmap, basectx) {
    OpenGovernmentPortalContext.new(ctxmap, basectx)
  }
end
