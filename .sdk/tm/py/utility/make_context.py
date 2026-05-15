# FinalSpace SDK utility: make_context

from core.context import FinalSpaceContext


def make_context_util(ctxmap, basectx):
    return FinalSpaceContext(ctxmap, basectx)
