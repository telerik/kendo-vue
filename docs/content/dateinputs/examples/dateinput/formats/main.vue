<template>
  <div class="example-wrapper">
    <div class="col-xs-12 col-sm-6 example-col">
      <p>Select a long date:</p>
      <DateInput
        :style="{ width: '230px' }"
        :format="'dd-MMM-yyyy HH:mm:ss'"
        v-model="value"
      />
    </div>
    <div class="col-xs-12 col-sm-6 example-col">
      <p>Select a short date:</p>
      <DateInput
        :style="{ width: '230px' }"
        :format="'MMMM yyyy'"
        v-model="value"
      />
    </div>
    <div class="col-xs-12 col-sm-6 example-col">
      <p>Custom Skeleton:</p>
      <DateInput
        :style="{ width: '230px' }"
        :format="{ skeleton: 'yMMMdEHm' }"
        v-model="value"
      />
    </div>
    <div class="col-xs-12 col-sm-6 example-col">
      <p>Custom Format:</p>
      <DateInput
        :style="{ width: '230px' }"
        :format="{ year: 'numeric', month: 'short' }"
        v-model="value"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DateInput } from "@progress/kendo-vue-dateinputs";

const value = ref(new Date(2017, 2, 10, 13, 30, 0));
</script>
