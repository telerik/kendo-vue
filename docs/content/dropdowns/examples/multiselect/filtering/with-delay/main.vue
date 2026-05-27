<template>
  <div class="example-wrapper">
    <div>
      <MultiSelect
        :style="{ width: '300px' }"
        @filterchange="onFilterChange"
        :filterable="true"
        :data-items="countriesList"
        :loading="loading"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { MultiSelect } from "@progress/kendo-vue-dropdowns";
import countries from "./countries";
import { filterBy } from "@progress/kendo-data-query";

const delay = 500;
const countriesList = ref(countries.slice());
const loading = ref(false);
let timeout;

function onFilterChange(event) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        countriesList.value = filterBy(countries.slice(), event.filter);
        loading.value = false;
    }, delay);

    loading.value = true;
}
</script>
