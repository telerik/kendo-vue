<template>
    <FormElement :cols="formBreakpoints">
        <legend class="k-form-legend">Support Ticket</legend>

        <FieldWrapper>
            <label for="ticketNumber" class="k-label k-form-label">Ticket Number</label>
            <div class="k-form-field-wrap">
                <KInput id="ticketNumber" name="ticketNumber" placeholder="e.g. #12345" />
            </div>
        </FieldWrapper>

        <FieldWrapper>
            <label for="customerName" class="k-label k-form-label">Customer Name</label>
            <div class="k-form-field-wrap">
                <KInput id="customerName" name="customerName" placeholder="e.g. John Smith" />
            </div>
        </FieldWrapper>

        <FieldWrapper>
            <label for="issue" class="k-label k-form-label">Issue</label>
            <div class="k-form-field-wrap">
                <KInput id="issue" name="issue" placeholder="Brief description of the issue" />
            </div>
        </FieldWrapper>

        <FieldWrapper>
            <label for="priority" class="k-label k-form-label">Priority</label>
            <div class="k-form-field-wrap">
                <DropDownList
                    id="priority"
                    name="priority"
                    :data-items="priorities"
                    text-field="text"
                    data-item-key="value"
                    :value="priorityValue"
                    @change="(e) => { priorityValue = e.value; }"
                />
            </div>
        </FieldWrapper>

        <FieldWrapper :col-span="[{ minWidth: 0, value: 2 }]">
            <label for="description" class="k-label k-form-label">Description</label>
            <div class="k-form-field-wrap">
                <TextArea
                    id="description"
                    name="description"
                    placeholder="Detailed description..."
                    :rows="3"
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
                :theme-color="clipboardError ? 'error' : 'primary'"
                :class="clipboardError ? 'clipboard-error' : ''"
            >
                {{ buttonText }}
            </SmartPasteButton>
        </div>
    </FormElement>
</template>

<script setup>
import { inject, ref, computed } from 'vue';
import { FormElement, FieldWrapper } from '@progress/kendo-vue-form';
import { Input as KInput, TextArea } from '@progress/kendo-vue-inputs';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { SmartPasteButton, Button as KButton } from '@progress/kendo-vue-buttons';
import { arrowRotateCcwIcon } from '@progress/kendo-svg-icons';

const kendoForm = inject('kendoForm', {});

const priorities = [
    { text: 'Low', value: 'low' },
    { text: 'Medium', value: 'medium' },
    { text: 'High', value: 'high' },
    { text: 'Critical', value: 'critical' }
];

const formBreakpoints = [
    { minWidth: 0, maxWidth: 464, value: 1 },
    { minWidth: 465, value: 2 }
];

const isLoading = ref(false);
const clipboardError = ref(false);
const priorityValue = ref(null);

const buttonText = computed(() => {
    if (isLoading.value) return 'Processing...';
    if (clipboardError.value) return 'Clipboard is empty';
    return 'Smart Paste';
});

const handleClear = () => {
    kendoForm.onFormReset();
    priorityValue.value = null;
};

const handleSmartPaste = async (e) => {
    const clipboardContent = e.requestData?.content;

    if (!clipboardContent || clipboardContent.trim() === '') {
        clipboardError.value = true;
        setTimeout(() => { clipboardError.value = false; }, 3000);
        return;
    }

    clipboardError.value = false;
    isLoading.value = true;

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
            if (fieldValues.priority) {
                const match = priorities.find(
                    (p) => p.text.toLowerCase() === fieldValues.priority.toLowerCase()
                );
                priorityValue.value = match || null;
            }
        }
    } catch (error) {
        console.error('Smart paste failed:', error);
    } finally {
        isLoading.value = false;
    }
};
</script>
