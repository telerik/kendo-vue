<template>
  <div class="example-wrapper">
    <div>
      <div>T-shirt sizes: {{ value }}</div>
      <MultiSelect
        :style="{ width: '230px' }"
        :data-items="sizes"
        :value="value"
        @change="onChange"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { MultiSelect } from "@progress/kendo-vue-dropdowns";

const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
const value = ref([]);

function onChange(event) {
    value.value = [...event.target.value];
}
</script>
