#!/usr/bin/env python3
"""Convert PDF pages to PNG images (Task 2)."""
import fitz
import os
import sys

PDF_PATH = "/Users/rahulsharma/Documents/apps/ict/.opencode/openwork/inbox/chat-attachments/ses_e22c3e517ffelFNDJTvXIhlXy4/2a19ac99-64a6-4670-817b-6fa57be4283c-ictclass6.pdf"
OUT_DIR = "/Users/rahulsharma/Documents/apps/ict/pdf_output/page_images"
os.makedirs(OUT_DIR, exist_ok=True)

# Accept optional start/end page args for chunked processing
start = int(sys.argv[1]) if len(sys.argv) > 1 else 0
end = int(sys.argv[2]) if len(sys.argv) > 2 else None

doc = fitz.open(PDF_PATH)
if end is None or end > len(doc):
    end = len(doc)

mat = fitz.Matrix(1.0, 1.0)  # 1x zoom = 72 DPI, reasonable file size
count = 0
for page_num in range(start, end):
    page = doc[page_num]
    pix = page.get_pixmap(matrix=mat)
    img_file = os.path.join(OUT_DIR, f"page_{page_num + 1:03d}.png")
    pix.save(img_file)
    count += 1
    if count % 10 == 0:
        print(f"  ...converted {count} pages (up to page {page_num + 1})", flush=True)

print(f"Converted pages {start + 1}-{end}: {count} images saved to {OUT_DIR}")
doc.close()