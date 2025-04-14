<template>
    <div>
      <KButton> Enabled Button</KButton> &nbsp;
      <KButton :disabled="true">Disabled Button (focusable)</KButton>
      <KButton :disabled="true" :tabindex="-1"
        >Disabled Button (not focusable)</KButton
      >
    </div>
  </template>
  <script>
  import { Button as KButton } from "@progress/kendo-vue-buttons";
  
  export default {
    components: {
      KButton,
    },
  };
  </script>
  