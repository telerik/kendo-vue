<template>
    <div>
      <TextArea
        :style="{ width: '230px' }"
        :input-prefix="'textAreaIcon'"
        :rows="4"
      >
        <template v-slot:textAreaIcon="{ props }">
          <SvgIcon :icon="gearIcon" />
        </template>
      </TextArea>
    </div>
  </template>
  <script>
  import { TextArea } from "@progress/kendo-vue-inputs";
  import { SvgIcon } from "@progress/kendo-vue-common";
  import { gearIcon } from "@progress/kendo-svg-icons";
  
  export default {
    components: {
      TextArea,
      SvgIcon,
    },
    data() {
      return {
        gearIcon,
      };
    },
  };
  </script>
  