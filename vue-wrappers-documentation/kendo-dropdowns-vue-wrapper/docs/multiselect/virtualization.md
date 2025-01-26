---
title: Virtualization
page_title: Virtualization - MultiSelect - Kendo UI for Vue
description: "Show the virtualization features of the Kendo UI MultiSelect wrapper for Vue which allows you to work with large datasets."
slug: virtualization_multiselect_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dropdowns/multiselect/virtualization/"
position: 4
---

<div><WrapperBanner link="/kendo-vue-ui/components/dropdowns/multiselect/virtualization"></WrapperBanner></div>

# Virtualization

Virtualization allows you to display large sets of data.

Regardless of the dataset size, the UI virtualization technique uses a fixed amount of list items in the popup list of the component. When the list is scrolled, the MultiSelect reuses the existing items to display the relevant data instead of creating new data.

The following example demonstrates how to set the minimum configuration of the MultiSelect and the DataSource to enable the virtualization.

{% meta height:350 %}
{% embed_file multiselect/virtualization/main.vue preview %}
{% embed_file multiselect/virtualization/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI MultiSelect for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/multiselect/overview)
* [API Reference of the MultiSelect Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/multiselect)
