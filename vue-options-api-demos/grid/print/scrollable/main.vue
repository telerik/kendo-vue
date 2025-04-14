<template>
  <div>
    <div class="example-config">
      <div class="row">
        <div class="col">
          <KButton @click="print">Print Grid</KButton>
        </div>
      </div>
    </div>
    <Grid
      :style="dimensions"
      :data-items="dataItems"
      :columns="columns"
      :scrollable="scrollable"
    >
    </Grid>
  </div>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';
import { Button as KButton } from '@progress/kendo-vue-buttons';

export default {
  components: {
    Grid,
    KButton,
  },
  data: function () {
    return {
      loader: false,
      dataItems: [],
      columns: [
        { field: 'ProductID' },
        { field: 'ProductName', title: 'Product Name' },
        { field: 'UnitPrice', title: 'Unit Price' },
      ],
      scrollable: 'scrollable',
      dimensions: {
        height: '400px',
        width: '800px',
      },
    };
  },
  methods: {
    print() {
      this.setPrintLayout();
      setTimeout(() => {
        window.print();
        this.setNormalLayout();
      });
    },

    setPrintLayout() {
      this.dimensions = {
        height: '100%',
        width: '100%',
      };
      this.scrollable = 'none';
    },
    setNormalLayout() {
      this.dimensions = {
        height: '400px',
        width: '800px',
      };
      this.scrollable = 'scrollable';
    },
    createRandomData(count) {
      const productNames = [
        'Chai',
        'Chang',
        'Syrup',
        'Apple',
        'Orange',
        'Banana',
        'Lemon',
        'Pineapple',
        'Tea',
        'Milk',
      ];
      const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120];

      return Array(count)
        .fill({})
        .map((_, idx) => ({
          ProductID: idx + 1,
          ProductName:
            productNames[Math.floor(Math.random() * productNames.length)],
          UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
        }));
    },
  },
  mounted() {
    this.dataItems = this.createRandomData(100);
  },
};
</script>
<style>
@media print {
  * {
    overflow: visible !important;
    visibility: hidden;
  }

  .k-grid {
    visibility: visible;
    margin-top: -60px;
  }

  .k-grid * {
    visibility: visible;
  }
}
</style>
