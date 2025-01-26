---
title: Overview
page_title: Spreadsheet Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI Spreadsheet wrapper for Vue delivers and use the component in Vue projects."
slug: overview_spreadsheet
position: 0
---

<div><WrapperBanner></WrapperBanner></div>

# Spreadsheet Overview

The Spreadsheet enables you to edit and visualize tabular data by using cell formatting options, styles, and themes.

It also supports the selection of cells and background colors, the application of vertical and horizontal cell alignment, formulas, multiple sheets, frozen panes, text wrapping, and provides resizing options.

The Spreadsheet wrapper for Vue is a client-side wrapper for the [Kendo UI Spreadsheet](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the Spreadsheet.

{% meta height:460 %}
{% embed_file overview/basic-usage/main.vue preview %}
{% embed_file overview/basic-usage/main.js %}
{% endmeta %}


## Installation

To initialize the Spreadsheet, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

  	```sh
  	npm install --save @progress/kendo-ui
  	npm install --save @progress/kendo-theme-default
  	```

1. Install the Kendo UI Spreadsheet package for Vue.

    	```sh
    	npm install --save @progress/kendo-spreadsheet-vue-wrapper
    	```

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

  	```js-no-run
  	import '@progress/kendo-ui' // This will import the entire Kendo UI library
  	// As an alternative, you could import only the scripts that are used by a specific widget:
  	// import '@progress/kendo-ui/js/kendo.spreadsheet' // Imports only the Spreadsheet script and its dependencies

  	import '@progress/kendo-theme-default/dist/all.css'

  	import { Spreadsheet,
  			 SpreadsheetSheet,
  			 SpreadsheetInstaller } from '@progress/kendo-spreadsheet-vue-wrapper'

  	Vue.use(SpreadsheetInstaller)

  	new Vue({
  		el: '#app',
  		components: {
  			Spreadsheet,
  			SpreadsheetSheet
  		}
  	})
  	```

## Functionality and Features

* [Data binding]({% slug databinding_spreadsheet %})
* [Sorting and filtering]({% slug sortingfiltering_spreadsheet %})
* [Disabled cells]({% slug disabledcells_spreadsheet %})
* [Custom editors]({% slug customeditors_spreadsheet %})
* [Validation]({% slug validation_spreadsheet %})
* [Cell comments]({% slug cellcomments_spreadsheet %})

## Events

The following example demonstrates basic Spreadsheet events. You can subscribe to [all Spreadsheet events](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet#events) by the handler name.

{% meta height:460 %}
{% embed_file overview/events/main.vue preview %}
{% embed_file overview/events/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Spreadsheet for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/spreadsheet/overview)
* [API Reference of the Spreadsheet Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet)
