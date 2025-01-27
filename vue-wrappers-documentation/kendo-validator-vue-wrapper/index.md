---
title: Overview
page_title: Validator Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI Validator wrapper for Vue delivers and use the component in Vue projects."
slug: overview_validator
position: 0
---

# Validator Overview

The Validator supports the validation of values and other types of user input.

The Validator wrapper for Vue is a client-side wrapper for the [Kendo UI Validator](https://docs.telerik.com/kendo-ui/api/javascript/ui/validator) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the Validator.

{% meta height:200 %}
{% embed_file overview/main.vue preview %}
{% embed_file overview/main.js %}
{% endmeta %}

## Installation

To initialize the Validator, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

  	```sh
  	npm install --save @progress/kendo-ui
  	npm install --save @progress/kendo-theme-default
  	```

1. Install the Kendo UI Validator package for Vue.

  	```sh
  	npm install --save @progress/kendo-validator-vue-wrapper
  	```

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

  	```js-no-run
  	import '@progress/kendo-ui' // This will import the entire Kendo UI library
    // As an alternative, you could import only the scripts that are used by a specific widget:
    // import '@progress/kendo-ui/js/kendo.validator' // Imports only the Validator script and its dependencies

  	import '@progress/kendo-theme-default/dist/all.css'

  	import { Validator, ValidatorInstaller } from '@progress/kendo-validator-vue-wrapper'

  	Vue.use(ValidatorInstaller)

  	new Vue({
  		el: '#vueapp',
  		components: {
  			Validator
  		}
  	})
  	```

## Functionality and Features

The Validator supports [custom validation]({% slug custom_validation_validator %}).

## Suggested Links

* [Kendo UI Validator for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/validator/overview)
* [API Reference of the Validator Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/validator)
