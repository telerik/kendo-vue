<template>
    <div v-if="isLoading" class="loader-container">
        <Loader size="large" type="infinite-spinner" />
    </div>
    <FormElement>
        <div
            v-if="kendoForm.visited && kendoForm.errors && kendoForm.errors.VALIDATION_SUMMARY"
            class="k-messagebox k-messagebox-error"
        >
            {{ kendoForm.errors.VALIDATION_SUMMARY }}
        </div>
        <Field
            id="fullName"
            name="fullName"
            label="Full Name"
            :component="'fieldTemplate'"
        >
            <template #fieldTemplate="{ props: fieldProps }">
                <FormInput
                    v-bind="fieldProps"
                    placeholder="e.g. John Doe"
                    :highlighted="populatedFields.fullName"
                    @change="fieldProps.onChange"
                    @blur="fieldProps.onBlur"
                    @focus="fieldProps.onFocus"
                />
            </template>
        </Field>
        <Field
            id="city"
            name="city"
            label="City"
            :component="'fieldTemplate'"
        >
            <template #fieldTemplate="{ props: fieldProps }">
                <FormInput
                    v-bind="fieldProps"
                    placeholder="e.g. London"
                    :highlighted="populatedFields.city"
                    @change="fieldProps.onChange"
                    @blur="fieldProps.onBlur"
                    @focus="fieldProps.onFocus"
                />
            </template>
        </Field>
        <Field
            id="postCode"
            name="postCode"
            label="Post Code"
            :component="'fieldTemplate'"
        >
            <template #fieldTemplate="{ props: fieldProps }">
                <FormInput
                    v-bind="fieldProps"
                    placeholder="e.g. SW1A 1AA"
                    :highlighted="populatedFields.postCode"
                    @change="fieldProps.onChange"
                    @blur="fieldProps.onBlur"
                    @focus="fieldProps.onFocus"
                />
            </template>
        </Field>
        <div class="k-form-buttons">
            <KButton
                :svg-icon="arrowRotateCcwIcon"
                fill-mode="flat"
                type="button"
                @click="handleClear"
            />
            <SmartPasteButton
                :disabled="isLoading"
                @click="handleSmartPaste"
                rounded="large"
            >
                Smart Paste
            </SmartPasteButton>
        </div>
    </FormElement>
</template>

<script setup>
import { inject, ref, nextTick } from 'vue';
import { Field, FormElement } from '@progress/kendo-vue-form';
import { Button as KButton, SmartPasteButton } from '@progress/kendo-vue-buttons';
import { Loader } from '@progress/kendo-vue-indicators';
import { arrowRotateCcwIcon } from '@progress/kendo-svg-icons';
import FormInput from './FormInput.vue';

const kendoForm = inject('kendoForm', {});
const clearFormErrors = inject('clearFormErrors', () => {});

const isLoading = ref(false);
const populatedFields = ref({});
const fieldNames = ['fullName', 'city', 'postCode'];

const handleClear = () => {
    kendoForm.onFormReset();
    populatedFields.value = {};
};

const handleSmartPaste = async (e) => {
    isLoading.value = true;
    populatedFields.value = {};
    clearFormErrors();

    try {
        const response = await fetch('https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(e.requestData)
        });

        if (response.ok) {
            const data = await response.json();
            e.setResponse(data);

            const fieldValues = data.fieldValues || {};
            const populated = {};
            for (const name of fieldNames) {
                if (fieldValues[name] && fieldValues[name].trim() !== '') {
                    populated[name] = true;
                }
            }
            populatedFields.value = populated;

            await nextTick();

            for (const name of fieldNames) {
                kendoForm.onBlur(name);
            }
        }
    } catch (error) {
        console.error('Smart paste error:', error);
    } finally {
        isLoading.value = false;
    }
};
</script>
