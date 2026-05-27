<template>
  <div class="example-wrapper">
    <div>
      <div>T-shirt size: {{ value }}</div>
      <DropDownList
        :style="{ width: '230px' }"
        :data-items="sizes"
        :value="value"
        @change="onChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

const sizes = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];
const value = ref(null);

function onChange(event) {
    value.value = event.target.value;
}
</script>
