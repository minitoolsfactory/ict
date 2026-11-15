#!/usr/bin/env python3
"""Shared helper for rewriting chapter JSONs into structured study-notes blocks."""
import json, io, collections, os
DATA = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "src", "data")
L = lambda e, h: {"en": e, "hi": h}

def rewrite(rel, sections, quick_revision, conclusion):
    p = os.path.join(DATA, rel)
    data = json.load(open(p, encoding="utf-8"), object_pairs_hook=collections.OrderedDict)
    data["sections"] = sections
    data["quickRevision"] = quick_revision
    data["conclusion"] = conclusion
    json.dump(data, open(p, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    n = sum(len(s.get("blocks", [])) for s in sections)
    print(f"{rel}: {len(sections)} sections, {n} blocks")
