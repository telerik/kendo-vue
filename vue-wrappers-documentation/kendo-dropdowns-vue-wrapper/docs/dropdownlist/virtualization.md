---
title: Virtualization
page_title: Virtualization - DropDownList - Kendo UI for Vue
description: "Use the virtualization features of the Kendo UI DropDownList wrapper for Vue which allow you to handle large datasets."
slug: virtualization_dropdownlist_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dropdowns/dropdownlist/virtualization/"
position: 4
---

<div><WrapperBanner link="/kendo-vue-ui/components/dropdowns/dropdownlist/virtualization"></WrapperBanner></div>

# Virtualization

Virtualization allows you to display large sets of data.

Regardless of the dataset size, the UI virtualization technique uses a fixed amount of list items in the popup list of the component. When the list is scrolled, the DropDownList reuses the existing items to display the relevant data instead of creating new data.

The following example demonstrates how to set the minimum configuration of the DropDownList and the DataSource to enable the virtualization.

{% meta height:350 %}
{% embed_file dropdownlist/virtualization/main.vue preview %}
{% embed_file dropdownlist/virtualization/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI DropDownList for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/dropdownlist/overview)
* [API Reference of the DropDownList Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist)
