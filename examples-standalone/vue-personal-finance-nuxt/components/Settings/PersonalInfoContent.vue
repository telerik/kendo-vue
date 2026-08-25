<template>
  <FormElement class="personal-info-form-layout">
    <div
      class="form-row"
    >
      <FieldWrapper
        :style="{ width: '100%' }"
        class="form-field"
      >
        <Field :label="'Name'" name="name" :component="'myTemplate'">
          <template #myTemplate="{ props }">
            <FormInput
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </Field>
      </FieldWrapper>
      <FieldWrapper
        :style="{ width: '100%' }"
        class="form-field"
      >
        <Field :label="'Surname'" name="surname" :component="'myTemplate'">
          <template #myTemplate="{ props }">
            <FormInput
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </Field>
      </FieldWrapper>
    </div>
    <div
      class="form-row"
    >
      <FieldWrapper
        :style="{ width: '100%' }"
        class="form-field"
      >
        <Field :label="'Email'" name="email" :component="'myTemplate'">
          <template #myTemplate="{ props }">
            <FormInput
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </Field>
      </FieldWrapper>
      <FieldWrapper
        :style="{ width: '100%' }"
        class="form-field"
      >
        <Field name="tag" :label="'Tag'" :component="'myTemplate'">
          <template #myTemplate="{ props }">
            <FormInput
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </Field>
      </FieldWrapper>
    </div>
    <div
      class="form-row"
    >
      <FieldWrapper
        :style="{ width: '100%' }"
        class="form-field"
      >
        <Field :label="'Birthday'" name="birthday" :component="'myTemplate'">
          <template #myTemplate="{ props }">
            <FormDatePicker
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </Field>
      </FieldWrapper>
      <FieldWrapper
        :style="{ width: '100%' }"
        class="form-field"
      >
        <Field
          :label="'Country'"
          name="country"
          :data="[
            'United States',
            'Canada',
            'United Kingdom',
            'Germany',
            'France',
          ]"
          :component="'myTemplate'"
        >
          <template #myTemplate="{ props }">
            <FormDropDownList
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </Field>
      </FieldWrapper>
    </div>
    <div
      class="form-row"
    >
      <FieldWrapper
        :style="{ width: '100%' }"
        class="form-field"
      >
        <Field :label="'Address'" name="address" :component="'myTemplate'">
          <template #myTemplate="{ props }">
            <FormInput
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </Field>
      </FieldWrapper>
      <FieldWrapper
        :style="{ width: '100%' }"
        class="form-field"
      >
        <Field :label="'Post Code'" name="postcode" :component="'myTemplate'">
          <template #myTemplate="{ props }">
            <FormInput
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </Field>
      </FieldWrapper>
    </div>
    <div class="form-actions">
      <KButton
        type="submit"
        :size="'small'"
        :rounded="'large'"
        :theme-color="'primary'"
        :style="{
          color: '#131524',
          letterSpacing: '1.25px',
          fontWeight: '500',
        }"
      >
        SAVE
      </KButton>
      <KButton
        type="button"
        :size="'small'"
        :rounded="'large'"
        :fillMode="'outline'"
        :style="{
          color: 'var(--kendo-color-on-app-surface)',
          letterSpacing: '1.25px',
          fontWeight: '500',
        }"
        @click="onRestore"
      >
        RESTORE
      </KButton>
    </div>
  </FormElement>
</template>

<script setup>
import { inject } from "vue";
import { Field, FormElement, FieldWrapper } from "@progress/kendo-vue-form";
import FormInput from "./FormInput.vue";
import FormDropDownList from "./FormDropDownList.vue";
import FormDatePicker from "./FormDatePicker.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { DEFAULT_PERSONAL_INFO } from "@/data/defaults";

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) =>
  emailRegex.test(value) ? "" : "Please enter a valid email.";

const kendoForm = inject("kendoForm", {});
const emit = defineEmits(["restore", "save"]);
const personalInfoKey = "personalInfo";

function clear() {
  kendoForm.onFormReset();
}

function onRestore(e) {
  localStorage.setItem(personalInfoKey, JSON.stringify(DEFAULT_PERSONAL_INFO));
  kendoForm.values = {
    ...DEFAULT_PERSONAL_INFO,
    birthday: new Date(DEFAULT_PERSONAL_INFO.birthday),
  };
}
</script>
<style scoped>
.personal-info-form-layout { display: grid; gap: var(--kendo-spacing-4); }
.form-row { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: var(--kendo-spacing-4); margin-bottom: var(--kendo-spacing-4); overflow: hidden; }
.form-field { grid-column: span 5 / span 5; }
.form-actions { display: flex; gap: var(--kendo-spacing-4); margin-top: var(--kendo-spacing-6); }
@media (min-width: 992px) { .form-row { gap: var(--kendo-spacing-10); } .form-field { grid-column: span 2 / span 2; } }
@media (min-width: 1200px) { .form-field { grid-column: span 2 / span 2; } }
</style>
