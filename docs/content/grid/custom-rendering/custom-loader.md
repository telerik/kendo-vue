---
title: Custom Loader Template
page_title: Vue Grid - Loader Template - Kendo UI Native DataGrid
description: "Learn how to use and customize the loader option of the Kendo UI for Vue Native Grid."
slug: grid_loader_template
position: 8
---

# Loader Template

When working with remote data, in some cases the Grid operations like `paging`, `grouping`, `filtering`, `sorting` etc. may need time to fetch the needed. In these scenarios, showing a loader in the Grid is a good practice, indicating that the component is processing an operation.

The Grid provides a build-in loader. You can see how to use this built-in functionality in various demos, such as: [Grid CRUD Operations]({% slug data_binding_crud_odata_v4 %}), [Grid Data Filtering]({% slug filtering_grid %}), [Grid Data Grouping]({% slug groupingbasics_grid %}), etc.

For scenarios when we want to show our own custom Loader, we can use the approach demonstrated in the below example:

{% meta height:690 %}
{% embed_file custom-rendering/loader-template/main.vue preview %}
{% embed_file custom-rendering/loader-template/main.js %}
{% endmeta %}


## Suggested Links

* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid_gridprops %})
