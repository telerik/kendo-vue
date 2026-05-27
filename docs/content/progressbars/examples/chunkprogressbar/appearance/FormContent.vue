<template>
  <FormElement :style="{ maxWidth: '650px' }">
    <fieldset class="k-form-fieldset">
      <legend class="k-form-legend">
        PROFILE COMPLETENESS: {{ completeness }}%
      </legend>
      <ChunkProgressBar
        :value="completeness"
        :empty-style="emptyStyles"
        :progress-style="progressStyles"
        :chunk-count="chunks"
      />
      <div class="mb-3">
        <Field name="firstName" :component="FormInput" label="First name" />
      </div>
      <div class="mb-3">
        <Field name="lastName" :component="FormInput" label="Last name" />
      </div>
      <div class="mb-3">
        <Field
          id="gender"
          name="gender"
          label="Gender"
          :component="FormDropDownList"
          :data="genders"
        />
      </div>
      <div class="mb-3">
        <Field name="occupation" :component="FormInput" label="Occupation" />
      </div>
    </fieldset>
    <div class="k-form-buttons">
      <KButton type="submit" :disabled="!kendoForm.allowSubmit">
        Submit
      </KButton>
      <KButton type="button" @click="clear">Clear</KButton>
    </div>
  </FormElement>
</template>

<script setup>
import { computed, inject } from "vue";
import { Field, FormElement } from "@progress/kendo-vue-form";
import FormInput from "./FormInput.vue";
import FormDropDownList from "./FormDropDownList.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { ChunkProgressBar } from "@progress/kendo-vue-progressbars";

const kendoForm = inject("kendoForm", {});

const chunks = 4;
const emptyStyles = { background: "pink" };
const progressStyles = { background: "lightgreen" };
const genders = ["Male", "Female", "Other"];

const completeness = computed(() => {
    return (
        Object.keys(kendoForm.values).reduce(
            (sum, currentVal) => sum + (kendoForm.values[currentVal] ? 1 : 0),
            0
        ) * 25
    );
});

const clear = () => {
    kendoForm.onFormReset();
};
</script>
