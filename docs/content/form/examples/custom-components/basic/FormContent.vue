<template>
    <FormElement :style="{ maxWidth: '650px' }">
        <fieldset class="k-form-fieldset">
            <Field
                id="fullName"
                name="fullName"
                component="myTemplate"
            >
                <template #myTemplate="{ props }">
                    <FormInput
                        v-bind="props"
                        @change="props.onChange"
                    />
                </template>
            </Field>
            <div class="k-form-buttons">
                <KButton
                    theme-color="primary"
                    type="submit"
                    :disabled="!kendoForm.allowSubmit"
                >
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
import { Button as KButton } from "@progress/kendo-vue-buttons";

const kendoForm = inject('kendoForm', {});

function clear() {
    kendoForm.onFormReset();
}
</script>
