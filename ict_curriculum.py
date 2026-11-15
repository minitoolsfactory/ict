#!/usr/bin/env python3
"""
ICT Curriculum Class 6 - Companion Code
Based on SCERT Delhi "ICT in Education for Grades 6-8" (Revised ICT Curriculum 2023)

This module provides practical Python demonstrations of the 6 chapters covered
in the ICT Class 6 textbook:

  1. Introduction to ICT Environment
  2. Data Representation and Processing - 01 (SpreadSheet)
  3. Data Representation and Processing - 02 (Word Processing)
  4. Basics of Internet
  5. Learn to Code - 01
  6. Being Future Ready - 01
"""

from __future__ import annotations

import csv
import json
import os
import re
import uuid
from dataclasses import dataclass, field, asdict
from datetime import datetime
from typing import Any


# ============================================================================
# CHAPTER 1: Introduction to ICT Environment
# ============================================================================

@dataclass
class ComputerSystem:
    """Represents a computer system with its core components."""
    name: str
    cpu: str
    ram: str
    storage: str
    os: str
    input_devices: list[str] = field(default_factory=list)
    output_devices: list[str] = field(default_factory=list)

    def describe(self) -> str:
        return (
            f"{self.name}\n"
            f"  CPU: {self.cpu}\n"
            f"  RAM: {self.ram}\n"
            f"  Storage: {self.storage}\n"
            f"  OS: {self.os}\n"
            f"  Input: {', '.join(self.input_devices)}\n"
            f"  Output: {', '.join(self.output_devices)}"
        )


class ICTEnvironment:
    """Models an ICT environment with computer systems and etiquette rules."""

    ETIQUETTE_RULES = [
        "Always wash your hands before using the computer.",
        "Do not eat or drink near the computer.",
        "Sit with proper posture; keep the screen at eye level.",
        "Take regular breaks (20-20-20 rule: every 20 minutes, look 20 feet away for 20 seconds).",
        "Do not share your passwords with anyone.",
        "Only visit websites approved by your teacher or parents.",
        "Report any suspicious activity or cyberbullying to a trusted adult.",
        "Handle computer equipment gently and with care.",
        "Do not download or install software without permission.",
        "Respect copyright; do not copy others' work without permission.",
    ]

    def __init__(self, name: str = "School Computer Lab"):
        self.name = name
        self.systems: list[ComputerSystem] = []

    def add_system(self, system: ComputerSystem) -> None:
        self.systems.append(system)

    def list_systems(self) -> str:
        if not self.systems:
            return "No computer systems in this environment."
        lines = [f"ICT Environment: {self.name}", f"Total systems: {len(self.systems)}\n"]
        for i, sys in enumerate(self.systems, 1):
            lines.append(f"--- System {i} ---")
            lines.append(sys.describe())
            lines.append("")
        return "\n".join(lines)

    def show_etiquette(self) -> str:
        lines = ["Computer Etiquette Rules:", ""]
        for i, rule in enumerate(self.ETIQUETTE_RULES, 1):
            lines.append(f"  {i}. {rule}")
        return "\n".join(lines)


# ============================================================================
# CHAPTER 2: Data Representation and Processing - 01 (SpreadSheet)
# ============================================================================

