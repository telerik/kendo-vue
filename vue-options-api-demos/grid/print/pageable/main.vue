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
      :data-items="result"
      :pageable="pageable"
      :skip="skip"
      :take="take"
      :total="total"
      :columns="columns"
      :scrollable="scrollable"
      @pagechange="pageChangeHandler"
      :loader="loader"
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
      skip: 0,
      take: 10,
      columns: [
        { field: 'ProductID' },
        { field: 'ProductName', title: 'Product Name' },
        { field: 'UnitPrice', title: 'Unit Price' },
      ],
      scrollable: 'scrollable',
      isPrintState: false,
      dimensions: {
        height: '400px',
        width: '800px',
      },
    };
  },
  computed: {
    result() {
      return this.isPrintState
        ? this.dataItems
        : this.dataItems.slice(this.skip, this.take + this.skip);
    },
    total() {
      return this.dataItems ? this.dataItems.length : 0;
    },
    pageable() {
      return this.isPrintState ? false : true;
    },
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
      this.isPrintState = true;
      this.dimensions = {
        height: '100%',
        width: '100%',
      };
      this.scrollable = 'none';
    },
    setNormalLayout() {
      this.isPrintState = false;
      this.dimensions = {
        height: '400px',
        width: '800px',
      };
      this.scrollable = 'scrollable';
    },
    pageChangeHandler(event) {
      this.loader = true;
      // The idea behind using the following setTimeout method is to
      // demonstrate how we can show a loader while fetching data.
      // In a real-life scenarios with remote data binding, the 'loader'
      // property should be updated before making a server request
      // and after the request completes.
      setTimeout(() => {
        this.loader = false;
        this.skip = event.page.skip;
        this.take = event.page.take;
      }, 300);
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
