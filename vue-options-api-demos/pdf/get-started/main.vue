<template>
  <div>
    <div class="example-config">
      <kbutton @click="exportPDFWithComponent">
        Export to PDF with component
      </kbutton>
      &nbsp;
      <kbutton @click="exportPDFWithMethod">
        Export to PDF with method
      </kbutton>
    </div>

    <pdfexport ref="PdfExport">
        <grid
          ref="grid"
          :data-items="gridData"
          :columns="columns"
        >
        </grid>
    </pdfexport>
  </div>
</template>
<script>
import { PDFExport, savePDF } from "@progress/kendo-vue-pdf";
import { Grid } from "@progress/kendo-vue-grid";
import { Button } from '@progress/kendo-vue-buttons';
import products from "./products.json";

export default {
  components: {
    grid: Grid,
    pdfexport: PDFExport,
    'kbutton': Button
  },
  data: function() {
    return {
      gridData: products,
      columns: [
        { field: "ProductID" },
        { field: "ProductName", title: "Product Name" },
        { field: "Category.CategoryName", title: "Category Name" },
        { field: "UnitPrice", title: "Unit Price" },
        { field: "UnitsInStock", title: "Units In Stock" }
      ]
    };
  },
  methods: {
    exportPDFWithComponent: function() {
      this.$refs.PdfExport.save(this.items);
    },
    exportPDFWithMethod: function() {
      savePDF(this.$refs.grid.$el, {
        paperSize: "A4"
      });
    }
  }
};
</script>
