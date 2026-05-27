<template>
  <div class="example-wrapper">
    <p>Type the name of a European country:</p>
    <ComboBox
      :style="{ width: '230px' }"
      :data-items="countries"
      :value="value"
      :text-field="'text'"
      @change="onChange"
    ></ComboBox>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ComboBox } from '@progress/kendo-vue-dropdowns';

const countries = ref([
    { text: 'Albania', id: 'Alb' },
    { text: 'Andorra', id: 'And' },
    { text: 'Armenia', id: 'Arm' },
    { text: 'Austria', id: 'Aus' },
    { text: 'Azerbaijan', id: 'Aze' },
]);
const value = ref(null);

function onChange(event) {
    value.value = event.target.value;
}
</script>
