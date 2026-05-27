<template>
  <div class="example-wrapper">
    <Grid
      ref="grid"
      :style="{ height: '440px' }"
      :data-items="products"
      :columns="columns"
    >
      <template #myTemplate="{ props }">
        <CommandCell
          :data-item="props.dataItem"
          @edit="edit"
          @remove="remove"
        />
      </template>
      <GridToolbar>
        <KButton
          title="Add new"
          :theme-color="'primary'"
          @click="insert"
        >
          Add new
        </KButton>
      </GridToolbar>
      <GridNoRecords>
        There is no data available custom
      </GridNoRecords>
    </Grid>
    <DialogContainer
      v-if="productInEdit"
      :data-item="productInEdit"
      @save="save"
      @cancel="cancel"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Grid, GridToolbar, GridNoRecords } from '@progress/kendo-vue-grid';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import DialogContainer from './DialogContainer.vue';
import CommandCell from './CommandCell.vue';
import { sampleProducts } from './data';

const products = ref(sampleProducts.slice(0, 7));
const productInEdit = ref(null);
const columns = ref([
    { field: 'ProductID', editable: false, title: 'ID', width: '80px' },
    { field: 'ProductName', title: 'Name' },
    { field: 'UnitsInStock', title: 'Units', filter: 'numeric', width: '150px', editor: 'numeric' },
    { field: 'Discontinued' },
    { cell: 'myTemplate', width: '210px' },
]);

function edit(dataItem) {
    productInEdit.value = cloneProduct(dataItem);
}

function remove(dataItem) {
    products.value = products.value.filter(p => p.ProductID !== dataItem.ProductID);
}

function save(dataItem) {
    const item = dataItem || productInEdit.value;
    const isNewProduct = item.ProductID === undefined;

    if (isNewProduct) {
        products.value.unshift(newProduct(item));
    } else {
        const index = products.value.findIndex(p => p.ProductID === item.ProductID);
        products.value.splice(index, 1, item);
    }

    productInEdit.value = null;
}

function cancel() {
    productInEdit.value = null;
}

function insert() {
    productInEdit.value = {};
}

function cloneProduct(product) {
    return { ...product };
}

function newProduct(source) {
    const id = products.value.reduce((acc, current) => Math.max(acc, current.ProductID || 0), 0) + 1;
    return { ProductID: id, ProductName: '', UnitsInStock: 0, Discontinued: false, ...source };
}
</script>
