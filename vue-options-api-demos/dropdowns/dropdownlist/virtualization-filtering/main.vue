<template>
  <dropdownlist
          :style="{ width: '230px' }"
        :data-items="subsetData"
        :data-item-key="'id'"
        :text-field="'text'"
        :filterable="true"
        @filterchange="onFilterChange"
        :virtual="virtual"
        :popup-settings="popupSettings"
        @pagechange="pageChange"
    >
    </dropdownlist>
</template>
<script>
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { filterBy } from '@progress/kendo-data-query';

const total = 5000;
const pageSize = 11;
const allData = [];

for (let i = 0; i < total; i++) {
    allData.push({ id: i, text: 'Item ' + i });
}

export default {
    components: {
        'dropdownlist': DropDownList
    },
    data: function () {
        return { 
            filteredData: [],
            skip: 0,
            total: total,
            subsetData: allData.slice(0, pageSize),
            popupSettings: {
                height: '210px'
            }
        };
    },
    created(){
        this.filteredData = allData.slice();
    },
    computed: {
        virtual: function(){
            return {
                total: this.total,
                pageSize: pageSize,
                skip: this.skip
            };
        }
    },
    methods: {
        onFilterChange: function(event) {
            this.filteredData = filterBy(allData.slice(), event.filter);
    
            const data = this.filteredData.slice(0, pageSize);
    
            this.subsetData= data;
            this.skip = 0;
            this.total = this.filteredData.length;
        },
        pageChange: function(event) {
            const skip = event.page.skip;
            const take = event.page.take;
            const newSubsetData = this.filteredData.slice(skip, skip + take);
    
            this.subsetData = newSubsetData;
            this.skip = skip;
        }
    }
};

</script>
