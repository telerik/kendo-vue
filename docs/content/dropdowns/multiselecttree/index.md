---
title: Overview
description: "Use the Kendo UI for Vue Native MultiSelectTree component in a Vue project."
slug: overview_multiselecttree
position: 1
---

# Kendo UI for Vue MultiSelectTree Overview

The Kendo UI for Vue Native MultiSelectTree is a form component that lets you choose multiple predefined values from a hierarchical list and is a richer version of the `<select>` element. Supports filtering, custom rendering, keyboard navigation, expand and collapse of the hierarchical data items.

The Kendo UI for Vue Native MultiSelectTree component is part of the Kendo UI for Vue library of Vue UI components. It is distributed through NPM under the [kendo-vue-dropdowns package](https://www.npmjs.com/package/@progress/kendo-vue-dropdowns).

<div data-component="StartFreeTrialSection"></div>

The following example shows how to set up the MultiSelectTree component:

1. Set [`dataItems`]({% slug api_dropdowns_multiselecttreeprops %}#toc-dataitems), [`textField`]({% slug api_dropdowns_multiselecttreeprops %}#toc-textfield) and [`dataItemKey`]({% slug api_dropdowns_multiselecttreeprops %}#toc-dataitemkey) prop.
1. Use the `v-model` directive or the [`value`]({% slug api_dropdowns_multiselecttreeprops %}#toc-value) and [`checkField`]({% slug api_dropdowns_multiselecttreeprops %}#toc-checkfield), [`checkIndeterminateField`]({% slug api_dropdowns_multiselecttreeprops %}#toc-checkindeterminatefield), [`subItemsField`]({% slug api_dropdowns_multiselecttreeprops %}#toc-subitemsfield), and handle [`onChange`]({% slug api_dropdowns_multiselecttreeprops %}#toc-onchange) event if you use the `value` property.
1. Set [`expandField`]({% slug api_dropdowns_multiselecttreeprops %}#toc-expandfield) and handle [`onExpandChange`]({% slug api_dropdowns_multiselecttreeprops %}#toc-onexpandchange) event.
1. Optionally use the [`getMultiSelectTreeValue`]({% slug api_dropdowns_getmultiselecttreevalue %}) utility function for default value changing behavior.

{% meta height:400 %}
{% embed_file multiselecttree/basic/main.vue preview %}
{% embed_file multiselecttree/basic/main.js %}
{% embed_file shared/tree-data.js %}
{% embed_file shared/multiselecttree-data-operations.js %}
{% endmeta %}

>The MultiSelectTree is part of the [Kendo UI for Vue Dropdowns]({% slug overview_dropdowns %}) component library. The procedures for installing, importing, and using the Dropdowns are identical for all components in the package. 

## Key Features

* [Filtering]({% slug filtering_multiselecttree %})&mdash;You can configure the MultiSelectTree to filter the results locally or on the server.
* [Custom rendering]({% slug customrendering_multiselecttree %})&mdash;You can allow the MultiSelectTree component to accept custom values.
* [Forms support]({% slug forms_multiselecttree %})&mdash;You can use the Vue MultiSelectTree component with HTML form elements or with [the Kendo UI for Vue Form component]({% slug overview_form %}).
* [Keyboard navigation]({% slug keyboard_navigation_multiselecttree %})&mdash;The MultiSelectTree supports various keyboard shortcuts.
* [Accessibility]({% slug accessibility_multiselecttree %})&mdash;The MultiSelectTree is accessible for screen readers and supports WAI-ARIA attributes.

## Suggested Links

* [API Reference of the MultiSelectTree]({% slug api_dropdowns_multiselecttreeprops %})
* [Controlled Components in Vue](https://vuejs.org/docs/forms.html#controlled-components)
* [Vue MultiSelectTree High-Level Overview](https://www.telerik.com/kendo-vue-ui/multiselecttree)
