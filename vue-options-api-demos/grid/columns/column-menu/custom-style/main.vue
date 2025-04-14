<template>
    <Grid
      :data-items="gridData"
      :take="take"
      :skip="skip"
      :sortable="true"
      :sort="sort"
      :filter="filter"
      :column-menu-icon="starIcon"
      @datastatechange="dataStateChange"
      @filterchange="filterChange"
      @sortchange="sortChange"
      :pageable="true"
      :column-menu="true"
      :columns="columns"
    >
    </Grid>
  </template>
  <script>
  import './styles.css';
  import {
    Grid,
    filterGroupByField,
    sortGroupByField,
  } from '@progress/kendo-vue-grid';
  import { starIcon } from '@progress/kendo-svg-icons';
  import { process } from '@progress/kendo-data-query';
  import { products } from './products';

  export default {
    components: {
      Grid: Grid,
    },
    data: function () {
      return {
        starIcon,
        columnMenu: true,
        columns: [
          { field: 'ProductName', title: 'Name' },
          { field: 'Discontinued', filter: 'boolean' },
        ],
        take: 10,
        skip: 0,
        gridData: [],
        sort: [],
        filter: null,
      };
    },
    created: function () {
      this.getData();
    },
    methods: {
      getData: function () {
        let dataState = {
          take: this.take,
          skip: this.skip,
          filter: this.filter,
          sort: this.sort,
        };
        this.gridData = process(products, dataState);
      },
      createAppState: function (dataState) {
        this.take = dataState.take;
        this.skip = dataState.skip;
        this.sort = dataState.sort;
        this.filter = dataState.filter;
        this.getData();
      },
      dataStateChange: function (event) {
        this.createAppState(event.data);
      },
      filterChange: function (event) {
        let isColumnActive = filterGroupByField(event.event.field, event.filter);
        // @ts-ignore
        let changedColumn = this.columns.find(function (column) {
          return column.field === event.event.field;
        });
  
        if (changedColumn) {
          changedColumn.headerClassName = isColumnActive ? 'active' : '';
        }
  
        this.filter = event.filter;
        this.getData();
      },
      sortChange: function (event) {
        let isColumnActive = sortGroupByField(event.event.field, event.sort);
        // @ts-ignore
        this.columns.find(function (column) {
          return column.field === event.event.field;
        }).headerClassName = isColumnActive ? 'active' : '';
  
        this.sort = event.sort;
        this.getData();
      },
      expandChange: function (event) {
        event.dataItem[event.target.$props.expandField] = event.value;
        //
        // In Vue 2 context, instead of the above line, inside the expandChange method we should have the following:
        //
        //   Vue.set(
        //     event.dataItem,
        //     event.target.$props.expandField,
        //     event.dataItem.expanded === undefined ? false : !event.dataItem.expanded
        //   );
        //
      },
    },
  };
  </script>
  