# ProjectName SDK exists test

import pytest
from opengovernmentportal_sdk import OpenGovernmentPortalSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = OpenGovernmentPortalSDK.test(None, None)
        assert testsdk is not None
