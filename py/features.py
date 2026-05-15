# FinalSpace SDK feature factory

from feature.base_feature import FinalSpaceBaseFeature
from feature.test_feature import FinalSpaceTestFeature


def _make_feature(name):
    features = {
        "base": lambda: FinalSpaceBaseFeature(),
        "test": lambda: FinalSpaceTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
