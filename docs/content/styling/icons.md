---
title: Icons
description: "Check out the full list of the web font icons for the KendoVue components."
slug: icons
position: 30
---

# Icons

The Kendo UI for Vue suite delivers more than 400 integrated font icons for its [components](https://www.telerik.com/kendo-vue-ui/components).

> Kendo UI Icons version `^5.x.x` requires Kendo UI for Vue `v9.0.0` or later.

## Icon Package Compatibility

Kendo UI for Vue supports both Kendo UI Icons version `^4.x.x` and version `^5.x.x` of the `@progress/kendo-font-icons` and `@progress/kendo-svg-icons` packages.

Version `5.0.0` of the icon packages introduces breaking changes. The icon set is streamlined and updated with new icons and variants, and the default icon variant is changed to `outline`. The update also includes icon removals and renames, and font icon aliases are removed and no longer supported.

What is affected:

* Removed icons with replacements (renamed or consolidated icons in v5).
* Icons removed without replacement.
* Deprecated font icon aliases (old alias names no longer resolve).

>tip Review the complete list of deprecations, replacements, and other breaking changes in the [Iconography changelog v5.0.0](https://www.telerik.com/design-system/docs/foundation/iconography/changelog/#v5.0.0).

## What Are Icon Fonts

Icon fonts are fonts which contain vector glyphs instead of letters and numbers. You can style them with CSS by using all styling properties that can be applied to a regular text in a modern browser.

## Why Use Icon Fonts

The utilization of icon fonts in a user interface (UI) naturally succeeds the somehow outdated [icon sprite technique](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS).

Font icons demonstrate significant benefits such as:

* [Improved scalability](#toc-sizes)&mdash;While icon sprites are bitmap raster images and do not scale well, icon fonts use vector graphics, look perfect on retina displays, and make scaling as easy as setting the `font-size` configuration option.
* [Improved design capabilities](#toc-visual-adjustments)&mdash;You can easily apply CSS effects on the fly by setting the [text color](#toc-colors), shadow, or other options for different interaction states. For example, on `:hover`.
* Improved browser support&mdash;Font icons are browser-agnostic and are supported by all modern browsers.
* Reduced number of HTTP requests&mdash;To load an icon font, you need a maximum of a few HTTP requests.
* Reduced file size&mdash;A 100KB file contains approximately 500 vector icons.

## Basic Usage

To use the Kendo UI font icons:

1. [Load a Kendo UI theme](slug:themesandstyles) in your project.
1. Load the font icons either by [using the precompiled CSS](#toc-loading-icons-through-precompiled-css).
1. Add an empty `<span>` element that will hold the font icon.
1. Assign a `k-icon k-font-icon` CSS classes that are followed by a predefined class from the [list of font icons]({% slug icon_list %}) to an HTML tag. For example:

    ```html
    <span class="k-icon k-font-icon k-i-calendar"></span>`.
    ```

### Loading Icons through Precompiled CSS

1. To load the font icons by using precompiled CSS, install the `Kendo Font Icons` package through NPM.

    ```sh
    npm i @progress/kendo-font-icons
    ```

1. Import the precompiled CSS by using the following:

    - Import the font icons in the `styles.scss` file.

    ```scss
    @import "@progress/kendo-font-icons/dist/index.css";
    ```

## Rendering with Unicode Numbers

Though the web icon font comes with a [set of predefined CSS classes]({% slug icon_list %}), you might need to use the icons with a custom CSS class name. To achieve this, set a `:before` pseudo content value for the relevant icon.

```html
<span class="k-icon k-font-icon my-custom-icon-class"></span>

<style>
    .my-custom-icon-class:before {
        content: "\e13a"; /* Adds a glyph using the Unicode character number */
    }
</style>
```

## Visual Adjustments

Icon fonts support the following options for visual enhancement:

* Application of [different sizes](#toc-sizes).
* Application of [icon colors](#toc-colors).
* [Flipping and rotating](#toc-flipping-and-rotating) of icons.

### Sizes

The default size of all Kendo UI icons is 16 px (Font-size: 16 px; Width: 16 px; Height: 16 px). However, Kendo UI provides the following predefined sizes for icons:

* `xsmall`&mdash;Font-size: 12 px; Width: 12 px; Height: 12 px.
* `small`&mdash;Font-size: 14 px; Width: 14 px; Height: 14 px.
* `medium`&mdash;Font-size: 16 px; Width: 16 px; Height: 16 px.
* `large`&mdash;Font-size: 20 px; Width: 20 px; Height: 20 px.
* `xlarge`&mdash;Font-size: 24 px; Width: 24 px; Height: 24 px.
* `xxlarge`&mdash;Font-size: 32 px; Width: 32 px; Height: 32 px.
* `xxxlarge`&mdash;Font-size: 48 px; Width: 48 px; Height: 48 px.

You can set each of them by using the respective class:

* `k-icon-xs`
* `k-icon-sm`
* `k-icon-md`
* `k-icon-lg`
* `k-icon-xl`
* `k-icon-xxl`
* `k-icon-xxxl`

```html
<span class="k-icon k-font-icon k-i-gear k-icon-xs"></span>
<span class="k-icon k-font-icon k-i-gear k-icon-md"></span>
<span class="k-icon k-font-icon k-i-gear k-icon-xl"></span>
```

For font icons, you can apply any custom size by using the CSS `font-size` property.

```html
<span class="k-icon k-font-icon k-i-gear k-icon-24"></span>

<style>
    .k-icon-24 {
        font-size: 24px; /* Sets icon size to 24 px */
    }
</style>
```

For SVG icons, you can change the size with the `width` and `height` CSS properties.

```html
<span class="k-svg-icon k-svg-i-gear k-icon-24"></span>

<style>
    .k-icon-24 {
        width: 24px;
        height: 24px;
    }
</style>
```

### Colors

To set the icon color, use the `color` CSS property.

```html
<span class="k-icon k-font-icon k-i-gear" style="color: blue;"></span>
<span class="k-icon k-font-icon k-i-gear colored-icon"></span>

<style>
    .colored-icon {
        color: green;
    }
</style>
```

### Flipping and Rotating

To better accommodate an icon in your application, flip it by using the `k-flip-h` and `k-flip-v` predefined CSS classes.

```html
<span class="k-icon k-font-icon k-i-pencil"></span>
<span class="k-icon k-font-icon k-i-pencil k-flip-h"></span>
<span class="k-icon k-font-icon k-i-pencil k-flip-v"></span>
<span class="k-icon k-font-icon k-i-pencil k-flip-h k-flip-v"></span>
```

You can also rotate the icon with the help of the following predefined CSS classes:

* `k-rotate-0`&mdash;Rotates an icon 0°.
* `k-rotate-45`&mdash;Rotates an icon 45°.
* `k-rotate-90`&mdash;Rotates an icon 90°.
* `k-rotate-135`&mdash;Rotates an icon 135°.
* `k-rotate-180`&mdash;Rotates an icon 180°.
* `k-rotate-225`&mdash;Rotates an icon 225°.
* `k-rotate-270`&mdash;Rotates an icon 270°.
* `k-rotate-315`&mdash;Rotates an icon 315°.

```html
<span class="k-icon k-font-icon k-i-pencil k-rotate-90"></span>
```

## Loading Indicator

To show a loading indicator, use the `k-i-loading` CSS class. You can adjust the size and color of the loading indicator in the same way you make adjustments to other icons.

```html
<span class="k-icon k-font-icon k-i-loading"></span>
<span class="k-icon k-font-icon k-i-loading" style="font-size: 64px;"></span>
<span class="k-icon k-font-icon k-i-loading" style="color: limegreen;"></span>
```

## Icons List

The Progress Design System website provides a [list of all Font icons in Kendo UI for Vue](https://www.telerik.com/design-system/docs/foundation/iconography/icon-list/).
Each icon box in the icon list is clickable and reveals the following details:

-   CSS class aliases, if such exist.
-   Unicode representation of the font icon glyph. For example, `\e11e` corresponds to the `plus` icon.
-   Ability to copy the glyph symbol of the font icon.
-   Ability to copy the HTML markup (`<svg>` tag) of the SVG icon.


## Suggested Links

* [Themes and Styling in Kendo UI for Vue](slug:themesandstyles)
* [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
* [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
* [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
* [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
* [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)
* [Browse the Components](https://www.telerik.com/kendo-vue-ui/components)
