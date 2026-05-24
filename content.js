// SPDX-License-Identifier: GPL-3.0-only
// Copyright (C) 2024-2026 Oleksandr Molodchyk

(() => {
  'use strict';

  const IMAGE_MEDIA_SELECTOR = 'div[class*="imageContent"] img';
  const HIDDEN_ATTRIBUTE = 'data-discord-image-blocker-hidden';
  const LOADED_ATTRIBUTE = 'data-discord-image-blocker-loaded';
  let isScanScheduled = false;

  function hideDiscordImages() {
    const imageElements = document.querySelectorAll(IMAGE_MEDIA_SELECTOR);

    imageElements.forEach((element) => {
      const imageContainer = element.closest('div[class*="imageContent"]');
      if (imageContainer) {
        hideElement(imageContainer);
      }
    });
  }

  function hideElement(element) {
    if (element.hasAttribute(HIDDEN_ATTRIBUTE)) {
      return false;
    }

    element.setAttribute(HIDDEN_ATTRIBUTE, 'true');
    element.style.setProperty('display', 'none', 'important');
    console.info('[Discord Image Blocker] Hidden image media.');
    return true;
  }

  function scheduleImageScan() {
    if (isScanScheduled) {
      return;
    }

    isScanScheduled = true;
    requestAnimationFrame(() => {
      isScanScheduled = false;
      hideDiscordImages();
    });
  }

  const observer = new MutationObserver(scheduleImageScan);

  observer.observe(document.body || document.documentElement, {
    childList: true,
    subtree: true
  });

  document.documentElement.setAttribute(LOADED_ATTRIBUTE, 'true');

  hideDiscordImages();
})();
