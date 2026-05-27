<template>
  <div class="example-wrapper">
    <div class="example-config">
      <input
        id="ac"
        type="checkbox"
        class="k-checkbox k-checkbox-md k-rounded-md"
        v-model="allowCustom"
      />
      <label class="k-checkbox-label" for="ac">Allow custom values</label>
    </div>
    <div>
      <div>Favorite sport:</div>
      <ComboBox
        :style="{ width: '230px' }"
        :data-items="sports"
        :allow-custom="allowCustom"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ComboBox } from '@progress/kendo-vue-dropdowns';

const sports = ref([
    'Baseball',
    'Basketball',
    'Cricket',
    'Field Hockey',
    'Football',
    'Table Tennis',
    'Tennis',
    'Volleyball',
]);
const allowCustom = ref(true);
</script>
