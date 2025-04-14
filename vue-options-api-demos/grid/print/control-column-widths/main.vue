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
import { Checkbox as KCheckbox } from '@progress/kendo-vue-inputs';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import products from './products.json';

export default {
  components: {
    Grid,
    KButton,
    KCheckbox,
  },
  data() {
    return {
      loader: false,
      dataItems: [],
      printState: false,
      columnsToPrint: [],
      defaultColumns: [
        { field: 'ProductID', title: 'ID', width: '250px' },
        {
          field: 'ProductName',
          title: 'Product Name',
          width: '250px',
        },
        {
          field: 'UnitPrice',
          title: 'Unit Price',
          width: '350px',
        },
        {
          field: 'Discontinued',
          title: 'Discontinued',
          width: '250px',
        },
        {
          field: 'QuantityPerUnit',
          title: 'QuantityPerUnit',
          width: '250px',
        },
        {
          field: 'Category.CategoryName',
          title: 'CategoryName',
          width: '250px',
        },
      ],
      scrollable: 'scrollable',
      dimensions: {
        height: '400px',
        width: '600px',
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
      this.printState = true;
      this.dimensions = {
        height: '100%',
        width: '100%',
      };
      this.scrollable = 'none';
    },
    setNormalLayout() {
      this.printState = false;
      this.dimensions = {
        height: '400px',
        width: '800px',
      };
      this.scrollable = 'scrollable';
    },
  },
  mounted() {
    this.dataItems = products;
    this.columnsToPrint = this.columns;
  },
  computed: {
    columns() {
      return this.printState
        ? this.defaultColumns.map((column) => ({
            ...column,
            width: 120,
          }))
        : this.defaultColumns;
    },
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
