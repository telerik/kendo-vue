<script lang="ts" setup>
import { Window as window } from '@progress/kendo-vue-dialogs';
const emit = defineEmits(['closeWindow'])

const props = defineProps({
  rowData: { type: Object, default: { windowVisible: false, gridClickedRow: { "ProductName": "", "ProductID": "", QuantityPerUnit: "" } } },
})

const closeWindow = () => {
  emit('closeWindow', { windowVisible: false })
};
</script>

<template>
  <window v-if="props.rowData.windowVisible" :title="'Product Details'" @close="closeWindow" :height="250">
    <dl :style="{ 'text-align': 'left' }">
      <dt>Product Name</dt>
      <dd>{{ props.rowData.gridClickedRow.ProductName }}</dd>
      <dt>Product ID</dt>
      <dd>{{ props.rowData.gridClickedRow.ProductID }}</dd>
      <dt>Quantity per Unit</dt>
      <dd>{{ props.rowData.gridClickedRow.QuantityPerUnit }}</dd>
    </dl>
  </window>
</template>

<style scoped>

</style>
