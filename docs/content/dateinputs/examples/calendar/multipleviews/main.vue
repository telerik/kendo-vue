<template>
  <div id="vueapp" class="vue-app">
    <div class="example-config">
      Number of rendered views: &nbsp;
      <NumericTextBox
        :style="{ width: '230px' }"
        :min="1"
        :max="10"
        @change="handleInputChange"
        :value="views"
      />
    </div>
    <Calendar :views="views" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Calendar } from '@progress/kendo-vue-dateinputs';
import { NumericTextBox } from '@progress/kendo-vue-inputs';

const views = ref(2);

function handleInputChange(event) {
    if (!event.target.value || event.target.value < 11) {
        views.value = event.target.value;
    }
}
</script>
