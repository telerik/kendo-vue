<template>
  <div>
    <FloatingActionButton
      :svg-icon="bellIcon"
      :align="{ vertical: 'bottom', horizontal: 'start' }"
    ></FloatingActionButton>
    <FloatingActionButton
      :svg-icon="calendarIcon"
      :text="'New Event'"
      :align="{ vertical: 'bottom', horizontal: 'center' }"
    ></FloatingActionButton>
    <FloatingActionButton
      :text="'Scroll to Top'"
      :align="{ vertical: 'bottom', horizontal: 'end' }"
    ></FloatingActionButton>
  </div>
</template>

<script setup>
import { FloatingActionButton } from "@progress/kendo-vue-buttons";
import { bellIcon, calendarIcon } from "@progress/kendo-svg-icons";
</script>
