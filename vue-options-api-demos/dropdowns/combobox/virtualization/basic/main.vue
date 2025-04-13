<template>
    <combobox
          :style="{ width: '230px' }"
            :data-items="subsetData"
            :data-item-key="'id'"
            :text-field="'text'"
            :virtual="virtual"
            @pagechange="pageChange"
            :popup-settings="popupSettings"
    ></combobox>
</template>
<script>
import { ComboBox } from '@progress/kendo-vue-dropdowns';

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
            popupSettings: {
                height: '250px'
            }
        }
    },
    computed: {
        virtual: function(){
            return {
                total: total,
                pageSize: pageSize,
                skip: this.skip
            }
        }
    },
    methods: {
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
