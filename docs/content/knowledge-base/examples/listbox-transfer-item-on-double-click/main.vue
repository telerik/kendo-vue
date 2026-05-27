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
          :toolbar="'toolbar'"
          :item="'item'"
        >
          <template #item="{ props }">
            <div
              @dblclick="
                handleDoubleClick(
                  props.dataItem,
                  'notDiscontinued',
                  'discontinued'
                )
              "
            >
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
          :item="'item'"
        >
          <template #item="{ props }">
            <div
              @dblclick="
                handleDoubleClick(
                  props.dataItem,
                  'discontinued',
                  'notDiscontinued'
                )
              "
            >
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
import { ListBox } from '@progress/kendo-vue-listbox';
import products from './products.json';

const SELECTED_FIELD = 'selected';

const parsedProducts = products.map((product) => {
    product.selected = false;
    return product;
});

const notDiscontinued = ref(parsedProducts.filter((product) => !product.Discontinued));
const discontinued = ref(parsedProducts.filter((product) => product.Discontinued));

function handleDoubleClick(dataItem, sourceList, targetList) {
    const source = sourceList === 'notDiscontinued' ? notDiscontinued : discontinued;
    const target = targetList === 'notDiscontinued' ? notDiscontinued : discontinued;

    source.value = source.value.filter((item) => item.ProductID !== dataItem.ProductID);
    target.value = [...target.value, dataItem];
}
</script>
