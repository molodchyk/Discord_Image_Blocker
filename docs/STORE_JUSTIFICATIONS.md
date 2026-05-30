# Chrome Web Store Justifications

## Beschreibung des alleinigen Zwecks

This extension hides image media on discord.com to reduce visual distractions in Discord chat.

## Begründung für Hostberechtigung

The extension runs content scripts from `src/content/` on Discord pages so it can find image media elements in Discord chat and hide their containing media element. The content script uses DOM queries such as `document.querySelectorAll` to find image media rendered by Discord. Without access to `discord.com`, the extension cannot perform its only purpose.

## URL der Datenschutzerklärung

https://github.com/molodchyk/Discord_Image_Blocker/blob/main/PRIVACY.md
