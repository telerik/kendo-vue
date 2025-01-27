---
title: Overview
page_title: Window Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI Window wrapper for Vue delivers and use the component in Vue projects."
slug: overview_window_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dialogs/window/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/dialogs/window/"></WrapperBanner></div>    

# Window Overview

The Window displays content in a modal or non-modal HTML window and, by default, can be moved, resized, and closed.

The Window wrapper for Vue is a client-side wrapper for the [Kendo UI Window](https://docs.telerik.com/kendo-ui/api/javascript/ui/window) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the Window.

{% meta height:370 %}
{% embed_file overview/main.vue preview %}
{% embed_file overview/main.js %}
{% endmeta %}

## Installation

To initialize the Window, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

		```sh
		npm install --save @progress/kendo-ui
		npm install --save @progress/kendo-theme-default
		```

1. Install the Kendo UI Window package for Vue.

		```sh
		npm install --save @progress/kendo-window-vue-wrapper
		```

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

	```js-no-run
	import '@progress/kendo-ui' // This will import the entire Kendo UI library
	// As an alternative, you could import only the scripts that are used by a specific widget:
	// import '@progress/kendo-ui/js/kendo.window' // Imports only the Window script and its dependencies

	import '@progress/kendo-theme-default/dist/all.css'

	import { Window, WindowInstaller } from '@progress/kendo-window-vue-wrapper'

	Vue.use(WindowInstaller)

	new Vue({
		el: '#app',
		components: {
			Window
		}
	})
	```

## Functionality and Features

* [Dimensions]({% slug dimensions_window_wrapper %})
* [Animation effects]({% slug animation_effects_window_wrapper %})
* [Movement constraints]({% slug constrain_movement_window_wrapper %})
* [Position]({% slug position_window_wrapper %})
* [Loading content from AJAX]({% slug loading_content_ajax_window_wrapper %})
* [Customization of actions]({% slug actions_window_wrapper %})
* [Keyboard navigation]({% slug keyboard_navigation_window_wrapper %})
* [RTL support]({% slug rtl_support_window_wrapper %})

## Events

The following example demonstrates basic Window events. You can subscribe to [all Window events](https://docs.telerik.com/kendo-ui/api/javascript/ui/window#events) by the handler name.

```html
<div id="vueapp" class="vue-app">
	<kendo-window :title="'Window title'" v-on:open="onOpen">Content</kendo-window>
</div>
```
```js
Vue.use(WindowInstaller);

new Vue({
	el: '#vueapp',
	methods: {
		onOpen (e) {
			console.log('Window is about to be opened.');
		}
	}
})
```

## Suggested Links

* [Kendo UI Window for jQuery](https://docs.telerik.com/kendo-ui/controls/layout/window/overview)
* [API Reference of the Window Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/window)
