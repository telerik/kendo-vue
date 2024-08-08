---
title: Get Started with Kendo UI for Vue Wrapper
page_title: Get Started with Vue Wrapper Components - Kendo UI for Vue Docs & Demos
description: "Get started with the Kendo UI for Vue Wrapper."
slug: getting_started
brand: getting-started
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/getting-started"
heading: Get Started
---

<WrapperBanner link="/kendo-vue-ui/components/getting-started"></WrapperBanner>

# Get Started with Kendo UI for Vue Wrapper Components

To start using the Kendo UI for Vue components, you need to integrate them in either of the available ways.

* [Integrating by using NPM and Webpack](#toc-integrating-with-npm-and-webpack)
* [Integrating by using CDN](slug:using_cdn)
* [VSCode Extension](#toc-vscode-extension)

[Play also our video tutorial on Getting Started with Kendo UI and Vue](https://www.telerik.com/campaigns/kendo-ui/using-kendo-ui-with-vue-video-tutorial).

## Integrating with NPM and Webpack

To integrate the Kendo UI for Vue by using NPM and Webpack:

1. [Set up the Vue project](#toc-setting-up-the-sample-project)
1. [Update and build the application](#toc-building-the-application)

### Setting Up the Vue Project

To create a new Vue project, use the [Create Vue App](https://vuejs.org/v2/guide/installation.html) approach from the official Vue documentation.

1. Add Kendo UI by installing the Kendo UI Professional NPM package.

	```sh
	npm install --save @progress/kendo-ui
	```

1. Add Kendo UI Theme by installing the Kendo UI Default Theme NPM package.

	```sh
	npm install --save @progress/kendo-theme-default
	```

1. Add the Kendo UI `DateInputs` wrappers package for Vue.

	```sh
	npm install --save @progress/kendo-dateinputs-vue-wrapper
	```

1. Import the Kendo UI packages to the `App` component. If you refer to Kendo UI in two or more places in your application, add the Kendo UI-related files only to the `main.js` file. Alternatively, add them only to the component files where they will be used.

	```js
	import '@progress/kendo-ui'
	import '@progress/kendo-theme-default/dist/all.css'
	import { Calendar } from '@progress/kendo-dateinputs-vue-wrapper'
	```

1. Add the Calendar component globally by registering it as a global component and then adding it to the collection of components.

	```js
	Vue.component(Calendar.name, Calendar)

	new Vue({
		el: '#app',
		router,
		template: '<App/>',
		components: {
			App,
			Calendar
		}
	})
	```

1. Declare the Calendar in a component by opening the `Hello.vue` file and then adding the Calendar to the template section.

	```html
	<template>
		<div class="hello">
			<h1>{{ msg }}</h1>
			<kendo-calendar :value="new Date()"></kendo-calendar>
		</div>
	</template>

	<script>
		export default {
			name: 'hello',
			data () {
				return {
					msg: 'Hello Kendo UI for Vue.js'
				}
			}
		}
	</script>
	```

### Building the Application

After you add the dependencies and the code, run the `npm run dev` command to start the application.

As a result, the application builds and the Calendar component appears on the screen.

## VSCode Extension

To help you create projects even faster we have introduced [the Kendo UI VS Code Template Wizard](https://marketplace.visualstudio.com/items?itemName=KendoUI.kendotemplatewizard). To learn more about this awesome extension please check [Introducing the Kendo UI Template Wizard for Visual Studio Code](https://www.telerik.com/blogs/kendo-ui-template-wizard-for-visual-studio-code).

## Suggested Links

* [Configuration of the Kendo UI Wrappers for Vue](slug:configuration_wrappers_vue)
* [Model Binding of the Kendo UI Wrappers for Vue](slug:modelbinding_wrappers_vue)
* [Integrating with CDN](slug:using_cdn)
* [Video Tutorial on Getting Started with Kendo UI and Vue](https://www.telerik.com/campaigns/kendo-ui/using-kendo-ui-with-vue-video-tutorial)
