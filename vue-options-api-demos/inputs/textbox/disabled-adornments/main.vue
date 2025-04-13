<template>
    <div>
      <KTextBox
        :style="{ width: '230px' }"
        :disabled="true"
        :showValidationIcon="true"
        :inputPrefix="'prefix'"
        :inputSuffix="'suffix'"
        :showClearButton="true"
      >
        <template v-slot:prefix>
          <TextBoxIcons />
        </template>
        <template v-slot:suffix>
          <SvgIcon :icon="envelopeIcon" />
        </template>
      </KTextBox>
    </div>
  </template>
  <script>
  import { TextBox as KTextBox } from "@progress/kendo-vue-inputs";
  import { SvgIcon } from "@progress/kendo-vue-common";
  import { envelopeIcon } from "@progress/kendo-svg-icons";
  import TextBoxIcons from "./TextBoxIcons.vue";
  
  export default {
    components: {
      KTextBox,
      TextBoxIcons,
      SvgIcon,
    },
    data() {
      return {
        envelopeIcon,
      };
    },
  };
  </script>
  