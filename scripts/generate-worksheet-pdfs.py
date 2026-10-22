#!/usr/bin/env python3
"""Generate the four right-triangle worksheet PDFs for RightTriangleSolver.com.

Outputs (into public/downloads/):
  right-triangle-worksheet-beginner.pdf
  pythagorean-theorem-worksheet.pdf
  special-right-triangles-worksheet.pdf
  right-triangle-worksheet-answer-keys.pdf

Run with a Python that has reportlab installed:
  python3 scripts/generate-worksheet-pdfs.py
All question data lives in this file and mirrors the blog article
src/blog/right-triangle-worksheets.mdx exactly. Answers were verified
numerically before being written here.
"""
import os

from reportlab.lib.pagesizes import LETTER
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Flowable, KeepTogether, HRFlowable,
)
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT

FONT_DIR = "/usr/share/fonts/truetype/dejavu"
pdfmetrics.registerFont(TTFont("DVS", os.path.join(FONT_DIR, "DejaVuSans.ttf")))
pdfmetrics.registerFont(TTFont("DVSB", os.path.join(FONT_DIR, "DejaVuSans-Bold.ttf")))

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "downloads")
os.makedirs(OUT, exist_ok=True)

GREY = HexColor("#555555")
BLACK = HexColor("#000000")

S = {
    "title": ParagraphStyle("title", fontName="DVSB", fontSize=17, leading=21),
    "sub": ParagraphStyle("sub", fontName="DVS", fontSize=9.5, leading=12, textColor=GREY),
    "name": ParagraphStyle("name", fontName="DVS", fontSize=11, leading=22),
    "h2": ParagraphStyle("h2", fontName="DVSB", fontSize=12.5, leading=16, spaceBefore=10, spaceAfter=4),
    "instr": ParagraphStyle("instr", fontName="DVS", fontSize=10.5, leading=14.5, spaceAfter=6),
    "q": ParagraphStyle("q", fontName="DVS", fontSize=11, leading=15, alignment=TA_LEFT),
    "ans": ParagraphStyle("ans", fontName="DVS", fontSize=10.5, leading=15, spaceAfter=5),
    "ansh": ParagraphStyle("ansh", fontName="DVSB", fontSize=12, leading=15, spaceBefore=10, spaceAfter=4),
}


class Tri(Flowable):
    """Right triangle diagram: right angle at bottom-left.

    lw/lh: leg lengths in points (drawn to a consistent scale, not the
    question's real scale). labels: dict with optional 'left', 'bottom',
    'hyp' strings. verts: dict with optional 'tl', 'bl', 'br' letters.
    angle_at: 'tl' or 'br' with angle_text drawn inside near that vertex.
    """

    def __init__(self, lw=170, lh=110, labels=None, verts=None, angle_at=None, angle_text=""):
        super().__init__()
        self.lw, self.lh = lw, lh
        self.labels = labels or {}
        self.verts = verts or {}
        self.angle_at, self.angle_text = angle_at, angle_text
        self.width = lw + 74
        self.height = lh + 46

    def draw(self):
        c = self.canv
        x0, y0 = 36, 26  # bottom-left vertex
        x1, y1 = x0 + self.lw, y0 + self.lh  # bottom-right x, top y
        c.setStrokeColor(BLACK)
        c.setLineWidth(1.4)
        p = c.beginPath()
        p.moveTo(x0, y0)
        p.lineTo(x1, y0)
        p.lineTo(x0, y1)
        p.close()
        c.drawPath(p, stroke=1, fill=0)
        # right-angle marker
        c.setLineWidth(1.0)
        c.line(x0, y0 + 11, x0 + 11, y0 + 11)
        c.line(x0 + 11, y0, x0 + 11, y0 + 11)
        c.setFont("DVS", 10.5)
        if "left" in self.labels:
            c.drawRightString(x0 - 6, y0 + self.lh / 2 - 4, self.labels["left"])
        if "bottom" in self.labels:
            c.drawCentredString(x0 + self.lw / 2, y0 - 16, self.labels["bottom"])
        if "hyp" in self.labels:
            mx, my = (x0 + x1) / 2, (y0 + y1) / 2
            c.drawString(mx + 10, my + 8, self.labels["hyp"])
        if "tl" in self.verts:
            c.drawRightString(x0 - 5, y1 + 2, self.verts["tl"])
        if "bl" in self.verts:
            c.drawRightString(x0 - 5, y0 - 15, self.verts["bl"])
        if "br" in self.verts:
            c.drawString(x1 + 5, y0 - 15, self.verts["br"])
        if self.angle_at == "tl":
            c.drawString(x0 + 7, y1 - 16, self.angle_text)
        if self.angle_at == "br":
            c.drawRightString(x1 - 8, y0 + 7, self.angle_text)


