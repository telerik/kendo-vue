---
title: Overview
description: "Use themes to style the appearance of your project with Kendo UI for Vue."
slug: themesandstyles
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/styling"
position: 1
---

<WrapperBanner link="/kendo-vue-ui/components/styling"></WrapperBanner>

# Styling Overview

Kendo UI for Vue provide themes that can be used to style your application.

Currently, the suite ships the following themes:

* [Kendo UI Default theme](slug:preview_kendothemedefault) which is available through the `@progress/kendo-theme-default` NPM module.
* [Kendo UI Bootstrap theme](slug:preview_kendothemebootstrap) which is available through the `@progress/kendo-theme-bootstrap` NPM module.
* [Kendo UI Material theme](slug:preview_kendothemematerial) which is available through the `@progress/kendo-theme-material` NPM module.

## Installation

To start using a theme, install it through NPM.

```sh
npm install --save @progress/kendo-theme-default
```

> The Kendo UI Bootstrap theme depends on the Twitter Bootstrap framework. To install the theme:
>   1. Run `npm install --save @progress/kendo-theme-bootstrap`.
>   2. Install the version of the `bootstrap` framework specified as a peer dependency.

After the theme package is installed, reference it in your project.

## Including Themes in Your Project

To include a theme in your application, either:

* Use the [precompiled `all.css` file](#toc-using-precompiled-css), or
* [Customize the theme styles](#toc-customizing-themes) by loading the theme source files through the application build process.

### Using Precompiled CSS

Each Kendo UI for Vue theme includes an `all.css` file with precompiled styles that can be used as a ready solution for theming the available Kendo UI Wrappers.

To style your components by using the precompiled CSS options, either:

* [Include `all.css` in the application HTML](#toc-including-the-styles-in-the-application-html), or
* [Load `all.css` along with the component](#toc-loading-the-styles-along-with-the-component) by using its `styleUrls` property.

#### Including the Styles in the Application HTML

To include the theme with its precompiled CSS in the HTML which hosts your application, use a similar approach to the approach you use to any other HTML page.

```html
<link rel="stylesheet" href="/node_modules/@progress/kendo-theme-default/dist/all.css" />
```

### Customizing Themes

To modify a Kendo UI for Vue theme, either:

* Use the [Theme Builder application](slug:themebuilder) which provides an interface for theme customization, or
* Use the variables of each theme to customize its colors and sizes and build a custom theme.

    To utilize the customizable theme variables, refer to the lists of:

    * [Variables for customizing the Default theme](slug:variables_kendothemedefault)
    * [Variables for customizing the Bootstrap theme](slug:variables_kendothemebootstrap)
    * [Variables for customizing the Material theme](slug:variables_kendothemematerial)

    To build a custom theme, [Use the build process of the themes](#toc-using-the-build-process-of-the-themes). This approach requires you to build the theme once and then use the compiled CSS each time the component packages get updated.

#### Using the Build Process of the Themes

While each Kendo UI theme has a dedicated NPM package (for example, @progress/kendo-theme-default), the source code for all themes is located in the [`kendo-themes`](https://github.com/telerik/kendo-themes) repository. This repository contains a build task that compiles the theme sources to CSS. To customize a theme, you can modify the source code of the theme and use the build task to produce a CSS file for your application. This approach avoid the need for a build configuration when compiling SCSS, but may be harder to maintain as the process has to be repeated for every update of the theme.

> Previously, the themes were located in independent repositories. To improve the development process, these repositories are now merged in a single `kendo-themes` repository and the individual GitHub repositories for each theme are archived.

#### Customizing the Source Code

To create a custom theme by modifying the themes source code:

1. Clone the [kendo-themes](https://github.com/telerik/kendo-themes) GitHub repository.
1. Install the dependencies for all themes with `npm install && npx lerna bootstrap`.
1. Customize the theme variables in the `packages/<THEME_NAME>/scss/_variables.scss` files.
1. Build the themes with the command `npm run sass` or `npm run dart` to create the customized version of the themes in the `packages/THEME_NAME/dist/all.css` file.
1. After the build completes, use the [compiled CSS](#toc-using-precompiled-css).

#### Creating Custom Components Bundle

You might want to omit the styles for some components in the CSS output. To include only the styles that you need:

1. Clone the [kendo-themes](https://github.com/telerik/kendo-themes) GitHub repository.
1. Install the dependencies for all themes with `npm install && npx lerna bootstrap`.
1. Switch the working directory to `packages/<THEME_NAME>`.
1. Create a `CUSTOM_THEME.scss` file in the `scss` folder. For example, create `custom.scss` file with the following lines:

    ```scss
    // Import the theme file for the components you use.
    @import "../panelbar/_index.scss";
    @import "../grid/_index.scss";
    ```

1. To build the file, navigate to the theme folder and run `gulp sass --file "scss/CUSTOM_THEME.scss"`.
1. Include the compiled CSS file in your project. It could be found under `dist/CUSTOM_THEME.css`.

#### Customizing Themes with Swatches

A swatch is a set of variables which customizes the appearance of the theme.

* Each swatch is placed in a separate file. A theme may contain multiple swatches.
* Swatches are useful for creating multiple, persistent theme variations.
* The `.css` output file can be shared across projects and requires no further processing.

To create a swatch:

1. Clone the [kendo-themes](https://github.com/telerik/kendo-themes) GitHub repository.
1. Install the [node-gyp](https://github.com/nodejs/node-gyp#installation) package.
1. Install the dependencies for all themes with `npm install && npx lerna bootstrap`.
1. Switch the working directory to `packages/<THEME_NAME>`.
1. Create a `SWATCH_NAME.scss` swatch file in the `scss/swatches` folder.
1. To build the swatches for the theme by running `npm run sass:swatches` or `npm run dart:swatches`.
1. Include the compiled CSS swatch file in your project. It could be found under `dist/SWATCH_NAME.css`.

For example, in the Material theme create `blue-pink-dark` swatch with the following lines:

```scss
// Variables.
$primary-palette-name: blue;
$secondary-palette-name: pink;
$theme-type: dark;

// Import the theme file for the components you use.
@import "../panelbar/_index.scss";
@import "../grid/_index.scss";

// Alternatively, include all components.
@import "../all.scss";
```

For the Default and Bootstrap themes, the swatch should look like:

```scss
// Variables.
$primary: blue;
$secondary: pink;

// Import the theme file for the components you use.
@import "../panelbar/_index.scss";
@import "../grid/_index.scss";

// Alternatively, include all components.
@import "../all.scss";
```


## Suggested Links

* [Web Font Icons in Kendo UI for Vue](slug:icons)
* [Getting Started with Kendo UI for Vue](slug:getting_started)
* [Browse the Components](https://www.telerik.com/kendo-vue-ui/components)
