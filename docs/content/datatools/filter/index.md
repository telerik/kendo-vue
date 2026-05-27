---
title: Overview
description: "Get an overview of the features the Kendo UI for Vue Filter delivers and use the component in Vue projects."
slug: overview_filter
position: 1
---

# Filter Overview

The Kendo UI for Vue Filter is a powerful component that helps you filter complex data sets. The component allows you to build and edit a [`CompositeFilterDescriptor`]({% slug api_kendo-data-query_compositefilterdescriptor %}) object that is used by the [filterBy]({% slug api_data-tools_filterby %}) method to give you the desired result. By providing a visual representation of the applied filters with the `Filter` component you can easily track the parameters passed to the `filterBy` method.

The Kendo UI for Vue Filter is part of the Kendo UI for Vue library of Vue UI components. It is distributed through NPM under the [kendo-vue-data-tools package](https://www.npmjs.com/package/@progress/kendo-vue-data-tools).

## Basic Usage

To configure the Filter you have to use the below properties:

* [`fields`]({% slug api_data-tools_filterprops %}#toc-fields)&mdash;Sets the fields settings which describes field names, labels, filter editor components and filter operators.
* [`value`]({% slug api_data-tools_filterprops %}#toc-value)&mdash;Sets the value of the filter.
* [`onChange`]({% slug api_data-tools_filterprops %}#toc-onchange)&mdash;The onChange event which will be triggered when the Filter value is changed.


{% meta height:900 %}
{% embed_file filter/basic-usage/main.vue preview %}
{% embed_file filter/basic-usage/main.js %}
{% embed_file filter/basic-usage/products.js %}
{% endmeta %}


## Custom Editors

The Filter supports the usage of [custom editors]({% slug filter_custom_editors %}) when filtering your data.

## Custom Operators

The Filter provides options to configure the [operators]({% slug filter_custom_operators %}) available for given field.

## Globalization

The Pager provides [globalization support]({% slug globalization_datatools %}).

## Support and Learning Resources

* [Filter Homepage](https://www.telerik.com/kendo-vue-ui/filter)
* [API Reference of the Filter Component](slug:api_data-tools_filterprops)
* [Getting Started with Kendo UI for Vue - JavaScript (Online Guide)](slug:getting_started_javascript_composition_api)
* [Getting Started with Kendo UI for Vue - TypeScript (Online Guide)](slug:getting_started_typescript_composition_api)
* [Getting Started with Kendo UI for Vue - JavaScript + Options API (Online Guide)](slug:getting_started_javascript_options_api)
* [Getting Started with Kendo UI for Vue - TypeScript + Options API (Online Guide)](slug:getting_started_typescript_options_api)
* [Getting Started with Kendo UI for Vue - Nuxt 3 (Online Guide)](slug:getting_started_nuxt_3)
* [Virtual Classroom (Training Course for Registered Users)](https://learn.telerik.com/learn/course/internal/view/elearning/45/kendo-ui-for-vue-with-typescript)
* [Filter Forum](https://www.telerik.com/forums/kendo-ui-vue?searchText=filter)
* [Knowledge Base](https://www.telerik.com/kendo-vue-ui/components/knowledge-base/)
* [Kendo UI Productivity Tools extension for VS Code]({% slug vue_vscode_overview %})

## Additional Resources

* [Vue Blogs](https://www.telerik.com/blogs/tag/kendo-ui-for-vue)
* [Kendo UI for Vue Roadmap](https://www.telerik.com/support/whats-new/kendo-vue-ui/roadmap)
