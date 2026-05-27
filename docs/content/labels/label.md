---
title: Label
description: "Get an overview of the features the Kendo UI for Vue Native Label delivers and use the component in Vue projects."
slug: label_labels
position: 2
---

# Label Overview

The Kendo UI for Vue Native Label component enables you to provide a label functionality to Vue components. It supports labeling both form elements (for example: `input` element) and custom focusable elements. It can contain Kendo Vue Input components such as Kendo UI for Vue `DropDownList` and `NumericTextBox`, or HTML elements like `input`.

## Basic Usage

Add the Label component and the desired editor next to it. Then set the [`editorId`]({% slug api_labels_labelprops %}#toc-editorid) property of the Label and the `id` property of the editor.

{% meta height:140 %}
{% embed_file label/basic/main.vue preview %}
{% embed_file label/basic/main.js %}
{% endmeta %}

## Labeling components without form element

By default the target editor is associated with the `label` element only if it's a form element (for example.: `input`, `select` element). Custom components that do not contain form element (for example.: Kendo UI for Vue `DropDownList`) require setting additional properties to allow screen readers to correctly read the label. These properties are:
* [`id`]({% slug api_labels_labelprops %}#toc-id) property of the Label
* `aria-labelledby` attribute of the editor (Kendo UI for Vue components provide it as `ariaLabelledBy` property)

Additionally you can transfer the `click` events from the Label to the editor by setting the [`editorId`]({% slug api_labels_labelprops %}#toc-editorid) property. On `click` events the Label component will look for `focus` method or `activeElement` property (to call its `click` method) on the editor ref. This functionality is already supported on all Kendo UI for Vue form components (for example: `DropDownList`).

{% meta height:280 %}
{% embed_file label/custom/main.vue preview %}
{% embed_file label/custom/main.js %}
{% endmeta %}

## Editors with invalid state

The Label component supports invalid styles by setting the [`editorValid`]({% slug api_labels_floatinglabelprops %}#toc-editorvalid) to `false`.

{% meta height:160 %}
{% embed_file label/validation/main.vue preview %}
{% embed_file label/validation/main.js %}
{% endmeta %}

## Marking the Label as optional

The Label component supports marking the label as optional by setting the [`optional`]({% slug api_labels_floatinglabelprops %}#toc-optional) to `true`.

{% meta height:160 %}
{% embed_file label/optional/main.vue preview %}
{% embed_file label/optional/main.js %}
{% endmeta %}

## Support and Learning Resources

* [Label Homepage](https://www.telerik.com/kendo-vue-ui/vue-label)
* [API Reference of the Labels Component](slug:api_labels_labelprops)
* [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
* [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
* [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
* [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
* [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)
* [Virtual Classroom (Training Course for Registered Users)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Label Forum](https://www.telerik.com/forums/kendo-ui-vue?searchText=label)
* [Knowledge Base](https://www.telerik.com/kendo-vue-ui/components/knowledge-base/)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

## Additional Resources

* [Vue Blogs](https://www.telerik.com/blogs/tag/kendo-ui-for-vue)
* [Kendo UI for Vue Roadmap](https://www.telerik.com/support/whats-new/kendo-vue-ui/roadmap)
