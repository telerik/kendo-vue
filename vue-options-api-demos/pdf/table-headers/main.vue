<template>
  <div>
    <div class="example-config">
      <div>
      <input class="k-checkbox k-checkbox-md k-rounded-md" type="checkbox" id="repeatHeaders" checked="repeatHeaders" @change="switchRepeatHeaderVisualization"/>
        <label class="k-checkbox-label mb-2" for="repeatHeaders">Repeat headers</label>
      </div>
      <kbutton @click="exportPDF">
        Export to PDF with component
      </kbutton>
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
        <tr v-for="(product,i) in gridData" :key="i">
          <td>{{ product.ProductName }}</td> 
          <td>{{ product.UnitPrice }}</td>  
          <td>{{ product.QuantityPerUnit }}</td>  
       </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { savePDF } from "@progress/kendo-vue-pdf";
import products from "./products.json";
import { Button } from '@progress/kendo-vue-buttons';

export default {
  components: {
      'kbutton': Button
  },
  data: function() {
    return {
      gridData: products,
      repeatHeaders: true
    };
  },
  methods: {
    exportPDF: function() {
      savePDF(this.$refs.table, {
            repeatHeaders: this.repeatHeaders,
            paperSize: 'A4',
            margin: '2cm'
      });
    },
    switchRepeatHeaderVisualization: function(){
      this.repeatHeaders = !this.repeatHeaders;
    }
  }
};
</script>
