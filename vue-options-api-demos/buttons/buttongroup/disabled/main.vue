<template>
    <div>
      <ButtonGroup :disabled="disabled">
        <KButton :togglable="true">Option A</KButton>
        <KButton :togglable="true">Option B</KButton>
      </ButtonGroup>
      &nbsp;
      <KButton @click="handleDisable">Toggle disabled</KButton>
    </div>
  </template>
  <script>
  import { Button as KButton, ButtonGroup } from "@progress/kendo-vue-buttons";
  
  export default {
    components: {
      KButton,
      ButtonGroup,
    },
    data() {
      return {
        disabled: true,
      };
    },
    methods: {
      handleDisable() {
        this.disabled = !this.disabled;
      },
    },
  };
  </script>
  