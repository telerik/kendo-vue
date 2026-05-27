<template>
    <div class="demo-wrapper">
        <div class="demo-hint">
            Copy the sample data to your clipboard, then click <strong>Smart Paste</strong> to automatically fill
            the form.
        </div>
        <div class="validation-demo">
            <Card class="sample-data-card">
                <CardHeader>
                    <CardTitle>SAMPLE DATA</CardTitle>
                </CardHeader>
                <CardBody>
                    <div class="sample-data-content">{{ sampleData }}</div>
                </CardBody>
                <CardActions layout="end">
                    <KButton :svg-icon="copyIcon" @click="copyToClipboard" theme-color="primary">
                        Copy to Clipboard
                    </KButton>
                </CardActions>
            </Card>

            <div class="form-container">
                <Form :on-change="handleChange" :errors="formErrors">
                    <FormContent />
                </Form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import { Form } from '@progress/kendo-vue-form';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { Card, CardHeader, CardTitle, CardBody, CardActions } from '@progress/kendo-vue-layout';
import { copyIcon } from '@progress/kendo-svg-icons';
import FormContent from './FormContent.vue';
import './styles.css';

const sampleData = `New employee onboarding:
Name: Sarah Johnson
Email: sarah.johnson@company.com
Phone: (555) 234-5678
Date of Birth: March 15, 1990
Department: Engineering`;

const formErrors = ref({});

const copyToClipboard = () => {
    navigator.clipboard.writeText(sampleData);
};

const handleChange = (fieldName) => {
    if (formErrors.value[fieldName]) {
        const { [fieldName]: _removed, ...rest } = formErrors.value;
        formErrors.value = rest;
    }
};

const clearFormErrors = () => {
    formErrors.value = {};
};

provide('formErrors', formErrors);
provide('clearFormErrors', clearFormErrors);
</script>

