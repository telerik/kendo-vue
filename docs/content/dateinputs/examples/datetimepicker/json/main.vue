<template>
  <div>
    <div class="example-config">
      <p>TimePicker value: {{ `${departureTime}` }}</p>
    </div>
    <label>
      Select Birthdate:
      <DateTimePicker
        :style="{ width: '260px' }"
        :value="departureTime"
        @change="handleChange"
      />
    </label>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { DateTimePicker } from "@progress/kendo-vue-dateinputs";
import { provideIntlService } from "@progress/kendo-vue-intl";

const departureTime = ref(null);

function handleChange(event) {
    departureTime.value = event.target.value;
}

onMounted(() => {
    setTimeout(() => {
        const date = "2017-06-27 14:30";
        departureTime.value = provideIntlService().parseDate(date, "yyyy-MM-dd HH:mm");
    }, 1000);
});
</script>
