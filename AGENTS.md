# Radical-PI — Codex implementation brief

## Goal and scope

Build a simple English-language website for **Radical-PI**, a fictional private investigation agency run by Jonathan **“Jonny Phaser” McPhaser**. Prioritize the site's design, layout and working interactions. The story, case details and longer blog entries will be developed later.

This is a sibling of Gråzon: retain its boxy, cluttered, deliberately dated web design language, but give Radical-PI its own unmistakable Miami Vice-inspired 1980s identity. Think an investigator who believes his cheap website is a glamorous prime-time crime drama.

**In-universe canon:** Radical-PI's website was designed and built by **GRÅZON**, the fictional advertising agency. Jonny runs Radical-PI and supplies its questionable vision; GRÅZON is responsible for turning that vision into the website. The shared design language is therefore an intentional part of the story.

Follow the existing project's framework and conventions. If Gråzon components are available in the same project, reuse suitable structural patterns without changing Gråzon itself. This brief is self-contained if they are unavailable.

## Language and character foundation

- All visible UI, navigation, buttons, status messages, placeholders and accessibility labels must be in English. Set the document language to English.
- The timeline is **2026**. Jonny is mentally and aesthetically stuck in the 1980s; this is not a historical site set in 1985.
- Jonny is a fictional stereotypical 1980s PI/cop character: dumb as a rock, as confident as Johnny Bravo, and equipped with a questionable moral compass.
- His branding should suggest excessive self-belief, dubious professionalism, cheap bravado and an inability to understand modern technology.
- Keep this foundation brief. Do not invent a full biography, police career, recurring cast, major case, plot twist or story arc in this implementation.
- Fill the initial site with short, vague, self-important nonsense. A few lines per section are enough. Avoid long placeholder essays.

## Visual direction

### Shared DNA with Gråzon

- Square corners, dense rectangular panels, strong borders, raised or inset buttons, sidebar widgets and a dated portal layout.
- A clearly amateur composition with mismatched labels, overly official badges, meaningless statistics and occasional garish banners.
- The dated web structure belongs to the late 1990s/early 2000s; the colors, decoration and character branding belong to 1980s Miami.
- Preserve readable text and useful controls within the intentional ugliness.

### Radical-PI identity

Use these as starting design tokens:

| Role | Color |
| --- | --- |
| Main background | `#161126` |
| Panel background | `#282039` |
| Hot pink accent | `#FF3CAC` |
| Cyan accent | `#00E5E5` |
| Sunset peach | `#FFAD87` |
| Lavender | `#B99CFF` |
| Main text | `#FFF2EA` |

- Use pink/cyan borders, hard offset shadows and selective neon glow. Keep body text crisp.
- Include a few recognizable motifs: palm silhouettes, horizontal sunset bands, venetian-blind stripes, waterfront outlines or a small perspective grid.
- Prefer a single strong decorative scene near the header over elaborate animation covering every section.
- Give the wordmark a slanted, loud, pseudo-TV-title treatment. Pair a bold italic display face with plain Arial/Verdana body text and monospace status labels. Use available fonts or sensible local fallbacks.
- Avoid a polished modern SaaS layout, rounded cards, spacious minimalist sections or a generic full-screen synthwave wallpaper. It should look like GRÅZON built a questionable business website to satisfy Jonny's excessive confidence and outdated taste.

## Page layout

Build a compact centered shell, approximately 1050–1150 px wide on desktop. Use a main content column and a narrower sidebar. On mobile, stack panels in a sensible reading order without horizontal page overflow.

### 1. Header and navigation

- Prominent Radical-PI wordmark and a short boastful tagline.
- A small status strip that establishes the current year as 2026 alongside an absurd agency status.
- Simple anchor navigation: **Home**, **Services**, **About Jonny**, **Field Notes**, **Call the Office**.
- One short, readable notice that this is a fictional creative project. Do not repeat disclaimers throughout the page.

### 2. Introduction panel

- A compact introduction to the agency with one conspicuous CTA that opens the telephone interface.
- Space for a future character image. Until an asset is supplied, use an intentional silhouette or graphic placeholder rather than a broken image or an invented definitive portrait.
- Strong pink/cyan framing, cheesy confidence and very little substantive information.

