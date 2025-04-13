<template>
    <div>
      <fab
        :svg-icon="bellIcon"
        :align="{ vertical: 'bottom', horizontal: 'start' }"
      ></fab>
      <fab
        :svg-icon="calendarIcon"
        :text="'New Event'"
        :align="{ vertical: 'bottom', horizontal: 'center' }"
      ></fab>
      <fab
        :text="'Scroll to Top'"
        :align="{ vertical: 'bottom', horizontal: 'end' }"
      ></fab>
    </div>
  </template>
  <script>
  import { FloatingActionButton } from "@progress/kendo-vue-buttons";
  import { bellIcon, calendarIcon } from "@progress/kendo-svg-icons";
  
  export default {
    components: {
      fab: FloatingActionButton,
    },
    data() {
      return {
        bellIcon,
        calendarIcon,
      };
    },
  };
  </script>
  