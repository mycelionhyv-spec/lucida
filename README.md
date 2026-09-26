# LUCIDA

A scroll-driven swim through a sunlit tropical reef.

Open `index.html` from a local server. The page loads Three.js from a CDN, so the first visit needs internet.

```bash
python3 -m http.server 8765
```

Then visit http://localhost:8765

Do not open the file directly with `file://` — browsers block ES modules.

## Journey

Clear shallow water, roughly 3–15 m. Scroll forward to travel the channel. Scroll back to retrace it.

1. Opening lagoon — yellow tangs, framing fans, white sand
2. Coral avenue — staghorn, table, brain, boulder
3. Cathedral — a chromis school parts in the light
4. Encounter — green turtle crossing, reef shark beyond
5. Blue garden — ray over the last terrace

## Controls

- Scroll to swim
- Move the mouse to look slightly
- **Drift** for a gentle automatic glide
- **Save frame** downloads the current view as a PNG

## Note

All geometry is procedural and drawn in the browser. It is stylized real-time life, not scanned animals or photographs. No third-party models or audio are bundled.
