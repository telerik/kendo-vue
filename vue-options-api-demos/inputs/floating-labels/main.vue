<template>
  <div class="example-wrapper row">
    <div class="col-xs-12 col-md-6 example-col">
      <p>Input</p>
      <kinput :style="{ width: '230px' }"
        :id="editorId"
        :placeholder="'Enter your first name'"
        :label="'First Name:'"
        @change="onChangeInput"
      />
      <br />
      <p>MaskedTextBox</p>
      <maskedtextbox :style="{ width: '230px' }"
        :mask="mask"
        :value="maskedTextBoxValue"
        :label="'Phone number:'"
        @change="onChangeMaskedTextBox"
      ></maskedtextbox>
      <br />
      <p>NumericTextBox</p>
      <numerictextbox :style="{ width: '230px' }"
        :label="'Enter kilometers:'"
        v-model="numericTextBoxValue"
      >
      </numerictextbox>
    </div>
  </div>
</template>
<script>
import {
  Input,
  MaskedTextBox,
  NumericTextBox,
} from "@progress/kendo-vue-inputs";

export default {
  components: {
    kinput: Input,
    maskedtextbox: MaskedTextBox,
    numerictextbox: NumericTextBox,
  },
  data: function () {
    return {
      value: undefined,
      mask: "(999) 000-00-00-00",
      maskedTextBoxValue: undefined,
      numericTextBoxValue: undefined,
    };
  },
  methods: {
    onChangeInput: function (e) {
      this.value = e.value;
    },
    onChangeMaskedTextBox: function (e) {
      this.maskedTextBoxValue = e.value;
    },
  },
};
</script>
