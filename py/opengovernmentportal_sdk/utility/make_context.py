# OpenGovernmentPortal SDK utility: make_context

from opengovernmentportal_sdk.core.context import OpenGovernmentPortalContext


def make_context_util(ctxmap, basectx):
    return OpenGovernmentPortalContext(ctxmap, basectx)
