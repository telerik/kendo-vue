<template>
  <div class="row">
    <div class="col-md-6">
      <TimePicker
        :style="{ width: '230px' }"
        @change="handleChange"
        :value="value"
      />
    </div>
    <div class="col-md-6">
      <div class="example-config">
        <h5>TimePicker Events</h5>
        <ul class="event-log" :style="{ maxHeight: '300px' }">
          <li v-for="(event, index) in logs" :key="index">{{ event }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TimePicker } from "@progress/kendo-vue-dateinputs";

const value = ref(new Date());
const logs = ref([]);

function handleChange(event) {
    logs.value.unshift("change: " + event.target.value);
    value.value = event.target.value;
}
</script>
