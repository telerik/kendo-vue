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
        <DropDownList
          :data-items="uniqueData"
          :text-field="'CategoryName'"
          :value-field="'CategoryID'"
          @change="
            (ev) => {
              props.onChange({
                operator: 'contains',
                field: props.field,
                value: ev.value.CategoryName,
                syntheticEvent: ev,
              });
            }
          "
        />
      </div>
    </template>
  </Grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { filterBy } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

export default {
  components: {
    Grid,
    DropDownList,
  },
  data: function () {
    return {
      loader: false,
      uniqueData: null,
      filter: {
        logic: 'and',
        filters: [],
      },
    };
  },
  created() {
    this.uniqueData = sampleProducts
      .map((x) => x.Category)
      .filter(
        (x, idx, xs) =>
          xs.findIndex((y) => y.CategoryName === x.CategoryName) === idx
      );
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
        },
        { field: 'ProductName', title: 'Product Name' },
        {
          field: 'Category.CategoryName',
          title: 'Category',
          filterCell: 'filterSlotTemplate',
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
  },
};
</script>
