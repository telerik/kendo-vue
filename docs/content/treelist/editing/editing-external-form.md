---
title: External Form
description: "Get started with the Kendo UI for Vue Native TreeList and implement external popup-editing forms."
slug: external_editing_treelist
position: 4
---

# External Form Edit Mode

The Kendo UI for Vue Native TreeList provides options for CRUD(create, read, update and delete) operation over the data it displays. 

The current article covers the scenario in which the data of the Native TreeList component is edited using an external popup form. 

## External Form Edit Mode Configuration

The below example demonstrates how we can configure the TreeList to work in `External form` edit mode.

{% meta height:580 %}
{% embed_file editing-external-form/main.vue preview %}
{% embed_file editing-external-form/CommandCell.vue %}
{% embed_file editing-external-form/DialogContainer.vue %}
{% embed_file editing-external-form/main.js %}
{% embed_file shared/data.js %}
{% endmeta %}



The following example utilizes the Kendo UI for Vue Native [Dialog]({% slug overview_dialog %}) as a modal form for editing the data of the TreeList. Here are some of the main points in the implementation of the above example:

1. When a record is in edit mode, show the editing dialog and pass the edited item to it.

    ```jsx-no-run
    <DialogContainer v-if="itemInEdit" 
        :data-item="itemInEdit"
        @change="onItemChange"
        @save="save" @cancel="cancel">
    </DialogContainer>
    ```

1. Define the template of the `DialogContainer`.

    ```jsx-no-run
    <KDialog @close="cancel">
      <div class="k-form k-form-horizontal">
        <div class="k-form-field">
          <label for="Employee" class="k-form-label">Employee Name</label>
          <div class="k-form-field-wrap">
            <KInput
              :style="{ width: '230px' }"
              :name="'Employee'"
              v-model="employeeInEdit.name"
            ></KInput>
          </div>
        </div>
        <div class="k-form-field">
          <label for="Position" class="k-form-label">Position</label>
          <div class="k-form-field-wrap">
            <KInput
              :style="{ width: '230px' }"
              :name="'Position'"
              v-model="employeeInEdit.position"
            ></KInput>
          </div>
        </div>
        <div class="k-form-field">
          <KLabel :editor-id="'FullTime'"> FullTime </KLabel>
          <div class="k-form-field-wrap">
            <span>
              <checkbox
                :name="'FullTime'"
                :id="'fullTime'"
                v-model="employeeInEdit.fullTime"
              />
            </span>
          </div>
        </div>
      </div>
      <DialogActionsBar>
        <KButton @click="cancel"> Cancel </KButton>
        <KButton :theme-color="'primary'" @click="save"> Save </KButton>
      </DialogActionsBar>
    </KDialog>
    ```

1. Handle the `save` and `cancel` events in the **DialogContainer.vue** file. To update the TreeList edited item, update the `itemInEdit` property in the application state of the TreeList.

    ```jsx-no-run
    cancel() {
        this.$emit('cancel');
    },
    save() {
        this.$emit('save', this.employeeInEdit);
    }
    ```

## Suggested Links

* [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
* [API Reference of the TreeListToolbar]({% slug api_treelist_treelisttoolbarprops %})
* [API Index of the TreeList]({% slug api_treelist %})
