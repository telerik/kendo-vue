---
title: Getting Started
description: "Get an overview of the features the Kendo UI for Vue Native Editor delivers and use the component in Vue projects."
slug: getstarted_editor
position: 1
---

# Getting Started with Kendo UI for Vue Native Editor

The Kendo UI for Vue Native Editor enables users to create rich textual content through a What-You-See-Is-What-You-Get (WYSIWYG) interface and delivers a set of tools for creating, editing, and formatting of text, paragraphs, lists, and other HTML elements.

The Editor component is part of the Kendo UI for Vue library of Vue UI components. It is distributed through NPM under the [kendo-vue-editor package](https://www.npmjs.com/package/@progress/kendo-vue-editor).

<div data-component="StartFreeTrialSection"></div>

## Basic Usage

The following example demonstrates the Editor in action.



{% meta height:550 %}
{% embed_file get-started/main.vue preview %}
{% embed_file get-started/main.js %}
{% embed_file shared/content.js %}
{% endmeta %}


## Functionality and Features

* [Tools]({% slug tools_editor %})
* [Getting and setting HTML content]({% slug content_editor %})
* [Controlling Editor Value]({% slug controlled_editor %})
* [Rendering modes]({% slug renderingmode_editor %})
* [Sanitizing pasted HTML content]({% slug paste_editor %})
* [Using plugins]({% slug plugins_editor %})
* [Modifying the schema]({% slug schema_editor %})
* [Find and Replace]({% slug findandreplace_editor %})
* [Globalization]({% slug globalization_editor %})

## Installation

1. Download and install the package. Use Node.js v5.0.0 or later.

    ```sh
    npm install --save @progress/kendo-vue-editor @progress/kendo-vue-intl @progress/kendo-vue-buttons @progress/kendo-vue-dropdowns @progress/kendo-vue-dialogs @progress/kendo-vue-inputs @progress/kendo-vue-layout @progress/kendo-vue-popup @progress/kendo-vue-pdf @progress/kendo-vue-progressbars @progress/kendo-drawing @progress/kendo-licensing
    ```

1. Once installed, import the package module.

    ```jsx-no-run
    // ES2015 module syntax
    import { Editor, EditorTools } from '@progress/kendo-vue-editor';
    ```

    ```jsx-no-run
    // CommonJS format
    const { Editor, EditorTools } = require('@progress/kendo-vue-editor');
    ```

1. You are required to install one of the Kendo UI for Vue themes to style your components. For more information on how to add the styles, refer to the [style section]({% slug getting_started_javascript_composition_api %}#toc-5-import-the-kendo-ui-for-vue-css-styles) of our getting started article.

1. Follow the instructions on the Kendo UI for Vue [My License page]({% slug my_license %}) to activate your license. You can skip this step if your application already contains a Kendo UI for Vue license file.

## Dependencies

Under the hood, the Kendo UI for Vue Native Editor uses the [ProseMirror toolkit](https://prosemirror.net/). This allows you to use the full range of the [ProseMirror functionalities](https://prosemirror.net/docs/) and build on top of the existing Editor features.

The Editor package requires the following [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/) that have to be installed by your application:

* vue 3.0.0*
* @progress/kendo-drawing
* @progress/kendo-licensing
* @progress/kendo-svg-icons
* @progress/kendo-vue-buttons
* @progress/kendo-vue-dialogs
* @progress/kendo-vue-dropdowns
* @progress/kendo-vue-inputs
* @progress/kendo-vue-intl
* @progress/kendo-vue-layout
* @progress/kendo-vue-pdf
* @progress/kendo-vue-popup
* @progress/kendo-vue-progressbars

> Vue 2 is currently in its end-of-support phase till Nov 2024. After our last major release for 2024, Vue 2 will no longer be supported in the new versions of the Kendo UI for Vue components. Please check our [Vue 2 End of Support article](slug:vue2-end-of-support) for more details.

## Suggested Links

* [API Reference of the Editor]({% slug api_editor %})
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})
