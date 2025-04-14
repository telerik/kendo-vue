<template>
  <div>
    <div>Message:</div>
    <KTextBox
      :value="value"
      :valid="value.length <= MAX_LENGTH"
      :placeholder="'Type message'"
      :max-length="MAX_LENGTH"
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
        {{ `${String(value).length}/${MAX_LENGTH}` }} &nbsp;
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

export default {
  components: {
    KTextBox,
    SvgIcon,
    InputSeparator,
  },
  data() {
    return {
      envelopeIcon,
      xIcon,
      value: "",
      MAX_LENGTH: 10,
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
  