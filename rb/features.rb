# OpenGovernmentPortal SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module OpenGovernmentPortalFeatures
  def self.make_feature(name)
    case name
    when "base"
      OpenGovernmentPortalBaseFeature.new
    when "ratelimit"
      OpenGovernmentPortalRatelimitFeature.new
    when "retry"
      OpenGovernmentPortalRetryFeature.new
    when "test"
      OpenGovernmentPortalTestFeature.new
    when "timeout"
      OpenGovernmentPortalTimeoutFeature.new
    else
      OpenGovernmentPortalBaseFeature.new
    end
  end
end
