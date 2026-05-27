---
title: Inline
description: "Get started with the Kendo UI for Vue Native TreeList enabling you to create, edit, and delete data records inline."
slug: editing_inline_treelist
position: 2
---

# Inline Edit Mode

The Kendo UI for Vue Native TreeList provides options for CRUD(create, read, update and delete) operation over the data it displays.

The current article covers more details about the implementation of the `Inline` editing mode. With this editing approach, the TreeList enters in edit mode when the user click on an `Edit` button in the row which data should be edited.

## Inline Edit Mode Configuration
The below example demonstrates how we can configure the TreeList to work in `Inline` edit mode.

{% meta height:580 %}
{% embed_file editing-inline/main.vue preview %}
{% embed_file editing-inline/CommandCell.vue %}
{% embed_file editing-inline/main.js %}
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

1. Configure the command column by defining a custom component(see the `CommandCell.vue` file) and import it through a slot template.
    ```jsx-no-run
    <template #commandCell="{props}">
      <CommandCell :data-item="props.dataItem"
              :editField="editField"
              @edit="enterEdit"
              @save="save"
              @remove="remove"
              @cancel="cancel"
              @addchild="addChild"/>
    </template>
    ```

1. Set the [`editCell`]({% slug api_treelist_treelistcolumnprops %}#toc-editcell) and [`cell`]({% slug api_treelist_treelistcolumnprops %}#toc-cell) properties for the different columns.

    ```jsx-no-run
    columns: [
    {
        field: "name",
        title: "Name",
        width: "280px",
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
        field: "fullTime",
        title: "Full Time",
        width: "160px",
        editCell: 'booleanEditor',
    },
    {
        cell: 'commandCell',
        width: "360px",
    },
    ]
    ```

1. Define a function for the [`onItemChange`]({% slug api_treelist_treelistprops %}#toc-onitemchange) event which will handle any input changes during editing. Inside the event, all relevant data, such as the edited data item, the newly entered value, or the edited field will be available as [`onItemChange`]({% slug api_treelist_treelistitemchangeevent %}) parameters.

    ```jsx-no-run
    <TreeList
        @itemchange="onItemChange"
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

1. Define the functions which will set the item in edit mode and create a new item in edit mode. You can call these functions from the command buttons in the command cell.

    ```jsx-no-run
    enterEdit (dataItem) {
        this.inEdit = [...this.inEdit, extendDataItem(dataItem, this.subItemsField)];
    }
    ```

    ```jsx-no-run
    addRecord () {
        const newRecord = this.createNewItem();

        this.dataItems = [newRecord, ...this.dataItems];
        this.inEdit = [...this.inEdit, { ...newRecord }];
    }
    ```

1. Define the functions which will handle the `save`, `cancel`, `remove`, and `addChild` actions. You can call these functions from the command buttons, the toolbar template, or a button which is outside of the TreeList.

    ```jsx-no-run
    save (dataItem) {
        const { isNew, inEdit, ...itemToSave } = dataItem;

        this.dataItems = mapTree(this.dataItems, this.subItemsField, (item) =>
            item.id === itemToSave.id ? itemToSave : item
            );
        this.inEdit = this.inEdit.filter((i) => i.id !== itemToSave.id);
    },
    ```

    ```jsx-no-run
    cancel (editedItem) {
      if (editedItem.isNew) {
        return this.remove(editedItem);
      }

      this.dataItems = mapTree(this.dataItems, this.subItemsField, (item) =>
          item.id === editedItem.id ? this.inEdit.find((i) => i.id === item.id) : item
        );
      this.inEdit = this.inEdit.filter((i) => i.id !== editedItem.id);
    }
    ```

    ```jsx-no-run
    remove (dataItem) {
        this.dataItems = removeItems(this.dataItems, this.subItemsField, (i) => i.id === dataItem.id);
        this.inEdit = this.inEdit.filter((i) => i.id !== dataItem.id);
    }
    ```

    ```jsx-no-run
    addChild (dataItem) {
      const newRecord = this.createNewItem();
      this.inEdit = [...this.inEdit, newRecord];
      this.expanded = [...this.expanded, dataItem.id];
      this.dataItems = modifySubItems(
          this.dataItems,
          this.subItemsField,
          (item) => item.id === dataItem.id,
          (subItems) => [newRecord, ...subItems]
        );
    }
    ```

## Suggested Links

* [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
* [API Reference of the TreeListToolbar]({% slug api_treelist_treelisttoolbarprops %})
* [API Index of the TreeList]({% slug api_treelist %})