class SimpleSpreadsheet:
    """A minimal spreadsheet implementation for learning data representation."""

    def __init__(self, rows: int = 10, cols: int = 5):
        self.rows = rows
        self.cols = cols
        self.grid: dict[tuple[int, int], Any] = {}
        self.headers: list[str] = [f"Col{c}" for c in range(1, cols + 1)]

    def set_cell(self, row: int, col: int, value: Any) -> None:
        if not (1 <= row <= self.rows and 1 <= col <= self.cols):
            raise ValueError(f"Cell ({row}, {col}) out of bounds")
        self.grid[(row, col)] = value

    def get_cell(self, row: int, col: int) -> Any:
        return self.grid.get((row, col), "")

    def set_header(self, col: int, name: str) -> None:
        if 1 <= col <= self.cols:
            self.headers[col - 1] = name

    def sum_column(self, col: int) -> float:
        total = 0.0
        for row in range(1, self.rows + 1):
            val = self.get_cell(row, col)
            try:
                total += float(val)
            except (ValueError, TypeError):
                pass
        return total

    def average_column(self, col: int) -> float:
        values = []
        for row in range(1, self.rows + 1):
            val = self.get_cell(row, col)
            try:
                values.append(float(val))
            except (ValueError, TypeError):
                pass
        return sum(values) / len(values) if values else 0.0

    def max_column(self, col: int) -> Any:
        best = None
        for row in range(1, self.rows + 1):
            val = self.get_cell(row, col)
            try:
                fval = float(val)
                if best is None or fval > best:
                    best = fval
            except (ValueError, TypeError):
                pass
        return best

    def display(self) -> str:
        lines = []
        header_row = " | ".join(f"{h:>10}" for h in self.headers)
        lines.append(header_row)
        lines.append("-" * len(header_row))
        for row in range(1, self.rows + 1):
            cells = [f"{self.get_cell(row, c):>10}" for c in range(1, self.cols + 1)]
            lines.append(" | ".join(cells))
        return "\n".join(lines)

    def save_csv(self, filepath: str) -> None:
        with open(filepath, "w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            writer.writerow(self.headers)
            for row in range(1, self.rows + 1):
                writer.writerow([self.get_cell(row, c) for c in range(1, self.cols + 1)])

    def load_csv(self, filepath: str) -> None:
        with open(filepath, newline="", encoding="utf-8") as f:
            reader = csv.reader(f)
            self.headers = next(reader)
            self.cols = len(self.headers)
            self.rows = 0
            self.grid = {}
            for row_idx, row_vals in enumerate(reader, start=1):
                self.rows = row_idx
                for col_idx, val in enumerate(row_vals, start=1):
                    self.set_cell(row_idx, col_idx, val)


# ============================================================================
# CHAPTER 3: Data Representation and Processing - 02 (Word Processing)
# ============================================================================

class SimpleWordProcessor:
    """A minimal word processor demonstrating text formatting and editing."""

    def __init__(self, title: str = "Untitled Document"):
        self.title = title
        self.content: list[str] = []
        self.formatting: dict[int, dict[str, Any]] = {}

    def add_line(self, text: str, bold: bool = False, italic: bool = False) -> int:
        idx = len(self.content)
        self.content.append(text)
        self.formatting[idx] = {"bold": bold, "italic": italic}
        return idx

    def edit_line(self, idx: int, text: str) -> None:
        if 0 <= idx < len(self.content):
            self.content[idx] = text

    def delete_line(self, idx: int) -> None:
        if 0 <= idx < len(self.content):
            self.content.pop(idx)
            self.formatting.pop(idx, None)
            new_fmt = {}
            for i in range(len(self.content)):
                new_fmt[i] = self.formatting.pop(i + 1, {"bold": False, "italic": False})
            self.formatting = new_fmt

    def find(self, keyword: str) -> list[int]:
        kw = keyword.lower()
        return [i for i, line in enumerate(self.content) if kw in line.lower()]

    def replace(self, old: str, new: str) -> int:
        count = 0
        for i in range(len(self.content)):
            if old in self.content[i]:
                self.content[i] = self.content[i].replace(old, new)
                count += 1
        return count

    def word_count(self) -> int:
        return sum(len(line.split()) for line in self.content)

    def spell_check(self, dictionary: set[str]) -> list[tuple[int, str]]:
        errors = []
        for i, line in enumerate(self.content):
            for word in re.findall(r"\b\w+\b", line):
                if word.lower() not in dictionary:
                    errors.append((i, word))
        return errors

    def display(self) -> str:
        lines = [f"Document: {self.title}", "=" * 40, ""]
        for i, line in enumerate(self.content):
            fmt = self.formatting.get(i, {})
            marker = ""
            if fmt.get("bold"):
                marker += "**"
            if fmt.get("italic"):
                marker += "*"
            lines.append(f"{i:3d}: {marker}{line}{marker}")
        lines.append("")
        lines.append(f"Total words: {self.word_count()}")
        return "\n".join(lines)

    def save(self, filepath: str) -> None:
        data = {"title": self.title, "content": self.content, "formatting": self.formatting}
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2)

    @classmethod
    def load(cls, filepath: str) -> "SimpleWordProcessor":
        with open(filepath, encoding="utf-8") as f:
            data = json.load(f)
        wp = cls(data.get("title", "Untitled"))
        wp.content = data.get("content", [])
        wp.formatting = {int(k): v for k, v in data.get("formatting", {}).items()}
        return wp


