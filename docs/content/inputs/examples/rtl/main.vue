<template>
  <div class="row example-wrapper">
    <div class="col-12 col-md-6 example-col">
      <p>Input</p>
      <KInput :style="{ width: '230px' }" :label="'First name'" dir="rtl" />
    </div>
    <div class="col-12 col-md-6 example-col">
      <p>NumericTextBox</p>
      <NumericTextBox
        :style="{ width: '230px' }"
        :default-value="123.45"
        :format="'c2'"
        :dir="'rtl'"
      />
    </div>
    <div class="col-12 col-md-6 example-col">
      <p>MaskedTextBox</p>
      <MaskedTextBox
        :style="{ width: '230px' }"
        :mask="'9-000'"
        :default-value="'_-___'"
        :dir="'rtl'"
      />
    </div>
    <div class="col-12 col-md-6 example-col">
      <p>Slider</p>
      <Slider :dir="'rtl'" :min="1" :max="10" :step="1" :default-value="4" />
    </div>
    <div class="col-12 col-md-6 example-col">
      <p>Switch</p>
      <Switch :dir="'rtl'" />
    </div>
    <div class="col-12 col-md-6 example-col">
      <p>TextArea</p>
      <TextArea :dir="'rtl'" />
    </div>
    <div class="col-12 col-md-6 example-col">
      <p>RadioButton and RadioGroup</p>
      <RadioButton
        :dir="'rtl'"
        :name="'group1'"
        :value="'first'"
        :label="'First'"
      />
      <RadioButton
        :dir="'rtl'"
        :name="'group1'"
        :value="'second'"
        :label="'Second'"
      />
      <RadioButton
        :dir="'rtl'"
        :name="'group1'"
        :value="'third'"
        :label="'Third'"
      />
    </div>
    <div class="col-12 col-md-6 example-col">
      <p>CheckBox</p>
      <Checkbox
        :dir="'rtl'"
        :default-checked="true"
        :label="'Checked state'"
      />
    </div>
  </div>
</template>

<script setup>
import {
    Checkbox,
    NumericTextBox,
    Input as KInput,
    MaskedTextBox,
    Slider,
    Switch,
    TextArea,
    RadioButton,
} from "@progress/kendo-vue-inputs";
</script>

<style>
p {
  font-weight: 600;
}
</style>
