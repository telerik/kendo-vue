<template>
  <div>
    <p>Custom values are <strong>enabled</strong>. Type a custom value.</p>
    <p>primitive data</p>
    <div class="example-wrapper">
      <ComboBox
        :style="{ width: '230px' }"
        :data-items="sizes"
        v-model="value"
        :allow-custom="true"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ComboBox } from '@progress/kendo-vue-dropdowns';

const sizes = ref(['Small', 'Medium', 'Large']);
const value = ref('Medium');
</script>
