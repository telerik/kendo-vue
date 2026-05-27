<template>
    <FormElement :style="{ width: '400px' }">
        <fieldset class="k-form-fieldset">
            <Field
                id="age"
                name="age"
                label="Age"
                hint="Hint: Enter your age."
                format="n2"
                :component="'myTemplate'"
                :validator="requiredValidator">
                <template #myTemplate="{ props }">
                    <FormFloatingNumericTextBox
                        v-bind="props"
                        @change="props.onChange"
                        @blur="props.onBlur"
                        @focus="props.onFocus"
                    />
                </template>
            </Field>
            <Field
                id="street"
                name="street"
                label="Street Number"
                hint="Hint: Enter your street number."
                format="n2"
                :component="'myTemplate'"
                :validator="requiredValidator">
                <template #myTemplate="{ props }">
                    <FormFloatingNumericTextBox
                        v-bind="props"
                        @change="props.onChange"
                        @blur="props.onBlur"
                        @focus="props.onFocus"
                    />
                </template>
            </Field>
            <div class="k-form-buttons">
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
import FormFloatingNumericTextBox from "./FormFloatingNumericTextBox.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { requiredValidator } from "./validators";

const kendoForm = inject('kendoForm', {});

function clear() {
    kendoForm.onFormReset();
}
</script>
