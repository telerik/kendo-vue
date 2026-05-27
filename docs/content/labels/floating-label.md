---
title: FloatingLabel
description: "Get an overview of the features the Kendo UI for Vue FloatingLabel delivers and use the component in Vue projects."
slug: floating_label_labels
position: 2
---

# FloatingLabel Overview

The FloatingLabel component enables you to provide a floating label functionality to Vue components. It supports labelling both form elements (e.g.: `input` element) and custom focusable elements. It can contain Kendo UI for Vue Native Input components such as Native `DropDownList`, `NumericTextBox` and `DatePicker`, or HTML elements like `input`.

## Basic Usage

The `FloatingLabel` can be configured out of the box for the different inputs that are part of the Kendo UI for Vue Native suite. To add a FloatingLabel to an input, define the `label` property of the different input components. The value passed to the `label` property will appear as a floating label. 

{% meta height:880 %}
{% embed_file floatinglabel/basic/main.vue preview %}
{% embed_file floatinglabel/basic/main.js %}
{% endmeta %}


If you want to apply the `FloatingLabel` over your custom input components here are the steps you should do:
1. Wrap the component within a FloatingLabel component. 
2. Set the [`label`]({% slug api_labels_floatinglabelprops %}#toc-label), [`editorValue`]({% slug api_labels_floatinglabelprops %}#toc-editorvalue) and [`editorId`]({% slug api_labels_floatinglabelprops %}#toc-editorid) properties of the FloatingLabel.

For more details about how to use the "wrapping" approach check the below examples.
## Labelling components without form element

By default the wrapped element is associated with the `label` element only if it's a form element (e.g.: `input`, `select` element). Custom components that do not contain form element (e.g.: Kendo UI for Vue `DropDownList`) would require setting additional properties to allow screen readers to correcly read the label. These properties are:
* [`id`]({% slug api_labels_floatinglabelprops %}#toc-id) property of the FloatingLabel
* `aria-labelledby` attribute of the nested editor (Kendo UI for Vue components provide it as `ariaLabelledBy` property)

{% meta height:280 %}
{% embed_file floatinglabel/custom/main.vue preview %}
{% embed_file floatinglabel/custom/main.js %}
{% endmeta %}

## Editors with placeholder

Editors that support placeholder should provide it to the FloatingLabel component.

{% meta height:140 %}
{% embed_file floatinglabel/placeholder/main.vue preview %}
{% embed_file floatinglabel/placeholder/main.js %}
{% endmeta %}

## Editors with invalid state

The FloatingLabel component supports invalid styles by setting the [`editorValid`]({% slug api_labels_floatinglabelprops %}#toc-editorvalid) to `false`.

{% meta height:160 %}
{% embed_file floatinglabel/validation/main.vue preview %}
{% embed_file floatinglabel/validation/main.js %}
{% endmeta %}

## Marking the Label as optional

The Label component supports marking the label as optional by setting the [`optional`]({% slug api_labels_floatinglabelprops %}#toc-optional) to `true`.

{% meta height:160 %}
{% embed_file floatinglabel/optional/main.vue preview %}
{% embed_file floatinglabel/optional/main.js %}
{% endmeta %}

## Support and Learning Resources

* [FloatingLabel Homepage](https://www.telerik.com/kendo-vue-ui/floatinglabel)
* [API Reference of the FloatingLabel Component](slug:api_labels_floatinglabelprops)
* [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
* [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
* [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
* [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
* [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)
* [Virtual Classroom (Training Course for Registered Users)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [FloatingLabel Forum](https://www.telerik.com/forums/kendo-ui-vue?searchText=FloatingLabel)
* [Knowledge Base](https://www.telerik.com/kendo-vue-ui/components/knowledge-base/)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

## Additional Resources

* [Vue Blogs](https://www.telerik.com/blogs/tag/kendo-ui-for-vue)
* [Kendo UI for Vue Roadmap](https://www.telerik.com/support/whats-new/kendo-vue-ui/roadmap)
