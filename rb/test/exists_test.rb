# OpenGovernmentPortal SDK exists test

require "minitest/autorun"
require_relative "../OpenGovernmentPortal_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = OpenGovernmentPortalSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
