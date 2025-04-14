<template>
    <div>
      <SvgIcon :icon="menuIcon" />
      &nbsp;
      <InputSeparator />
      &nbsp;
      <SvgIcon :icon="gearIcon" />
    </div>
  </template>
  <script>
  import { InputSeparator } from "@progress/kendo-vue-inputs";
  import { SvgIcon } from "@progress/kendo-vue-common";
  import { menuIcon, gearIcon } from "@progress/kendo-svg-icons";
  
  export default {
    components: {
      InputSeparator,
      SvgIcon,
    },
    data() {
      return {
        menuIcon,
        gearIcon,
      };
    },
  };
  </script>