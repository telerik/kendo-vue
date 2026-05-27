<template>
  <div>
    <div class="example-config">Selected Value: {{ value }}</div>
    <div :style="{ display: 'inline-block', 'padding-right': '20px' }">
      value and change
      <br />
      <ComboBox
        :style="{ width: '230px' }"
        :data-items="sports"
        :text-field="'text'"
        :data-item-key="'id'"
        :value-field="'id'"
        :value-primitive="true"
        :value="value"
        @change="handleChange"
      ></ComboBox>
    </div>
    <div :style="{ display: 'inline-block' }">
      v-model
      <br />
      <ComboBox
        :style="{ width: '230px' }"
        :data-items="sports"
        :text-field="'text'"
        :data-item-key="'id'"
        :value-field="'id'"
        :value-primitive="true"
        v-model="value"
      ></ComboBox>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ComboBox } from '@progress/kendo-vue-dropdowns';

const value = ref(2);
const sports = ref([
    { text: 'Basketball', id: 1 },
    { text: 'Football', id: 2 },
    { text: 'Tennis', id: 3 },
    { text: 'Volleyball', id: 4 },
]);

function handleChange(event) {
    value.value = event.value;
}
</script>
