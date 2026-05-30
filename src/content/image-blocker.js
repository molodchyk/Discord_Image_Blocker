// SPDX-License-Identifier: GPL-3.0-only
// Copyright (C) 2026-2026 Oleksandr Molodchyk

(() => {
  'use strict';

  const { attributes, logPrefix, selectors } = globalThis.DiscordImageBlocker;

  function createImageBlocker({ documentRef, requestFrame }) {
    let isScanScheduled = false;

    function hideElement(element) {
      if (element.hasAttribute(attributes.hidden)) {
        return false;
      }

      element.setAttribute(attributes.hidden, 'true');
      element.style.setProperty('display', 'none', 'important');
      console.info(`${logPrefix} Hidden image media.`);
      return true;
    }

    function hideDiscordImages() {
      const imageElements = documentRef.querySelectorAll(selectors.imageMedia);

      imageElements.forEach((element) => {
        const imageContainer = element.closest(selectors.imageContainer);
        if (imageContainer) {
          hideElement(imageContainer);
        }
      });
    }

    function scheduleImageScan() {
      if (isScanScheduled) {
        return;
      }

      isScanScheduled = true;
      requestFrame(() => {
        isScanScheduled = false;
        hideDiscordImages();
      });
    }

    return Object.freeze({
      hideDiscordImages,
      scheduleImageScan
    });
  }

  globalThis.DiscordImageBlocker = Object.freeze({
    ...globalThis.DiscordImageBlocker,
    createImageBlocker
  });
})();
