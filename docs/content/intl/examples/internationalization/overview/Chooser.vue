<template>
  <div class="col-xs-12 col-sm-12 example-col">
    <label> {{ label }}: </label>
    <DropDownList
      :style="{ width: '250px', marginLeft: '10px' }"
      :value="value"
      :data-items="options"
      @change="onChange"
    />
  </div>
</template>

<script setup>

import { DropDownList } from "@progress/kendo-vue-dropdowns";

defineProps({
    label: String,
    value: String,
    options: Array,
});

const emit = defineEmits(["change"]);

function onChange(e) {
    emit("change", e);
}
</script>
