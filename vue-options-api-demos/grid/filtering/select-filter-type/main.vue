<template>
  <div class="example-config">
    <b>Select Filter Type:</b>
    <RadioGroup
      :data-items="dataItems"
      v-model="radioGroupValue"
      :layout="'horizontal'"
      @change="onFilterTypeChange"
    />
  </div>
  <Grid
    :style="{ height: '450px' }"
    :data-items="products"
    :column-menu="radioGroupValue === 'menu'"
    :filterable="radioGroupValue === 'row'"
    :filter="filter"
    @filterchange="filterChange"
    :columns="columns"
    :loader="loader"
  >
  </Grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';
import { RadioGroup } from '@progress/kendo-vue-inputs';
import { filterBy } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

export default {
  components: {
    Grid,
    RadioGroup,
  },
  data: function () {
    return {
      radioGroupValue: 'row',
      loader: false,
      isChecked: false,
      filter: null,
      dataItems: [
        {
          label: 'Filter row',
          value: 'row',
        },
        {
          label: 'ColumnMenu Filtering',
          value: 'menu',
        },
      ],
    };
  },
  computed: {
    products: function () {
      return filterBy(sampleProducts, this.filter);
    },
    columns: function () {
      return [
        {
          field: 'ProductID',
          filterable: false,
          title: 'ID',
          width: '50px',
          columnMenu: false,
        },
        { field: 'ProductName', title: 'Product Name' },
        { field: 'FirstOrderedOn', filter: 'date', title: 'First Ordered On' },
        {
          field: 'Discontinued',
          title: 'Discontinued',
        },
      ];
    },
  },
  methods: {
    filterChange: function (ev) {
      this.loader = true;
      // The idea behind using the following setTimeout method is to
      // demonstrate how we can show a loader while fetching data.
      // In real-life scenarios with remote data binding, the 'loader'
      // property should be updated before making a server request
      // and after the request completes.
      setTimeout(() => {
        this.filter = ev.filter;
        this.loader = false;
      }, 300);
    },
    onFilterTypeChange() {
      this.filter = null;
    },
  },
};
</script>
