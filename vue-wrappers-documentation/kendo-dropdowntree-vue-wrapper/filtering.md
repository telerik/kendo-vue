---
title: Filtering
page_title: Filtering - DropDownTree - Kendo UI for Vue
description: "Filter the displayed items of the Kendo UI DropDownTree wrapper for Vue."
slug: filtering_dropdowntree_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dropdowns/dropdowntree/filtering/"
position: 3
---

<div><WrapperBanner link="/kendo-vue-ui/components/dropdowns/dropdowntree/filtering"></WrapperBanner></div>

# Filtering

The built-in filtering functionality enables the user to filter the displayed DropDownTree items by their text value.

By default, filtering is disabled and can be performed over `string` values only&mdash;that is, either the widget data has to be an array of strings or configured in the `data-text-field` option over the field.

The DropDownTree supports the following filter values:

* `startswith`
* `endswith`
* `contains`

The following example demonstrates how to enable the `startsWith filtering` within the DropDownTree.

{% meta height:750 %}
{% embed_file filtering/main.vue preview %}
{% embed_file filtering/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI DropDownTree for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/dropdowntree/overview)
* [API Reference of the DropDownTree Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdowntree)
