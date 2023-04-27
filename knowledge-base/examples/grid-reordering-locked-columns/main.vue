<template>
  <Grid
    :data-items="result"
    :take="dataState.take"
    :skip="dataState.skip"
    :sort="dataState.sort"
    :filter="dataState.filter"
    @datastatechange="dataStateChange"
    @columnreorder="handleColumnReorder"
    :columns="lockedColumns"
    :sortable="true"
    :pageable="true"
    :reorderable="true"
    :page-size="8"
    :style="{ width: '500px' }"
  >
    <template v-slot:myTemplate="{ props }">
      <div>
        <custom
          :column="props.column"
          :filterable="props.filterable"
          :filter="props.filter"
          :sortable="props.sortable"
          :sort="props.sort"
          :columns="columns"
          :locked="isColumnLocked(props.column.field)"
          @sortchange="(e) => props.onSortchange(e)"
          @lockchange="(e) => lockChange(e, props.column)"
          @visibilitychange="(e) => visibilityChange(e, props.column)"
          @filterchange="(e) => props.onFilterchange(e)"
          @closemenu="(e) => props.onClosemenu(e)"
          @contentfocus="(e) => props.onContentfocus(e)"
          @columnssubmit="onColumnsSubmit"
        />
      </div>
    </template>
  </Grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';
import { process } from '@progress/kendo-data-query';
import ColumnMenu from './ColumnMenu.vue';
import { products } from './products.js';

export default {
  components: {
    Grid: Grid,
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
          locked: false,
          columnMenu: 'myTemplate',
          hidden: false,
          width: 100,
          locked: true,
        },
        {
          title: 'Product Name',
          field: 'ProductName',
          filter: 'text',
          locked: false,
          columnMenu: 'myTemplate',
          hidden: false,
          width: 200,
        },
        {
          title: 'Quantity Per Unit',
          field: 'QuantityPerUnit',
          filter: 'numeric',
          locked: false,
          columnMenu: 'myTemplate',
          hidden: false,
          width: 100,
        },
        {
          title: 'Unit Price',
          field: 'UnitPrice',
          filter: 'numeric',
          locked: false,
          columnMenu: 'myTemplate',
          hidden: false,
          width: 100,
        },
        {
          title: 'Units In Stock',
          field: 'UnitsInStock',
          filter: 'numeric',
          locked: false,
          columnMenu: 'myTemplate',
          hidden: false,
          width: 100,
        },
        {
          title: 'Discontinued',
          field: 'Discontinued',
          filter: 'boolean',
          locked: false,
          columnMenu: 'myTemplate',
          hidden: false,
          width: 100,
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
  computed: {
    lockedColumns() {
      if (this.columns.filter((ev) => ev.locked)) {
        const columns = [...this.columns];
        return columns
          .sort((a, b) => Number(b.locked) - Number(a.locked))
          .map((e) => {
            return { ...e, orderIndex: undefined };
          });
      } else {
        this.columns;
      }
    },
  },
  methods: {
    handleColumnReorder(event) {
      const lastLockedindex = this.lockedColumns.findLastIndex((e) => e.locked);

      const updatedColumns = event.columns
        .sort((a, b) => Number(a.orderIndex) - Number(b.orderIndex))
        .map((e, index) => {
          const newLockedState =
            event.prev > lastLockedindex && event.next <= lastLockedindex
              ? true
              : event.prev <= lastLockedindex && event.next > lastLockedindex
              ? false
              : e.locked;
          return {
            ...e,
            locked: index === event.next ? newLockedState : e.locked,
          };
        });
      this.columns = updatedColumns;
    },
    isColumnLocked(columnName) {
      return this.columns.filter((ev) => ev.field === columnName)[0].locked;
    },
    handleFilterChange: function (filter) {
      this.result = process(products.slice(0), { filter: filter });
    },
    createDataState(dataState) {
      this.result = process(products.slice(0), dataState);
      this.dataState = dataState;
    },
    dataStateChange(event) {
      this.createDataState(event.data);
    },
    onColumnsSubmit(columnsState) {
      this.columns = columnsState;
    },
    lockChange(state, columnName) {
      const columnToLock = this.columns.filter(
        (ev) => ev.field === columnName.field
      )[0];
      columnToLock.locked = state;
    },
    visibilityChange(state, columnName) {
      this.columns.filter((ev) => ev.field === columnName.field)[0].hidden =
        state;
    },
  },
};
</script>
