<template>
  <ListView
    :style="{ width: '100%', height: '600px' }"
    :data-items="dataItems"
    :item="'myItem'"
    :header="'myHeader'"
  >
    <template v-slot:myHeader="{ props }">
      <div class="listview-header">
        <div class="listview-title">Inventory</div>
        <KInput
          :class="'filter-input'"
          :placeholder="'Filter items...'"
          :input-suffix="'suffix'"
          @input="handleFilterChange"
        >
          <template v-slot:suffix>
            <span class="k-input-icon k-icon k-i-search"></span>
          </template>
        </KInput>
      </div>
    </template>
    <template v-slot:myItem="{ props }">
      <div class="product">
        <div class="description">
          <div class="product-name">{{ props.dataItem.ProductName }}</div>
          <div class="category-name">
            {{ props.dataItem.Category.CategoryName }}
          </div>
        </div>
        <div class="price">
          <div>${{ props.dataItem.UnitPrice }}</div>
        </div>
      </div>
    </template>
  </ListView>
</template>
<script>
import { ListView } from '@progress/kendo-vue-listview';
import { Input } from '@progress/kendo-vue-inputs';
import { filterBy } from '@progress/kendo-data-query';
import products from './products.json';

export default {
    components: {
        ListView,
        KInput: Input,
    },
    data() {
        return {
            products: products,
            filter: null,
        };
    },
    computed: {
        dataItems() {
            return filterBy(this.products, this.filter);
        },
    },
    methods: {
        handleFilterChange(ev) {
            this.filter = {
                logic: 'or',
                filters: [
                    { field: 'ProductName', operator: 'contains', value: ev.value },
                    { field: 'CategoryName', operator: 'contains', value: ev.value },
                ],
            };
        },
    },
};
</script>

<style scoped>
.k-listview {
  font-family: sans-serif;
  height: 340px;
  border: 1px solid rgba(0, 0, 0, 0.08);
}
.product {
  width: 100%;
}
.listview-header {
  display: flex;
  padding: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
.listview-title {
  flex: 1;
  font-size: 22px;
  font-weight: bold;
}
.filter-input {
  width: 200px;
}
.product {
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #ebebeb;
  border-bottom-style: solid;
}
.description {
  flex: 1;
}
.category-name {
  font-size: 12px;
}
.product-name {
  font-size: 16px;
}
.product-name,
.price {
  height: auto;
  font-weight: bold;
}
.product {
  padding: 12px;
}
</style>
