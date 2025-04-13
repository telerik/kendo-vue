<template>
  <div>
    <Filter :value="filter" @change="onFilterChange" :fields="filterFields" />
    <ListView
      :data-items="dataItems"
      :item="'ItemRender'"
      :style="{ width: '100%' }"
    >
      <template v-slot:ItemRender="{ props }">
        <Card
          :style="{ height: '110px', margin: '20px', border: 'none' }"
          :orientation="'horizontal'"
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
              Price:{{ ' ' }}
              {{ getFormattedPrice(props.dataItem.UnitPrice) }}
            </div>
            <div>Available units: {{ props.dataItem.UnitsInStock }}</div>
          </CardBody>
        </Card>
      </template>
    </ListView>
  </div>
</template>
<script>
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

const baseUrl = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/listview/products/';

export default {
  components: {
    ListView,
    Card,
    CardTitle,
    CardImage,
    CardSubtitle,
    CardBody,
    Filter,
  },
  computed: {
    dataItems() {
      return filterBy(this.products, this.filter);
    },
  },
  inject: {
    kendoIntlService: { default: null },
  },
  data() {
    return {
      baseUrl,
      products: products,
      filterFields: [
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
      ],
      filter: {
        logic: 'and',
        filters: [
          { field: 'UnitPrice', operator: 'gt', value: 20 },
          { field: 'UnitPrice', operator: 'lt', value: 50 },
          { field: 'Discontinued', operator: 'eq', value: false },
          {
            logic: 'or',
            filters: [
              { field: 'ProductName', operator: 'contains', value: 'organic' },
              {
                field: 'ProductName',
                operator: 'contains',
                value: 'cranberry',
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    onFilterChange(ev) {
      this.filter = ev.filter;
    },
    getFormattedPrice(price) {
      return provideIntlService(this).formatNumber(price, 'c');
    },
  },
};
</script>

<style>
.k-card-image {
  margin-right: 6px;
}
</style>