class Ladder(Flowable):
    """Ladder against a wall: wall on the left, ground at the bottom."""

    def __init__(self, wall_label="?", ground_label="3 m", lad_label="5 m"):
        super().__init__()
        self.width, self.height = 300, 190
        self.wall_label, self.ground_label, self.lad_label = wall_label, ground_label, lad_label

    def draw(self):
        c = self.canv
        x0, y0 = 60, 30            # base of wall
        xtop = y0 + 130            # top of wall / ladder top
        xfoot = x0 + 98            # ladder foot on the ground
        c.setStrokeColor(BLACK)
        c.setLineWidth(1.6)
        c.line(x0, y0, x0, xtop)            # wall
        c.line(x0, y0, xfoot + 60, y0)      # ground
        c.setLineWidth(1.4)
        c.line(x0, xtop, xfoot, y0)         # ladder
        c.setLineWidth(1.0)
        c.line(x0, y0 + 11, x0 + 11, y0 + 11)
        c.line(x0 + 11, y0, x0 + 11, y0 + 11)
        c.setFont("DVS", 10.5)
        c.drawRightString(x0 - 6, y0 + 62, self.wall_label)
        c.drawCentredString((x0 + xfoot) / 2, y0 - 16, self.ground_label)
        c.drawString((x0 + xfoot) / 2 + 8, (y0 + xtop) / 2 + 6, self.lad_label)


class Field(Flowable):
    """Rectangle with a diagonal path."""

    def __init__(self):
        super().__init__()
        self.width, self.height = 330, 190

    def draw(self):
        c = self.canv
        x0, y0, w, h = 60, 30, 200, 130
        c.setStrokeColor(BLACK)
        c.setLineWidth(1.4)
        c.rect(x0, y0, w, h, stroke=1, fill=0)
        c.setLineWidth(1.2)
        c.line(x0, y0, x0 + w, y0 + h)
        c.setFont("DVS", 10.5)
        c.drawCentredString(x0 + w / 2, y0 - 16, "40 m")
        c.drawRightString(x0 - 6, y0 + h / 2 - 4, "30 m")
        c.drawString(x0 + w / 2 + 6, y0 + h / 2 + 8, "path = ?")


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("DVS", 8)
    canvas.setFillColor(GREY)
    canvas.drawString(0.75 * inch, 0.5 * inch, "RightTriangleSolver.com — free printable worksheets")
    canvas.drawRightString(LETTER[0] - 0.75 * inch, 0.5 * inch, f"Page {doc.page}")
    canvas.restoreState()


def header(title, subtitle):
    return [
        Paragraph(title, S["title"]),
        Paragraph(subtitle, S["sub"]),
        Spacer(1, 6),
        Paragraph("Name: ________________________________&nbsp;&nbsp;&nbsp;&nbsp;Date: ____________________", S["name"]),
        Spacer(1, 4),
        HRFlowable(width="100%", thickness=0.7, color=GREY),
        Spacer(1, 8),
    ]


