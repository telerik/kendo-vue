<template>
  <Grid
    :data-items="products"
    :filterable="true"
    :filter="filter"
    @filterchange="filterChange"
    :columns="columns"
    :loader="loader"
  >
    <template v-slot:filterSlotTemplate="{ props, methods }">
      <div>
        <Switch
          :on-label="'Yes'"
          :off-label="'No'"
          :checked="isChecked"
          @change="onDiscontinuedFilterChange"
        />
      </div>
    </template>
  </Grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';
import { Switch } from '@progress/kendo-vue-inputs';
import { filterBy } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

export default {
  components: {
    Grid,
    Switch,
  },
  data: function () {
    return {
      loader: false,
      isChecked: false,
    };
  },
  computed: {
    filter() {
      return {
        logic: 'and',
        filters: [
          { field: 'Discontinued', operator: 'eq', value: this.isChecked },
        ],
      };
    },
    products: function () {
      return filterBy(sampleProducts, this.filter);
    },
    columns: function () {
      return [
        {
          field: 'ProductID',
          filterable: false,
          title: 'Product ID',
          width: '50px',
        },
        { field: 'ProductName', title: 'Product Name' },
        {
          field: 'Discontinued',
          filterCell: 'filterSlotTemplate',
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
    onDiscontinuedFilterChange() {
      this.isChecked = !this.isChecked;
    },
  },
};
</script>
