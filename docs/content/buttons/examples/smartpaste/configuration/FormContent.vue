<template>
    <FormElement :cols="formBreakpoints">
        <legend class="k-form-legend">Employee Registration</legend>

        <FieldWrapper>
            <label for="fullName" class="k-label k-form-label">Full Name</label>
            <div class="k-form-field-wrap">
                <KInput id="fullName" name="fullName" placeholder="e.g. John Doe" />
            </div>
        </FieldWrapper>

        <FieldWrapper>
            <label for="email" class="k-label k-form-label">Email</label>
            <div class="k-form-field-wrap">
                <KInput id="email" name="email" placeholder="e.g. john.doe@company.com" />
            </div>
        </FieldWrapper>

        <FieldWrapper>
            <label for="phone" class="k-label k-form-label">Phone</label>
            <div class="k-form-field-wrap">
                <MaskedTextBox id="phone" name="phone" mask="(000) 000-0000" placeholder="(___) ___-____" />
            </div>
        </FieldWrapper>

        <FieldWrapper>
            <label for="birthDate" class="k-label k-form-label">Date of Birth</label>
            <div class="k-form-field-wrap">
                <DatePicker id="birthDate" name="birthDate" :value="birthDateValue" @change="(e) => { birthDateValue = e.value; }" />
            </div>
        </FieldWrapper>

        <FieldWrapper :col-span="departmentColSpan">
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
import { arrowRotateCcwIcon } from '@progress/kendo-svg-icons';

const kendoForm = inject('kendoForm', {});

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

const departmentColSpan = [
    { minWidth: 0, maxWidth: 599, value: 1 },
    { minWidth: 600, value: 2 }
];

const isLoading = ref(false);
const birthDateValue = ref(null);
const departmentValue = ref(null);

const handleClear = () => {
    kendoForm.onFormReset();
    birthDateValue.value = null;
    departmentValue.value = null;
};

const handleSmartPaste = async (e) => {
    isLoading.value = true;
    try {
        const response = await fetch('https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(e.requestData)
        });
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
    } catch (error) {
        console.error('Smart paste failed:', error);
    } finally {
        isLoading.value = false;
    }
};
</script>
