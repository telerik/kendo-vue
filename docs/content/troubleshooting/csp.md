---
title: Content Security Policy
description: "Learn about the issues that may occur when using the Kendo UI for Vue suite with Content-Security-Policy enabled."
slug: troubleshooting_csp
position: 20
---

# Content Security Policy

This article describes how the Kendo UI for Vue Native suite conforms to [`Content-Security-Policy` (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) and what policy configuration it may need.

## Strict Content Security Policy(CSP) and What it Affects?

In general, a strict CSP can disable web app features, such as:

* Scripts, styles, and images from untrusted domains.
* Inline JavaScript in `<script>` tags and legacy DOM attributes such as `onclick`.
* Inline CSS in `<style>` tags and `style` attributes. 
* Fonts and images that are embedded in stylesheets with `data:` URIs.
* Dynamic code evaluation via `eval()`.

## Policy Configuration

The CSP limitations can affect the normal work of the Kendo UI for Vue components. To be sure everything works as expected, the following configurations should be applied:

* Allow inline styles to use component parameters such as `width`, `height`, `top`, `left`, etc. 
* Allow `'unsafe-inline'` for `style-src` to enable Kendo UI for Vue components to load encapsulated styles when:
    * Using the Editor in [iframe edit mode](slug:styling_editor#toc-styling-the-content-in-iframe-edit-mode)
* If you use the Kendo UI for Vue components through a CDN, allow `https://kendo.cdn.telerik.com` as a source for stylesheets.

**Sample CSP rule that ensures the Kendo UI for Vue components function and look as expected**

```xml
<meta http-equiv="Content-Security-Policy" content=" 
      style-src 'self' 'unsafe-inline' https://kendo.cdn.telerik.com; 
      style-src-elem 'self' 'unsafe-inline' https://kendo.cdn.telerik.com; 
      img-src 'self' data:">
```

## Enhancements and Changes

Since our `R3 2023` release, the font icons that where previously available out-of-the-box are now accessible through this CDN link. After the mentioned version, all icons used in the Kendo UI for Vue components are SVG ones. 

If you are using a version of the Kendo UI for Vue Native components that is released before October 2023, your project is most probably using Font icons. If it is possible, we recommend updating the Vue components to the latest available versions of both the Kendo suite and its related Kendo Theme. 

If an update is not possible, you need to add the following CSP configuration to be sure that everything will be working as expected: 

```xml
font-src 'self' data:; 
```


