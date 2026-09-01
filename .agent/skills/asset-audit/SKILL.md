# Skill: Media Asset Audit (`asset-audit`)

## Objective
Audit static image, video, font, icon, and document assets to ensure optimal compression, correct formats, zero broken references, zero duplicate files, and strict performance budget compliance.

## When to Use
- When adding new images, SVGs, or media files to the repository.
- Prior to release builds.

## Required Inspection
1. Read `RESPONSIVE_PERFORMANCE.md` for media size budgets.
2. Inspect asset directories (e.g. `public/`, `src/assets/`) for oversized files.

## Step-by-Step Procedure
1. **Format & Compression Check**: Verify raster images use modern WebP or AVIF formats. Confirm images are compressed (< 150 KB for hero images, < 50 KB for standard content cards).
2. **Font Subsetting Verification**: Confirm custom fonts use WOFF2 format with subsetted character ranges where possible.
3. **SVG Icon Optimization**: Ensure SVGs are cleaned (removed inline editor metadata, unnecessary IDs, fixed fill colors for CSS theme controls).
4. **Dimension & Aspect Ratio Audit**: Ensure `width` and `height` attributes are declared on `<img>` tags to prevent Cumulative Layout Shift (CLS).
5. **Duplicate Asset Audit**: Identify and remove duplicate media files or unused assets.
6. **Lazy Loading Check**: Verify off-screen images use `loading="lazy"` and `decoding="async"`.

## Safety Rules
- NEVER upload uncompressed 10MB JPEGs or raw PNG files to source control.
- NEVER reference external media URLs from unreliable third-party CDNs.

## Testing Requirements
- Verify media rendering across mobile and desktop devices.
- Check build output to ensure total media bundle size stays within budget limits.

## Final Reporting Requirements
Provide an Asset Optimization Summary listing audited files, initial vs compressed file sizes, format conversions applied, and total media payload reduction.
