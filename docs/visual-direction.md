# Visual direction

The portfolio should feel like an independent engineer's personal publication.
Recruiters and potential collaborators should see John, his work, and the evidence
behind it before encountering a long list of technologies.

## Design conventions

- Warm paper background, near-black text, and one orange accent. The selected-work
  index uses a dark olive surface; the contact section uses a solid light orange.
- Space Grotesk for names, headings, and body text. IBM Plex Mono for compact
  captions, dates, status text, and project numbers.
- Use oversized typography and deliberate alignment for hierarchy. Separate
  content with whitespace and thin rules. Avoid gradient backgrounds, glass panels,
  ornamental shadows, pill-shaped navigation, and repeated cards.
- Use an indexed list for selected projects. The complete row is a link to the
  corresponding project note. Keep project status visible before a click.
- Keep copy direct and personal. Preserve the technical claims and their scope
  from `content-sources.md`; a visual refresh is not a new results announcement.

## Responsive and accessible behavior

- Below 768 px, stack the name and multi-column content; replace desktop navigation
  with a disclosure menu. The menu closes on selection or Escape. Escape restores
  focus to its trigger. Home remains available through the labeled wordmark.
- Preserve visible keyboard focus and the skip-to-content link. Icons adjacent to
  text are decorative; controls without visible labels need accessible names.
- Respect reduced-motion preferences. Motion is limited to small link-hover shifts
  and optional smooth scrolling; reading never depends on an entrance animation.
- Small text must meet 4.5:1 contrast. Contact ink `#191b17` on `#df6846` is 5.13:1;
  dark-section body text `#c4c6ba` on `#20211e` is 9.35:1.

John owns the visual direction. For future edits, check the affected desktop and
mobile pages, the project anchor links, menu keyboard behavior, and resume download
before committing. Reuse the shared components and CSS conventions across routes.
The legacy NFT interface demo intentionally keeps its own presentation.
