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

<script setup>
import { AdaptiveModeProvider } from "@progress/kendo-vue-common";
import { ComboBox } from "@progress/kendo-vue-dropdowns";
import { filterBy } from '@progress/kendo-data-query';
import { ref } from 'vue';

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
];

const data = ref(allData);

const filterData = (filter) => {
    const filteredData = allData.slice();
    return filterBy(filteredData, filter);
};

const handleFilterchange = (event) => {
    data.value = filterData(event.filter);
};
</script>
