<template>
    <section>
        <p><strong>Descriptions:</strong> {{dataItem.Descriptions}}</p>
    </section>
    </template>
    <script>
    import { filterBy } from '@progress/kendo-data-query';
    import { products } from './products';
    
    export default {
        props: {
            dataItem: Object
        },
        data () {
            return {
                products: products
            }
        },
        computed: {
            getFilteredProducts() {
                const result = filterBy(this.products, {field: 'Category.CategoryID', operator: 'eq', value: this.dataItem.CategoryID});
    
                return result;
            }
        },
    }
    </script>
    