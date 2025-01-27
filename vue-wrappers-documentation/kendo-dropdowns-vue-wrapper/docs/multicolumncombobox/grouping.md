---
title: Grouping
page_title: Grouping - MultiColumnComboBox - Kendo UI for Vue
description: "Group the data during input while using the Kendo UI MultiColumnComboBox wrapper for Vue."
slug: grouping_multicolumncombobox_wrapper
position: 6
---

<div><WrapperBanner></WrapperBanner></div>

# Grouping

Grouping allows you to display data items which are categorized by a specific model field.

> * The grouped data is sorted either in ascending or descending order.
> * To group the data in a specific (custom) order, use [server grouping](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource#configuration-serverGrouping).

For more information on the grouping functionality of the Data Source, refer to the article on the [`group`](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource#configuration-group) configuration.

To configure the rendering of the group titles, use the [`groupTemplate`](https://docs.telerik.com/kendo-ui/api/javascript/ui/multicolumncombobox/configuration/grouptemplate) and [`fixedGroupedTemplate`](https://docs.telerik.com/kendo-ui/api/javascript/ui/multicolumncombobox/configuration/fixedgrouptemplate) templates of the component.

{% meta height:350 %}
{% embed_file multicolumncombobox/grouping/main.vue preview %}
{% embed_file multicolumncombobox/grouping/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI MultiColumnComboBox for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/multicolumncombobox/overview)
* [API Reference of the MultiColumnComboBox Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/multicolumncombobox)
