<template>
  <div class="example-wrapper">
    <div>
      <MultiSelect
        :style="{ width: '400px' }"
        :data-items="countries"
        :list-no-data-render="'myTemplate'"
      >
        <template #myTemplate>
          <NoDataRender />
        </template>
      </MultiSelect>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { MultiSelect } from "@progress/kendo-vue-dropdowns";
import NoDataRender from "./NoDataRender.vue";

const countries = ref([]);
</script>
