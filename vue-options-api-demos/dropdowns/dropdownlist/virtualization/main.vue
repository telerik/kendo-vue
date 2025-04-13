<template>
   <dropdownlist
            :style="{ width: '230px' }"
            :data-items="subsetData"
            :text-field="'text'"
            :data-item-key="'id'"
            :virtual="virtual"
            @pagechange="pageChange"
            :popup-settings="popupSettings"
        >
      </dropdownlist>
</template>
<script>
import { DropDownList } from '@progress/kendo-vue-dropdowns';

export default {
    components: {
        'dropdownlist': DropDownList
    },
    data: function () {
        return {
            allData: [],
            subsetData: [],
            total: 5000,
            pageSize: 12,
            skip: 0,
            popupSettings: {
                height: '250px'
            }
        };
    },
      created() {
        for (let i = 0; i < this.total; i++) {
            this.allData.push({ id: i, text: 'Item ' + i });
        }
        this.subsetData = this.allData.slice(0, this.pageSize);
    },
    computed: {
        virtual: function() {
            return {
                pageSize: this.pageSize,
                skip: this.skip,
                total: this.total
            };
        }
    },
    methods: {
         pageChange(event) {
            const skip = event.page.skip;
            const take = event.page.take;
            const newSubsetData = this.allData.slice(skip, skip + take);
            this.subsetData = newSubsetData;
            this.skip = skip;
        }
    }
};

</script>
