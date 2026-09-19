# Sheets & Coils featured image cards

## Scope
- Replace only the three existing text items under “Featured Sub-categories” on `/products/sheets-coils`.
- Keep the heading and all other page content unchanged.

## Implementation
- Upload `Embossed.jpeg`, `Diamond.jpeg`, and `5_-_bar.jpeg` as project-hosted assets.
- Render three equal-width image cards on desktop and a single-column stack on mobile.
- Show each complete image at its natural aspect ratio with `object-fit: contain`, lazy loading, and the supplied descriptive alt text.
- Label the cards “Embossed”, “Diamond”, and “5-bar”.

## Verification and release
- Check desktop and mobile rendering for uncropped images, correct labels, and no overflow.
- Publish the verified update.
