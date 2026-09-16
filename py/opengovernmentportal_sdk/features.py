# OpenGovernmentPortal SDK feature factory

from opengovernmentportal_sdk.feature.base_feature import OpenGovernmentPortalBaseFeature
from opengovernmentportal_sdk.feature.ratelimit_feature import OpenGovernmentPortalRatelimitFeature
from opengovernmentportal_sdk.feature.retry_feature import OpenGovernmentPortalRetryFeature
from opengovernmentportal_sdk.feature.test_feature import OpenGovernmentPortalTestFeature
from opengovernmentportal_sdk.feature.timeout_feature import OpenGovernmentPortalTimeoutFeature


_FEATURES = {
    "base": lambda: OpenGovernmentPortalBaseFeature(),
    "ratelimit": lambda: OpenGovernmentPortalRatelimitFeature(),
    "retry": lambda: OpenGovernmentPortalRetryFeature(),
    "test": lambda: OpenGovernmentPortalTestFeature(),
    "timeout": lambda: OpenGovernmentPortalTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
