# ProjectName SDK exists test

import pytest
from finalspace_sdk import FinalSpaceSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = FinalSpaceSDK.test(None, None)
        assert testsdk is not None
