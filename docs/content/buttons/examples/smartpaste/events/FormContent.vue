<template>
    <FormElement>
        <legend class="k-form-legend">Contact Form</legend>
        <SmartPasteButton
            :disabled="isLoading"
            @click="handleSmartPaste"
            theme-color="primary"
        >
            {{ isLoading ? 'Processing...' : 'Smart Paste' }}
        </SmartPasteButton>

        <FieldWrapper>
            <label for="fullName" class="k-label k-form-label">Full Name</label>
            <KInput id="fullName" name="fullName" />
        </FieldWrapper>
        <FieldWrapper>
            <label for="email" class="k-label k-form-label">Email</label>
            <KInput id="email" name="email" />
        </FieldWrapper>
        <FieldWrapper>
            <label for="phone" class="k-label k-form-label">Phone</label>
            <KInput id="phone" name="phone" />
        </FieldWrapper>
        <FieldWrapper>
            <label for="company" class="k-label k-form-label">Company</label>
            <KInput id="company" name="company" />
        </FieldWrapper>

        <div class="k-form-buttons">
            <KButton type="submit" theme-color="primary" :disabled="!kendoForm.allowSubmit">
                Submit
            </KButton>
        </div>
    </FormElement>
</template>

<script setup>
import { inject, ref } from 'vue';
import { FormElement, FieldWrapper } from '@progress/kendo-vue-form';
import { Input as KInput } from '@progress/kendo-vue-inputs';
import { SmartPasteButton, Button as KButton } from '@progress/kendo-vue-buttons';

const kendoForm = inject('kendoForm', {});
const eventLogs = inject('eventLogs', ref([]));

const isLoading = ref(false);

const handleSmartPaste = async (event) => {
    eventLogs.value = [
        {
            type: 'request',
            timestamp: new Date().toLocaleTimeString(),
            data: event.requestData
        },
        ...eventLogs.value
    ];

    isLoading.value = true;

    try {
        const response = await fetch('https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(event.requestData)
        });

        if (!response.ok) {
            throw new Error('AI service error: ' + response.statusText);
        }

        const data = await response.json();

        eventLogs.value = [
            {
                type: 'response',
                timestamp: new Date().toLocaleTimeString(),
                data: data
            },
            ...eventLogs.value
        ];

        event.setResponse(data);
    } catch (error) {
        console.error('Smart paste failed:', error);
    } finally {
        isLoading.value = false;
    }
};
</script>
