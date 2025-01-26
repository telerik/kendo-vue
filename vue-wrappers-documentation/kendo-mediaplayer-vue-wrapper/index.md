---
title: Overview
page_title: MediaPlyer Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI MediaPlayer wrapper for Vue delivers and use the component in Vue projects."
slug: overview_mediaplayer
position: 0
---

<div><WrapperBanner></WrapperBanner></div>

# MediaPlayer Overview

The MediaPlayer plays video files from static sources or streams online YouTube videos and provides dynamic content in a user-friendly interface.

It also delivers a styled video UI functionality by using the HTML5 `<video>` element and ships with a built-in toolbar, timeline slider, title bar, HD source support, and responsive layout.

The MediaPlayer wrapper for Vue is a client-side wrapper for the [Kendo UI MediaPlayer](https://docs.telerik.com/kendo-ui/api/javascript/ui/mediaplayer) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the MediaPlayer.

{% meta height:430 %}
{% embed_file basic/main.vue preview %}
{% embed_file basic/main.js %}
{% endmeta %}

## Installation

To initialize the MediaPlayer, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

    ```sh
    npm install --save @progress/kendo-ui
    npm install --save @progress/kendo-theme-default
    ```

1. Install the Kendo UI MediaPlayer package for Vue.

    ```sh
    npm install --save @progress/kendo-mediaplayer-vue-wrapper
    ```

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

```js-no-run
    import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.mediaplayer' // Imports only the MediaPlayer script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

    import { MediaPlayer, MediaPlayerInstaller } from '@progress/kendo-mediaplayer-vue-wrapper'

    Vue.use(MediaPlayerInstaller)

    new Vue({
        el: '#app',
        components: {
            MediaPlayer
        }
    })
```

## Functionality and Features

The MediaPlayer supports [keyboard navigation]({% slug keyboard_navigation_mediaplayer %}).

## Events

The following example demonstrates basic MediaPlayer events. You can subscribe to [all MediaPlayer events](https://docs.telerik.com/kendo-ui/api/javascript/ui/mediaplayer#events) by the handler name.

{% meta height:430 %}
{% embed_file events/main.vue preview %}
{% embed_file events/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI MediaPlayer for jQuery](https://docs.telerik.com/kendo-ui/controls/media/mediaplayer/overview)
* [API Reference of MediaPlayer Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/mediaplayer)
