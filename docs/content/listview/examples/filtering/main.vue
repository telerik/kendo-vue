<template>
  <div>
    <Filter :value="filter" @change="onFilterChange" :fields="filterFields" />
    <ListView
      :data-items="dataItems"
      item="ItemRender"
      :style="{ width: '100%' }"
    >
      <template #ItemRender="{ props }">
        <Card
          :style="{ height: '110px', margin: '20px', border: 'none' }"
          orientation="horizontal"
        >
          <CardImage
            :src="`${baseUrl}${props.dataItem.ProductID}.jpg`"
            :style="{ height: '110px' }"
          />
          <div :style="{ width: '40%' }">
            <CardTitle :style="{ fontSize: '16px' }">
              {{ props.dataItem.ProductName }}
            </CardTitle>
            <CardSubtitle :style="{ fontSize: '14px' }">
              {{ props.dataItem.Category.CategoryName }}
            </CardSubtitle>
          </div>
          <CardBody>
            <div>
              Price: {{ getFormattedPrice(props.dataItem.UnitPrice) }}
            </div>
            <div>Available units: {{ props.dataItem.UnitsInStock }}</div>
          </CardBody>
        </Card>
      </template>
    </ListView>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ListView } from '@progress/kendo-vue-listview';
import {
    Card,
    CardTitle,
    CardImage,
    CardSubtitle,
    CardBody,
} from '@progress/kendo-vue-layout';
import {
    Filter,
    Operators,
    TextFilter,
    NumericFilter,
    BooleanFilter,
} from '@progress/kendo-vue-data-tools';
import { filterBy } from '@progress/kendo-data-query';
import { provideIntlService } from '@progress/kendo-vue-intl';
import products from './products.json';

const baseUrl =
  (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') +
  'assets/listview/products/';

const productsRef = ref(products);
const filter = ref({
    logic: 'and',
    filters: [
        { field: 'UnitPrice', operator: 'gt', value: 20 },
        { field: 'UnitPrice', operator: 'lt', value: 50 },
        { field: 'Discontinued', operator: 'eq', value: false },
        {
            logic: 'or',
            filters: [
                { field: 'ProductName', operator: 'contains', value: 'organic' },
                { field: 'ProductName', operator: 'contains', value: 'cranberry' },
            ],
        },
    ],
});

const filterFields = [
    {
        name: 'ProductName',
        label: 'Name',
        filter: TextFilter,
        operators: Operators.text,
    },
    {
        name: 'UnitPrice',
        label: 'Price',
        filter: NumericFilter,
        operators: Operators.numeric,
    },
    {
        name: 'Discontinued',
        label: 'Discontinued',
        filter: BooleanFilter,
        operators: Operators.boolean,
    },
];

const dataItems = computed(() => filterBy(productsRef.value, filter.value));

function onFilterChange(ev) {
    filter.value = ev.filter;
}

function getFormattedPrice(price) {
    return provideIntlService({}).formatNumber(price, 'c');
}
</script>

<style>
.k-card-image {
  margin-right: 6px;
}
</style>