# ============================================================================
# CHAPTER 4: Basics of Internet
# ============================================================================

@dataclass
class Website:
    name: str
    url: str
    category: str
    safe: bool = True


class InternetBasics:
    """Demonstrates internet concepts: URLs, browsers, search, safety."""

    COMMON_TLDS = [".com", ".org", ".edu", ".gov", ".in", ".net"]

    SAFE_SITES = [
        Website("NCERT", "https://ncert.nic.in", "Education", True),
        Website("SCERT Delhi", "https://scert.delhi.gov.in", "Education", True),
        Website("Wikipedia", "https://wikipedia.org", "Reference", True),
        Website("Google", "https://google.com", "Search", True),
    ]

    @staticmethod
    def validate_url(url: str) -> bool:
        return url.startswith(("http://", "https://")) and "." in url

    @staticmethod
    def extract_domain(url: str) -> str:
        if url.startswith("http://"):
            url = url[7:]
        elif url.startswith("https://"):
            url = url[8:]
        domain = url.split("/")[0]
        return domain

    @staticmethod
    def is_safe_tld(url: str) -> bool:
        return any(url.endswith(tld) for tld in InternetBasics.COMMON_TLDS)

    @staticmethod
    def generate_search_query(topic: str) -> str:
        return f"https://www.google.com/search?q={topic.replace(' ', '+')}"

    @staticmethod
    def internet_safety_tips() -> str:
        tips = [
            "Never share personal information (address, phone, password) online.",
            "Do not talk to strangers online.",
            "Do not click on suspicious links or pop-up ads.",
            "Tell a parent or teacher if something makes you uncomfortable online.",
            "Use strong passwords and keep them secret.",
            "Respect others online; no cyberbullying.",
        ]
        lines = ["Internet Safety Tips:", ""]
        for i, tip in enumerate(tips, 1):
            lines.append(f"  {i}. {tip}")
        return "\n".join(lines)


# ============================================================================
# CHAPTER 5: Learn to Code - 01
# ============================================================================

def algorithm_add_numbers(n: int) -> int:
    """Algorithm: Sum of first n natural numbers using iteration."""
    total = 0
    for i in range(1, n + 1):
        total += i
    return total


def algorithm_factorial(n: int) -> int:
    """Algorithm: Factorial of n."""
    if n < 0:
        raise ValueError("Factorial not defined for negative numbers")
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result


def algorithm_fibonacci(n: int) -> list[int]:
    """Algorithm: First n Fibonacci numbers."""
    if n <= 0:
        return []
    if n == 1:
        return [0]
    seq = [0, 1]
    while len(seq) < n:
        seq.append(seq[-1] + seq[-2])
    return seq[:n]


def algorithm_search_linear(data: list[Any], target: Any) -> int:
    """Linear search: return index of target or -1."""
    for i, val in enumerate(data):
        if val == target:
            return i
    return -1


def algorithm_sort_bubble(data: list[Any]) -> list[Any]:
    """Bubble sort demonstration."""
    arr = list(data)
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr


def flowchart_steps(steps: list[str]) -> str:
    """Represent an algorithm as a simple flowchart (text-based)."""
    lines = ["Algorithm Flowchart:", ""]
    for i, step in enumerate(steps):
        if i == 0:
            lines.append("  [Start]")
            lines.append("     |")
            lines.append("     v")
        lines.append(f"  [{step}]")
        if i < len(steps) - 1:
            lines.append("     |")
            lines.append("     v")
        else:
            lines.append("     |")
            lines.append("     v")
            lines.append("  [End]")
    return "\n".join(lines)


