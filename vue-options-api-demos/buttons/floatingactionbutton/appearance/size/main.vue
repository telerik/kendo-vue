<template>
    <div class="example-wrap">
      <fab
        :text="'Small'"
        :svg-icon="pencilIcon"
        :size="'small'"
        :align="{ horizontal: 'start', vertical: 'bottom' }"
      ></fab>
      <fab
        :text="'Medium'"
        :svg-icon="pencilIcon"
        :size="'medium'"
        :align="{ horizontal: 'center', vertical: 'bottom' }"
      ></fab>
      <fab
        :text="'Large'"
        :svg-icon="pencilIcon"
        :size="'large'"
        :align="{ horizontal: 'end', vertical: 'bottom' }"
      ></fab>
      <fab
        :svg-icon="pencilIcon"
        :text="'Custom'"
        :size="null"
        :class="'custom-fab'"
        :align="{ horizontal: 'end', vertical: 'top' }"
      ></fab>
    </div>
  </template>
  <script>
  import { FloatingActionButton } from "@progress/kendo-vue-buttons";
  import { pencilIcon } from "@progress/kendo-svg-icons";
  
  export default {
    components: {
      fab: FloatingActionButton,
    },
    data() {
      return {
        pencilIcon,
      };
    },
  };
  </script>
  <style>
  .custom-fab button {
    padding: 10px 30px;
  }
  </style>
  