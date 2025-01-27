---
title: Overview
page_title: Layout Overview - Components - Kendo UI for Vue
description: "Learn about the Kendo UI wrappers for Vue which are delivered by the Layout package."
slug: overview_layout_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/layout/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/layout"></WrapperBanner></div>    

# Layout Overview

The Layout components create a perceptive and intuitive layout of web projects to provide for an easier navigation.


<Row>
    <Column count={6}>
        <Component href="{% slug overview_contextmenu_wrapper %}">
          <svg id="menu" viewBox="0 0 72 72">
			<defs>
				<linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="-5.1381" y1="58.1737" x2="75.1381" y2="11.8263">
					<stop offset="0" style="stop-color:#FF9B5E"></stop>
					<stop offset="8.618834e-02" style="stop-color:#FF8C5D"></stop>
					<stop offset="0.1949" style="stop-color:#FF7F5B"></stop>
					<stop offset="0.3" style="stop-color:#FF7B5B"></stop>
					<stop offset="0.7" style="stop-color:#FF6358"></stop>
					<stop offset="0.7835" style="stop-color:#FC5F59"></stop>
					<stop offset="0.8701" style="stop-color:#F4525E"></stop>
					<stop offset="0.9577" style="stop-color:#E63E65"></stop>
					<stop offset="1" style="stop-color:#DD3169"></stop>
				</linearGradient>
			</defs>
				<path d="M69,6H21v6h42L69,6z M21,30h42l6-6H21V30z M21,48h42l6-6H21V48z M21,66h42l6-6H21V66z M3,3h12v12H3V3z M3,21h12
					v12H3V21z M3,39h12v12H3V39z M3,57h12v12H3V57z"></path>
			</svg>
            <ComponentTitle>ContextMenu</ComponentTitle>
            <ComponentDescription>A component for displaying hierarchical data as a multi-level menu in a popup.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_menu_wrapper %}">
            <svg id="menu" viewBox="0 0 72 72">
				<path d="M69,6H21v6h42L69,6z M21,30h42l6-6H21V30z M21,48h42l6-6H21V48z M21,66h42l6-6H21V66z M3,3h12v12H3V3z M3,21h12
					v12H3V21z M3,39h12v12H3V39z M3,57h12v12H3V57z"></path>
			</svg>
            <ComponentTitle>Menu</ComponentTitle>
            <ComponentDescription>A component for displaying hierarchical data as a multi-level menu.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_panelbar_wrapper %}">
            <svg id="panelbar" viewBox="0 0 72 72">
				<path d="M66,0H0v6h60L66,0z M54,24H12v6h36L54,24z M12,42h24l6-6H12V42z M0,60h60l6-6H0V60z M0,72h60l6-6H0V72z M0,12v6
					v30h6V18h54l6-6H6H0z"></path>
			</svg>
            <ComponentTitle>PanelBar</ComponentTitle>
            <ComponentDescription>A multi-level component for hierarchical data.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_splitter_wrapper %}">
            <svg id="splitter" viewBox="0 0 72 72">
				<path d="M33,72l6-6V0l-6,6V72z M6,36l4.2,4.2L27,57v-8.5L14.5,36L27,23.5V15L10.2,31.8L6,36z M61.8,31.8L45,15v8.5
					L57.5,36L45,48.5V57l16.8-16.8L66,36L61.8,31.8z"></path>
			</svg>
            <ComponentTitle>Splitter</ComponentTitle>
            <ComponentDescription>A component for resizable layouts.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_tabstrip_wrapper %}">
            <svg id="tabstrip" viewBox="0 0 72 72">
				<path d="M26,12V0h-6H0v3v3v60v6h6h48l12-12V18v-6h-6H26z M60,57.5L51.5,66H6V6h14v6v6h6h34V57.5z M12,36h36l6-6H12V36z
					M52,0h14v6H52V0z M12,48h24l6-6H12V48z M32,0h14v6H32V0z"></path>
			</svg>
            <ComponentTitle>TabStrip</ComponentTitle>
            <ComponentDescription>A tab collection for associated content.</ComponentDescription>
        </Component>
    </Column>
</Row>

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the ContextMenu, Menu, PanelBar, Splitter, and TabStrip.

{% meta height:540 %}
{% embed_file basic/main.vue preview %}
{% embed_file basic/main.js %}
{% endmeta %}

## Installation

To initialize the Layout wrappers, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

	```sh
	npm install --save @progress/kendo-ui
	npm install --save @progress/kendo-theme-default
	```

1. Install the Kendo UI Layout package for Vue.

	```sh
	npm install --save @progress/kendo-layout-vue-wrapper
	```

  The package also exports the following wrappers for individual components:

    * ContextMenu
    * Menu
    * PanelBar
    * Splitter
    * TabStrip

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

	```js-no-run
    import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.menu' // Imports only the Menu script and its dependencies
    // import '@progress/kendo-ui/js/kendo.panelbar' // Imports only the PanelBar script and its dependencies
    // import '@progress/kendo-ui/js/kendo.splitter' // Imports only the Splitter script and its dependencies
    // import '@progress/kendo-ui/js/kendo.tabstrip' // Imports only the TabStrip script and its dependencies

    import '@progress/kendo-theme-default/dist/all.css'

    import { ContextMenu } from '@progress/kendo-layout-vue-wrapper'
    import { Menu } from '@progress/kendo-layout-vue-wrapper'
    import { PanelBar } from '@progress/kendo-layout-vue-wrapper'
    import { Splitter } from '@progress/kendo-layout-vue-wrapper'
    import { TabStrip } from '@progress/kendo-layout-vue-wrapper'

    Vue.use(LayoutInstaller)

    new Vue({
        el: '#app',
        components: {
            ContextMenu,
			Menu,
			PanelBar,
			Splitter,
			TabStrip
        }
    })
	```

## Suggested Links

* [Get Started with the ContextMenu]({% slug overview_contextmenu_wrapper %})
* [Get Started with the Menu]({% slug overview_menu_wrapper %})
* [Get Started with the PanelBar]({% slug overview_panelbar_wrapper %})
* [Get Started with the Splitter]({% slug overview_splitter_wrapper %})
* [Get Started with the TabStrip]({% slug overview_tabstrip_wrapper %})
