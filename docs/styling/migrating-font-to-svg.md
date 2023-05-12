---
title: Migrating Font Icons to SVG Icons
description: "Learn how to migrate from font icons to SVG icons when using the Kendo UI for Vue Native components."
slug: font_svg_migration
position: 35
tag: new
---

# Migrating Font Icons to SVG Icons

With the R2 2023 release, the default icon type in the Kendo UI for Vue Native components and Kendo UI themes is changed from `font` to `svg`. This change marks the next milestone in a series of improvements related to Content Security Policy (CSP).

In this article, you will find more details about how to:

* [Switch to SVG Icons](#toc-switching-to-svg-icons)
* [Continue Using Font Icons](#toc-continue-using-font-icons)

For more information on using SVG and font icons, visit their dedicated documentation articles:

* [SVG Icons](slug:overview_svgicon)
* [Font Icons](slug:overview_icon)

> With the R3 2023 release, the fonts will no longer be delivered within the Kendo UI for Vue suite and Kendo UI themes.

## Switching to SVG Icons

Migration from font to SVG icon type requires some changes to be applied. Here is a list of scenarios you may encounter:
- [Replacing Standalone Kendo Font Icons](#toc-replacing-standalone-kendo-font-icons)
- [Customizing Standalone Kendo Font Icons](#toc-customizing-standalone-kendo-font-icons)
- [Continue Using Font Icons](#toc-continue-using-font-icons)

### Replacing Standalone Kendo Font Icons

In case you have a standalone icon that uses an HTML element with a dedicated CSS icon class selector or [`FontIcon`](slug:overview_icon) component like:

```jsx
<span class="k-icon k-i-camera"></span>
<FontIcon :name="'camera'" />
```

In R2 2023 release and later versions, use the [`SvgIcon`](slug:overview_svgicon) component instead.

```jsx
<template>
  <div>
    <SvgIcon :icon="svgIcons.cameraIcon" />
  </div>
</template>
<script>
import { SvgIcon } from "@progress/kendo-vue-common";
import * as svgIcons from "@progress/kendo-svg-icons";

export default {
  components: {
    SvgIcon,
  },
  data() {
    return {
      svgIcons,
    };
  },
};
</script>
```

### Customizing Standalone Kendo Font Icons

The following example demonstrates a standalone font icon with a CSS rule that customizes the color of the font icon prior R2 2023 release:

```html
<span class="k-icon k-i-camera"></span>
```

```css
.k-icon.k-i-camera {
    color: red;
}
```

To customize an SVG icon in R2 2023 and later versions, use `.k-svg-icon` CSS selector and the respective SVG icon selector.

```jsx
<SvgIcon :icon="svgIcons.cameraIcon" />
```

```css
.k-svg-icon.k-svg-i-camera {
    color: red;
}
```

## Continue Using Font Icons

To continue using Kendo UI for Vue Native Font icons as the default icon type, use the [Vue.js provider](https://vuejs.org/guide/components/provide-inject.html) and set the icon type to `font`, by implementing a code like this:

```jsx
provide() {
  return {
    kendoIcons: {
      type: 'font',
    },
  };
}
```

More details about the customization of the Kendo UI for Vue Native Icons can be found on this [Special Scenarios](slug:icon_settings) article.

## Suggested Links

* [SVG Icons](slug:overview_svgicon)
* [Font Icons](slug:overview_icon)
* [Icon Component - Special Scenarios](slug:icon_settings)