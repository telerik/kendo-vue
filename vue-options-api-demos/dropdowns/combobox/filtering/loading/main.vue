<template>
    <combobox
          :style="{ width: '230px' }"
        :data-items="items"
        :text-field="'text'"
        :filterable="true"
        @filterchange="filterChange"
        :loading="loading"
    ></combobox>
</template>
<script>
import { ComboBox } from '@progress/kendo-vue-dropdowns';
import { filterBy } from '@progress/kendo-data-query';

const source = [
    { text: "Small", id: 1 },
    { text: "Medium", id: 2 },
    { text: "Large", id: 3 }
];
const delay = 500;

export default {
    components: {
        'combobox': ComboBox
    },
    data: function(){
        return {
            items: source.slice(),
            loading: false
        }
    },
    methods: {
        filterChange (event) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.items = this.filterData(event.filter);
                this.loading = false;
            }, delay);

            this.loading = true;
        },
        filterData(filter) {
            const data = source.slice();
            return filterBy(data, filter);
        }
    }
};

</script>
