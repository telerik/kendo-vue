<template>
  <div>
    <div class="example-config">
      <kbutton @click="exportPDFWithComponent">
        Export with component
      </kbutton>
      &nbsp;
      <kbutton @click="exportPDFWithMethod">
        Export with method
      </kbutton>
      <br />
      <br />
      <span>
        Select sport activity:
         <dropdownlist
          :style="{ width: '230px' }"
          v-model="selectedSport"
          :data-items="sports"
          :default-item="'Select sport ...'"
        >
        </dropdownlist>
      </span>
    </div>

    <pdfexport ref="PdfExport">
      <div id="exportContent" ref="container">
        <h3 class="text-center">Weekend personal planning</h3>
        <hr class="k-hr" />
        <grid
          :data-items="items"
          :skip="skip"
          :take="take"
          :total="total"
          :pageable="pageable"
          :page-size="pageSize"
          @pagechange="pageChangeHandler"
          :columns="columns"
        >
        </grid>
        <br />
        <span style="font-weight: bold">Planned sport for the weekend:</span>
        {{ selectedSport }}
      </div>
    </pdfexport>
  </div>
</template>
<script>
import { PDFExport, savePDF } from "@progress/kendo-vue-pdf";
import { Grid } from "@progress/kendo-vue-grid";
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import { Button } from '@progress/kendo-vue-buttons';

export default {
  components: {
    grid: Grid,
    pdfexport: PDFExport,
    dropdownlist: DropDownList,
      'kbutton': Button
  },
  data: function() {
    return {
      selectedSport: "",
      sports: ["Basketball", "Football", "Tennis", "Volleyball"],
      skip: 0,
      take: 10,
      products: [],
      pageSize: 10,
      pageable: {
        buttonCount: 5,
        info: true,
        type: "numeric",
        pageSizes: true,
        previousNext: true
      },
      columns: [
        { field: "ProductID" },
        { field: "ProductName", title: "Product Name" },
        { field: "UnitPrice", title: "Unit Price" }
      ]
    };
  },
  computed: {
    items: {
      get: function() {
        return this.products.slice(this.skip, this.take + this.skip);
      }
    },
    total() {
      return this.products ? this.products.length : 0;
    }
  },
  methods: {
    exportPDFWithComponent: function() {
      this.$refs.PdfExport.save(this.items);
    },
    exportPDFWithMethod: function() {
      savePDF(this.$refs.container, {
        paperSize: "auto",
        margin: 40,
        fileName: `Report for `
      });
    },
    pageChangeHandler: function(event) {
      this.skip = event.page.skip;
      this.take = event.page.take;
    },
    createRandomData(count) {
      const productNames = [
        "Chai",
        "Chang",
        "Syrup",
        "Apple",
        "Orange",
        "Banana",
        "Lemon",
        "Pineapple",
        "Tea",
        "Milk"
      ];
      const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120];

      return Array(count)
        .fill({})
        .map((_, idx) => ({
          ProductID: idx + 1,
          ProductName:
            productNames[Math.floor(Math.random() * productNames.length)],
          UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)]
        }));
    }
  },
  mounted() {
    this.products = this.createRandomData(1000);
  }
};
</script>
