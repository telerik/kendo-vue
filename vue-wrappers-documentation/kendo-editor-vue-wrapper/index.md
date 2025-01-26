---
title: Overview
page_title: Editor Overview - Components - Kendo UI for Vue
description: "Get an overview of the features the Kendo UI Editor wrapper for Vue delivers and use the component in Vue projects."
slug: overview_editor_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/editor/"
position: 0
---

<div><WrapperBanner link="/kendo-vue-ui/components/editor/"></WrapperBanner></div>    

# Editor Overview

The Editor allows the user to create rich textual content through a What-You-See-Is-What-You-Get (WYSIWYG) interface.

It provides the core HTML editing engine, which includes basic text formatting, hyperlinks, lists, and image handling.

The Editor wrapper for Vue is a client-side wrapper for the [Kendo UI Editor](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor) widget.

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates how to initialize the Editor.

{% meta height:400 %}
{% embed_file overview/main.vue preview %}
{% embed_file overview/main.js %}
{% endmeta %}


## Installation

To initialize the Editor, either:

* [Use the CDN service]({% slug using_cdn %}), or
* [Use Webpack](#toc-initializing-with-webpack).

### Initializing with Webpack

1. Install Kendo UI and add a theme.

	```sh
	npm install --save @progress/kendo-ui
	npm install --save @progress/kendo-theme-default
	```

1. Install the Kendo UI Editor package for Vue.

	```sh
	npm install --save @progress/kendo-editor-vue-wrapper
	```

1. Import the Kendo UI packages to the App component. If you use the Kendo UI components more than once in your application, add all Kendo UI-related files to the `main.js` file. If you use the Kendo UI components once in your application, add the Kendo UI-related files the component where they will be referred.

	```js-no-run
	import '@progress/kendo-ui' // This will import the entire Kendo UI library
	// As an alternative, you could import only the scripts that are used by a specific widget:
	// import '@progress/kendo-ui/js/kendo.editor' // Imports only the Editor script and its dependencies

	import '@progress/kendo-theme-default/dist/all.css'

	import { Editor } from '@progress/kendo-editor-vue-wrapper'
	import { EditorTool } from '@progress/kendo-editor-vue-wrapper'
	import { EditorInstaller } from '@progress/kendo-editor-vue-wrapper'

	Vue.use(EditorInstaller)

	new Vue({
	  el: '#app',
	  components: {
		  Editor
	  }
	})
	```

## Functionality and Features

* [Modes]({% slug modes_editor_wrapper %})
* [Tools]({% slug tools_editor_wrapper %})
* [Formatting options]({% slug styles_editor_wrapper %})
* [File and image browsers]({% slug file_browsers_editor_wrapper %})
* [Paste cleanup]({% slug paste_cleanup_editor_wrapper %})
* [PDF export]({% slug pdf_export_editor_wrapper %})
* [Immutable elements]({% slug immutables_editor_wrapper %})
* [Keyboard navigation]({% slug keyboard_navigation_editor_wrapper %})
* [RTL support]({% slug right_to_left_support_editor_wrapper %})

## Suggested Links

* [Kendo UI Editor for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/editor/overview)
* [API Reference of the Editor Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/editor)
