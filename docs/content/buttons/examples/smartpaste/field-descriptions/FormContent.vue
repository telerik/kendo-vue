<template>
    <FormElement :cols="formBreakpoints">
        <legend class="k-form-legend">Meeting Notes</legend>

        <FieldWrapper>
            <label for="attendee" class="k-label k-form-label">Attendee</label>
            <div class="k-form-field-wrap">
                <KInput
                    id="attendee"
                    name="attendee"
                    data-smartpaste-description="The person's full name and job title who attended the meeting"
                />
            </div>
        </FieldWrapper>

        <FieldWrapper>
            <label for="email" class="k-label k-form-label">Email</label>
            <div class="k-form-field-wrap">
                <KInput
                    id="email"
                    name="email"
                    data-smartpaste-description="Contact email address"
                />
            </div>
        </FieldWrapper>

        <FieldWrapper :col-span="[{ minWidth: 0, maxWidth: 599, value: 1 }, { minWidth: 600, value: 2 }]">
            <label for="summary" class="k-label k-form-label">Summary</label>
            <div class="k-form-field-wrap">
                <TextArea
                    id="summary"
                    name="summary"
                    :rows="3"
                    data-smartpaste-description="Brief summary of the main discussion points from the meeting"
                />
            </div>
        </FieldWrapper>

        <FieldWrapper :col-span="[{ minWidth: 0, maxWidth: 599, value: 1 }, { minWidth: 600, value: 2 }]">
            <label for="actionItems" class="k-label k-form-label">Action Items</label>
            <div class="k-form-field-wrap">
                <TextArea
                    id="actionItems"
                    name="actionItems"
                    :rows="3"
                    data-smartpaste-description="List of follow-up tasks and deadlines"
                />
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
import { Input as KInput, TextArea } from '@progress/kendo-vue-inputs';
import { SmartPasteButton, Button as KButton } from '@progress/kendo-vue-buttons';
import { arrowRotateCcwIcon } from '@progress/kendo-svg-icons';

const kendoForm = inject('kendoForm', {});

const formBreakpoints = [
    { minWidth: 0, maxWidth: 464, value: 1 },
    { minWidth: 465, value: 2 }
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
