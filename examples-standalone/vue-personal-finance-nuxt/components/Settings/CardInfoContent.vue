<template>
  <FormElement className="k-d-grid k-gap-4">
    <div
      class="k-d-grid k-grid-cols-4 k-gap-4 k-gap-lg-10 k-overflow-hidden k-mb-4"
    >
      <FieldWrapper
        class="k-col-span-5 k-col-span-lg-2 k-col-span-xl-2"
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
      class="k-d-grid k-grid-cols-4 k-gap-4 k-gap-lg-10 k-overflow-hidden k-mb-4"
    >
      <FieldWrapper
        class="k-col-span-5 k-col-span-lg-2 k-col-span-xl-2"
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
      class="k-d-grid k-grid-cols-4 k-gap-4 k-gap-lg-10 k-overflow-hidden k-mb-4"
    >
      <FieldWrapper
        class="k-col-span-5 k-col-span-lg-2 k-col-span-xl-2"
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
        class="k-col-span-5 k-col-span-lg-2 k-col-span-xl-2"
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
    <div class="k-mt-6 k-d-flex k-gap-4">
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
