#!/usr/bin/env python3
"""
PDF Processor for ICT Class 6 book.
Task 1: Extract content (text + images) from the PDF.
Task 2: Convert PDF pages to image format (PNG).
"""

import fitz  # PyMuPDF
import os
import json
from datetime import datetime

PDF_PATH = "/Users/rahulsharma/Documents/apps/ict/.opencode/openwork/inbox/chat-attachments/ses_e22c3e517ffelFNDJTvXIhlXy4/2a19ac99-64a6-4670-817b-6fa57be4283c-ictclass6.pdf"
OUTPUT_DIR = "/Users/rahulsharma/Documents/apps/ict/pdf_output"
TEXT_DIR = os.path.join(OUTPUT_DIR, "text")
IMAGES_DIR = os.path.join(OUTPUT_DIR, "page_images")
EXTRACTED_IMAGES_DIR = os.path.join(OUTPUT_DIR, "extracted_images")

os.makedirs(TEXT_DIR, exist_ok=True)
os.makedirs(IMAGES_DIR, exist_ok=True)
os.makedirs(EXTRACTED_IMAGES_DIR, exist_ok=True)


def extract_text(doc):
    """Extract text from all pages and save to files."""
    all_text = []
    for page_num in range(len(doc)):
        page = doc[page_num]
        text = page.get_text()
        all_text.append({
            "page": page_num + 1,
            "text": text,
        })
        # Save individual page text
        page_file = os.path.join(TEXT_DIR, f"page_{page_num + 1:03d}.txt")
        with open(page_file, "w", encoding="utf-8") as f:
            f.write(f"=== PAGE {page_num + 1} ===\n\n{text}")
    # Save combined text
    combined_file = os.path.join(TEXT_DIR, "all_pages.txt")
    with open(combined_file, "w", encoding="utf-8") as f:
        for entry in all_text:
            f.write(f"\n{'='*60}\nPAGE {entry['page']}\n{'='*60}\n\n")
            f.write(entry["text"])
    return all_text


def convert_pages_to_images(doc, zoom=2.0):
    """Convert each PDF page to a PNG image."""
    mat = fitz.Matrix(zoom, zoom)
    image_info = []
    for page_num in range(len(doc)):
        page = doc[page_num]
        pix = page.get_pixmap(matrix=mat)
        img_file = os.path.join(IMAGES_DIR, f"page_{page_num + 1:03d}.png")
        pix.save(img_file)
        image_info.append({
            "page": page_num + 1,
            "image_file": img_file,
            "width": pix.width,
            "height": pix.height,
        })
    return image_info


def extract_embedded_images(doc):
    """Extract embedded images from the PDF."""
    img_info = []
    for page_num in range(len(doc)):
        page = doc[page_num]
        image_list = page.get_images(full=True)
        for img_index, img in enumerate(image_list, start=1):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            ext = base_image["ext"]
            img_file = os.path.join(
                EXTRACTED_IMAGES_DIR,
                f"page{page_num + 1:03d}_img{img_index}.{ext}",
            )
            with open(img_file, "wb") as f:
                f.write(image_bytes)
            img_info.append({
                "page": page_num + 1,
                "image_index": img_index,
                "file": img_file,
                "ext": ext,
                "width": base_image.get("width"),
                "height": base_image.get("height"),
            })
    return img_info


def main():
    if not os.path.exists(PDF_PATH):
        print(f"ERROR: PDF not found at {PDF_PATH}")
        return

    print(f"Opening PDF: {PDF_PATH}")
    doc = fitz.open(PDF_PATH)
    print(f"Total pages: {len(doc)}")
    print(f"Metadata: {doc.metadata}")

    # Task 1: Extract text
    print("\n--- Extracting text ---")
    all_text = extract_text(doc)
    total_chars = sum(len(e["text"]) for e in all_text)
    print(f"Extracted text from {len(all_text)} pages ({total_chars} characters)")

    doc.close()
    doc = fitz.open(PDF_PATH)

    # Task 2: Convert pages to images (lower zoom for speed)
    print("\n--- Converting pages to PNG images ---")
    image_info = convert_pages_to_images(doc, zoom=1.0)
    print(f"Converted {len(image_info)} pages to PNG images")

    doc.close()
    doc = fitz.open(PDF_PATH)

    # Task 1b: Extract embedded images
    print("\n--- Extracting embedded images ---")
    embedded = extract_embedded_images(doc)
    print(f"Extracted {len(embedded)} embedded images")

    # Save summary
    summary = {
        "source_pdf": PDF_PATH,
        "processed_at": datetime.now().isoformat(),
        "total_pages": len(doc),
        "metadata": doc.metadata,
        "total_text_characters": total_chars,
        "page_images": image_info,
        "embedded_images": embedded,
    }
    summary_file = os.path.join(OUTPUT_DIR, "summary.json")
    with open(summary_file, "w", encoding="utf-8") as f:
        json.dump(summary, f, indent=2)

    print(f"\nDone! Output saved to: {OUTPUT_DIR}")
    print(f"  - Text files: {TEXT_DIR}")
    print(f"  - Page images: {IMAGES_DIR}")
    print(f"  - Embedded images: {EXTRACTED_IMAGES_DIR}")
    print(f"  - Summary: {summary_file}")

    doc.close()


if __name__ == "__main__":
    main()