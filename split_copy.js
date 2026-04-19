const fs = require('fs');

const data = fs.readFileSync('components/copy.jsx', 'utf8');

// The file starts with comments, then `const COPY = {`, then `  en: {`, ..., then `  kr: {`, ..., `};`, `window.COPY = COPY;`

// Find the start of en:
const enStart = data.indexOf('en: {') + 'en: '.length;
// Find the start of kr:
// To safely find `kr: {` at the root object level.
const krRegex = /\n\s+kr:\s*\{/;
const krMatch = krRegex.exec(data);
const krStart = krMatch.index + krMatch[0].indexOf('{');

// The EN object goes from enStart to just before the krMatch.
// We need to trim the trailing comma if it exists.
let enContent = data.substring(enStart, krMatch.index).trim();
if (enContent.endsWith(',')) {
    enContent = enContent.substring(0, enContent.length - 1);
}

// Find the end of KR object
// The KR object goes from krStart to the closing `};` of COPY.
// A safe way is to find the LAST `};` before `window.COPY = COPY;`
const windowCopyIndex = data.lastIndexOf('window.COPY = COPY;');
let krEnd = data.lastIndexOf('};', windowCopyIndex);
let krContent = data.substring(krStart, krEnd).trim();

// Add missing closing brace if needed. Actually it's cleaner:
// krContent starts with `{` but the `};` we found is the closing of COPY, not `kr`.
// So `krContent` currently includes the `}` of `kr`, but `krEnd` points to `};` of `COPY`.
// We just use `krEnd` to slice and let's see what we get.

// Wait, the safer way:
// Since it's a valid JS file, we can just use `require` if we export it, but it's JSX (though it doesn't contain JSX tags, just objects).
// Does `copy.jsx` contain JSX?
// Let's check if it contains React elements.
// Yes! `title: <><em className="text-gold not-italic">...`
// Ah, the objects contain JSX Elements.
