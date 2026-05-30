// SPDX-License-Identifier: GPL-3.0-only
// Copyright (C) 2026-2026 Oleksandr Molodchyk

(() => {
  'use strict';

  const { attributes, createImageBlocker } = globalThis.DiscordImageBlocker;
  const imageBlocker = createImageBlocker({
    documentRef: document,
    requestFrame: requestAnimationFrame
  });

  const observer = new MutationObserver(imageBlocker.scheduleImageScan);

  observer.observe(document.body || document.documentElement, {
    childList: true,
    subtree: true
  });

  document.documentElement.setAttribute(attributes.loaded, 'true');

  imageBlocker.hideDiscordImages();
})();
