// SPDX-License-Identifier: GPL-3.0-only
// Copyright (C) 2026-2026 Oleksandr Molodchyk

(() => {
  'use strict';

  globalThis.DiscordImageBlocker = Object.freeze({
    selectors: Object.freeze({
      imageMedia: 'div[class*="imageContent"] img',
      imageContainer: 'div[class*="imageContent"]'
    }),
    attributes: Object.freeze({
      hidden: 'data-discord-image-blocker-hidden',
      loaded: 'data-discord-image-blocker-loaded'
    }),
    logPrefix: '[Discord Image Blocker]'
  });
})();