def q(num, text, diagram=None, space=32):
    items = [Paragraph(f"<b>{num}.</b>&nbsp;&nbsp;{text}", S["q"])]
    if diagram is not None:
        items.append(diagram)
    story = [KeepTogether(items), Spacer(1, space)]
    return story


def build(filename, story):
    doc = SimpleDocTemplate(
        os.path.join(OUT, filename), pagesize=LETTER,
        leftMargin=0.75 * inch, rightMargin=0.75 * inch,
        topMargin=0.7 * inch, bottomMargin=0.7 * inch,
        title=filename.replace(".pdf", "").replace("-", " ").title(),
        author="RightTriangleSolver.com",
    )
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    print("built", filename)


# ---------------------------------------------------------------- Worksheet 1
def worksheet1():
    st = header("Right Triangle Worksheet 1 — Basics (Beginner)",
                "RightTriangleSolver.com • Identifying sides, missing sides, area and perimeter")
    st.append(Paragraph("Instructions: Answer all 12 questions. Show your working in the space under each question. "
                        "The hypotenuse is always the side opposite the right angle.", S["instr"]))
    st.append(Paragraph("Part A: Identify Triangle Parts", S["h2"]))
    st += q(1, "In triangle PQR, the right angle is at Q. Side PR, opposite the right angle, has a special name. What is it?",
            Tri(lw=170, lh=110, verts={"tl": "P", "bl": "Q", "br": "R"}), space=22)
    st += q(2, "In triangle ABC, the right angle is at B. Sides AB and BC meet to form the right angle. What are these two sides called?",
            Tri(lw=170, lh=110, verts={"tl": "A", "bl": "B", "br": "C"}), space=22)
    st += q(3, "The diagram shows a right triangle with sides of 5 cm, 12 cm, and 13 cm. What is the 13 cm side called, "
               "and which angle does it sit opposite?",
            Tri(lw=176, lh=74, labels={"left": "5 cm", "bottom": "12 cm", "hyp": "13 cm"}), space=22)
    st += q(4, "A triangle has one angle of exactly 90°. What kind of triangle is it, and how many right angles can a "
               "triangle have? Explain in one sentence.", space=40)
    st.append(Paragraph("Part B: Find the Missing Side", S["h2"]))
    st += q(5, "The legs of a right triangle measure 3 cm and 4 cm. Find the hypotenuse.", space=40)
    st += q(6, "The legs of a right triangle measure 6 in and 8 in. Find the hypotenuse.", space=40)
    st += q(7, "A right triangle has a hypotenuse of 13 cm and one leg of 5 cm. Find the other leg.", space=40)
    st += q(8, "The legs of a right triangle measure 9 cm and 12 cm. Find the hypotenuse.", space=40)
    st.append(Paragraph("Part C: Area and Perimeter", S["h2"]))
    st += q(9, "A right triangle has sides of 6 cm, 8 cm, and 10 cm. Find its perimeter.", space=40)
    st += q(10, "The legs of a right triangle measure 5 in and 12 in. Find its area.", space=40)
    st += q(11, "The legs of a right triangle measure 9 cm and 12 cm, and its hypotenuse is 15 cm. Find its area.", space=40)
    st += q(12, "A right triangle has sides of 7 m, 24 m, and 25 m. Find its perimeter.", space=40)
    return st


