"""Tiny server-side SVG chart helpers (no external JS/CSS — fully local)."""
from __future__ import annotations

from html import escape

PALETTE = ["#4e79a7", "#f28e2b", "#59a14f", "#e15759", "#76b7b2",
           "#edc948", "#b07aa1", "#ff9da7", "#9c755f", "#bab0ac"]


def line_chart(points: list[tuple[str, float]], width=720, height=220,
               label="") -> str:
    if len(points) < 2:
        return "<p class='muted'>Not enough data points yet.</p>"
    xs = list(range(len(points)))
    ys = [v for _, v in points]
    lo, hi = min(ys), max(ys)
    span = (hi - lo) or 1.0
    pad = 34
    w, h = width - pad * 2, height - pad * 2

    def px(i):
        return pad + i / (len(points) - 1) * w

    def py(v):
        return pad + (1 - (v - lo) / span) * h

    path = " ".join(f"{'M' if i == 0 else 'L'}{px(i):.1f},{py(v):.1f}"
                    for i, (_, v) in enumerate(points))
    labels = (f"<text x='{pad}' y='{height-6}' class='ax'>{escape(points[0][0])}</text>"
              f"<text x='{width-pad}' y='{height-6}' class='ax' text-anchor='end'>"
              f"{escape(points[-1][0])}</text>"
              f"<text x='4' y='{py(hi)+4:.0f}' class='ax'>{hi:,.0f}</text>"
              f"<text x='4' y='{py(lo)+4:.0f}' class='ax'>{lo:,.0f}</text>")
    return (f"<svg viewBox='0 0 {width} {height}' role='img' aria-label='{escape(label)}'>"
            f"<path d='{path}' fill='none' stroke='{PALETTE[0]}' stroke-width='2'/>"
            f"{labels}</svg>")


def bar_chart(items: list[tuple[str, float]], width=720, height=220) -> str:
    if not items:
        return "<p class='muted'>No data.</p>"
    pad = 34
    w, h = width - pad * 2, height - pad * 2
    hi = max((v for _, v in items), default=1) or 1
    bw = w / len(items)
    bars = []
    for i, (lbl, v) in enumerate(items):
        bh = max(1, v / hi * h)
        bars.append(
            f"<rect x='{pad + i*bw + 2:.1f}' y='{pad + h - bh:.1f}' "
            f"width='{max(2, bw-4):.1f}' height='{bh:.1f}' fill='{PALETTE[0]}'>"
            f"<title>{escape(str(lbl))}: {v:,.2f}</title></rect>")
        if len(items) <= 24:
            bars.append(f"<text x='{pad + i*bw + bw/2:.1f}' y='{height-6}' "
                        f"class='ax' text-anchor='middle'>{escape(str(lbl)[-5:])}</text>")
    return (f"<svg viewBox='0 0 {width} {height}'>{''.join(bars)}"
            f"<text x='4' y='{pad}' class='ax'>{hi:,.0f}</text></svg>")


def donut(items: list[tuple[str, float]], size=200) -> str:
    total = sum(v for _, v in items) or 1
    r, cx, cy, sw = size * 0.34, size / 2, size / 2, size * 0.16
    import math
    segs, angle = [], -90.0
    for i, (lbl, v) in enumerate(items[:10]):
        frac = v / total
        a0, a1 = math.radians(angle), math.radians(angle + frac * 360 - 0.5)
        large = 1 if frac > 0.5 else 0
        x0, y0 = cx + r * math.cos(a0), cy + r * math.sin(a0)
        x1, y1 = cx + r * math.cos(a1), cy + r * math.sin(a1)
        segs.append(f"<path d='M{x0:.1f},{y0:.1f} A{r:.1f},{r:.1f} 0 {large} 1 "
                    f"{x1:.1f},{y1:.1f}' fill='none' "
                    f"stroke='{PALETTE[i % len(PALETTE)]}' stroke-width='{sw:.0f}'>"
                    f"<title>{escape(str(lbl))}: {frac*100:.1f}%</title></path>")
        angle += frac * 360
    legend = "".join(
        f"<div><span class='dot' style='background:{PALETTE[i % len(PALETTE)]}'>"
        f"</span>{escape(str(lbl))} {v/total*100:.1f}%</div>"
        for i, (lbl, v) in enumerate(items[:10]))
    return (f"<div class='donut'><svg viewBox='0 0 {size} {size}'>{''.join(segs)}"
            f"</svg><div class='legend'>{legend}</div></div>")
