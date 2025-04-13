<template>
    <div>
      <TextArea
        :style="{ width: '230px' }"
        :disabled="true"
        :showValidationIcon="true"
        :inputPrefix="'prefix'"
        :inputSuffix="'suffix'"
        :showClearButton="true"
        :rows="4"
      >
        <template v-slot:prefix>
          <InputIcons />
        </template>
        <template v-slot:suffix>
          <SvgIcon :icon="envelopeIcon" />
        </template>
      </TextArea>
    </div>
  </template>
  <script>
  import { TextArea } from "@progress/kendo-vue-inputs";
  import { SvgIcon } from "@progress/kendo-vue-common";
  import { envelopeIcon } from "@progress/kendo-svg-icons";
  import InputIcons from "./InputIcons.vue";
  
  export default {
    components: {
      TextArea,
      InputIcons,
      SvgIcon,
    },
    data() {
      return {
        envelopeIcon,
      };
    },
  };
  </script>
  