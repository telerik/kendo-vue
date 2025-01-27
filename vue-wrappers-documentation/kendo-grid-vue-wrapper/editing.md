---
title: Editing
page_title: Vue Grid Wrapper - Editing - Kendo UI for Vue
description: "Get started with the Vue Grid by Kendo UI which allows you to manipulate the way the Grid renders its data."
slug: editing_grid_wrapper
canonicalLink: "https://www.telerik.com/kendo-vue-ui/components/grid/editing/"
position: 2
---

<div><WrapperBanner link="/kendo-vue-ui/components/grid/editing"></WrapperBanner></div>

# Editing

Editing is a basic functionality of the Kendo UI Grid wrapper for Vue and allows you to manipulate the way the Grid renders its data.

> To configure the editing functionality of the native Vue Grid by Kendo UI, refer to the [native Vue Grid by Kendo UI documentation]({% slug editing_grid %}).

## Getting Started

To configure the `dataSource` for CRUD (Create, Read, Update, Destroy) data operations, use the built-in CRUD support of the [Kendo UI DataSource](https://docs.telerik.com/kendo-ui/framework/datasource/overview) component:

1. Create a `dataSource` object instance and configure the CRUD operations and the model for it by using `:transport-read-url`, `:transport-update-url`, `:transport-destroy-url`, `:transport-create-url`, the type, and so on.
1. Set the [`editable`](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid#configuration-editable) property of the Grid and reference the `dataSource` instance.

To enable the insertion of new records, enable the relevant option in the toolbar of the Kendo UI Data Grid wrapper for Vue. To enable the deletion of items, include a `delete` command column. For more information on editing, refer to the documentation of the [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/editing).

## Edit Modes

The Kendo UI Grid wrapper for Vue supports the following edit modes:
* [Batch edit mode](#toc-batch-editing)
* [Inline edit mode](#toc-inline-editing)
* [Popup edit mode](#toc-popup-editing)
* [Validator edit mode](#toc-validator-editing)
* [Custom editing](#toc-custom-editing)

### Batch Editing

The following example demonstrates how to enable batch-editing operations by setting `batch` to `true` and using the data source settings of the Kendo UI Grid wrapper for Vue.

{% meta height:660 %}
{% embed_file grid/editing/batch/main.vue preview %}
{% embed_file grid/editing/batch/main.js %}
{% endmeta %}

### Inline Editing

The following example demonstrates how to perform inline editing by setting `editable` to `inline`.

{% meta height:660 %}
{% embed_file grid/editing/inline/main.vue preview %}
{% embed_file grid/editing/inline/main.js %}
{% endmeta %}

### Popup Editing

The following example demonstrates how to edit or insert new items by using a popup form and setting `editable` to `popup`.

{% meta height:660 %}
{% embed_file grid/editing/popup/main.vue preview %}
{% embed_file grid/editing/popup/main.js %}
{% endmeta %}

### Validator Editing

The following example demonstrates how to define any validation rule by setting the `validation` option of the data source `schema-model-fields` configuration. As a result, when the user edits a value in the **Product Name** column, the Grid forces a check for the first capital letter for the column.

{% meta height:660 %}
{% embed_file grid/editing/validator/main.vue preview %}
{% embed_file grid/editing/validator/main.js %}
{% endmeta %}

### Setting Custom Editors

The following example demonstrates how to implement a Kendo UI DropDownList as a custom column editor for the Grid by specifying the `editor` field of the **Category** column. The value of this field points to a Vue method which instantiates the column editor for the corresponding column cells.

{% meta height:660 %}
{% embed_file grid/editing/custom/main.vue preview %}
{% embed_file grid/editing/custom/main.js %}
{% endmeta %}

## Suggested Links

* [Kendo UI Grid for jQuery](https://docs.telerik.com/kendo-ui/controls/data-management/grid/overview)
* [API Reference of the Grid Widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/grid)
* [Editing in the Native Vue Grid by Kendo UI]({% slug editing_grid %})
