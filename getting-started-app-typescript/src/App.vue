<template>
  <div id="app">
    <h1>Hello Kendo UI for Vue!</h1>
    <p>
      <dropdownlist
        :data-items="categories"
        :data-item-key="'CategoryID'"
        :text-field="'CategoryName'"
        :default-item="defaultItems"
        @change="handleDropDownChange"
        @rowclick="rowClick"
      ></dropdownlist>&nbsp; Selected category ID:
      <strong>{{ dropdownlistCategory }}</strong>
    </p>

    <grid
      :data-items="dataResult"
      :pageable="pageable"
      :sortable="sortable"
      :sort="sort"
      :take="take"
      :skip="skip"
      :columns="columns"
      @datastatechange="dataStateChange"
      @rowclick="rowClick"
      :style="{ height: '400px' }"
    >
      <template v-slot:discontinuedTemplate="{ props }">
        <td :colspan="1">
          <input type="checkbox" :checked="props.dataItem.Discontinued" disabled="disabled" />
        </td>
      </template>
    </grid>

    <window v-if="windowVisible" :title="'Product Details'" @close="closeWindow" :height="250">
      <dl :style="{ 'text-align': 'left' }">
        <dt>Product Name</dt>
        <dd>{{ gridClickedRow.ProductName }}</dd>
        <dt>Product ID</dt>
        <dd>{{ gridClickedRow.ProductID }}</dd>
        <dt>Quantity per Unit</dt>
        <dd>{{ gridClickedRow.QuantityPerUnit }}</dd>
      </dl>
    </window>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { products } from './appdata/products';
import { categories } from './appdata/categories';
import { process, DataResult, State } from '@progress/kendo-data-query';
import { Grid, GridDataStateChangeEvent, GridRowClickEvent, GridColumnProps } from '@progress/kendo-vue-grid';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-vue-dropdowns';
import { Window } from '@progress/kendo-vue-dialogs';
import '@progress/kendo-theme-default/dist/all.css';

export default defineComponent({
  name: 'App',
  components: {
    'dropdownlist': DropDownList,
    'grid': Grid,
    'window': Window
  },
  data: function () {
    return {
      categories: categories,
      products: products,
      defaultItems: { CategoryID: null, CategoryName: "Product categories" },
      dropdownlistCategory: null,
      pageable: true,
      sortable: true,
      skip: 0 as State["skip"],
      take: 10 as State["take"],
      sort: [
        { field: "ProductName", dir: "asc" }
      ] as State["sort"],
      filter: {} as State["filter"],
      columns: [
        { field: 'ProductName', title: 'Product Name' },
        { field: 'UnitPrice', title: 'Price' },
        { field: 'UnitsInStock', title: 'Units in Stock' },
        { field: 'Discontinued', cell: 'discontinuedTemplate' }
      ] as GridColumnProps[],
      dataResult: { data: [] as any, total: 0 } as DataResult,
      gridClickedRow: {},
      windowVisible: false
    }
  },
  created() {
    const dataState: State = {
      skip: this.skip,
      take: this.take,
      sort: this.sort,
    };

    this.dataResult = process(this.products, dataState);
  },
  methods: {
    handleDropDownChange(e: DropDownListChangeEvent) {
      this.dropdownlistCategory = e.target.value.CategoryID;

      if (e.target.value.CategoryID !== null) {
        this.filter = {
          logic: 'and',
          filters: [{ field: 'CategoryID', operator: 'eq', value: e.target.value.CategoryID }]
        }
        this.skip = 0
      } else {
        this.filter = {} as State["filter"]
        this.skip = 0
      }
      let event: GridDataStateChangeEvent = {
        data: {
          skip: this.skip,
          take: this.take,
          sort: this.sort,
          filter: this.filter
        }
      };
      this.dataStateChange(event);
    },
    createAppState: function (dataState: State) {
      this.take = dataState.take;
      this.skip = dataState.skip;
      this.sort = dataState.sort;
    },
    dataStateChange(event: GridDataStateChangeEvent) {
      this.createAppState(event.data);

      if (event.data.filter !== undefined && event.data.filter.logic) {
        this.dataResult = process(products, {
          skip: event.data.skip,
          take: event.data.take,
          sort: event.data.sort,
          filter: event.data.filter
        });
      } else {
        this.dataResult = process(products, {
          skip: event.data.skip,
          take: event.data.take,
          sort: event.data.sort,
        });
      }


    },
    rowClick(event: GridRowClickEvent) {
      this.windowVisible = true;
      this.gridClickedRow = event.dataItem;
    },
    closeWindow() {
      this.windowVisible = false;
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

dt {
  font-weight: bold;
}
</style>
