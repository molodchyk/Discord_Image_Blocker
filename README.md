# Discord Image Blocker

[![Version](https://img.shields.io/badge/version-1.0.0-2ea44f)](CHANGELOG.md)
[![License: GPL-3.0-or-later](https://img.shields.io/badge/license-GPL--3.0--or--later-blue)](LICENSE.txt)
[![Privacy: no analytics](https://img.shields.io/badge/privacy-no%20analytics-brightgreen)](PRIVACY.md)

Discord Image Blocker is a tiny Chrome extension that hides image media on `discord.com`.

It is built for people who want a calmer Discord chat view with fewer visual distractions, without accounts, analytics, tracking, remote code, or a background service.

![Discord Image Blocker promotional image](assets/store/cws-marquee-promo-1400x560.png)

## Features

- Hides image media rendered in Discord chat.
- Runs only on `discord.com`.
- Uses a small Manifest V3 content script.
- Uses Chrome's built-in localization system.
- Does not collect, store, transmit, or sell data.
- Does not use remote code.

## Install Locally

This extension is currently intended for manual installation.

1. Download or clone this repository.
2. Open `chrome://extensions` in Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select this repository folder.
6. Refresh Discord.

## How It Works

Discord Image Blocker watches Discord's web UI for image media containers and hides them in the page.

It does not read message contents, modify your Discord account, contact a server, or block Discord's backend. It only changes what is visible in your browser tab.

## Privacy

Discord Image Blocker is local-only.

- No analytics
- No tracking
- No remote server
- No remote code
- No data collection
- No account or login

See [PRIVACY.md](PRIVACY.md) for the full privacy policy.

## Project Status

Discord Image Blocker was briefly published on the Chrome Web Store, then removed by an automated Chrome Web Store review for a "Spam and placement" policy issue.

The project remains open source and useful for local installation. Separate Chrome Web Store publication is paused while the longer-term direction is evaluated, including a possible consolidation with related Discord media-blocking extensions.

## Project Structure

- `manifest.json` - Chrome extension manifest
- `src/content/` - content script modules
- `_locales/` - localized extension name and description strings
- `assets/icons/` - extension icons
- `assets/store/` - Chrome Web Store promotional images and screenshots
- `store-listing/` - Chrome Web Store listing copy by locale
- `docs/` - project notes, store listing index, and review justifications
- `tools/` - packaging and asset generation scripts
- `PRIVACY.md` - privacy policy
- `LICENSE.txt` - GPL license text

## Development

After making content script changes, reload the unpacked extension from `chrome://extensions` and refresh Discord.

Check content script syntax:

```powershell
node --check src/content/constants.js
node --check src/content/image-blocker.js
node --check src/content/main.js
```

Regenerate icons and Chrome Web Store promotional images:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File tools\generate-assets.ps1
```

Regenerate sanitized Chrome Web Store screenshots:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File tools\generate-store-screenshots.ps1
```

Create a Chrome Web Store upload package:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File tools\package.ps1
```

## Documentation

- [Project philosophy](docs/PROJECT_PHILOSOPHY.md)
- [Chrome Web Store listing index](docs/STORE_LISTING.md)
- [Chrome Web Store review justifications](docs/STORE_JUSTIFICATIONS.md)
- [Privacy policy](PRIVACY.md)

## Support

If this extension saves you time and you want to support its development:

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-support-FFDD00?logo=buymeacoffee&logoColor=000)](https://buymeacoffee.com/molodchyk)
[![Patreon](https://img.shields.io/badge/Patreon-support-F96854?logo=patreon&logoColor=fff)](https://www.patreon.com/OMolodchyk)

## License

Licensed under GPL-3.0-or-later. See [LICENSE.txt](LICENSE.txt).
