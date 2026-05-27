<template>
    <FormElement>
        <fieldset class="k-form-fieldset">
            <legend class="k-form-legend">New Hire Registration</legend>

            <div class="form-grid">
                <FieldWrapper>
                    <label for="fullName" class="k-label k-form-label">Full Name</label>
                    <div class="k-form-field-wrap">
                        <KInput id="fullName" name="fullName" />
                    </div>
                </FieldWrapper>

                <FieldWrapper>
                    <label for="email" class="k-label k-form-label">Email</label>
                    <div class="k-form-field-wrap">
                        <KInput id="email" name="email" />
                    </div>
                </FieldWrapper>

                <FieldWrapper>
                    <label for="phone" class="k-label k-form-label">Phone</label>
                    <div class="k-form-field-wrap">
                        <MaskedTextBox id="phone" name="phone" mask="(000) 000-0000" />
                    </div>
                </FieldWrapper>

                <FieldWrapper>
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

                <FieldWrapper>
                    <label for="startDate" class="k-label k-form-label">Start Date</label>
                    <div class="k-form-field-wrap">
                        <DatePicker id="startDate" name="startDate" :value="startDateValue" @change="(e) => { startDateValue = e.value; }" />
                    </div>
                </FieldWrapper>

                <FieldWrapper>
                    <label for="salary" class="k-label k-form-label">Salary</label>
                    <div class="k-form-field-wrap">
                        <NumericTextBox id="salary" name="salary" format="c0" />
                    </div>
                </FieldWrapper>
            </div>
        </fieldset>

        <div class="k-form-buttons">
            <KButton
                :svg-icon="arrowRotateCcwIcon"
                fill-mode="flat"
                @click="handleClear"
                type="button"
                title="Clear form"
            />
        </div>

        <SmartPasteButton
            ref="smartPasteRef"
            @click="handleSmartPaste"
            :style="{ display: 'none' }"
        >
            Smart Paste
        </SmartPasteButton>
    </FormElement>
</template>

<script setup>
import { inject, ref } from 'vue';
import { FormElement, FieldWrapper } from '@progress/kendo-vue-form';
import { Input as KInput, MaskedTextBox, NumericTextBox } from '@progress/kendo-vue-inputs';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { DatePicker } from '@progress/kendo-vue-dateinputs';
import { SmartPasteButton, Button as KButton } from '@progress/kendo-vue-buttons';
import { arrowRotateCcwIcon } from '@progress/kendo-svg-icons';

const kendoForm = inject('kendoForm', {});
const isLoading = inject('isLoading', ref(false));

const departments = [
    { text: 'Sales', value: 'Sales' },
    { text: 'Marketing', value: 'Marketing' },
    { text: 'Engineering', value: 'Engineering' },
    { text: 'HR', value: 'HR' },
    { text: 'Finance', value: 'Finance' }
];

const startDateValue = ref(null);
const departmentValue = ref(null);
const smartPasteRef = ref(null);

const handleClear = () => {
    kendoForm.onFormReset();
    startDateValue.value = null;
    departmentValue.value = null;
};

const handleSmartPaste = async (event) => {
    isLoading.value = true;
    try {
        const response = await fetch('https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(event.requestData)
        });
        const data = await response.json();
        event.setResponse(data);

        const fieldValues = data.fieldValues || {};
        if (fieldValues.startDate) {
            const dateObj = new Date(fieldValues.startDate);
            startDateValue.value = !isNaN(dateObj.getTime()) ? dateObj : null;
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

const triggerSmartPaste = () => {
    if (smartPasteRef.value) {
        smartPasteRef.value.$el.click();
    }
};

defineExpose({ triggerSmartPaste });
</script>
