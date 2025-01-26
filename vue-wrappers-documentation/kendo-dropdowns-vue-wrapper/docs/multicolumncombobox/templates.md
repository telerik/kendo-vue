---
title: Templates
page_title: Templates - MultiColumnComboBox - Kendo UI for Vue
description: "Customize the content of the suggested list items and the suggested list elements of a Kendo UI MultiColumnComboBox wrapper for Vue."
slug: templates_multicolumncombobox_wrapper
position: 9
---

<div><WrapperBanner></WrapperBanner></div>

# Templates

The MultiColumnComboBox provides the means needed to define column template, column headerTemplate and footerTemplate.

The `template` and the `header-template` could be defined for each of the columns available in the widget. The `footer-template` and the `no-data-template`, on the other hand, are defined for the entire popup of the widget. The templates in the MultiColumnComboBox are rendered by using the [Kendo UI templates](https://docs.telerik.com/kendo-ui/framework/templates/overview).

## Column Templates

The column `template` manages the way a given column values in the MultiColumnComboBox popup are rendered.

{% meta height:350 %}
{% embed_file multicolumncombobox/templates/basic/main.vue preview %}
{% embed_file multicolumncombobox/templates/basic/main.js %}
{% endmeta %}

## Header Templates

The column `header-template` defines the header appearance and content for a givin column.

{% meta height:350 %}
{% embed_file multicolumncombobox/templates/header/main.vue preview %}
{% embed_file multicolumncombobox/templates/header/main.js %}
{% endmeta %}

## Footer Templates

The `footer-template` manages the way the popup footer of the MultiColumnComboBox is rendered. The footer is re-rendered on every change of the Data Source. The context of the template is the component itself.

{% meta height:350 %}
{% embed_file multicolumncombobox/templates/footer/main.vue preview %}
{% embed_file multicolumncombobox/templates/footer/main.js %}
{% endmeta %}

## No-Data Templates

The MultiColumnComboBox displays the `no-data-template` in its popup when the data source is empty.

> When the `noDataTemplate` option is defined, the component always opens the popup element.

{% meta height:350 %}
{% embed_file multicolumncombobox/templates/no-data/main.vue preview %}
{% embed_file multicolumncombobox/templates/no-data/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI MultiColumnComboBox for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/multicolumncombobox/overview)
* [API Reference of the MultiColumnComboBox Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/multicolumncombobox)
