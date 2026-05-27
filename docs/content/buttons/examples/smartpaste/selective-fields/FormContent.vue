<template>
    <FormElement :cols="formBreakpoints">
        <legend class="k-form-legend">Job Application</legend>

        <FieldWrapper>
            <label for="fullName" class="k-label k-form-label">Full Name ✓</label>
            <div class="k-form-field-wrap">
                <KInput id="fullName" name="fullName" />
            </div>
        </FieldWrapper>

        <FieldWrapper>
            <label for="experience" class="k-label k-form-label">Years of Experience ✓</label>
            <div class="k-form-field-wrap">
                <NumericTextBox id="experience" name="experience" />
            </div>
        </FieldWrapper>

        <FieldWrapper>
            <label for="phone" class="k-label k-form-label">Phone</label>
            <div class="k-form-field-wrap">
                <KInput id="phone" name="phone" />
            </div>
        </FieldWrapper>

        <FieldWrapper>
            <label for="salary" class="k-label k-form-label">Expected Salary</label>
            <div class="k-form-field-wrap">
                <NumericTextBox id="salary" name="salary" format="c0" />
            </div>
        </FieldWrapper>

        <FieldWrapper>
            <label for="email" class="k-label k-form-label">Email ✓</label>
            <div class="k-form-field-wrap">
                <KInput id="email" name="email" />
            </div>
        </FieldWrapper>

        <FieldWrapper>
            <label for="startDate" class="k-label k-form-label">Available Start Date</label>
            <div class="k-form-field-wrap">
                <DatePicker id="startDate" name="startDate" />
            </div>
        </FieldWrapper>

        <FieldWrapper :style="{ gridColumn: '1 / -1' }">
            <label for="coverLetter" class="k-label k-form-label">Cover Letter</label>
            <div class="k-form-field-wrap">
                <TextArea id="coverLetter" name="coverLetter" :rows="3" />
            </div>
        </FieldWrapper>

        <div class="k-form-buttons" :style="{ gridColumn: '1 / -1', justifyContent: 'flex-start' }">
            <KButton
                :svg-icon="arrowRotateCcwIcon"
                fill-mode="flat"
                @click="kendoForm.onFormReset()"
                type="button"
                title="Clear form"
            />
            <SmartPasteButton
                :disabled="isLoading"
                @click="handleSmartPaste"
                :form-fields="formFields"
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
import { Input as KInput, NumericTextBox, TextArea } from '@progress/kendo-vue-inputs';
import { DatePicker } from '@progress/kendo-vue-dateinputs';
import { SmartPasteButton, Button as KButton } from '@progress/kendo-vue-buttons';
import { arrowRotateCcwIcon } from '@progress/kendo-svg-icons';

const kendoForm = inject('kendoForm', {});

const formBreakpoints = [
    { minWidth: 0, maxWidth: 464, value: 1 },
    { minWidth: 465, value: 2 }
];

const formFields = [
    { field: 'fullName', type: 'string', description: 'Applicant full name' },
    { field: 'email', type: 'string', description: 'Email address' },
    { field: 'experience', type: 'number', description: 'Years of professional experience' }
];

const isLoading = ref(false);

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
    } catch (error) {
        console.error('Smart paste failed:', error);
    } finally {
        isLoading.value = false;
    }
};
</script>
