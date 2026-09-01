<template>
  <FormElement class="card-info-form-layout">
    <div
      class="form-row"
    >
      <FieldWrapper
        class="form-field"
        :style="{ width: '100%' }"
      >
        <Field :label="'Bank'" name="bank" :component="'myTemplate'">
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
        class="form-field"
        :style="{
          width: '100%',
        }"
      >
        <Field
          :label="'Expiry Date'"
          name="expiryDate"
          :format="'MM/yyyy'"
          :component="'myTemplate'"
        >
          >
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
    </div>
    <div
      class="form-row"
    >
      <FieldWrapper
        class="form-field"
        :style="{
          width: '100%',
        }"
      >
        <Field
          :label="'Card Holder'"
          name="cardHolder"
          :component="'myTemplate'"
        >
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
        class="form-field"
        :style="{
          width: '100%',
        }"
      >
        <Field
          :label="'Card Number'"
          name="cardNumber"
          :component="'myTemplate'"
          :mask="'0000 0000 0000 0000'"
        >
          <template #myTemplate="{ props }">
            <FormMaskedTextBox
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
          color: 'var(--kendo-color-on-primary)',
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
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { DEFAULT_CARD_INFO } from "@/data/defaults";
import FormInput from "./FormInput.vue";
import FormDatePicker from "./FormDatePicker.vue";
import FormMaskedTextBox from "./FormMaskedTextBox.vue";

const emit = defineEmits(["restore", "save"]);
const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) =>
  emailRegex.test(value) ? "" : "Please enter a valid email.";

const kendoForm = inject("kendoForm", {});

function onRestore(e) {
  localStorage.setItem("cardInfo", JSON.stringify(DEFAULT_CARD_INFO));
  kendoForm.values = {
    ...DEFAULT_CARD_INFO,
    expiryDate: new Date(DEFAULT_CARD_INFO.expiryDate),
  };
}
</script>
<style scoped>
.card-info-form-layout { display: grid; gap: var(--kendo-spacing-4); }
.form-row { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: var(--kendo-spacing-4); margin-bottom: var(--kendo-spacing-4); overflow: hidden; }
.form-field { grid-column: span 5 / span 5; }
.form-actions { display: flex; gap: var(--kendo-spacing-4); margin-top: var(--kendo-spacing-6); }
@media (min-width: 992px) { .form-row { gap: var(--kendo-spacing-10); } .form-field { grid-column: span 2 / span 2; } }
@media (min-width: 1200px) { .form-field { grid-column: span 2 / span 2; } }
</style>
