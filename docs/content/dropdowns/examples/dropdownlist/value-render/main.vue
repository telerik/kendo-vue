<template>
  <div>
    <p>Type the name of a European country: </p>
    <DropDownList
      :style="{ width: '230px' }"
      :data-items="countries"
      :default-value="countries[0]"
      :value-render="'myTemplate'"
    >
      <template #myTemplate="{ props }">
        <ValueRender :value="props.value" />
      </template>
    </dropdownlist>
  </div>
</template>

<script setup>
import countries from "./countries";
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import ValueRender from "./ValueRender.vue";
</script>
