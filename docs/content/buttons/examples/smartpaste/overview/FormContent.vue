<template>
    <FormElement>
        <FieldWrapper>
            <Field
                name="fullName"
                id="fullName"
                :component="'validatedInput'"
                placeholder="e.g. John Doe"
                label="Full Name"
                :class="isPasted ? 'pasted-input' : ''"
            >
                <template #validatedInput="{ props }">
                    <div :class="props.class">
                        <Input v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
                        <KError v-if="props.visited && props.validationMessage">{{ props.validationMessage }}</KError>
                    </div>
                </template>
            </Field>
        </FieldWrapper>

        <FieldWrapper>
            <Field
                name="city"
                id="city"
                :component="'cityInput'"
                placeholder="e.g. London"
                label="City"
                :class="isPasted ? 'pasted-input' : ''"
            >
                <template #cityInput="{ props }">
                    <div :class="props.class">
                        <Input v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
                        <KError v-if="props.visited && props.validationMessage">{{ props.validationMessage }}</KError>
                    </div>
                </template>
            </Field>
        </FieldWrapper>

        <FieldWrapper>
            <Field
                name="phone"
                id="phone"
                :component="'phoneInput'"
                label="Phone Number"
                placeholder="e.g. XXXXXXXXXX"
                :class="isPasted ? 'pasted-input' : ''"
            >
                <template #phoneInput="{ props }">
                    <div :class="props.class">
                        <Input v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
                        <KError v-if="props.visited && props.validationMessage">{{ props.validationMessage }}</KError>
                    </div>
                </template>
            </Field>
        </FieldWrapper>

        <div class="k-form-buttons">
            <KButton
                :svg-icon="arrowRotateCcwIcon"
                fill-mode="flat"
                type="button"
                @click="handleReset"
            />
            <SmartPasteButton @click="handleSmartPaste">Smart Paste</SmartPasteButton>
        </div>
    </FormElement>
</template>

<script setup>
import { inject, ref } from 'vue';
import { Field, FormElement, FieldWrapper } from '@progress/kendo-vue-form';
import { Input } from '@progress/kendo-vue-inputs';
import { Error as KError } from '@progress/kendo-vue-labels';
import { Button as KButton, SmartPasteButton } from '@progress/kendo-vue-buttons';
import { arrowRotateCcwIcon } from '@progress/kendo-svg-icons';

const kendoForm = inject('kendoForm', {});
const isLoading = inject('isLoading', ref(false));
const isPasted = inject('isPasted', ref(false));
const onPasteComplete = inject('onPasteComplete', () => {});
const onReset = inject('onReset', () => {});

const handleSmartPaste = async (e) => {
    isLoading.value = true;
    try {
        const response = await fetch('https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(e.requestData)
        });
        const data = await response.json();
        e.setResponse(data);
        onPasteComplete();
    } catch (error) {
        console.error('Smart paste request failed:', error);
    } finally {
        isLoading.value = false;
    }
};

const handleReset = () => {
    kendoForm.onFormReset();
    onReset();
};
</script>
