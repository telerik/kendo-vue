---
title: Overview
page_title: ScrollView Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI ScrollView wrapper for Vue delivers and use the component in Vue projects."
slug: overview_scrollview_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/scrollview/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/scrollview"></WrapperBanner></div> 

# ScrollView Overview

The ScrollView displays a horizontal collection of content or image views with built-in navigation between them.

It can be scrolled through dragging, applying gestures, arrow clicking, page clicking, or tapping.

The ScrollView wrapper for Vue is a client-side wrapper for the [Kendo UI ScrollView](https://docs.telerik.com/kendo-ui/api/javascript/ui/scrollview) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the ScrollView.

{% meta height:460 %}
{% embed_file overview/basic-usage/main.vue preview %}
{% embed_file overview/basic-usage/main.js %}
{% endmeta %}

## Installation

To initialize the ScrollView, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

	```sh
	npm install --save @progress/kendo-ui
	npm install --save @progress/kendo-theme-default
	```

1. Install the Kendo UI ScrollView package for Vue.

	```sh
	npm install --save @progress/kendo-scrollview-vue-wrapper
	```

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

	```js-no-run
	import '@progress/kendo-ui' // This will import the entire Kendo UI library
  // As an alternative, you could import only the scripts that are used by a specific widget:
  // import '@progress/kendo-ui/js/kendo.scrollview' // Imports only the ScrollView script and its dependencies

	import '@progress/kendo-theme-default/dist/all.css'

	import { ScrollView, ScrollViewInstaller } from '@progress/kendo-scrollview-vue-wrapper'

	Vue.use(ScrollViewInstaller)

	new Vue({
		el: '#app',
		components: {
			ScrollView
		}
	})
	```

## Events

The following example demonstrates basic ScrollView events. You can subscribe to [all events of the ScrollView](https://docs.telerik.com/kendo-ui/api/javascript/ui/scrollview#events) by the handler name.

## Suggested Links

* [API Reference of the ScrollView Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/scrollview)
