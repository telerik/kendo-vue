<template>
  <div>
    <div class="example-config">
      <div class="row">
        <div>
          <h5>Select Columns to Print</h5>
          <div v-for="(column, index) in columns" class="col-xs-12 example-col">
            <KCheckbox
              :id="column.field"
              :name="column.field"
              :defaultChecked="!column.hidden"
              :label="column.title"
              @change="onChange"
            />
          </div>
        </div>
      </div>
    </div>
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
        { field: 'ProductID', title: 'ID', hidden: false, width: '250px' },
        {
          field: 'ProductName',
          title: 'Product Name',
          hidden: false,
          width: '250px',
        },
        {
          field: 'UnitPrice',
          title: 'Unit Price',
          hidden: false,
          width: '250px',
        },
        {
          field: 'Discontinued',
          title: 'Discontinued',
          hidden: false,
          width: '250px',
        },
        {
          field: 'QuantityPerUnit',
          title: 'QuantityPerUnit',
          hidden: false,
          width: '250px',
        },
        {
          field: 'Category.CategoryName',
          title: 'CategoryName',
          hidden: false,
          width: '250px',
        },
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
    onChange(event) {
      const field = event.e.target.name;
      this.columnsToPrint = this.columnsToPrint.map((column) => {
        if (column.field === field) {
          return {
            ...column,
            hidden: !column.hidden,
          };
        }
        return column;
      });
    },
  },
  mounted() {
    this.dataItems = products;
    this.columnsToPrint = this.columns;
  },
  computed: {
    columns() {
      return this.printState ? this.columnsToPrint : this.defaultColumns;
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
    margin-top: -200px;
  }

  .k-grid * {
    visibility: visible;
  }
}
</style>
