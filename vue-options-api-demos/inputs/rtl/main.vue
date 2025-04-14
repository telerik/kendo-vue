<template>
  <div class="row example-wrapper">
    <div class="col-12 col-md-6 example-col">
      <p>Input</p>
      <k-input
        :style="{ width: '230px' }"
        :label="'First name'"
        dir="rtl"
      ></k-input>
    </div>
    <div class="col-12 col-md-6 example-col">
      <p>NumericTextBox</p>
      <numerictextbox
        :style="{ width: '230px' }"
        :default-value="123.45"
        :format="'c2'"
        :dir="'rtl'"
      >
      </numerictextbox>
    </div>
    <div class="col-12 col-md-6 example-col">
      <p>MaskedTextBox</p>
      <maskedtextbox
        :style="{ width: '230px' }"
        :mask="'9-000'"
        :default-value="'_-___'"
        :dir="'rtl'"
      >
      </maskedtextbox>
    </div>
    <div class="col-12 col-md-6 example-col">
      <p>Slider</p>
      <slider :dir="'rtl'" :min="1" :max="10" :step="1" :default-value="4" />
    </div>
    <div class="col-12 col-md-6 example-col">
      <p>Switch</p>
      <k-switch :dir="'rtl'" />
    </div>
    <div class="col-12 col-md-6 example-col">
      <p>TextArea</p>
      <k-textarea :dir="'rtl'" />
    </div>
    <div class="col-12 col-md-6 example-col">
      <p>RadioButton and RadioGroup</p>
      <radiobutton
        :dir="'rtl'"
        :name="'group1'"
        :value="'first'"
        :label="'First'"
      />
      <radiobutton
        :dir="'rtl'"
        :name="'group1'"
        :value="'second'"
        :label="'Second'"
      />
      <radiobutton
        :dir="'rtl'"
        :name="'group1'"
        :value="'third'"
        :label="'Third'"
      />
    </div>
    <div class="col-12 col-md-6 example-col">
      <p>CheckBox</p>
      <k-checkbox
        :dir="'rtl'"
        :default-checked="true"
        :label="'Checked state'"
      />
    </div>
  </div>
</template>
<script>
import {
  Checkbox,
  NumericTextBox,
  Input,
  MaskedTextBox,
  Slider,
  Switch,
  TextArea,
  RadioButton,
} from "@progress/kendo-vue-inputs";

export default {
  components: {
    "k-input": Input,
    numerictextbox: NumericTextBox,
    maskedtextbox: MaskedTextBox,
    slider: Slider,
    "k-switch": Switch,
    "k-textarea": TextArea,
    radiobutton: RadioButton,
    "k-checkbox": Checkbox,
  },
};
</script>

<style>
p {
  font-weight: 600;
}
</style>