# ============================================================================
# CHAPTER 6: Being Future Ready - 01
# ============================================================================

@dataclass
class DigitalSkill:
    name: str
    level: str
    description: str


class FutureReady:
    """Helps students assess and plan digital skills for the future."""

    def __init__(self, student_name: str):
        self.student_name = student_name
        self.skills: list[DigitalSkill] = []
        self.goals: list[str] = []

    def add_skill(self, skill: DigitalSkill) -> None:
        self.skills.append(skill)

    def add_goal(self, goal: str) -> None:
        self.goals.append(goal)

    def skill_report(self) -> str:
        lines = [f"Future-Ready Skills Report for: {self.student_name}", "=" * 50, ""]
        if not self.skills:
            lines.append("No skills recorded yet.")
        else:
            for skill in self.skills:
                lines.append(f"  • {skill.name} ({skill.level}): {skill.description}")
        lines.append("")
        lines.append("Goals:")
        if not self.goals:
            lines.append("  No goals set yet.")
        else:
            for goal in self.goals:
                lines.append(f"  • {goal}")
        return "\n".join(lines)

    def save_profile(self, filepath: str) -> None:
        data = {
            "student_name": self.student_name,
            "skills": [asdict(s) for s in self.skills],
            "goals": self.goals,
            "created_at": datetime.now().isoformat(),
        }
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2)

    @classmethod
    def load_profile(cls, filepath: str) -> "FutureReady":
        with open(filepath, encoding="utf-8") as f:
            data = json.load(f)
        profile = cls(data["student_name"])
        profile.skills = [DigitalSkill(**s) for s in data.get("skills", [])]
        profile.goals = data.get("goals", [])
        return profile


# ============================================================================
# Demonstration / main
# ============================================================================

def demo_chapter_1():
    print("\n" + "=" * 60)
    print("CHAPTER 1: Introduction to ICT Environment")
    print("=" * 60)
    env = ICTEnvironment("Class 6 Computer Lab")
    env.add_system(ComputerSystem(
        name="Desktop-01",
        cpu="Intel Core i3",
        ram="4 GB",
        storage="500 GB HDD",
        os="Windows 10",
        input_devices=["Keyboard", "Mouse"],
        output_devices=["Monitor", "Printer"],
    ))
    print(env.list_systems())
    print()
    print(env.show_etiquette())


def demo_chapter_2():
    print("\n" + "=" * 60)
    print("CHAPTER 2: Data Representation and Processing - 01 (SpreadSheet)")
    print("=" * 60)
    sheet = SimpleSpreadsheet(rows=6, cols=4)
    sheet.set_header(1, "Student")
    sheet.set_header(2, "Math")
    sheet.set_header(3, "Science")
    sheet.set_header(4, "English")

    data = [
        ("Alice", 85, 90, 78),
        ("Bob", 72, 68, 80),
        ("Charlie", 90, 88, 85),
        ("Diana", 78, 75, 82),
    ]
    for r, (name, m, s, e) in enumerate(data, start=2):
        sheet.set_cell(r, 1, name)
        sheet.set_cell(r, 2, m)
        sheet.set_cell(r, 3, s)
        sheet.set_cell(r, 4, e)

    print(sheet.display())
    print(f"\nMath column sum: {sheet.sum_column(2)}")
    print(f"Science column average: {sheet.average_column(3):.1f}")
    print(f"English column max: {sheet.max_column(4)}")

    csv_path = "/tmp/student_marks.csv"
    sheet.save_csv(csv_path)
    print(f"\nSaved spreadsheet to {csv_path}")


