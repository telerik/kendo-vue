<template>
  <ListView
    :style="{ width: '100%', height: '600px' }"
    :data-items="products"
    :item="'myItem'"
    :footer="'myFooter'"
  >
    <template v-slot:myFooter="{ props }">
      <div class="footer">
        <div class="meta">{{ products.length }} products in total</div>
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
};
</script>

<style>
.k-listview {
  font-family: sans-serif;
  height: 340px;
  border: 1px solid rgba(0, 0, 0, 0.08);
}
.product {
  width: 100%;
}
.footer {
  display: flex;
  padding: 8px 4px 8px 12px;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}
.footer .meta {
  flex: 1;
}
.reload-text {
  margin-left: 4px;
  padding-top: 1px;
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
