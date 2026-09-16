# FinalSpace SDK feature factory

from finalspace_sdk.feature.base_feature import FinalSpaceBaseFeature
from finalspace_sdk.feature.ratelimit_feature import FinalSpaceRatelimitFeature
from finalspace_sdk.feature.retry_feature import FinalSpaceRetryFeature
from finalspace_sdk.feature.test_feature import FinalSpaceTestFeature
from finalspace_sdk.feature.timeout_feature import FinalSpaceTimeoutFeature


_FEATURES = {
    "base": lambda: FinalSpaceBaseFeature(),
    "ratelimit": lambda: FinalSpaceRatelimitFeature(),
    "retry": lambda: FinalSpaceRetryFeature(),
    "test": lambda: FinalSpaceTestFeature(),
    "timeout": lambda: FinalSpaceTimeoutFeature(),
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
