<template>
    <FormElement :style="{ width: '400px' }">
        <fieldset class="k-form-fieldset">
            <legend class="k-form-legend">
                Your Account
            </legend>
            <Field
                id="userName"
                name="userName"
                label="User Name"
                hint="Hint: Your username"
                :component="'myTemplate'"
                :validator="requiredValidator">
                <template #myTemplate="{ props }">
                    <FormInput
                        v-bind="props"
                        @change="props.onChange"
                        @blur="props.onBlur"
                        @focus="props.onFocus"
                    />
                </template>
            </Field>
            <Field
                id="email"
                name="email"
                label="Email"
                hint="Hint: Your active email"
                optional
                :component="'myTemplate'">
                <template #myTemplate="{ props }">
                    <FormInput
                        v-bind="props"
                        @change="props.onChange"
                        @blur="props.onBlur"
                        @focus="props.onFocus"
                    />
                </template>
            </Field>
            <span class="k-form-separator" />
            <Field
                id="notifications"
                name="notifications"
                label="I want to receive notifications"
                hint="You will receive our latest updates and promotions on your email"
                optional
                :component="'myTemplate'">
                <template #myTemplate="{ props }">
                    <FormCheckbox
                        v-bind="props"
                        @change="props.onChange"
                        @blur="props.onBlur"
                        @focus="props.onFocus"
                    />
                </template>
            </Field>
            <div class="k-form-buttons k-buttons-end">
                <KButton
                    theme-color="primary"
                    type="submit"
                    :disabled="!kendoForm.allowSubmit">
                    Submit
                </KButton>
                <KButton @click="clear">
                    Clear
                </KButton>
            </div>
        </fieldset>
    </FormElement>
</template>

<script setup>
import { inject } from 'vue';
import { Field, FormElement } from "@progress/kendo-vue-form";
import FormInput from "./FormInput.vue";
import FormCheckbox from "./FormCheckbox.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { requiredValidator } from "./validators";

const kendoForm = inject('kendoForm', {});

function clear() {
    kendoForm.onFormReset();
}
</script>
