#!/usr/bin/env python3
"""Quick PDF info: page count + metadata + text extraction."""
import fitz
import os
import json

PDF_PATH = "/Users/rahulsharma/Documents/apps/ict/.opencode/openwork/inbox/chat-attachments/ses_e22c3e517ffelFNDJTvXIhlXy4/2a19ac99-64a6-4670-817b-6fa57be4283c-ictclass6.pdf"

doc = fitz.open(PDF_PATH)
print(f"Total pages: {len(doc)}")
print(f"Metadata: {json.dumps(doc.metadata, indent=2)}")

# Extract text from each page, save individually
out_dir = "/Users/rahulsharma/Documents/apps/ict/pdf_output/text"
os.makedirs(out_dir, exist_ok=True)

total_chars = 0
for page_num in range(len(doc)):
    page = doc[page_num]
    text = page.get_text()
    total_chars += len(text)
    page_file = os.path.join(out_dir, f"page_{page_num + 1:03d}.txt")
    with open(page_file, "w", encoding="utf-8") as f:
        f.write(f"=== PAGE {page_num + 1} ===\n\n{text}")

# Combined
combined = os.path.join(out_dir, "all_pages.txt")
with open(combined, "w", encoding="utf-8") as f:
    for page_num in range(len(doc)):
        page = doc[page_num]
        text = page.get_text()
        f.write(f"\n{'='*60}\nPAGE {page_num + 1}\n{'='*60}\n\n{text}")

print(f"Extracted text from {len(doc)} pages ({total_chars} characters)")
print(f"Saved to: {out_dir}")
doc.close()