<template>
  <combobox
          :style="{ width: '230px' }"
            :data-items="subsetData"
            :data-item-key="'id'"
            :text-field="'text'"
            :virtual="virtual"
            @pagechange="pageChange"
            :popup-settings="popupSettings"
            :filterable="true"
            @filterchange="onFilterChange"
    ></combobox>
</template>
<script>
import { ComboBox } from '@progress/kendo-vue-dropdowns';
import { filterBy } from '@progress/kendo-data-query';

const total = 5000;
const pageSize = 12;
const allData = [];

for (let i = 0; i < total; i++) {
    allData.push({ id: i, text: 'Item ' + i });
}
export default {
    components: {
        'combobox': ComboBox
    },
    data: function(){
        return {
            subsetData: allData.slice(0, pageSize),
            skip: 0,
            total: total,
            popupSettings: {
                height: '250px'
            }
        }
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
            }
        }
    },
    methods: {
        onFilterChange (event) {
            this.filteredData = filterBy(allData.slice(), event.filter);
            const data = this.filteredData.slice(0, pageSize);
    
            this.subsetData = data;
            this.skip = 0;
            this.total = this.filteredData.length;
        },
        pageChange (event) {
            const skip = event.page.skip;
            const take = event.page.take;
            const newSubsetData = allData.slice(skip, skip + take);
    
            this.subsetData = newSubsetData;
            this.skip = skip;
        }
    }
};

</script>
