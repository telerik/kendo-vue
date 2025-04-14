<template>
<div>
    <GridColumnMenuCheckboxFilter
      :column="column"
      :filter="filter"
      :filterable="filterable"
      :unique-data="uniqueData"
      :search-box="false"
      :data-items="products" :expanded="true"
      @filterchange="filterChange"
      @expandchange="expandChange"
      @closemenu="closeMenu"/>
</div>
</template>
<script>
import { GridColumnMenuCheckboxFilter } from '@progress/kendo-vue-grid';
import { products } from './products';

export default {
    props: {
        column: Object,
        filter: Object,
        filterable: Boolean,
        uniqueData: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            products: products
        };
    },
    components: {
        'GridColumnMenuCheckboxFilter': GridColumnMenuCheckboxFilter
    },
    methods: {
        expandChange () {
            this.$emit('expandchange');
        },
        closeMenu () {
            this.$emit('closemenu');
        },
        filterChange (newDescriptor, e) {
            this.$emit('filterchange', newDescriptor, e);
        }
    }
}
</script>
