<template>
  <div class="example-wrapper">
    <div>
      <MultiSelect
        :style="{ width: '300px' }"
        @filterchange="onFilterChange"
        :filterable="true"
        :data-items="countriesList"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { MultiSelect } from "@progress/kendo-vue-dropdowns";
import { filterBy } from "@progress/kendo-data-query";
import countries from "./countries";

const countriesList = ref(countries.slice());

function onFilterChange(event) {
    countriesList.value = filterBy(countries.slice(), event.filter);
}
</script>
