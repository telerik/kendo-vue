---
title: Basics
description: "Get started with the Kendo UI for Vue Native TreeList and see how easy creating, editing, and deleting data records can be."
slug: editing_treelist
position: 1
---

# Editing Basics

You can create, update, and delete the data records of the TreeList.

<div data-component="StartFreeTrialSection"></div>

## Getting Started

The TreeList provides the following editing modes:
* [Basic edit mode]({% slug editing_treelist %}#toc-basic-edit-mode) - Activated on a row click, this editing mode puts all editable columns in the clicked row, in `edit mode`.
* [Inline edit mode]({% slug editing_inline_treelist %}) - This editing mode is similar to the `Basic` one, but each row enters in edit mode by clicking on a button.
* [In-cell edit mode]({% slug incellediting_treelist %}) - The In-Cell edit mode, is activated on a click on a TreeList cell. This mode turns only the clicked cell to edit mode.
* [Editing with external popup form]({% slug external_editing_treelist %}) - In this editing mode, the data editing happens by an external popup form that appears over the TreeList.

## Basic Edit Mode

The following example demonstrates how to set the TreeList in basic edit mode.

{% meta height:580 %}
{% embed_file editing-row-click/main.vue preview %}
{% embed_file editing-row-click/main.js %}
{% embed_file shared/data.js %}
{% endmeta %}


Here are some of the main points in the implementation of the above example:

1. Set the [`editField`]({% slug api_treelist_treelistprops %}#toc-editfield) property of the TreeList&mdash;`editField` will indicate the editable data items and is part of the temporary data items that are used during editing. For the data items in the edit mode, set the edit state in their `editField`. In the following example, the id of the edited item is stored in the application state.

    ```jsx-no-run
    <TreeList
        :editField="editField"
        :dataItems="processedData"
    ```

    ```jsx-no-run
    editField: "inEdit"
    ```

1. Create a data tree computed property that holds the edit state of each TreeList data item by using the [`mapTree`]({% slug api_treelist_maptree %}) function.

    ```jsx-no-run
    computed: {
        processedData() {
        return mapTree(this.dataItems, this.subItemsField, (item) =>
            extendDataItem(item, this.subItemsField, {
            [this.expandField]: this.expanded.includes(item.id),
            [this.editField]: item.id === this.editId,
            })
        );
        }
    }
    ```

1. Set the [`editCell`]({% slug api_treelist_treelistcolumnprops %}#toc-editcell) property for each TreeList column.

    ```jsx-no-run
    columns: [
        {
            field: "name",
            title: "Name",
            width: "280px",
            editor: 'text',
            editCell: 'textEditor',
            expandable: true,
        },
        {
            field: "position",
            title: "Position",
            width: "260px",
            editCell: 'textEditor',
        },
        {
            field: "hireDate",
            title: "Hire Date",
            format: "{0:d}",
            width: "170px",
            editCell: 'dateEditor',
        },
        {
            field: "timeInPosition",
            title: "Year(s) in Position",
            width: "170px",
            editCell: 'numericEditor',
        },
        {
            field: "fullTime",
            title: "Full Time",
            width: "160px",
            editCell: 'booleanEditor',
        },
    ]
    ```

1. Define the slot templates passed to each editCell property in the previous step using the built-in editor components -
[`TreeListTextEditor`]({% slug api_treelist_treelisttexteditorprops %}), [`TreeListNumericEditor`]({% slug api_treelist_treelistnumericeditorprops %}),[`TreeListDateEditor`]({% slug api_treelist_treelistdateeditorprops %}), and [`TreeListBooleanEditor`]({% slug api_treelist_treelistbooleaneditorprops %}).

    ```jsx-no-run
    <TreeList>
        <template #textEditor={props}>
            <TreeListTextEditor v-bind="props" @change="props.onChange" />
        </template>
        <template #numericEditor={props}>
            <TreeListNumericEditor v-bind="props" @change="props.onChange" />
        </template>
        <template #dateEditor={props}>
            <TreeListDateEditor v-bind="props" @change="props.onChange" />
        </template>
        <template #booleanEditor={props}>
            <TreeListBooleanEditor v-bind="props" @change="props.onChange" />
        </template>
        ...
    ```

1. Define a function for the [`onItemChange`]({% slug api_treelist_treelistprops %}#toc-onitemchange) event which will handle the data changes during editing. Inside the event, all relevant data, such as the edited data item, the newly entered value, or the edited field will be available as [`onItemChange`]({% slug api_treelist_treelistitemchangeevent %}) parameters.

    ```jsx-no-run
    <TreeList
        @itemchange="onItemChange"
        ..........
    ```

    ```jsx-no-run
    onItemChange (event) {
        const field = event.field;
        this.dataItems = mapTree(this.dataItems, this.subItemsField, (item) =>
            item.id === event.dataItem.id
                ? extendDataItem(item, this.subItemsField, {
                    [field]: event.value,
                })
                : item
            );
    }
    ```
## Suggested Links

* [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
* [API Index of the TreeList]({% slug api_treelist %})
