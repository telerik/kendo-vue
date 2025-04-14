<template>
  <div>
    <div>Message:</div>
    <KTextBox
      :value="value"
      :placeholder="'Type message'"
      :input-prefix="'prefix'"
      :input-suffix="'suffix'"
      :style="{
        width: '300px',
      }"
      @input="handleInput"
    >
      <template v-slot:prefix>
        <SvgIcon :icon="envelopeIcon" />
      </template>
      <template v-slot:suffix>
        <KButton
          :disabled="value === EMPTY_VALUE"
          :theme-color="'primary'"
          :fill-mode="'flat'"
          :rounded="null"
        >
          Send
        </KButton>
      </template>
    </KTextBox>
  </div>
</template>
  <script>
import { TextBox as KTextBox } from "@progress/kendo-vue-inputs";
import { SvgIcon } from "@progress/kendo-vue-common";
import { envelopeIcon } from "@progress/kendo-svg-icons";
import { Button as KButton } from "@progress/kendo-vue-buttons";

export default {
  components: {
    KTextBox,
    SvgIcon,
    KButton,
  },
  data() {
    return {
      envelopeIcon,
      value: "",
      EMPTY_VALUE: "",
    };
  },
  methods: {
    handleInput(event) {
      this.value = event.target.value;
    },
  },
};
</script>
  