def demo_chapter_3():
    print("\n" + "=" * 60)
    print("CHAPTER 3: Data Representation and Processing - 02 (Word Processing)")
    print("=" * 60)
    wp = SimpleWordProcessor("My ICT Assignment")
    wp.add_line("ICT stands for Information and Communication Technology.", bold=True)
    wp.add_line("It helps us communicate, process, and store information.", italic=True)
    wp.add_line("We use computers, the internet, and mobile phones every day.")
    wp.add_line("Digital literacy is an important skill for the future.")

    print(wp.display())
    print(f"\nWord count: {wp.word_count()}")
    print(f"Lines containing 'technology': {wp.find('technology')}")
    replaced = wp.replace("mobile phones", "smartphones")
    print(f"Replaced {replaced} occurrence(s).")

    dict_words = {"ict", "stands", "for", "information", "communication", "technology",
                  "helps", "us", "communicate", "process", "store", "we", "use", "computers",
                  "the", "internet", "and", "mobile", "phones", "every", "day",
                  "digital", "literacy", "is", "an", "important", "skill", "future", "smartphones"}
    errors = wp.spell_check(dict_words)
    print(f"Spelling errors: {errors if errors else 'None'}")

    wp.save("/tmp/my_assignment.json")
    print("\nSaved document to /tmp/my_assignment.json")


def demo_chapter_4():
    print("\n" + "=" * 60)
    print("CHAPTER 4: Basics of Internet")
    print("=" * 60)
    urls = [
        "https://ncert.nic.in",
        "https://scert.delhi.gov.in",
        "https://wikipedia.org/wiki/ICT",
        "not-a-valid-url",
        "http://example.com/page",
    ]
    for url in urls:
        valid = InternetBasics.validate_url(url)
        domain = InternetBasics.extract_domain(url) if valid else "N/A"
        safe = InternetBasics.is_safe_tld(url) if valid else False
        print(f"  {url:45} valid={valid} domain={domain:25} safe_tld={safe}")

    print(f"\nSearch query for 'ICT basics': {InternetBasics.generate_search_query('ICT basics')}")
    print()
    print(InternetBasics.internet_safety_tips())


def demo_chapter_5():
    print("\n" + "=" * 60)
    print("CHAPTER 5: Learn to Code - 01")
    print("=" * 60)

    print("Sum of first 10 natural numbers:", algorithm_add_numbers(10))
    print("Factorial of 5:", algorithm_factorial(5))
    print("First 8 Fibonacci numbers:", algorithm_fibonacci(8))

    data = [64, 34, 25, 12, 22, 11, 90]
    print(f"\nOriginal list: {data}")
    print(f"Sorted list:   {algorithm_sort_bubble(data)}")

    target = 22
    idx = algorithm_search_linear(data, target)
    print(f"Linear search for {target}: found at index {idx}")

    print("\nFlowchart for 'Add two numbers':")
    print(flowchart_steps(["Input A", "Input B", "Sum = A + B", "Display Sum"]))


def demo_chapter_6():
    print("\n" + "=" * 60)
    print("CHAPTER 6: Being Future Ready - 01")
    print("=" * 60)

    profile = FutureReady("Student")
    profile.add_skill(DigitalSkill("Typing", "Beginner", "Can type using both hands"))
    profile.add_skill(DigitalSkill("Internet Browsing", "Intermediate", "Can search and evaluate websites"))
    profile.add_skill(DigitalSkill("Basic Coding (Python)", "Beginner", "Can write simple algorithms"))
    profile.add_goal("Learn to create a simple website")
    profile.add_goal("Understand cybersecurity basics")

    print(profile.skill_report())
    profile.save_profile("/tmp/future_ready_profile.json")
    print("\nSaved profile to /tmp/future_ready_profile.json")


def main():
    print("ICT Curriculum Class 6 - Companion Code Demonstrations")
    print("Based on SCERT Delhi 'ICT in Education for Grades 6-8' (2023)")
    demo_chapter_1()
    demo_chapter_2()
    demo_chapter_3()
    demo_chapter_4()
    demo_chapter_5()
    demo_chapter_6()
    print("\n" + "=" * 60)
    print("All demonstrations complete.")
    print("=" * 60)


if __name__ == "__main__":
    main()