# OpenGovernmentPortal SDK feature factory

from feature.base_feature import OpenGovernmentPortalBaseFeature
from feature.test_feature import OpenGovernmentPortalTestFeature


def _make_feature(name):
    features = {
        "base": lambda: OpenGovernmentPortalBaseFeature(),
        "test": lambda: OpenGovernmentPortalTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
