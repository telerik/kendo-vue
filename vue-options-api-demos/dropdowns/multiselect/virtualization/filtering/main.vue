<template>
     <div class="example-wrapper">
            <div>
                <div>Favorite sports:</div>
                <multiselect :style="{ width: '230px' }"
                    :data-items="subsetData"
                    :text-field="'text'"
                    :data-item-key="'id'"
                    :virtual="virtual"
                    :filterable="true"
                    @filterchange="onFilterChange"
                    @pagechange="pageChange"
                    :popup-settings="{
                        height: '250px'
                    }"
                ></multiselect>
            </div>
        </div>
</template>
<script>
import { MultiSelect } from '@progress/kendo-vue-dropdowns';
import { filterBy } from '@progress/kendo-data-query';
const total = 5000;
const pageSize = 10;
const allData = [];

for (let i = 0; i < total; i++) {
    allData.push({ id: i, text: 'Item ' + i });
}

export default {
    components: {
        'multiselect': MultiSelect
    },
   data () {
        return {
            subsetData: allData.slice(0, pageSize),
            skip: 0,
            total: total
        };
    },
    created(){
        this.filteredData = [ ...allData ];
    },
    computed: {
        virtual () {
            return {
                total: this.total,
                pageSize: pageSize,
                skip: this.skip
            };
        }
    },
    methods: {
        onFilterChange (event) {
            const filter = event.filter;
            this.filteredData = filterBy(allData.slice(), filter);
    
            const data = this.filteredData.slice(0, pageSize);
    
            this.subsetData = data;
            this.skip = 0;
            this.total = this.filteredData.length;
        },
        pageChange (event) {
            const skip = event.page.skip;
            const take = event.page.take;
            const newSubsetData = this.filteredData.slice(skip, skip + take);
    
            this.subsetData = newSubsetData;
            this.skip = skip;
        }
    }
};

</script>
