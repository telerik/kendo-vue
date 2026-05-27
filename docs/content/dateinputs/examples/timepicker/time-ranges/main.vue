<template>
  <div>
    <div class="example-config">
      <p>Select a time:</p>
      <TimePicker
        :style="{ width: '230px' }"
        :min="min"
        :max="max"
        :default-value="defaultValue"
      />
    </div>
  </div>
</template>

<script setup>
import { TimePicker } from '@progress/kendo-vue-dateinputs'
import { ref } from 'vue'

const min = ref(new Date(2000, 2, 10, 2, 30))
const max = ref(new Date(2010, 2, 10, 22, 15))
const defaultValue = ref(new Date(2010, 2, 10, 10, 0))
</script>
