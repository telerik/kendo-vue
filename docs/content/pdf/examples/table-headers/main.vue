<template>
  <div>
    <div class="example-config">
      <div>
        <input
          class="k-checkbox k-checkbox-md k-rounded-md"
          type="checkbox"
          id="repeatHeaders"
          :checked="repeatHeaders"
          @change="switchRepeatHeaderVisualization"
        />
        <label class="k-checkbox-label mb-2" for="repeatHeaders">Repeat headers</label>
      </div>
      <KButton @click="exportPDF">Export to PDF with component</KButton>
    </div>

    <table class="table" ref="table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Unit Price</th>
          <th>Qty</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, i) in gridData" :key="i">
          <td>{{ product.ProductName }}</td>
          <td>{{ product.UnitPrice }}</td>
          <td>{{ product.QuantityPerUnit }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { savePDF } from '@progress/kendo-vue-pdf';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import products from './products.json';

const gridData = ref(products);
const repeatHeaders = ref(true);

function exportPDF() {
    savePDF(table.value, {
        repeatHeaders: repeatHeaders.value,
        paperSize: 'A4',
        margin: '2cm',
    });
}

function switchRepeatHeaderVisualization() {
    repeatHeaders.value = !repeatHeaders.value;
}

const table = ref(null);
</script>
