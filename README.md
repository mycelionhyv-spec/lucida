# LUCIDA

A scroll-driven 3D descent through clear water.

Open `index.html` in a modern browser (Chrome or Firefox).
The page loads Three.js from a CDN, so you need internet the first time.

If the canvas is blank after a double-click (some browsers block modules on `file://`):

```bash
python3 -m http.server 8765
```

Then visit http://localhost:8765

## Controls
- Scroll to move through the water
- Move the mouse for a slight look-around
- Depth is shown in the top-right
- **Save frame** (bottom-right) downloads the current view as a PNG, named by depth (e.g. `lucida-042m.png`)
