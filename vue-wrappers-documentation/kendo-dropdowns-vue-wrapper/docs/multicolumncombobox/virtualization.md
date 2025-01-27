---
title: Virtualization
page_title: Virtualization - MultiColumnComboBox - Kendo UI for Vue
description: "Use the virtualization features of the Kendo UI MultiColumnComboBox wrapper for Vue which allow you to handle large datasets."
slug: virtualization_multicolumncombobox_wrapper
position: 5
---

<div><WrapperBanner></WrapperBanner></div>

# Virtualization

Virtualization allows you to display large sets of data.

Regardless of the dataset size, the UI virtualization technique uses a fixed amount of list items in the popup list of the component. When the list is scrolled, the MultiColumnComboBox reuses the existing items to display the relevant data instead of creating new data.

The following example demonstrates how to set the minimum configuration of the MultiColumnComboBox and the DataSource to enable the virtualization.

{% meta height:400 %}
{% embed_file multicolumncombobox/virtualization/main.vue preview %}
{% embed_file multicolumncombobox/virtualization/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI MultiColumnComboBox for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/multicolumncombobox/overview)
* [API Reference of the MultiColumnComboBox Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/multicolumncombobox)
