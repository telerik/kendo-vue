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
        <InputSeparator />
      </template>
      <template v-slot:suffix>
        <SvgIcon
          v-if="value !== EMPTY_VALUE"
          @click="handleClear"
          :icon="xIcon"
        />
        <InputSeparator />
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
import {
  TextBox as KTextBox,
  InputSeparator,
} from "@progress/kendo-vue-inputs";
import { SvgIcon } from "@progress/kendo-vue-common";
import { envelopeIcon, xIcon } from "@progress/kendo-svg-icons";
import { Button as KButton } from "@progress/kendo-vue-buttons";

export default {
  components: {
    KTextBox,
    SvgIcon,
    KButton,
    InputSeparator,
  },
  data() {
    return {
      envelopeIcon,
      xIcon,
      value: "Hello world!",
      EMPTY_VALUE: "",
    };
  },
  methods: {
    handleInput(event) {
      this.value = event.target.value;
    },
    handleClear() {
      this.value = this.EMPTY_VALUE;
    },
  },
};
</script>
  