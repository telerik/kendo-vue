<template>
    <div class="example-wrap">
      <span v-for="theme in themeColors">
        <fab
          :key="theme"
          :theme-color="theme"
          :svg-icon="checkIcon"
          :position-mode="'absolute'"
        >
        </fab>
      </span>
    </div>
  </template>
  <script>
  import { FloatingActionButton } from "@progress/kendo-vue-buttons";
  import { checkIcon } from "@progress/kendo-svg-icons";
  
  const themeColors = [
    "primary",
    "secondary",
    "tertiary",
    "inherit",
    "info",
    "success",
    "error",
    "warning",
    "dark",
    "light",
    "inverse",
  ];
  
  export default {
    components: {
      fab: FloatingActionButton,
    },
    data() {
      return {
        checkIcon,
        themeColors,
      };
    },
  };
  </script>
  <style>
  .example-wrap {
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
  }
  .example-wrap > span {
    position: relative;
    width: 80px;
    margin-top: 90px;
  }
  </style>
  