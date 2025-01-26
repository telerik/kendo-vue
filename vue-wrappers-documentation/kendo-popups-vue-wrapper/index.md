---
title: Overview
page_title: Popups Overview - Components - Kendo UI for Vue
description: "Learn about the Kendo UI wrappers for Vue which are delivered by the Popups package."
slug: overview_popups_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/tooltip"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/tooltip"></WrapperBanner></div>

# Popups Overview

The Popups display content that provides information to the user on various occasions.
<Row>
    <Column count={6}>
        <Component href="{% slug overview_notification_wrapper %}">
         <svg id="notification" viewbox="0 0 72 72">
            <defs>
                <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="-3.8848" y1="56.8728" x2="74.8848" y2="11.3951">
                    <stop  offset="0" style="stop-color:#FF9B5E"/>
                    <stop  offset="8.618834e-02" style="stop-color:#FF8C5D"/>
                    <stop  offset="0.1949" style="stop-color:#FF7F5B"/>
                    <stop  offset="0.3" style="stop-color:#FF7B5B"/>
                    <stop  offset="0.7" style="stop-color:#FF6358"/>
                    <stop  offset="0.7835" style="stop-color:#FC5F59"/>
                    <stop  offset="0.8701" style="stop-color:#F4525E"/>
                    <stop  offset="0.9577" style="stop-color:#E63E65"/>
                    <stop  offset="1" style="stop-color:#DD3169"/>
                </linearGradient>
            </defs>
            <path d="M3,0v54h39v18h6l21-21V0H3z M63,48.5l-15,15V54v-3v-3H9V6h54V48.5z M51,18H15v6h30L51,18z M33,36l6-6H15v6H33z"></path>
        </svg>
            <ComponentTitle>Notification</ComponentTitle>
            <ComponentDescription>A component for displaying information to the client in a popup.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_tooltip_wrapper %}">
          <svg id="combobox" viewbox="0 0 72 72">
        <path d="M54,21H18v6h30L54,21z M42,33H18v6h18L42,33z M6,3v3v3v42v3v3h15l10.8,10.8l0,0L36,72l4.2-4.2L51,57h15v-6V9V6  V3H6z M60,51h-3h-6h-2.5L36,63.5L23.5,51H21h-6h-3V9h48V51z"></path>
        </svg>
            <ComponentTitle>Tooltip</ComponentTitle>
            <ComponentDescription>A component for presenting a popup hint for a given HTML element.</ComponentDescription>
        </Component>
    </Column>
</Row>

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the Notification and Tooltip.

{% meta height:460 %}
{% embed_file basic/main.vue preview %}
{% embed_file basic/main.js %}
{% endmeta %}

## Installation

To initialize the Popups, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

    ```sh
    npm install --save @progress/kendo-ui
    npm install --save @progress/kendo-theme-default
    ```

1. Install the Kendo UI Popups package for Vue.

    ```sh
    npm install --save @progress/kendo-popups-vue-wrapper
    ```

  The package also exports the following wrappers for individual components:

    * Notification
    * Tooltip

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

    ```js-no-run
    import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.tooltip' // Imports only the Tooltip script and its dependencies
    // import '@progress/kendo-ui/js/kendo.notification' // Imports only the Notification script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

    import { Tooltip,
        Notification,
        KendoPopupsInstaller } from '@progress/kendo-popups-vue-wrapper'

    Vue.use(KendoPopupsInstaller)

    new Vue({
      el: '#app',
      components: {
        KendoTooltip,
        KendoNotification
      }
    })
    ```

## Suggested Links

* [Get Started with the Notification]({% slug overview_notification_wrapper %})
* [Get Started with the Tooltip]({% slug overview_tooltip_wrapper %})
