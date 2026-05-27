<template>
  <div>
    <p>Custom values are <strong>enabled</strong>. Type a custom value.</p>
    <p>ComboBox value: {{ JSON.stringify(value) }}</p>
    <div class="example-wrapper">
      <ComboBox
        :style="{ width: '230px' }"
        :data-items="sizes"
        :text-field="'text'"
        :data-item-key="'id'"
        :value="value"
        @change="onChange"
        :allow-custom="true"
      ></ComboBox>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ComboBox } from '@progress/kendo-vue-dropdowns';

const sizes = ref([
    { id: 1, text: 'Small' },
    { id: 2, text: 'Medium' },
    { id: 3, text: 'Large' },
]);
const value = ref({ id: 2, text: 'Medium' });

function onChange(event) {
    let newValue = event.target.value;

    if (newValue && newValue.id === undefined) {
        newValue = {
            ...newValue,
            id: new Date().getTime(),
        };
    }

    value.value = newValue;
}
</script>
