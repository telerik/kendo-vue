---
title: Setting the DataSource
page_title: Setting the DataSource - PanelBar - Kendo UI for Vue
description: "Handle the Data Source component and manage the specific settings when binding the Kendo UI Panelbar for Vue to data."
slug: data_source_settings_panelbar_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/layout/panelbar/data-binding/"
position: 2
---

<div><WrapperBanner link="/kendo-vue-ui/components/layout/panelbar/data-binding"></WrapperBanner></div> 

# Setting the DataSource

The PanelBar gets populated with data by using the [Kendo UI DataSource for Vue](https://docs.telerik.com/kendo-ui-wrappers-vue/components/datasource) and by utilizing the [Kendo UI DataSource for jQuery](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource) which is an abstraction for using local and remote data and provides specific data-binding settings.

To pass a reference to the Kendo UI DataSource for Vue and bind the PanelBar to the Kendo UI DataSource for jQuery, use the `data-source-ref` prop.

{% meta height:400 %}
{% embed_file panelbar/datasource/setting/main.vue preview %}
{% embed_file panelbar/datasource/setting/main.js %}
{% endmeta %}

To define the data to which the PanelBar will be bound as a `data` property, use the `dataSource` prop.

{% meta height:400 %}
{% embed_file panelbar/datasource/data/main.vue preview %}
{% embed_file panelbar/datasource/data/main.js %}
{% endmeta %}

To declare the `dataSource` items as child components for the PanelBar, use the `KendoPanelBarItem` components.

{% meta height:400 %}
{% embed_file panelbar/datasource/item/main.vue preview %}
{% embed_file panelbar/datasource/item/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI DataSource Component](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource)
* [Kendo UI PanelBar for jQuery](https://docs.telerik.com/kendo-ui/controls/navigation/panelbar/overview)
* [API Reference of the PanelBar Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/panelbar)
