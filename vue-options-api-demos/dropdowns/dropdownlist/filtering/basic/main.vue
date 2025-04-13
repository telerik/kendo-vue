<template>
   <div>
         <dropdownlist
           :style="{ width: '230px' }" 
            :data-items='items'
            :text-field="'text'"
            :filterable="true"
            @filterchange="filterChange"
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
export default {
    components: {
        'dropdownlist': DropDownList
    },
   data: function () {
        return {
            items: allData.slice()
        };
    },
    methods: {
        filterChange (event) {
            this.items = this.filterData(event.filter);
        },
        filterData(filter) {
            const data = allData.slice();
            return filterBy(data, filter);
        }
    }
};

</script>
