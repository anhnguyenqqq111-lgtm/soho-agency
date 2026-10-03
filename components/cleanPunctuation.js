// Utility to clean punctuation: remove : " - .. ; and normalize spaces
// Safe to import in both Server Components and Client Components
export function cleanPunctuation(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/…/g, '')               // Horizontal ellipsis
    .replace(/\.{2,}/g, '')          // Removes .. and ... and more
    .replace(/[:;：；]/g, '')        // Removes colons and semicolons (standard & fullwidth)
    .replace(/["“”„‟«»＂]/g, '')     // Removes all types of double quotes
    .replace(/[—–\-−‐‑‒―－]/g, ' ')   // Replaces all forms of hyphens, dashes, minus signs with space
    .replace(/&/g, ' và ')           // Replaces & with "và" to avoid &amp; entity semicolon
    .replace(/\s+/g, ' ')            // Collapses multi spaces
    .trim();
}
