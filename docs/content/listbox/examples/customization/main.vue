<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col" style="padding-right: 0">
        <h6>Not Discontinued</h6>
        <ListBox
          :style="{ height: '400px', width: '100%' }"
          :data-items="notDiscontinued"
          :text-field="'ProductName'"
          :selected-field="SELECTED_FIELD"
          @itemclick="itemClick"
          :toolbar="'toolbar'"
          :item="'item'"
        >
          <template #toolbar>
            <ListBoxToolbar
              :tools="[
                'moveUp',
                'moveDown',
                'transferTo',
                'transferFrom',
                'transferAllTo',
                'transferAllFrom',
                'remove',
              ]"
              :data-items="notDiscontinued"
              :data-connected="discontinued"
              @toolclick="handleToolBarClick"
            />
          </template>
          <template #item="{ props }">
            <div>
              <span :style="{ fontWeight: 'bold' }">{{ props.dataItem.ProductName }}</span>
              <br />
              <span>Price: {{ props.dataItem.UnitPrice }}$</span>
            </div>
          </template>
        </ListBox>
      </div>
      <div class="col" style="padding-right: 0; padding-left: 9px">
        <h6>Discontinued</h6>
        <ListBox
          :style="{ height: '400px', width: '100%' }"
          :data-items="discontinued"
          :text-field="'ProductName'"
          :selected-field="SELECTED_FIELD"
          @itemclick="itemClick2"
          :item="'item'"
        >
          <template #item="{ props }">
            <div>
              <span :style="{ fontWeight: 'bold' }">{{ props.dataItem.ProductName }}</span>
              <br />
              <span>Price: {{ props.dataItem.UnitPrice }}$</span>
            </div>
          </template>
        </ListBox>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ListBox, ListBoxToolbar, processListBoxData } from '@progress/kendo-vue-listbox';
import products from './products.json';

const SELECTED_FIELD = 'selected';
const parsedProducts = products.map((product) => {
    product.selected = false;
    return product;
});

const notDiscontinued = ref(parsedProducts.filter((product) => !product.Discontinued));
const discontinued = ref(parsedProducts.filter((product) => product.Discontinued));

function handleItemClick(event, data, connectedData) {
    data.value = data.value.map((item) => {
        if (item.ProductID === event.dataItem.ProductID) {
            item[SELECTED_FIELD] = !item[SELECTED_FIELD];
        } else if (!event.event.ctrlKey) {
            item[SELECTED_FIELD] = false;
        }
        return item;
    });
    connectedData.value = connectedData.value.map((item) => {
        item[SELECTED_FIELD] = false;
        return item;
    });
}

function itemClick(e) {
    handleItemClick(e, notDiscontinued, discontinued);
}

function itemClick2(e) {
    handleItemClick(e, discontinued, notDiscontinued);
}

function handleToolBarClick(e) {
    const toolName = e.toolName || '';
    const result = processListBoxData(
        notDiscontinued.value,
        discontinued.value,
        toolName,
        SELECTED_FIELD
    );

    notDiscontinued.value = result.listBoxOneData;
    discontinued.value = result.listBoxTwoData;
}
</script>
