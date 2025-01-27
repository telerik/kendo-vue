---
title: Overview
page_title: Dialog Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI Dialog wrapper for Vue delivers and use the component in Vue projects."
slug: overview_dialog_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dialogs/dialog/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/dialogs/dialog"></WrapperBanner></div>


# Dialog Overview

The Dialog communicates specific information and prompts users to take specific actions by interacting with a modal dialog.

The Dialog wrapper for Vue is a client-side wrapper for the [Kendo UI Dialog](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the Dialog.

{% meta height:450 %}
{% embed_file basic/main.vue preview %}
{% embed_file basic/main.js %}
{% endmeta %}

## Installation

To initialize the Dialog, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

	```sh
	npm install --save @progress/kendo-ui
	npm install --save @progress/kendo-theme-default
	```

1. Install the Kendo UI Dialog package for Vue.

	```sh
	npm install --save @progress/kendo-dialog-vue-wrapper
	```

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

	```js-no-run
	import '@progress/kendo-ui' // This will import the entire Kendo UI library
	// As an alternative, you could import only the scripts that are used by a specific widget:
	// import '@progress/kendo-ui/js/kendo.dialog' // Imports only the Dialog script and its dependencies

	import '@progress/kendo-theme-default/dist/all.css'

	import { Dialog } from '@progress/kendo-dialog-vue-wrapper'
	import { DialogInstaller } from '@progress/kendo-dialog-vue-wrapper'

	Vue.use(DialogInstaller)

	new Vue({
		el: '#app',
		components: {
			Dialog
		}
	})
	```

## Functionality and Features

* [Predefined Dialog]({% slug predefined_dialogs_dialog_wrapper %})
* [TreeList integration]({% slug treelist_in_dialog_wrapper %})
* [Keyboard navigation]({% slug keyboard_navigation_dialog_wrapper %})
* [RTL support]({% slug right_to_left_dialog_wrapper %})

## Events

The following example demonstrates basic Dialog events. You can subscribe to [all events of the Dialog](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog#events) by the handler name.

```html
<div id="vueapp" class="vue-app">
    <kendo-dialog v-on:close="onClose"
				  v-on:open="onOpen"
				  :title="'Hello Dialog'"
				  :content="'This is dialog content'">
		<kendo-dialog-action :text="'OK'"></kendo-dialog-action>
		<kendo-dialog-action :text="'Cancel'"
							 :primary="true">
		</kendo-dialog-action>
    </kendo-dialog>
</div>
```
```js
Vue.use(DialogInstaller);

new Vue({
	el: '#vueapp',
	methods: {
	  onClose () {
	    console.log("Dialog is about to be closed.");
	  },
	  onOpen () {
	    console.log("Dialog is about to be opened.");
	  }
	}
})
```

## Suggested Links

* [Kendo UI Dialog for jQuery](https://docs.telerik.com/kendo-ui/controls/layout/dialog/overview)
* [API Reference of the Dialog Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/dialog)
