<template>
  <grid
    :style="{ height: '280px' }"
    :data-items="items"
    :columns="columns"
    @custom="customHandler"
  >
    <template v-slot:footerTemplate1="{ props }">
      <div>
        <div class="first-footer-row">
          <span>&nbsp;</span>
        </div>
        <div class="second-footer-row">
          <span>&nbsp;</span>
        </div>
        <div style="padding: 2px">
          <span>&nbsp;</span>
        </div>
      </div>
    </template>
    <template v-slot:footerTemplate2="{ props }">
      <div>
        <div class="first-footer-row">
          <span>Custom Footer Row 1</span>
        </div>
        <div class="second-footer-row">
          <span @click="customHandler">Custom Footer Row 2</span>
        </div>
        <div style="padding: 2px">
          <span @click="customHandler">Column field: {{ props.field }}</span>
        </div>
      </div>
    </template>

    <template v-slot:footerTemplate3="{ props }">
      <div>
        <div class="first-footer-row">
          <span>The sum</span>
        </div>
        <div class="second-footer-row">
          <span>of the above rows is:</span>
        </div>
        <div style="padding: 2px">
          <span @click="customHandler"> {{ unitPriceSum }} </span>
        </div>
      </div>
    </template>
  </grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';

export default {
  components: {
    grid: Grid,
  },
  computed: {
    unitPriceSum() {
      return this.items.reduce((sum, el) => (sum += el.UnitPrice), 0);
    },
  },
  data: function () {
    return {
      columns: [
        { field: 'ProductID', footerCell: 'footerTemplate1' },
        {
          field: 'ProductName',
          title: 'Product Name',
          footerCell: 'footerTemplate2',
        },
        {
          field: 'UnitPrice',
          title: 'Unit Price',
          footerCell: 'footerTemplate3',
        },
      ],
      items: [
        {
          ProductID: 1,
          ProductName: 'Chai',
          UnitPrice: 1,
        },
        {
          ProductID: 2,
          ProductName: 'Chang',
          UnitPrice: 2.2,
        },
        {
          ProductID: 3,
          ProductName: 'Aniseed Syrup',
          UnitPrice: 3.0,
        },
        {
          ProductID: 4,
          ProductName: "Chef Anton's Cajun Seasoning",
          UnitPrice: 4.0,
        },
      ],
    };
  },
  methods: {
    customHandler: function (e) {
      console.log('customHandler', e);
    },
  },
};
</script>
<style>
div.k-grid-footer > div > table > tfoot > tr > td {
  padding: 0px;
  border: 0px;
}

tfoot > tr > td:nth-child(3) {
  font-weight: normal;
}

.first-footer-row,
.second-footer-row {
  border-bottom: 1px solid green;
  border-color: rgba(0, 0, 0, 0.08);
  padding: 2px;
}
</style>
