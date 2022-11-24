<template>
  <div id="app">
    <grid :data-items="dataResult" :pageable="pageable" :sortable="sortable" :sort="sort" :take="take" :skip="skip"
      :columns="columns" @datastatechange="dataStateChange" @rowclick="rowClick" :style="{ height: '400px' }">
      <template v-slot:discontinuedTemplate="{ props }">
        <td :colspan="1">
          <KCheckBox :checked="props.dataItem.Discontinued" :disabled="true" />
        </td>
      </template>
    </grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { productsData } from '../appdata/products';
import { process, DataResult, State, CompositeFilterDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { Grid as grid, GridDataStateChangeEvent, GridRowClickEvent, GridColumnProps } from '@progress/kendo-vue-grid';
import { Checkbox as KCheckBox } from '@progress/kendo-vue-inputs';


const emit = defineEmits(['rowClick'])
const props = defineProps({
  category: { type: Number, default: null },
})


onMounted(() => {
  const dataState: State = {
    skip: skip.value,
    take: take.value,
    sort: sort.value,
  };
  dataResult.value = process(products, dataState);
});

const products = productsData;
const pageable = ref(true);
const sortable = ref(true);
const skip = ref<number | undefined>(0);
const take = ref<number | undefined>(10);
const sort = ref<SortDescriptor[] | undefined>([
  { field: "ProductName", dir: "asc" }
]);
const filter = ref<CompositeFilterDescriptor>({ logic: "and", filters: [] });

watch(() => props.category, () => handleDropDownChange())

const handleDropDownChange = () => {
  if (props.category !== null) {
    filter.value = {
      logic: 'and',
      filters: [{ field: 'CategoryID', operator: 'eq', value: props.category }]
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

const columns = [
  { field: 'ProductName', title: 'Product Name' },
  { field: 'UnitPrice', title: 'Price' },
  { field: 'UnitsInStock', title: 'Units in Stock' },
  { field: 'Discontinued', cell: 'discontinuedTemplate' }
] as GridColumnProps[];

const dataResult = ref<DataResult>({ data: [] as any, total: 0 });

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
  const windowVisible = true;
  const gridClickedRow = event.dataItem;
  emit('rowClick', { windowVisible, gridClickedRow })
};
</script>

<style scoped>

</style>
