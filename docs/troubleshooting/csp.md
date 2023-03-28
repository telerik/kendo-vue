---
title: Content Security Policy
description: "Learn about the issues that may occur when using the Kendo UI for Vue suite with Content-Security-Policy enabled."
slug: troubleshooting_csp
position: 20
---

# Content Security Policy

If a strict `Content-Security-Policy` (CSP) mode is enabled, some browser features are disabled, such as:
* Inline JavaScript, such as `<script></script>` or DOM event attributes like `onclick`, are blocked. All script code must reside in separate files, served from a whitelisted domain.
* Dynamic code evaluation via `eval()` and string arguments for both `setTimeout` and `setInterval` are blocked.
* Fonts and images from Base64 `data:` portions in stylesheets.

These limitations can affect the Kendo UI for Vue components, because they need the following:

* Allow `data:` sources for `font-src` to enable the loading of [font icons](slug:icons).
* Allow `'unsafe-inline'` for `style-src` to enable Kendo UI for Vue components to load encapsulated styles when:
    * Using the Editor in [iframe edit mode](slug:styling_editor#toc-styling-the-content-in-iframe-edit-mode)
* If you use our CDN, you must also allow it as a source for stylesheets.

**Sample CSP rule that ensures the Kendo UI for Vue components function and look as expected**

```xml
<meta http-equiv="Content-Security-Policy" content=" 
      style-src 'self' 'unsafe-inline' https://kendo.cdn.telerik.com; 
      style-src-elem 'self' 'unsafe-inline' https://kendo.cdn.telerik.com; 
      font-src 'self' data:; 
      img-src 'self' data:">
```
