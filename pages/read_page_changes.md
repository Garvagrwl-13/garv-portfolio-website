# Read Page — Content Changes
*Hand this to Claude Code to update the Read page of the Garv Aggarwal Sanskrit website.*

---

## 1. Hero Section

**Update meta count:**
- Change `<span>32 titles</span>` → `<span>4 resources</span>`

**Update category labels:**
- Remove `<span>Vyākaraṇa · Kāvya · Veda · Reference</span>`
- Replace with `<span>Websites · Tools · Libraries</span>`

---

## 2. Books Section — Comment Out

Comment out the entire existing books section — all 3 sections and all 12 book cards:
- Section i. Vyākaraṇa (4 cards)
- Section ii. Kāvya (4 cards)
- Section iii. Veda & Reference (4 cards)

Do **not** delete — just wrap in HTML comments so it can be restored later when real book data is ready.

---

## 3. Resources Section — Add in Place of Books

Replace the commented-out books section with 4 resource cards using the same card/section pattern already on the page.

**Section heading:** Resources

**Cards — each opens link in new tab (`target="_blank" rel="noopener noreferrer"`):**

| Title | Description | Link |
|---|---|---|
| Enjoy Learning Sanskrit | Comprehensive scripture library with grammatical analysis and translations | https://enjoylearningsanskrit.com/library/all-scriptures/ |
| Girvanapratishtha | Audio-visual vocabulary tools with interactive picture cards | https://chitrapurmath.net/site/activities-girvanaprathistha-cards |
| Amarahasa | Narrative-based approach to learning Sanskrit | https://en.amarahasa.com/ |
| Learn Sanskrit | Curated educational resources and tools for all levels | https://www.learnsanskrit.org/ |

---

## General Notes for Claude Code

- Keep all existing CSS, JS, layout, nav, and footer untouched — content changes only
- The 4 new resource cards should follow the exact same card pattern already used on the page
- All links open in new tab
- The commented-out books section should be clearly marked with a note like `<!-- BOOKS SECTION — to be restored later with real data -->`
