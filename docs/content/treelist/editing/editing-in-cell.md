---
title: In-Cell
description: "Get started with the Kendo UI for Vue Native TreeList supporting in-cell editing mode that allows you to manipulate data cell by cell for additional flexibility."
slug: incellediting_treelist
position: 3
---
v
# In-Cell Edit Mode

The Kendo UI for Vue Native TreeList provides options for CRUD(create, read, update and delete) operation over the data it displays. 

## In-Cell Edit Mode Configuration

The following example demonstrates how to implement the in-cell editing mode in the Kendo UI for Vue Native TreeList.

{% meta height:580 %}
{% embed_file editing-in-cell/main.vue preview %}
{% embed_file editing-in-cell/main.js %}
{% embed_file shared/data.js %}
{% endmeta %}

Here are some of the main points in the implementation of the above example:

1. Set the field which will indicate the editable data items by using the [`editField`]({% slug api_treelist_treelistprops %}#toc-editfield) property. This field is part of the temporary data items which are used during editing.

    ```jsx-no-run
    <TreeList
        :editField="editField"
        :dataItems="processedData"
    ```

    ```jsx-no-run
    editField: "inEdit"
    ```

1. Define the implementation that will change the mode of a clicked cell to `in edit`.

    ```jsx-no-run
    handleCellClick(event) {
      const targetClasses = event.event.target.classList;

      if (
        targetClasses &&
        (targetClasses.contains("k-i-chevron-right") ||
          targetClasses.contains("k-i-chevron-down"))
      ) {
        return;
      }

      this.enterEdit(event.dataItem, event.field);
    }
    ```

1. Set the [`editCell`]({% slug api_treelist_treelistcolumnprops %}#toc-editcell) property for the different columns.

    ```jsx-no-run
    initColumns: [
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
1. Define the methods that handle the different row events
    ```jsx-no-run
    handleRowMousedown() {
      this.preventExit = true;
        clearTimeout(this.preventExitTimeout);
        this.preventExitTimeout = setTimeout(() => {
          this.preventExit = undefined;
        });
    },
    handleRowBlur() {
        clearTimeout(this.blurTimeout);

        if (!this.preventExit) {
          this.blurTimeout = setTimeout(() => {
            this.exitEdit();
          });
        }
      },
    handleRowFocus() {
      clearTimeout(this.blurTimeout);
    },
    ```
## Suggested Links

* [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
* [API Reference of the TreeListToolbar]({% slug api_treelist_treelisttoolbarprops %})
* [API Index of the TreeList]({% slug api_treelist %})
