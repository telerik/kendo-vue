<template>
  <div>
    <RadioGroup
      :default-value="dataItems[2].value"
      :data-items="dataItems"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RadioGroup } from '@progress/kendo-vue-inputs';

const dataItems = ref([
    {
        label: "Female",
        value: "female",
    },
    {
        label: "Male",
        value: "male",
    },
    {
        label: "Other",
        value: "other",
    },
]);
</script>
