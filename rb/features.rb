# OpenGovernmentPortal SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module OpenGovernmentPortalFeatures
  def self.make_feature(name)
    case name
    when "base"
      OpenGovernmentPortalBaseFeature.new
    when "test"
      OpenGovernmentPortalTestFeature.new
    else
      OpenGovernmentPortalBaseFeature.new
    end
  end
end
