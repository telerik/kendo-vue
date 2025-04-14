<template>
   <div>
        <div :style="{ display: 'inline-block' }">
            Categories
            <br />
             <dropdownlist
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
             <dropdownlist
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
             <dropdownlist
                :style="{ width: '230px' }"
                :disabled="!hasProduct"
                :data-items="orders"
                :text-Field="'orderName'"
                @change="orderChange"
                :default-item="defaultItemOrder"
                :value="order"
            />
        </div>
    </div>
</template>
<script>
import { dataCategories, dataProducts, dataOrders } from './data.js';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

export default {
    components: {
        'dropdownlist': DropDownList
    },
     data: function () {
        return {
            defaultItemCategory: { categoryName: 'Select Category ...' },
            defaultItemProduct: { productName: 'Select Product ...' },
            defaultItemOrder: { orderName: 'Select Order ...' },
            category: null,
            product: null,
            order: null,
            orders: dataOrders,
            products: dataProducts,
            dataCategories: dataCategories
        };
    },
    computed: {
        hasCategory: function(){
            return this.category && this.category !== this.defaultItemCategory;
        },
        hasProduct: function(){
            return this.product && this.product !== this.defaultItemProduct;
        } 
    },
    methods: {
        categoryChange(event) {
            const category = event.value;
            const products = dataProducts.filter(product => product.categoryId === category.categoryId);
    
            this.category = category;
            this.products = products;
            this.product = null;
            this.order = null;
        },
        productChange(event) {
            const product = event.value;
            const orders = dataOrders.filter(order => order.productId === product.productId);
    
            this.product = product;
            this.orders = orders;
            this.order = null;
        },
        orderChange (event) {
            this.order = event.value;
        }
    }
};

</script>
