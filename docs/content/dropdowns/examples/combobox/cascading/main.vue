<template>
  <div>
    <div :style="{ display: 'inline-block' }">
      Categories
      <br />
      <ComboBox
        :style="{ width: '230px' }"
        :data-items="categories"
        :text-field="'categoryName'"
        @change="categoryChange"
        :placeholder="'Select Category ...'"
        :value="category"
      ></ComboBox>
    </div>
    <div :style="{ display: 'inline-block', marginLeft: '30px' }">
      Products
      <br />
      <ComboBox
        :style="{ width: '230px' }"
        :disabled="!category"
        :data-items="products"
        :text-field="'productName'"
        @change="productChange"
        :placeholder="'Select Product ...'"
        :value="product"
      ></ComboBox>
    </div>
    <div :style="{ display: 'inline-block', marginLeft: '30px' }">
      Orders
      <br />
      <ComboBox
        :style="{ width: '230px' }"
        :disabled="!product"
        :data-items="orders"
        :text-field="'orderName'"
        @change="orderChange"
        :placeholder="'Select Order ...'"
        :value="order"
      ></ComboBox>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ComboBox } from '@progress/kendo-vue-dropdowns';
import { dataCategories, dataProducts, dataOrders } from './data.js';

const category = ref(null);
const product = ref(null);
const order = ref(null);
const categories = ref(dataCategories);
const products = ref(dataProducts);
const orders = ref(dataOrders);

function categoryChange(event) {
    const selectedCategory = event.target.value;
    products.value = selectedCategory
        ? dataProducts.filter((product) => product.categoryId === selectedCategory.categoryId)
        : [];

    category.value = selectedCategory;
    product.value = null;
    order.value = null;
}

function productChange(event) {
    const selectedProduct = event.target.value;
    orders.value = selectedProduct
        ? dataOrders.filter((order) => order.productId === selectedProduct.productId)
        : [];

    product.value = selectedProduct;
    order.value = null;
}

function orderChange(event) {
    order.value = event.target.value;
}
</script>
