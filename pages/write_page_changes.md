# Write Page — Content Changes
*Hand this to Claude Code to update the Write page of the Garv Aggarwal Sanskrit website.*

---

## 1. Hero Section

**Update meta count:**
- Change `<span>47 pieces</span>` → `<span>2 tools · 3 prompts</span>`

**Update category labels** — remove any existing category/tag labels and replace with:
- `<span>Tools · Practice Prompts</span>`

---

## 2. Essays / Archive Section — Comment Out

Comment out everything from the featured essay to the end of the archive section — this includes:
- The featured essay / "Continue reading" link (line 239)
- The entire archive (lines 254–372) — all year groups, all 14 entries, all href="#" stubs

Do **not** delete — wrap in HTML comments so it can be restored later when real writing is ready:
`<!-- ESSAYS / ARCHIVE SECTION — to be restored later with real published pieces -->`

---

## 3. Tools Section — Add in Place of Archive

Replace the commented-out section with the following content, using the same card pattern already on the page.

**Section heading:** Tools

**Cards — each opens in new tab (`target="_blank" rel="noopener noreferrer"`):**

| Title | Description | Link |
|---|---|---|
| RYSA | A Twitter-style Sanskrit community platform — write posts, connect with other learners | https://rysa.tech/social |
| Dharmamitra | Translation tool — helpful for composing and checking your Sanskrit writing | https://dharmamitra.org |

---

## 4. Practice Prompts Section — Add After Tools

**Section heading:** Practice Prompts

Add 3 prompt cards. Each card has a title, a short description, and a "Sample coming soon" placeholder where the sample content will be added later.

**Prompt 1 — Beginner**
- Title: Write a Letter
- Description: Write a short letter to someone you love — surprise them in Sanskrit. Even three lines is a beautiful beginning.
- Sample: *[Sample coming soon]*

**Prompt 2 — Beginner / Intermediate**
- Title: Keep a Journal
- Description: One line a day in Sanskrit. A small habit that builds into fluency over time.
- Sample: *[Sample coming soon]*

**Prompt 3 — Intermediate**
- Title: Write a Poem
- Description: Sanskrit has one of the richest poetic traditions in the world. Try writing a short verse in a simple metre.
- Sample: *[Sample coming soon]*

---

## General Notes for Claude Code

- Keep all existing CSS, JS, layout, nav, and footer untouched — content changes only
- All new cards follow the exact same card pattern already used on the page
- All external links open in new tab
- The 3 prompt cards should have a clearly marked placeholder comment where sample content will go: `<!-- SAMPLE CONTENT TO BE ADDED -->`
- Commented-out archive section should be clearly labelled so it's easy to find and restore later
