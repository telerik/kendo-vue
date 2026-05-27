---
title: Overview
description: "Use the Kendo UI for Vue Native DropDownTree component in a Vue project."
slug: overview_dropdowntree
position: 1
---

# Kendo UI for Vue DropDownTree Overview

The Kendo UI for Vue Native DropDownTree is a form component that lets you choose a single predefined value from a hierarchical list and is a richer version of the `<select>` element. Supports filtering, custom rendering, keyboard navigation, expand and collapse of the hierarchical data items.

The Kendo UI for Vue DropDownTree component is part of the Kendo UI for Vue library of Vue UI components. It is distributed through NPM under the [kendo-vue-dropdowns package](https://www.npmjs.com/package/@progress/kendo-vue-dropdowns).

<div data-component="StartFreeTrialSection"></div>

The following example shows how to set up the DropDownTree component:

1. Set [`dataItems`]({% slug api_dropdowns_dropdowntreeprops %}#toc-dataitems), [`textField`]({% slug api_dropdowns_dropdowntreeprops %}#toc-textfield) and [`dataItemKey`]({% slug api_dropdowns_dropdowntreeprops %}#toc-dataitemkey) prop.
1. Set [`value`]({% slug api_dropdowns_dropdowntreeprops %}#toc-value), [`selectField`]({% slug api_dropdowns_dropdowntreeprops %}#toc-selectfield) and handle [`onChange`]({% slug api_dropdowns_dropdowntreeprops %}#toc-onchange) event.
1. Set [`expandField`]({% slug api_dropdowns_dropdowntreeprops %}#toc-expandfield) and handle [`onExpandchange`]({% slug api_dropdowns_dropdowntreeprops %}#toc-onexpandchange) event.

{% meta height:400 %}
{% embed_file dropdowntree/basic/main.vue preview %}
{% embed_file dropdowntree/basic/main.js %}
{% embed_file shared/tree-data.js %}
{% embed_file shared/tree-data-operations.js %}
{% endmeta %}

>The DropDownTree is part of the [Kendo UI for Vue Dropdowns]({% slug overview_dropdowns %}) component library. The procedures for installing, importing, and using the Dropdowns are identical for all components in the package.


## Key Features

* [Filtering]({% slug filtering_dropdowntree %})&mdash;You can configure the DropDownTree to filter the results locally or on the server.
* [Custom rendering]({% slug customrendering_dropdowntree %})&mdash;You can customize the way the DropDownTree component renders its elements.
* [Forms support]({% slug forms_dropdowntree %})&mdash;You can use the Vue DropDownTree component with HTML form elements or with [the Kendo UI for Vue Form component]({% slug overview_form %}).
* [Keyboard navigation]({% slug keyboard_navigation_dropdowntree %})&mdash;The DropDownTree supports various keyboard shortcuts.
* [Accessibility]({% slug accessibility_dropdowntree %})&mdash;The DropDownTree is accessible for screen readers and supports WAI-ARIA attributes.

## Suggested Links

* [API Reference of the DropDownTree]({% slug api_dropdowns_dropdowntreeprops %})
* [Vue DropDownTree High-Level Overview](https://www.telerik.com/kendo-vue-ui/dropdowntree)
