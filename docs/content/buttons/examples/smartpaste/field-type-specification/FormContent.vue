<template>
    <FormElement :cols="formBreakpoints">
        <legend class="k-form-legend">Support Ticket</legend>

        <FieldWrapper>
            <label for="customerName" class="k-label k-form-label">
                Customer Name (string)
            </label>
            <div class="k-form-field-wrap">
                <input
                    type="text"
                    id="customerName"
                    name="customerName"
                    class="native-input"
                    data-smartpaste-description="Customer full name"
                />
            </div>
        </FieldWrapper>

        <FieldWrapper>
            <label for="phone" class="k-label k-form-label">
                Phone (string)
            </label>
            <div class="k-form-field-wrap">
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    class="native-input"
                    data-smartpaste-description="Phone number"
                />
            </div>
        </FieldWrapper>

        <FieldWrapper>
            <label for="submittedDate" class="k-label k-form-label">Submitted Date (kendo-input)</label>
            <div class="k-form-field-wrap">
                <DatePicker id="submittedDate" name="submittedDate" :value="submittedDateValue" @change="(e) => { submittedDateValue = e.value; }" />
            </div>
        </FieldWrapper>

        <FieldWrapper>
            <label for="priority" class="k-label k-form-label">
                Priority (fixed-choices)
            </label>
            <div class="k-form-field-wrap">
                <select
                    id="priority"
                    name="priority"
                    class="native-select"
                    data-smartpaste-description="Ticket priority level"
                >
                    <option value="">Select...</option>
                    <option v-for="item in priorities" :key="item" :value="item">
                        {{ item }}
                    </option>
                </select>
            </div>
        </FieldWrapper>

        <FieldWrapper>
            <label for="estimatedHours" class="k-label k-form-label">
                Estimated Hours (number)
            </label>
            <div class="k-form-field-wrap">
                <input
                    type="number"
                    id="estimatedHours"
                    name="estimatedHours"
                    class="native-input"
                    data-smartpaste-description="Estimated hours to resolve"
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
import { DatePicker } from '@progress/kendo-vue-dateinputs';
import { SmartPasteButton, Button as KButton } from '@progress/kendo-vue-buttons';
import { arrowRotateCcwIcon } from '@progress/kendo-svg-icons';

const kendoForm = inject('kendoForm', {});

const priorities = ['High', 'Medium', 'Low'];

const formBreakpoints = [
    { minWidth: 0, maxWidth: 464, value: 1 },
    { minWidth: 465, value: 2 }
];

const formFields = [
    { field: 'customerName', type: 'string', description: 'Customer full name' },
    { field: 'phone', type: 'string', description: 'Phone number in format (XXX) XXX-XXXX' },
    { field: 'submittedDate', type: 'kendo-input', description: 'Date when ticket was submitted' },
    { field: 'priority', type: 'fixed-choices', description: 'Ticket priority level', allowedValues: priorities },
    { field: 'estimatedHours', type: 'number', description: 'Estimated hours to resolve' }
];

const isLoading = ref(false);
const submittedDateValue = ref(null);

const handleClear = () => {
    kendoForm.onFormReset();
    submittedDateValue.value = null;
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
        if (fieldValues.submittedDate) {
            const dateObj = new Date(fieldValues.submittedDate);
            submittedDateValue.value = !isNaN(dateObj.getTime()) ? dateObj : null;
        }
    } catch (error) {
        console.error('Smart paste failed:', error);
    } finally {
        isLoading.value = false;
    }
};
</script>
