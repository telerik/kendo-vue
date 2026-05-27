<template>
  <div id="vueapp" class="vue-app">
    <div class="example-config">
      <Calendar :value="value" @change="onChange" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Calendar } from '@progress/kendo-vue-dateinputs';
import { provideIntlService } from '@progress/kendo-vue-intl';

const value = ref(null);

onMounted(() => {
    setTimeout(() => {
        const date = '2016-01-04';
        value.value = provideIntlService(this).parseDate(date);
    }, 1000);
});

function onChange(event) {
    value.value = event.value;
}
</script>
