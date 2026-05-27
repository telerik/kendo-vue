<template>
  <div class="k-d-grid k-grid-cols-sm-1 k-grid-cols-md-2 k-gap-4 k-max-w-fit">
    <div class="k-col-span-1">
      <div>
        inputmode=text <i>(default)</i>
      </div>
      <DateTimePicker
        :default-value="value"
        :format="'MMMM, dd, yyyy HH:mm:ss a'"
        :input-attributes="{ inputMode: 'text' }"
        :style="{ width: '300px' }"
      />
    </div>
    <div class="k-col-span-1">
      <div>inputmode=numeric</div>
      <DateTimePicker
        :default-value="value"
        :format="'dd-MM-yyyy HH:mm'"
        :input-attributes="{ inputMode: 'numeric' }"
        :style="{ width: '300px' }"
      />
    </div>
    <div class="k-col-span-1">
      <div>
        inputmode=none <br />
        <i>(the user can only pick a value from the popup)</i>
      </div>
      <DateTimePicker
        :default-value="value"
        :input-attributes="{ inputMode: 'none' }"
        :style="{ width: '300px' }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DateTimePicker } from "@progress/kendo-vue-dateinputs";

const value = ref(new Date());
</script>
