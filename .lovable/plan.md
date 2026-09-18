# Product detail photo update

## Scope
- Replace photos only on the seven individual product pages: pipes, sheets & coils, discs, ingots, billets, profiles & bars, and wire rods.
- Keep homepage product cards and the `/products` listing unchanged.
- Leave all nine industry pages unchanged for now, per the selected option.

## Implementation
- Store each supplied product photo as a dedicated app asset referenced only by product detail pages.
- Add a detail-only image map with each photo’s actual width, height, and descriptive alt text.
- Update the shared product detail layout to render each image responsively at its natural aspect ratio using an uncropped, non-stretched presentation with the existing border and rounded styling.
- Lazy-load all seven detail photos.

## Verification and release
- Check all seven product routes at desktop and mobile sizes for complete uncropped images, correct matching, and no overflow.
- Confirm homepage and `/products` listing image URLs remain unchanged.
- Publish after verification.
