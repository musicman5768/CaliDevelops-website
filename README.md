# Calico Developers website

The official Calico Developers website is a static GitHub Pages project. The site uses HTML, CSS, and vanilla JavaScript. Its relative paths support the project URL and a future custom domain.

| File | Purpose |
| --- | --- |
| `index.html` | Home and future released-app showcases |
| `about.html` | Founder, official mission, and founder media |
| `beta-testing.html` | Application cards and beta contact links |
| `assets/css/site.css` | Shared layout, colors, and responsive styles |
| `assets/js/site.js` | Shared menu dismissal and keyboard behavior |

Serve the repository root with `python3 -m http.server` and open `http://localhost:8000/`. For a project-path check, run the server from the repository’s parent directory and open `/CaliDevelops-website/`.

## Add an application

Copy an existing `article.app-card` in `beta-testing.html`. Update the name, status, description, and percent-encoded email subject (`Beta Test - App Name`). Place approved images in `assets/media/` and replace the placeholder with an image with descriptive alt text and intrinsic dimensions. For released apps, add a showcase below the Home hero when the approved demo and Google Play URL are available.

To enable an APK for one app, add a `Download APK` link with an approved public URL inside that card’s `actions` block. Remove that link to disable the button. If the APK is hosted separately, manage access to the file at its host.

## Add the founder animation

Place the approved video and final-frame poster in `assets/media/`. Replace the placeholder in `about.html` with a video using native controls, `playsinline`, `preload="none"`, and the poster. Keep playback user-initiated for reduced-motion support. Omit `loop` and preserve the final frame on completion. Use a playback control and captions as appropriate for the supplied media.
