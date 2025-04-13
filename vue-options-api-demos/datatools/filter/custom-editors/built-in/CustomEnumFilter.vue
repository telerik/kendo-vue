<template>
 <EnumFilter
        :filter="filter"
        @filterchange="handleFilter"
        :data-items="[
                { text: 'Chai', value: 'chai' },
                { text: 'Chang', value: 'chang' },
                { text: 'Product 2', value: 'product2' },
                { text: 'Product 3', value: 'product3' },
                { text: 'Product 4', value: 'product4' },
            ]"
        :default-item="{ text: 'Choose Category ...', value: null }"
        />
</template>

<script>
import { EnumFilter } from '@progress/kendo-vue-data-tools';

export default {
    components: {
        'EnumFilter': EnumFilter,
    },
    props: {
        filter: [Array, Object]
    },
    methods: {
        handleFilter(e) {
            this.$emit('filterchange', e);
        }
    }
};

</script>

