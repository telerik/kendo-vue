<template>
  <div>
    <div class="row example-config">
      <div class="col-xs-12 example-col">
        <p>Current Universal Coordinated Time</p>
        {{ date && date.toGMTString() }}
      </div>
    </div>
    <div class="row example-config">
      <div class="col-xs-12 example-col">
        <p>
          Local time in
          <select @change="handleTimezoneChange" :value="timezone">
            <option v-for="zone in timezones" :key="zone">{{ zone }}</option>
          </select>
        </p>
        {{ result && result.toString() }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { timezoneNames, ZonedDate } from "@progress/kendo-date-math"
import "@progress/kendo-date-math/tz/all"

const timezone = ref("Europe/Sofia")
const date = ref(null)
const result = ref(null)
const timezones = ref(null)
const interval = ref(null)

const tick = () => {
    const currentDate = new Date()
    const zonedResult = ZonedDate.fromLocalDate(currentDate, timezone.value)
    date.value = currentDate
    result.value = zonedResult
}

const handleTimezoneChange = (event) => {
    timezone.value = event.target.value
}

onMounted(() => {
    timezones.value = timezoneNames()
        .filter((l) => l.indexOf("/") > -1)
        .sort((a, b) => a.localeCompare(b))

    tick()
    interval.value = setInterval(() => tick(), 1000)
})

onBeforeUnmount(() => {
    clearInterval(interval.value)
})
</script>
