<template>
  <div>
    <div class="example-config">
      <p>TimePicker value: {{ departureTime }}</p>
    </div>
    <label>
      Select Birthdate:
      <TimePicker
        :style="{ width: '230px' }"
        :value="departureTime"
        @change="handleChange"
      />
    </label>
  </div>
</template>

<script setup>
import { TimePicker } from '@progress/kendo-vue-dateinputs'
import { provideIntlService } from '@progress/kendo-vue-intl'
import { ref, onMounted } from 'vue'

const departureTime = ref(null)

const handleChange = (event) => {
    departureTime.value = event.target.value
}

onMounted(() => {
    setTimeout(() => {
        const date = '2017-06-27 14:30'
        departureTime.value = provideIntlService().parseDate(date, 'yyyy-MM-dd HH:mm')
    }, 1000)
})
</script>
