<template>
  <div>
    <div :style="{ display: 'inline-block' }">
      Categories
      <br />
      <DropDownList
        :style="{ width: '230px' }"
        :data-items="dataCategories"
        :text-field="'categoryName'"
        @change="categoryChange"
        :default-item="defaultItemCategory"
        :value="category"
      />
    </div>
    <div :style="{ display: 'inline-block', marginLeft: '30px' }">
      Products
      <br />
      <DropDownList
        :style="{ width: '230px' }"
        :disabled="!hasCategory"
        :data-items="products"
        :text-field="'productName'"
        @change="productChange"
        :default-item="defaultItemProduct"
        :value="product"
      />
    </div>
    <div :style="{ display: 'inline-block', marginLeft: '30px' }">
      Orders
      <br />
      <DropDownList
        :style="{ width: '230px' }"
        :disabled="!hasProduct"
        :data-items="orders"
        :text-field="'orderName'"
        @change="orderChange"
        :default-item="defaultItemOrder"
        :value="order"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { dataCategories, dataProducts, dataOrders } from './data.js';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

const defaultItemCategory = { categoryName: 'Select Category ...' };
const defaultItemProduct = { productName: 'Select Product ...' };
const defaultItemOrder = { orderName: 'Select Order ...' };

const category = ref(null);
const product = ref(null);
const order = ref(null);

const orders = ref(dataOrders);
const products = ref(dataProducts);

const hasCategory = computed(() => category.value && category.value !== defaultItemCategory);
const hasProduct = computed(() => product.value && product.value !== defaultItemProduct);

function categoryChange(event) {
    const selectedCategory = event.value;
    products.value = dataProducts.filter(
        (product) => product.categoryId === selectedCategory.categoryId
    );

    category.value = selectedCategory;
    product.value = null;
    order.value = null;
}

function productChange(event) {
    const selectedProduct = event.value;
    orders.value = dataOrders.filter(
        (order) => order.productId === selectedProduct.productId
    );

    product.value = selectedProduct;
    order.value = null;
}

function orderChange(event) {
    order.value = event.value;
}
</script>
