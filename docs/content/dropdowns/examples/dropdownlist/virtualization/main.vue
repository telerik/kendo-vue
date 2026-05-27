<template>
  <DropDownList
    :style="{ width: '230px' }"
    :data-items="subsetData"
    :text-field="'text'"
    :data-item-key="'id'"
    :virtual="virtual"
    @pagechange="pageChange"
    :popup-settings="popupSettings"
  />
</template>

<script setup>
import { ref, computed } from "vue";
import { DropDownList } from "@progress/kendo-vue-dropdowns";

const total = 5000;
const pageSize = 12;
const allData = Array.from({ length: total }, (_, i) => ({ id: i, text: `Item ${i}` }));

const skip = ref(0);
const subsetData = ref(allData.slice(0, pageSize));
const popupSettings = ref({ height: "250px" });

const virtual = computed(() => ({
    total,
    pageSize,
    skip: skip.value,
}));

function pageChange(event) {
    const { skip: newSkip, take } = event.page;
    subsetData.value = allData.slice(newSkip, newSkip + take);
    skip.value = newSkip;
}
</script>