# ---------------------------------------------------------------- Worksheet 2
def worksheet2():
    st = header("Right Triangle Worksheet 2 — Pythagorean Theorem (Intermediate)",
                "RightTriangleSolver.com • Missing sides, square roots, decimals and word problems")
    st.append(Paragraph("Instructions: Show your working for every question. Where a question asks for an exact answer, "
                        "give the square root form first, then round to two decimal places.", S["instr"]))
    st += q(1, "Find the hypotenuse of a right triangle with legs of 8 cm and 15 cm.", space=44)
    st += q(2, "Find the hypotenuse of a right triangle with legs of 20 in and 21 in.", space=44)
    st += q(3, "Find the hypotenuse of a right triangle with legs of 12 m and 35 m.", space=44)
    st += q(4, "A right triangle has a hypotenuse of 25 cm and one leg of 24 cm. Find the other leg.", space=44)
    st += q(5, "A right triangle has a hypotenuse of 26 in and one leg of 10 in. Find the other leg.", space=44)
    st += q(6, "A right triangle has a hypotenuse of 41 m and one leg of 9 m. Find the other leg.", space=44)
    st += q(7, "The legs of a right triangle measure 5 cm and 7 cm. Find the hypotenuse. Give the exact answer as a "
               "square root, then round to two decimal places.", space=44)
    st += q(8, "A right triangle has a hypotenuse of 11 cm and one leg of 6 cm. Find the other leg. Give the exact "
               "answer as a square root, then round to two decimal places.", space=44)
    st += q(9, "The legs of a right triangle measure 4.5 cm and 6 cm. Find the hypotenuse.", space=44)
    st += q(10, "A right triangle has a hypotenuse of 12.5 in and one leg of 7.5 in. Find the other leg.", space=44)
    st += q(11, "A 5 m ladder leans against a wall. The foot of the ladder stands 3 m from the wall. How high up the "
                "wall does the ladder reach? Assume the wall is vertical and the ground is flat.",
            Ladder(), space=30)
    st += q(12, "A rectangular field measures 30 m by 40 m. A path runs straight across the field from one corner to "
                "the opposite corner. How long is the path?", Field(), space=30)
    return st


# ---------------------------------------------------------------- Worksheet 3
def worksheet3():
    st = header("Right Triangle Worksheet 3 — Special Right Triangles and Trigonometry (Advanced)",
                "RightTriangleSolver.com • 30-60-90 and 45-45-90 ratios, sine, cosine and tangent")
    st.append(Paragraph("Instructions: Give exact answers (with √) first, then decimals rounded to two decimal places "
                        "where asked. In Part C the right angle is at C in every question.", S["instr"]))
    st.append(Paragraph("Part A: 30-60-90 Triangles (ratio 1 : √3 : 2)", S["h2"]))
    st += q(1, "A 30-60-90 triangle has a shortest leg of 7 cm. Find the longer leg and the hypotenuse, exactly and "
               "to two decimal places.", space=42)
    st += q(2, "A 30-60-90 triangle has a hypotenuse of 16 in. Find both legs, exactly and to two decimal places.", space=42)
    st += q(3, "A 30-60-90 triangle has a longer leg of 9√3 cm. Find the shortest leg and the hypotenuse.", space=42)
    st += q(4, "A 30-60-90 triangle has a shortest leg of 2.5 m. Find the longer leg and the hypotenuse, exactly and "
               "to two decimal places.", space=42)
    st.append(Paragraph("Part B: 45-45-90 Triangles (ratio 1 : 1 : √2)", S["h2"]))
    st += q(5, "A 45-45-90 triangle has legs of 11 cm. Find the hypotenuse, exactly and to two decimal places.", space=42)
    st += q(6, "A 45-45-90 triangle has legs of 4√2 in. Find the hypotenuse.", space=42)
    st += q(7, "A 45-45-90 triangle has a hypotenuse of 10√2 cm. Find the length of each leg.", space=42)
    st += q(8, "A 45-45-90 triangle has legs of 13 m. Find the hypotenuse, exactly and to two decimal places.", space=42)
    st.append(Paragraph("Part C: Right Triangle Trigonometry", S["h2"]))
    st += q(9, "In triangle ABC, angle A is 30° and the hypotenuse AB is 18 cm. Find the leg opposite angle A and the "
               "leg adjacent to angle A.",
            Tri(lw=180, lh=104, labels={"left": "?", "bottom": "?", "hyp": "18 cm"},
                verts={"tl": "A", "bl": "C", "br": "B"}, angle_at="tl", angle_text="30°"), space=26)
    st += q(10, "In triangle ABC, angle B is 60° and the leg adjacent to angle B is 6 cm. Find the hypotenuse and the "
                "leg opposite angle B.",
            Tri(lw=170, lh=120, labels={"left": "?", "bottom": "6 cm", "hyp": "?"},
                verts={"tl": "A", "bl": "C", "br": "B"}, angle_at="br", angle_text="60°"), space=26)
    st += q(11, "In triangle ABC, angle A is 45° and the leg opposite angle A is 7 cm. Find the adjacent leg and the "
                "hypotenuse.",
            Tri(lw=150, lh=120, labels={"left": "?", "bottom": "7 cm", "hyp": "?"},
                verts={"tl": "A", "bl": "C", "br": "B"}, angle_at="tl", angle_text="45°"), space=26)
    st += q(12, "Use a calculator. In triangle ABC, angle A is 52° and the hypotenuse is 15 cm. Find the leg opposite "
                "angle A and the leg adjacent to angle A, rounding to two decimal places.",
            Tri(lw=170, lh=130, labels={"left": "?", "bottom": "?", "hyp": "15 cm"},
                verts={"tl": "A", "bl": "C", "br": "B"}, angle_at="tl", angle_text="52°"), space=26)
    return st


