<template>
    <div class="example-wrapper">
            <div>
                <div>Favorite sports:</div>
                <multiselect :style="{ width: '230px' }"
                    :data-items="subsetData"
                    :text-field="'text'"
                    :data-item-key="'id'"
                    :virtual="virtual"
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

const total = 5000;
const pageSize = 11;
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
            skip: 0
        };
    },
    computed: {
        virtual () {
            return {
                total: total,
                pageSize: pageSize,
                skip: this.skip
            };
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
