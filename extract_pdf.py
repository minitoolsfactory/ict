#!/usr/bin/env python3
"""Generic PDF extractor: usage: python3 extract_pdf.py <pdf_path> <class_name>"""
import fitz, os, sys, json
from datetime import datetime

args = [a for a in sys.argv[1:] if not a.startswith("--")]
with_images = "--images" in sys.argv
pdf_path, class_name = args[0], args[1]
OUT = f"/Users/rahulsharma/Documents/apps/ict/pdf_output/{class_name}"
TEXT_DIR = os.path.join(OUT, "text")
IMG_DIR = os.path.join(OUT, "page_images")
os.makedirs(TEXT_DIR, exist_ok=True)
os.makedirs(IMG_DIR, exist_ok=True)

doc = fitz.open(pdf_path)
meta = {"source": os.path.basename(pdf_path), "pages": len(doc),
        "metadata": doc.metadata, "extracted": datetime.now().isoformat()}
with open(os.path.join(OUT, "meta.json"), "w") as f:
    json.dump(meta, f, indent=2, ensure_ascii=False)

total = 0
for i, page in enumerate(doc):
    text = page.get_text()
    total += len(text)
    with open(os.path.join(TEXT_DIR, f"page_{i+1:03d}.txt"), "w", encoding="utf-8") as f:
        f.write(f"=== PAGE {i+1} ===\n\n{text}")
    if with_images:
        pix = page.get_pixmap(matrix=fitz.Matrix(1.5, 1.5))  # ~108 DPI
        pix.save(os.path.join(IMG_DIR, f"page_{i+1:03d}.png"))

with open(os.path.join(TEXT_DIR, "all_pages.txt"), "w", encoding="utf-8") as f:
    for i in range(len(doc)):
        with open(os.path.join(TEXT_DIR, f"page_{i+1:03d}.txt")) as pf:
            f.write(pf.read() + "\n\n")

print(f"{class_name}: {len(doc)} pages, {total} chars -> {OUT}")
