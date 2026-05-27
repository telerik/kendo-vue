---
title: External Form
page_title: Vue Grid - External Form Editing - Kendo UI Native DataGrid
description: "Get started with the Kendo UI for Vue Native Grid supporting external form editing mode that allows you to manipulate the data in a popup editor."
slug: editing_external_form_grid
position: 5
---

# External Form

The data of the Kendo UI for Vue Native Grid can be edited by using an external form.

{% meta height:550 %}
{% embed_file editing/external/main.vue preview %}
{% embed_file editing/external/main.js %}
{% embed_file editing/external/data.js %}
{% embed_file editing/external/DialogContainer.vue %}
{% embed_file editing/external/CommandCell.vue %}
{% endmeta %}

## Setup

The following example utilizes the `Kendo UI for Vue Dialog` as a modal form for editing the data of the Grid.
1. When a record is in edit mode, show the container and pass the edited item to the DialogContainer component.
    
```html-no-run
 <dialog-container v-if="productInEdit" :data-item="productInEdit" @save="save" @cancel="cancel">
    </dialog-container>
```
2. Inside DialogContainer, bind the editors to the value of the row data with v-model.

```html-no-run
<k-dialog @close="cancel">
                <div :style="{ marginBottom: '1rem' }">
                    <label>
                    Product Name<br />
                    <k-input
                        type="text"
                        :name="'ProductName'"
                        v-model= "productInEdit.ProductName"
                    ></k-input>
                    </label>
                </div>
                <div :style="{ marginBottom: '1rem' }">
                    <label>
                    Units In Stock<br />
                    <numerictextbox
                        :name="'UnitsInStock'"
                        v-model="productInEdit.UnitsInStock"
                    ></numerictextbox>
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            :name="'Discontinued'"
                            v-model="productInEdit.Discontinued"
                        />
                        Discontinued product
                    </label>
                </div>
            <dialog-actions-bar>
                <button
                    class="k-button"
                    @click="cancel"
                >
                    Cancel
                </button>
                <button
                    class="k-button k-primary"
                    @click="save"
                >
                    Save
                </button>
            </dialog-actions-bar>
        </k-dialog>
```
3. To improve its performance, the Grid refreshes its data on each Update button click. To update the Grid on type, directly update the data state of the Grid on change.

## Suggested Links

* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
