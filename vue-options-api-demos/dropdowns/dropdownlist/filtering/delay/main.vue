<template>
  <div>
         <dropdownlist
            :style="{ width: '230px' }" 
            :data-items='items'
            :text-field="'text'"
            :filterable="true"
            @filterchange="filterChange"
            :loading="loading"
        ></dropdownlist>
    </div>
</template>
<script>
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { filterBy } from '@progress/kendo-data-query';

const allData = [
    { id: 1, text: "Small" },
    { id: 2, text: "Medium" },
    { id: 3, text: "Large" }
];
const delay = 500;

export default {
    components: {
        'dropdownlist': DropDownList
    },
     data: function () {
        return {
            items: allData.slice(),
            loading: false
        };
    },
    methods: {
        filterChange(event) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.items = this.filterData(event.filter);
                this.loading = false;
            }, delay);
    
            this.loading = true;
        },
        filterData(filter) {
            const data = allData.slice();
            return filterBy(data, filter);
        }
    }
};

</script>
