<template>
  <div class="example-wrapper">
    <div>
      <div>Favorite sports:</div>
      <MultiSelect
        :style="{ width: '230px' }"
        :data-items="subsetData"
        :text-field="'text'"
        :data-item-key="'id'"
        :virtual="virtual"
        @pagechange="pageChange"
        :popup-settings="{ height: '250px' }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { MultiSelect } from "@progress/kendo-vue-dropdowns";

const total = 5000;
const pageSize = 11;
const allData = Array.from({ length: total }, (_, i) => ({
    id: i,
    text: `Item ${i}`,
}));

const subsetData = ref(allData.slice(0, pageSize));
const skip = ref(0);

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
