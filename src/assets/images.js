/**
 * WOOFHYPE — Central image paths
 *
 * Add your image files into the folder: public/images/
 *
 * Expected files:
 *   - hero.jpg (or .webp) — Hero section background
 *   - story.jpg           — Story section image
 *   - logo.svg (or .png)  — Nav & footer logo (optional; text shows if missing)
 *   - sample-1.jpg … sample-6.jpg — Collection preview grid (6 images)
 *
 * Paths are from site root (public/ is served at /).
 */

const base = '/images';

export const images = {
  hero: `${base}/223.png`,
  story: `${base}/712.png`,
  story2: `${base}/928.png`, // second Story row (image left). Replace with story2.jpg for a different image.
  logo: `${base}/1103.svg`,
  samples: [
    `${base}/1103.png`,
    `${base}/777.png`,
    `${base}/971.png`,
    `${base}/223.png`,
    `${base}/418.png`,
    `${base}/487.png`,
  ],
};

export default images;
