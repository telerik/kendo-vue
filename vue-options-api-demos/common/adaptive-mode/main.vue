<template>
    <div>
      <div>T-shirt size:</div>
        <AdaptiveModeProvider
            :small="800"
            :medium="1200"
        >
            <ComboBox
                :data-items="data"
                :text-field="'text'"
                :data-item-key="'id'"
                :filterable="true"
                :adaptive="true"
                :adaptive-title="'Choose size'"
                :style="{ width: '300px' }"
                @filterchange="handleFilterchange"
            />
        </AdaptiveModeProvider>
    </div>
</template>
<script>
import { AdaptiveModeProvider } from "@progress/kendo-vue-common";
import { ComboBox } from "@progress/kendo-vue-dropdowns";
import { filterBy } from '@progress/kendo-data-query';

const allData = [
    {
        id: 1,
        text: "Small",
    },
    {
        id: 2,
        text: "Medium",
    },
    {
        id: 3,
        text: "Large",
    },
]

export default {
    components: {
        ComboBox,
        AdaptiveModeProvider
    },
    data() {
        return {
            data: allData,
        };
    },
    methods: {
        filterData(filter) {
            const filteredData = allData.slice();
            return filterBy(filteredData, filter);
        },
        handleFilterchange(event) {
            this.data = this.filterData(event.filter)
        }
    },
};
</script>
