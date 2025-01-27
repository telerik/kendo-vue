---
title: Overview
page_title: Buttons Overview - Components - Kendo UI for Vue
description: "Learn about the Kendo UI wrappers for Vue which are delivered by the Buttons package."
slug: overview_buttons_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/buttons/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/buttons"></WrapperBanner></div>

# Buttons Overview

The Buttons provide a clickable UI functionality with arbitrary content.

<Row>
    <Column count={6}>
        <Component href="{% slug overview_button_wrapper %}">
        <svg id="button" viewbox="0 0 72 72">
            <defs>
                <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="-5.1381" y1="58.1737" x2="75.1381" y2="11.8263">
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
            <path d="M57,48H15v6h36L57,48z M0,30v42h72V30H0z M66,66H6V36h60V66z" />
        </svg>
            <ComponentTitle>Button</ComponentTitle>
            <ComponentDescription>The Button detects user interaction and triggers a corresponding event.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_buttongroup_wrapper %}">
        <svg id="buttongroup" viewbox="0 0 72 72">
            <path d="M0,30v42h69V30H0z M42,36v30H27V36H42z M6,36h15v30H6V36z M63,66H48V36h15V66z" />
        </svg>
            <ComponentTitle>ButtonGroup</ComponentTitle>
            <ComponentDescription>The ButtonGroup represents grouped Buttons with identical functionalities.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_toolbar_wrapper %}">
        <svg id="toolbar" viewbox="0 0 72 72">
            <path d="M12,12h12v6H12V12z M30,18h12v-6H30V18z M48,18h12v-6H48V18z M72,0v60L60,72H0V0H72z M6,24h60V6H6V24z M66,57.6  V30H6v36h51.6L66,57.6z"></path>
        </svg>
            <ComponentTitle>ToolBar</ComponentTitle>
            <ComponentDescription>The ToolBar holds various controls such as buttons and groups of buttons.</ComponentDescription>
        </Component>
    </Column>
</Row>

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the Button, ButtonGroup, and ToolBar.

{% meta height:550 %}
{% embed_file overview/main.vue preview %}
{% embed_file overview/main.js %}
{% endmeta %}

## Installation

To initialize the Buttons, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

    ```sh
    npm install --save @progress/kendo-ui
    npm install --save @progress/kendo-theme-default
    ```

1. Install the Kendo UI Buttons package for Vue.

    ```sh
    npm install --save @progress/kendo-buttons-vue-wrapper
    ```

    The package also exports the following wrappers for individual components:

    * Button
    * ButtonGroup
    * ToolBar

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

    ```js-no-run
    import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.button' // Imports only the Button script and its dependencies
    // import '@progress/kendo-ui/js/kendo.buttongroup' // Imports only the ButtonGroup script and its dependencies
    // import '@progress/kendo-ui/js/kendo.toolbar' // Imports only the ToolBar script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

    import { Button,
             ButtonGroup,
             ButtonGroupButton,
             ToolBar,
             ToolBarItem,
             ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'

    Vue.use(ButtonsInstaller)

    new Vue({
        el: '#app',
        components: {
            Button,
            ButtonGroup,
            ButtonGroupButton,
            ToolBar,
            ToolBarItem
        }
    })
    ```

## Suggested Links

* [Get Started with the Button]({% slug overview_button_wrapper %})
* [Get Started with the ButtonGruop]({% slug overview_buttongroup_wrapper %})
* [Get Started with the ToolBar]({% slug overview_toolbar_wrapper %})
