<template>
    <FormElement :cols="formBreakpoints">
        <legend class="k-form-legend">Issue Tracker</legend>

        <FieldWrapper>
            <label for="title" class="k-label k-form-label">Title</label>
            <div class="k-form-field-wrap">
                <input
                    type="text"
                    id="title"
                    name="title"
                    class="native-input"
                    data-smartpaste-description="Issue title or summary"
                />
            </div>
        </FieldWrapper>

        <FieldWrapper>
            <label for="category" class="k-label k-form-label">Category (dropdown)</label>
            <div class="k-form-field-wrap">
                <select
                    id="category"
                    name="category"
                    class="native-select"
                    data-smartpaste-description="Issue category"
                >
                    <option value="">Select...</option>
                    <option v-for="item in categories" :key="item" :value="item">
                        {{ item }}
                    </option>
                </select>
            </div>
        </FieldWrapper>

        <FieldWrapper>
            <label class="k-label k-form-label">Priority (radio buttons)</label>
            <div class="k-form-field-wrap">
                <div class="radio-group" role="radiogroup">
                    <label v-for="item in priorities" :key="item" class="radio-label">
                        <input
                            type="radio"
                            name="priority"
                            :data-smartpaste-description="`Priority: ${item}`"
                            :value="item"
                            class="k-radio k-radio-md"
                        />
                        <span class="k-radio-label">{{ item }}</span>
                    </label>
                </div>
            </div>
        </FieldWrapper>

        <FieldWrapper>
            <label for="status" class="k-label k-form-label">Status (dropdown)</label>
            <div class="k-form-field-wrap">
                <select
                    id="status"
                    name="status"
                    class="native-select"
                    data-smartpaste-description="Current status"
                >
                    <option value="">Select...</option>
                    <option v-for="item in statuses" :key="item" :value="item">
                        {{ item }}
                    </option>
                </select>
            </div>
        </FieldWrapper>

        <FieldWrapper>
            <label for="reporter" class="k-label k-form-label">Reported By</label>
            <div class="k-form-field-wrap">
                <input
                    type="text"
                    id="reporter"
                    name="reporter"
                    class="native-input"
                    data-smartpaste-description="Person who reported the issue"
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
import { SmartPasteButton, Button as KButton } from '@progress/kendo-vue-buttons';
import { arrowRotateCcwIcon } from '@progress/kendo-svg-icons';

const kendoForm = inject('kendoForm', {});

const priorities = ['Critical', 'High', 'Medium', 'Low'];
const statuses = ['New', 'In Progress', 'On Hold', 'Resolved', 'Closed'];
const categories = ['Bug', 'Feature Request', 'Documentation', 'Support'];

const formBreakpoints = [
    { minWidth: 0, maxWidth: 464, value: 1 },
    { minWidth: 465, value: 2 }
];

const formFields = [
    { field: 'title', type: 'string', description: 'Issue title or summary' },
    { field: 'category', type: 'fixed-choices', description: 'Issue category', allowedValues: categories },
    { field: 'priority', description: 'Priority level', type: 'kendo-input', allowedValues: priorities },
    { field: 'status', type: 'fixed-choices', description: 'Current status', allowedValues: statuses },
    { field: 'reporter', type: 'string', description: 'Person who reported the issue' }
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
