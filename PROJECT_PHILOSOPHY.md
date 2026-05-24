# Project Philosophy

Discord Image Blocker exists because a Discord GIF Blocker user asked for the same kind of relief from image posts:

> Awesome. Works really well. No more disgusting nsfw brainrot slop. Could you make a version for image blocking?

That request is the clearest market signal for this project. The extension is for people who want Discord to stop showing image media in chat, quietly and automatically.

## Product Shape

The extension should stay small, predictable, and privacy-preserving.

- It should do one thing: hide image media on `discord.com`.
- It should run without a popup, account, analytics, remote code, or background service.
- It should avoid becoming a moderation suite, content classifier, or preference-heavy Discord client modification.

Images are different from GIFs. Some images are useful: screenshots, references, diagrams, and personal photos can matter. Because of that, the store copy should not claim that all images are worthless. The product promise is narrower: it gives users a calmer Discord view by hiding image media when they want that kind of environment.

## Open Questions

### Should the extension have an option to disable image blocking?

Current decision: not for the initial version.

Chrome already lets users disable the extension entirely from `chrome://extensions` or the toolbar extensions menu. Adding an in-extension toggle would require more UI, more state, and more explanation, while weakening the core promise that this is a tiny extension that simply blocks image media.

Possible future decision: add a simple global pause if users repeatedly ask for it.

If this happens, the option should stay plain:

- `Block images`
- `Pause image blocking`

It should not introduce analytics, syncing, remote configuration, or account-level state.

### Should blocking be divided between personal chats and group/server chats?

Current decision: no.

Splitting behavior by chat type would make the extension more complex and less predictable. It would require detecting Discord context, explaining edge cases, and maintaining behavior as Discord changes its UI. It would also move the project toward a preference system instead of a focused blocker.

Possible future decision: reconsider only if there is strong, repeated user demand for a specific workflow.

Even then, the extension should prefer the smallest useful rule over a full settings system.

## Guiding Rule

If a proposed feature helps the extension hide image media more reliably, it is probably in scope.

If a proposed feature asks the extension to decide which images are acceptable, which chats matter, or which users should be trusted, it is probably out of scope.