### 3. Services

- Three or four small, square service panels with generic investigation-related labels and deliberately unhelpful descriptions.
- Keep these as agency flavor rather than a real booking, payment or lead-generation system.
- Each interactive service control must have an observable result, such as a brief status message or opening the telephone interface.

### 4. About Jonny

- A short character card using only the agreed foundation above.
- Add two or three absurd credentials or confidence ratings for visual flavor.
- Keep room for later expansion without committing to new story canon.

### 5. Field Notes / blog

- Provide a visible blog section with two or three short sample entries, each with a title, date, excerpt and **Read Entry** control.
- Opening an entry should display its short placeholder body in a readable detail view, expandable panel or route supported by the existing project.
- Clearly mark sample posts as draft entries awaiting future content. Do not write complete episodes or a campaign plot.
- Keep posts in a separate data module or local content files, using a small reusable structure: slug/id, title, date, excerpt, body and optional image.
- Later posts should be addable without rewriting the layout. No CMS, authentication or backend is needed for this version.

### 6. Sidebar and footer

- Include a few inexpensive decorative widgets: **Agency Status**, **Case Confidence**, a simulated visitor counter or **Latest Dispatch**.
- Use small updates and vague numbers to make the site feel alive. Keep simulated figures local and bounded.
- Optional fake banner ads may reinforce the Gråzon connection, but should not dominate the initial version. If pop-ups are added, provide working close controls.
- End with a compact footer and simple navigation. Do not create dead links or invent contact details that could belong to a real person.
- Include a visible English-language agency credit: **“Website by GRÅZON. Results may vary. Confidence will not.”** Treat it as an in-universe supplier credit, separate from the fictional-project notice. Link to Gråzon only when its actual URL is available; otherwise use plain text.

## Telephone switchboard

Create a reusable **Call the Office** interface with the same conceptual behavior as Gråzon's telephone feature, styled for Radical-PI.

- Clicking the CTA opens a square retro telephone/switchboard window within the page.
- Include a status display and controls for **Call**, **Hang Up**, **Replay** and closing the window, as appropriate to the current state.
- Define simple states: idle, connecting, awaiting recording, playing and ended. A short connecting delay may be used for atmosphere.
- **The recording will be supplied later.** Keep the audio source in one obvious configuration location. Until it exists, show an English message such as “Answering machine recording pending.” Do not request a missing file or repeatedly attempt to load one.
- Do not generate a script, synthetic voice, dialogue or replacement recording in this task.
- Once an audio source is provided, playback must start through user interaction. Handle unavailable files gracefully. Hanging up or closing the window must stop playback and reset its position.
- Provide a place for a future transcript without inventing its contents.
- This is an in-page fictional switchboard, not a real phone call or telephony integration.

## Implementation boundaries

- Keep the first version simple: mostly static content, reusable panels and a small amount of state for the blog, widgets and telephone window.
- Separate content data, audio configuration and visual components so later story additions are straightforward.
- Use lightweight local assets or CSS decoration where practical. Preserve actual performance; dated loading indicators may be simulated without blocking the browser.
- Support keyboard operation, visible focus, labelled controls, sensible modal focus handling and `prefers-reduced-motion`. Keep glow and movement out of the way of reading.
- Never autoplay audio on page load. Clean up timers and audio resources.
- Use the existing build and deployment conventions. Do not add a backend, change hosting providers or deploy as part of this task.

## Acceptance criteria

- The entire visible experience is in English and the setting is clearly modern-day 2026.
- The site resembles Gråzon structurally while having a distinct Miami Vice-inspired palette and personality.
- GRÅZON is established as the in-universe website creator through a visible footer credit; Jonny remains the owner of Radical-PI.
- Desktop has a compact portal layout; mobile remains readable and usable.
- Header navigation, service interactions, blog entry controls and telephone window work.
- The missing telephone recording produces an intentional pending state, not a broken player.
- Blog content and the future audio source can be updated independently of the page layout.
- Copy is brief, vague and ridiculous. Story development remains open for later work.
- Run the project's existing relevant build/check commands and report the result along with a short summary of what was implemented.

**Creative compass:** It is 2026. Jonny Phaser has discovered the internet, but has yet to discover that 1986 ended.
