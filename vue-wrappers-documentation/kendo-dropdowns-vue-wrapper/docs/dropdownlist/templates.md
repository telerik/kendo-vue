---
title: Templates
page_title: Templates - DropDownList - Kendo UI for Vue
description: "Customize the content of the suggested list items and the suggested list elements of a Kendo UI DropDownList wrapper for Vue."
slug: templates_dropdownlist_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/dropdowns/dropdownlist/custom-rendering/"
position: 8
---

<div><WrapperBanner link="/kendo-vue-ui/components/dropdowns/dropdownlist/custom-rendering"></WrapperBanner></div>

# Templates

The DropDownList provides full control over the way an item or a popup header is rendered by using the [Kendo UI templates](https://docs.telerik.com/kendo-ui/framework/templates/overview).

## Item Templates

The item template manages the way the list DropDownList items are rendered.

{% meta height:350 %}
{% embed_file dropdownlist/templates/basic/main.vue preview %}
{% embed_file dropdownlist/templates/basic/main.js %}
{% endmeta %}

## Header Templates

The header template manages the way the popup header of the DropDownList is rendered.

{% meta height:350 %}
{% embed_file dropdownlist/templates/header/main.vue preview %}
{% embed_file dropdownlist/templates/header/main.js %}
{% endmeta %}

## Footer Templates

The footer template manages the way the popup footer of the DropDownList is rendered. The footer is re-rendered on every change of the Data Source. The context of the template is the component itself.

{% meta height:350 %}
{% embed_file dropdownlist/templates/footer/main.vue preview %}
{% embed_file dropdownlist/templates/footer/main.js %}
{% endmeta %}

## No-Data Templates

The no-data template displays a `noDataTemplate` template in the popup when the data source is empty.

> When the `noDataTemplate` option is defined, the component always opens the popup element.

{% meta height:350 %}
{% embed_file dropdownlist/templates/no-data/main.vue preview %}
{% embed_file dropdownlist/templates/no-data/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI DropDownList for jQuery](https://docs.telerik.com/kendo-ui/controls/editors/dropdownlist/overview)
* [API Reference of the DropDownList Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/dropdownlist)
