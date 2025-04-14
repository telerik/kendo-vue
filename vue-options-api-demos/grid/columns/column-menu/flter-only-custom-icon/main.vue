<template>
  <Grid
    :data-items="result"
    :take="dataState.take"
    :skip="dataState.skip"
    :sort="dataState.sort"
    :filter="dataState.filter"
    @datastatechange="dataStateChange"
    :columns="columns"
    :sortable="true"
    :pageable="true"
    :page-size="8"
  >
    <template v-slot:myTemplate="{ props }">
      <custom
        :column="props.column"
        :filterable="props.filterable"
        :filter="props.filter"
        :sortable="props.sortable"
        :sort="props.sort"
        :columns="columns"
        @sortchange="(e) => props.onSortchange(e)"
        @filterchange="(e) => props.onFilterchange(e)"
        @closemenu="(e) => props.onClosemenu(e)"
        @contentfocus="(e) => props.onContentfocus(e)"
        @columnssubmit="onColumnsSubmit"
      />
    </template>
  </Grid>
</template>
<script>
import { Grid, filterGroupByField } from '@progress/kendo-vue-grid';
import { process } from '@progress/kendo-data-query';
import ColumnMenu from './ColumnMenu.vue';
import { products } from './products';

export default {
  components: {
    Grid,
    custom: ColumnMenu,
  },
  data: function () {
    return {
      result: [],
      dataState: {
        take: 0,
        skip: 0,
      },
      columns: [
        {
          title: 'Product Id',
          field: 'ProductID',
          filter: 'numeric',
          columnMenu: 'myTemplate',
          headerClassName: 'customMenu',
        },
        {
          title: 'Product Name',
          field: 'ProductName',
          filter: 'text',
          columnMenu: 'myTemplate',
          headerClassName: 'customMenu',
        },
        {
          title: 'Quantity Per Unit',
          field: 'QuantityPerUnit',
          filter: 'text',
          columnMenu: 'myTemplate',
          headerClassName: 'customMenu',
        },
        {
          title: 'Unit Price',
          field: 'UnitPrice',
          filter: 'numeric',
          columnMenu: 'myTemplate',
          headerClassName: 'customMenu',
        },
        {
          title: 'Units In Stock',
          field: 'UnitsInStock',
          filter: 'numeric',
          columnMenu: 'myTemplate',
          headerClassName: 'customMenu',
        },
        {
          title: 'Discontinued',
          field: 'Discontinued',
          filter: 'boolean',
          columnMenu: 'myTemplate',
          headerClassName: 'customMenu',
        },
      ],
    };
  },
  created: function () {
    this.createDataState({
      take: 8,
      skip: 0,
    });
  },
  methods: {
    createDataState(dataState) {
      this.result = process(products.slice(0), dataState);
      this.dataState = dataState;
    },
    dataStateChange(e) {
      if (e.event) {
        let isColumnActive = filterGroupByField(e.event.field, e.data.filter);

        // @ts-ignore
        let changedColumn = this.columns.find(
          (column) => column.field === e.event.field
        );

        if (changedColumn) {
          changedColumn.headerClassName = isColumnActive
            ? 'customMenu active'
            : '';
        }
      }
      this.createDataState(e.data);
    },
    onColumnsSubmit(columnsState) {
      this.columns = columnsState;
    },
  },
};
</script>
<style>
th.k-header.customMenu > div > div > span.k-i-more-vertical::before,
th.k-header.customMenu.active > div > div > span.k-i-more-vertical::before {
  content: '\e129';
}

.k-columnmenu-item {
  display: none;
}

th.k-header.active > div > a {
  color: #fff;
  background-color: #ff6358;
}
</style>
