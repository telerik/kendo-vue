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
import { ref, onMounted, defineComponent } from 'vue';
import { productsData } from './appdata/products';
import { categoriesData } from './appdata/categories';
import { process, DataResult, State, CompositeFilterDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { Grid, GridDataStateChangeEvent, GridRowClickEvent, GridColumnProps } from '@progress/kendo-vue-grid';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-vue-dropdowns';
import { Window } from '@progress/kendo-vue-dialogs';

export default defineComponent({
  components: {
    dropdownlist: DropDownList,
    grid: Grid,
    window: Window
  },
  setup() {
    onMounted(() => {
      const dataState: State = {
        skip: skip.value,
        take: take.value,
        sort: sort.value,
      };
      dataResult.value = process(products, dataState);
    });

    const categories = categoriesData;
    const products = productsData;
    const defaultItems = { CategoryID: null, CategoryName: "Product categories" };
    const dropdownlistCategory = ref(null);
    const pageable = ref(true);
    const sortable = ref(true);
    const skip = ref<number | undefined>(0);
    const take = ref<number | undefined>(10);
    const sort = ref<SortDescriptor[] | undefined>([
      { field: "ProductName", dir: "asc" }
    ]);

    const filter = ref<CompositeFilterDescriptor>({logic: "and", filters: []});


    const columns = [
      { field: 'ProductName', title: 'Product Name' },
      { field: 'UnitPrice', title: 'Price' },
      { field: 'UnitsInStock', title: 'Units in Stock' },
      { field: 'Discontinued', cell: 'discontinuedTemplate' }
    ] as GridColumnProps[];

    const dataResult = ref<DataResult>({ data: [] as any, total: 0 });
    const gridClickedRow = ref({});
    const windowVisible = ref(false);

    const handleDropDownChange = (e: DropDownListChangeEvent) => {
      dropdownlistCategory.value = e.target.value.CategoryID;
      if (e.target.value.CategoryID !== null) {
        filter.value = {
          logic: 'and',
          filters: [{ field: 'CategoryID', operator: 'eq', value: e.target.value.CategoryID }]
        }
        skip.value = 0
      } else {
        filter.value = {} as CompositeFilterDescriptor
        skip.value = 0
      };

      const event: GridDataStateChangeEvent = {
        data: {
          skip: skip.value,
          take: take.value,
          sort: sort.value,
          filter: filter.value
        }
      };
      dataStateChange(event);
    };

    const createAppState = (dataState: State) => {
      take.value = dataState.take;
      skip.value = dataState.skip;
      sort.value = dataState.sort;
    };

    const dataStateChange = (event: GridDataStateChangeEvent) => {
      createAppState(event.data);
      if (event.data.filter !== undefined && event.data.filter.logic) {
        dataResult.value = process(products, {
          skip: event.data.skip,
          take: event.data.take,
          sort: event.data.sort,
          filter: event.data.filter
        });
      } else {
        dataResult.value = process(products, {
          skip: event.data.skip,
          take: event.data.take,
          sort: event.data.sort,
        });
      }
    };

    const rowClick = (event: GridRowClickEvent) => {
      windowVisible.value = true;
      gridClickedRow.value = event.dataItem;
    };

    const closeWindow = () => {
      windowVisible.value = false;
    }

    return {
      dropdownlistCategory, categories, defaultItems,
      pageable, sortable, dataResult, columns,
      sort, take, skip, gridClickedRow, windowVisible,
      dataStateChange, handleDropDownChange, rowClick, closeWindow,
    }
  }

})
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