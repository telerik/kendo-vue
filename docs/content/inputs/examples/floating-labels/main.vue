<template>
  <div class="example-wrapper row">
    <div class="col-xs-12 col-md-6 example-col">
      <p>Input</p>
      <KInput
        :style="{ width: '230px' }"
        :id="editorId"
        :placeholder="'Enter your first name'"
        :label="'First Name:'"
        @change="onChangeInput"
        :value="inputValue"
      />
      <br />
      <p>MaskedTextBox</p>
      <MaskedTextBox
        :style="{ width: '230px' }"
        :mask="mask"
        :value="maskedTextBoxValue"
        :label="'Phone number:'"
        @change="onChangeMaskedTextBox"
      />
      <br />
      <p>NumericTextBox</p>
      <NumericTextBox
        :style="{ width: '230px' }"
        :label="'Enter kilometers:'"
        v-model="numericTextBoxValue"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Input as KInput, MaskedTextBox, NumericTextBox } from "@progress/kendo-vue-inputs";

const editorId = "editor-id"; // Replace with actual ID if needed
const mask = "(999) 000-00-00-00";
const maskedTextBoxValue = ref(undefined);
const numericTextBoxValue = ref(undefined);
const inputValue = ref('');

function onChangeInput(e) {
    inputValue.value = e.value;
}

function onChangeMaskedTextBox(e) {
    maskedTextBoxValue.value = e.value;
}
</script>
