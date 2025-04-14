<template>
  <ListView
    :style="{ width: '100%', height: '600px' }"
    :data-items="products"
    :item="'myItem'"
  >
    <template v-slot:myItem="{ props }">
      <div
        class="k-listview-item"
        :style="{ padding: '10px', borderBottom: '1px solid lightgrey' }"
      >
        <strong>[{{ props.dataItem.ProductID }}]:</strong>
        <span class="product-name">{{ props.dataItem.ProductName }}</span>
        <span class="item-position"
          >({{
            isFirst(props.dataItem.ProductID)
              ? 'first'
              : isLast(props.dataItem.ProductID)
              ? 'last'
              : 'mid'
          }})</span
        >
      </div>
    </template>
  </ListView>
</template>
<script>
import { ListView } from '@progress/kendo-vue-listview';
import products from './products.json';

export default {
  components: {
    ListView,
  },
  data() {
    return {
      products: products,
    };
  },
  methods: {
    isFirst(ProductID) {
      return ProductID === 1;
    },
    isLast(ProductID) {
      return ProductID === this.products.length;
    },
  },
};
</script>

<style>
.k-listview {
  font-family: sans-serif;
  height: 340px;
}
.product {
  padding: 8px;
  width: 100%;
}
.product-name {
  margin: 0 4px;
}
.item-position {
  font-style: italic;
}
</style>
