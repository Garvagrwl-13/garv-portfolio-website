# Speak Page — Content Changes
*Hand this to Claude Code to update the Speak page of the Garv Aggarwal Sanskrit website.*

---

## 1. Hero Section

**Update meta counts:**
- Remove fictional "42 reels · 11 recitations"
- Replace with: `<span>1 challenge · 3 resources</span>`

**Update category labels:**
- Remove existing labels
- Replace with: `<span>Challenge · Classes · Lectures</span>`

---

## 2. Reels Section — Comment Out

Comment out all 10 reel cards (lines 284–383) — all fictional titles, view counts, dates, and href="#" stubs.

Do **not** delete:
`<!-- REELS SECTION — to be restored later with real Instagram reel links and data -->`

---

## 3. Recitations Section — Comment Out

Comment out all 5 recitation rows (lines 403–443) — all fictional titles, subtitles, durations, and href="#" stubs.

Do **not** delete:
`<!-- RECITATIONS SECTION — to be restored later with real audio links -->`

---

## 4. Challenge Section — Add in Place of Reels

**Section heading:** Speak Up

**Content — a call to action card (no external link, just styled text):**
- Title: Make a Reel in Sanskrit
- Description: Pick up your phone. Speak one sentence in Sanskrit. Post it. You don't have to be perfect — you just have to begin. Tag us when you do.

---

## 5. Resources Section — Add After Challenge

**Section heading:** Learn to Speak

**Cards — each opens in new tab (`target="_blank" rel="noopener noreferrer"`):**

| Title | Description | Link |
|---|---|---|
| Samskrit Bharati | Spoken Sanskrit classes — the largest Sanskrit speaking movement in the world | https://samskritabharati-in.translate.goog/?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc |
| UP Sanskrit Sansthan | Free online Sanskrit classes by the Uttar Pradesh Sanskrit Sansthan | http://upsanskritseva.in/Web/SanskritAdhyan |
| Central Sanskrit University | Beginner-friendly structured lectures — watch, listen, and imitate at home | https://www.sanskrit.nic.in/sanskrit_language_teaching.php#30 |

---

## General Notes for Claude Code

- Keep all existing CSS, JS, layout, nav, and footer untouched — content changes only
- All new cards follow the exact same card pattern already used on the page
- All external links open in new tab
- Both commented-out sections should be clearly labelled for easy restoration later
