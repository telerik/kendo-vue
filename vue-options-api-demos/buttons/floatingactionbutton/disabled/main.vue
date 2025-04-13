<template>
    <div>
      <kbutton @click="handleClick">{{
        disabled ? "Enable" : "Disable"
      }}</kbutton>
      <fab
        :svg-icon="checkIcon"
        :disabled="disabled"
        :align="{ vertical: 'bottom', horizontal: 'start' }"
      ></fab>
    </div>
  </template>
  <script>
  import { Button, FloatingActionButton } from "@progress/kendo-vue-buttons";
  import { checkIcon } from "@progress/kendo-svg-icons";
  
  export default {
    components: {
      kbutton: Button,
      fab: FloatingActionButton,
    },
    data() {
      return {
        checkIcon,
        disabled: true,
      };
    },
    methods: {
      handleClick() {
        this.disabled = !this.disabled;
      },
    },
  };
  </script>
  