<template>
  <div class="example-config">
    <DatePicker
      :style="{ width: '230px' }"
      :value="value"
      @change="onChange"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { DatePicker } from '@progress/kendo-vue-dateinputs';
import { provideIntlService } from '@progress/kendo-vue-intl';

const value = ref(null);

const onChange = (event) => {
    value.value = event.value;
};

onMounted(() => {
    setTimeout(() => {
        const date = '2016-01-04';
        value.value = provideIntlService().parseDate(date);
    }, 1000);
});
</script>
