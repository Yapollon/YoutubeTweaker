# YoutubeTweaker

A Firefox and Chromium extension for a quieter YouTube, with a dark, grouped settings interface inspired by Untrap. This first version includes the 21 Unhook-style controls shown in the project reference screenshots. It is an independent implementation, not an exact copy of either extension.

## Try it

**Firefox:** Open `about:debugging#/runtime/this-firefox`, choose **Load Temporary Add-on**, and select this directory's `manifest.json`. Temporary add-ons are removed when Firefox closes.

**Chromium / Chrome:** Open `chrome://extensions`, enable **Developer mode**, choose **Load unpacked**, and select this directory.

Open YouTube, then click the extension toolbar button. All hiding controls default to off. Enable individual controls; changes are stored locally and applied immediately to open YouTube tabs. The master switch restores visibility while preserving your preferences. Disabling autoplay does not restore its previous YouTube setting: use YouTube's autoplay switch to turn it back on.

Use the browser's extension options page for a wider two-column settings layout. Search settings by name or description; reset returns all controls to off.

## Development

No dependency installation or build step is needed. Edit the plain JavaScript, CSS and HTML files in the existing checkout. Reload the extension and refresh YouTube after content-script changes.

```sh
node --test tests/content.test.cjs
```

- `settings.js`: shared settings catalog and YouTube selectors.
- `content.js`: applies CSS, tracks preference changes, and disables autoplay when requested.
- `popup.html`, `popup.css`, `popup.js`: accessible settings switches and local persistence.
- `manifest.json`: Manifest V3, with only storage permission and content access to `https://www.youtube.com/*`.

No analytics, backend, account or API key is required. Preferences stay in the browser's extension storage.

## Current limits

Targets desktop YouTube only. YouTube changes its markup frequently, so selectors may need updates. The automated tests cover preference handling and autoplay logic using a simulated document; they do not establish compatibility with every current YouTube layout. Test a home page, search results, a regular video, a playlist and a live video in your browser before relying on a release. Check toggles both on and off and navigate between videos without reloading.

Hiding Shorts removes identified UI elements; it does not block direct Shorts URLs. Search filtering hides distracting result shelves, not content judged by topic. Annotation controls hide overlays rather than modifying YouTube account preferences. This version does not yet include Untrap's broader thumbnail, title or per-channel customization, and full Unhook feature parity has not been independently audited.
