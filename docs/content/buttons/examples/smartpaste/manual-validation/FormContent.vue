<template>
    <div v-if="isLoading" class="loader-overlay">
        <Loader size="large" type="infinite-spinner" />
    </div>
    <FormElement :cols="formBreakpoints">
        <legend class="k-form-legend">Employee Registration</legend>

        <FieldWrapper>
            <label for="fullName" class="k-label k-form-label">Full Name</label>
            <div class="k-form-field-wrap">
                <KInput id="fullName" name="fullName" placeholder="e.g. John Doe" />
                <KError v-if="formErrors.fullName">{{ formErrors.fullName }}</KError>
            </div>
        </FieldWrapper>

        <FieldWrapper>
            <label for="email" class="k-label k-form-label">Email</label>
            <div class="k-form-field-wrap">
                <KInput id="email" name="email" placeholder="e.g. john.doe@company.com" />
                <KError v-if="formErrors.email">{{ formErrors.email }}</KError>
            </div>
        </FieldWrapper>

        <FieldWrapper>
            <label for="phone" class="k-label k-form-label">Phone</label>
            <div class="k-form-field-wrap">
                <MaskedTextBox id="phone" name="phone" mask="(000) 000-0000" placeholder="(___) ___-____" />
                <KError v-if="formErrors.phone">{{ formErrors.phone }}</KError>
            </div>
        </FieldWrapper>

        <FieldWrapper>
            <label for="birthDate" class="k-label k-form-label">Date of Birth</label>
            <div class="k-form-field-wrap">
                <DatePicker id="birthDate" name="birthDate" :value="birthDateValue" @change="(e) => { birthDateValue = e.value; }" />
                <KError v-if="formErrors.birthDate">{{ formErrors.birthDate }}</KError>
            </div>
        </FieldWrapper>

        <FieldWrapper :col-span="[{ minWidth: 0, maxWidth: 599, value: 1 }, { minWidth: 600, value: 2 }]">
            <label for="department" class="k-label k-form-label">Department</label>
            <div class="k-form-field-wrap">
                <DropDownList
                    id="department"
                    name="department"
                    :data-items="departments"
                    text-field="text"
                    data-item-key="value"
                    :value="departmentValue"
                    @change="(e) => { departmentValue = e.value; }"
                />
                <KError v-if="formErrors.department">{{ formErrors.department }}</KError>
            </div>
        </FieldWrapper>

        <div class="k-form-buttons" :style="{ gridColumn: '1 / -1', justifyContent: 'flex-start' }">
            <KButton
                :svg-icon="arrowRotateCcwIcon"
                fill-mode="flat"
                @click="handleClear"
                type="button"
                title="Clear form"
            />
            <SmartPasteButton
                :disabled="isLoading"
                @click="handleSmartPaste"
                theme-color="primary"
            >
                {{ isLoading ? 'Processing...' : 'Smart Paste' }}
            </SmartPasteButton>
        </div>
    </FormElement>
</template>

<script setup>
import { inject, ref } from 'vue';
import { FormElement, FieldWrapper } from '@progress/kendo-vue-form';
import { Input as KInput, MaskedTextBox } from '@progress/kendo-vue-inputs';
import { DatePicker } from '@progress/kendo-vue-dateinputs';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { SmartPasteButton, Button as KButton } from '@progress/kendo-vue-buttons';
import { Loader } from '@progress/kendo-vue-indicators';
import { Error as KError } from '@progress/kendo-vue-labels';
import { arrowRotateCcwIcon } from '@progress/kendo-svg-icons';

const kendoForm = inject('kendoForm', {});
const formErrors = inject('formErrors', ref({}));
const clearFormErrors = inject('clearFormErrors', () => {});

const departments = [
    { text: 'Sales', value: 'sales' },
    { text: 'Marketing', value: 'marketing' },
    { text: 'Engineering', value: 'engineering' },
    { text: 'HR', value: 'hr' },
    { text: 'Finance', value: 'finance' }
];

const formBreakpoints = [
    { minWidth: 0, maxWidth: 464, value: 1 },
    { minWidth: 465, value: 2 }
];

const isLoading = ref(false);
const birthDateValue = ref(null);
const departmentValue = ref(null);

const handleClear = () => {
    kendoForm.onFormReset();
    clearFormErrors();
    birthDateValue.value = null;
    departmentValue.value = null;
};

const validateResponse = (data) => {
    const errors = {};

    if (!data.fullName) {
        errors.fullName = 'Could not extract name from clipboard';
    }
    if (!data.email) {
        errors.email = 'Could not extract email from clipboard';
    }
    if (!data.phone) {
        errors.phone = 'Could not extract phone from clipboard';
    }
    if (!data.birthDate) {
        errors.birthDate = 'Could not extract birth date from clipboard';
    }
    if (!data.department) {
        errors.department = 'Could not extract department from clipboard';
    }

    return errors;
};

const handleSmartPaste = async (e) => {
    isLoading.value = true;
    clearFormErrors();

    try {
        const response = await fetch('https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(e.requestData)
        });

        if (response.ok) {
            const data = await response.json();
            e.setResponse(data);

            const fieldValues = data.fieldValues || {};
            if (fieldValues.birthDate) {
                const dateObj = new Date(fieldValues.birthDate);
                birthDateValue.value = !isNaN(dateObj.getTime()) ? dateObj : null;
            }
            if (fieldValues.department) {
                const match = departments.find(
                    (d) => d.text.toLowerCase() === fieldValues.department.toLowerCase()
                );
                departmentValue.value = match || null;
            }

            const validationErrors = validateResponse(fieldValues);
            if (Object.keys(validationErrors).length > 0) {
                formErrors.value = validationErrors;
            }
        }
    } catch (error) {
        console.error('Smart paste failed:', error);
    } finally {
        isLoading.value = false;
    }
};
</script>
