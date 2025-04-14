<template>
   <div>
        <div :style="{ display: 'inline-block' }">
            Categories
            <br />
             <combobox
          :style="{ width: '230px' }"
                :data-items="categories"
                :text-field="'categoryName'"
                @change="categoryChange"
                :placeholder="'Select Category ...'"
                :value="category"
            ></combobox>
        </div>
        <div :style="{ display: 'inline-block', marginLeft: '30px' }">
            Products
            <br />
             <combobox
          :style="{ width: '230px' }"
                :disabled="!category"
                :data-items="products"
                :text-field="'productName'"
                @change="productChange"
                :placeholder="'Select Product ...'"
                :value="product"
            ></combobox>
        </div>
        <div :style="{ display: 'inline-block', marginLeft: '30px' }">
            Orders
            <br />
             <combobox
          :style="{ width: '230px' }"
                :disabled="!product"
                :data-items="orders"
                :text-field="'orderName'"
                @change="orderChange"
                :placeholder="'Select Order ...'"
                :value="order"
            ></combobox>
        </div>
    </div>
</template>
<script>
import { ComboBox } from '@progress/kendo-vue-dropdowns';
import { dataCategories, dataProducts, dataOrders } from './data.js';

export default {
    components: {
        'combobox': ComboBox
    },
    data: function(){
        return {
            category: null,
            product: null,
            order: null,
            orders: dataOrders,
            products: dataProducts,
            categories: dataCategories
        }
    },
    methods: {
        categoryChange(event) {
            const category = event.target.value;
            const products = category ? dataProducts.filter(product => product.categoryId === category.categoryId) : [];
    
            this.category = category;
            this.products = products;
            this.product = null;
            this.order = null;
        },
        productChange(event) {
            const product = event.target.value;
            const orders = product ? dataOrders.filter(order => order.productId === product.productId) : [];

            this.product = product;
            this.orders = orders;
            this.order = null;
        },
        orderChange(event) {
            this.order = event.target.value;
        }
    }
};

</script>