# ---------------------------------------------------------------- Answer keys
def answer_keys():
    st = [Paragraph("Right Triangle Worksheets — Answer Keys", S["title"]),
          Paragraph("RightTriangleSolver.com • Answers for Worksheets 1, 2 and 3, with working", S["sub"]),
          Spacer(1, 4), HRFlowable(width="100%", thickness=0.7, color=GREY), Spacer(1, 6)]

    def block(heading, answers):
        st.append(Paragraph(heading, S["ansh"]))
        for n, a in answers:
            st.append(Paragraph(f"<b>{n}.</b>&nbsp;&nbsp;{a}", S["ans"]))
        return st

    block("Worksheet 1 — Basics", [
        (1, "The hypotenuse. It is always the side opposite the right angle."),
        (2, "The legs. The two sides that form the right angle are always called the legs."),
        (3, "The hypotenuse. It sits opposite the 90° (right) angle."),
        (4, "A right triangle. It can have only one right angle, because two right angles would already add to 180°, "
            "leaving nothing for the third angle."),
        (5, "c² = 3² + 4² = 9 + 16 = 25, so c = √25 = <b>5 cm</b>."),
        (6, "c² = 6² + 8² = 36 + 64 = 100, so c = √100 = <b>10 in</b>."),
        (7, "b² = 13² − 5² = 169 − 25 = 144, so b = √144 = <b>12 cm</b>."),
        (8, "c² = 9² + 12² = 81 + 144 = 225, so c = √225 = <b>15 cm</b>."),
        (9, "Perimeter = 6 + 8 + 10 = <b>24 cm</b>."),
        (10, "Area = ½ × 5 × 12 = <b>30 in²</b>."),
        (11, "Area = ½ × 9 × 12 = <b>54 cm²</b>."),
        (12, "Perimeter = 7 + 24 + 25 = <b>56 m</b>."),
    ])
    block("Worksheet 2 — Pythagorean Theorem", [
        (1, "Given legs 8 and 15. c = √(a² + b²); c² = 8² + 15² = 64 + 225 = 289; c = √289 = <b>17 cm</b>."),
        (2, "Given legs 20 and 21. c² = 20² + 21² = 400 + 441 = 841; c = √841 = <b>29 in</b>."),
        (3, "Given legs 12 and 35. c² = 12² + 35² = 144 + 1,225 = 1,369; c = √1,369 = <b>37 m</b>."),
        (4, "Given hypotenuse 25, leg 24. b = √(c² − a²); b² = 25² − 24² = 625 − 576 = 49; b = √49 = <b>7 cm</b>."),
        (5, "Given hypotenuse 26, leg 10. b² = 26² − 10² = 676 − 100 = 576; b = √576 = <b>24 in</b>."),
        (6, "Given hypotenuse 41, leg 9. b² = 41² − 9² = 1,681 − 81 = 1,600; b = √1,600 = <b>40 m</b>."),
        (7, "Given legs 5 and 7. c² = 5² + 7² = 25 + 49 = 74; c = <b>√74 cm ≈ 8.60 cm</b>."),
        (8, "Given hypotenuse 11, leg 6. b² = 11² − 6² = 121 − 36 = 85; b = <b>√85 cm ≈ 9.22 cm</b>."),
        (9, "Given legs 4.5 and 6. c² = 4.5² + 6² = 20.25 + 36 = 56.25; c = √56.25 = <b>7.5 cm</b>."),
        (10, "Given hypotenuse 12.5, leg 7.5. b² = 12.5² − 7.5² = 156.25 − 56.25 = 100; b = √100 = <b>10 in</b>."),
        (11, "The ladder is the hypotenuse (5 m) and the ground distance is one leg (3 m). "
             "h² = 5² − 3² = 25 − 9 = 16; h = √16 = <b>4 m</b> up the wall."),
        (12, "The diagonal splits the field into two right triangles with legs 30 and 40. "
             "d² = 30² + 40² = 900 + 1,600 = 2,500; d = √2,500 = <b>50 m</b>."),
    ])
    block("Worksheet 3 — Special Right Triangles and Trigonometry", [
        (1, "Short leg x = 7. Longer leg = 7√3 ≈ <b>12.12 cm</b>; hypotenuse = 2 × 7 = <b>14 cm</b>."),
        (2, "Hypotenuse 2x = 16, so the short leg x = <b>8 in</b>; longer leg = 8√3 ≈ <b>13.86 in</b>."),
        (3, "Longer leg = x√3 = 9√3, so the short leg x = 9√3 ÷ √3 = <b>9 cm</b>; hypotenuse = 2 × 9 = <b>18 cm</b>."),
        (4, "Short leg x = 2.5. Longer leg = 2.5√3 ≈ <b>4.33 m</b>; hypotenuse = 2 × 2.5 = <b>5 m</b>."),
        (5, "Hypotenuse = leg × √2 = <b>11√2 cm ≈ 15.56 cm</b>."),
        (6, "Hypotenuse = 4√2 × √2 = 4 × 2 = <b>8 in</b>."),
        (7, "Each leg = hypotenuse ÷ √2 = 10√2 ÷ √2 = <b>10 cm</b>."),
        (8, "Hypotenuse = 13 × √2 = <b>13√2 m ≈ 18.38 m</b>."),
        (9, "Opposite = hypotenuse × sin 30° = 18 × 0.5 = <b>9 cm</b>. "
            "Adjacent = hypotenuse × cos 30° = 18 × (√3/2) = 9√3 ≈ <b>15.59 cm</b>."),
        (10, "Hypotenuse = adjacent ÷ cos 60° = 6 ÷ 0.5 = <b>12 cm</b>. "
             "Opposite = adjacent × tan 60° = 6√3 ≈ <b>10.39 cm</b>."),
        (11, "Adjacent = opposite ÷ tan 45° = 7 ÷ 1 = <b>7 cm</b>. Hypotenuse = 7√2 ≈ <b>9.90 cm</b>."),
        (12, "Opposite = 15 × sin 52° ≈ <b>11.82 cm</b>. Adjacent = 15 × cos 52° ≈ <b>9.23 cm</b>. "
             "(Check: 11.82² + 9.23² ≈ 225 ≈ 15².)"),
    ])
    return st


if __name__ == "__main__":
    build("right-triangle-worksheet-beginner.pdf", worksheet1())
    build("pythagorean-theorem-worksheet.pdf", worksheet2())
    build("special-right-triangles-worksheet.pdf", worksheet3())
    build("right-triangle-worksheet-answer-keys.pdf", answer_keys())
