<template>
    <div class="demo-wrapper">
        <div class="demo-hint">
            Copy the sample data to your clipboard, then click <strong>Smart Paste</strong> to automatically fill
            the form. Try with empty clipboard to see error handling.
        </div>
        <div class="error-handling-demo">
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
                <KForm :validator="formValidator" :errors="formErrors" :on-change="handleChange">
                    <FormContent />
                </KForm>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import { Form as KForm } from '@progress/kendo-vue-form';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { Card, CardHeader, CardTitle, CardBody, CardActions } from '@progress/kendo-vue-layout';
import { copyIcon } from '@progress/kendo-svg-icons';
import FormContent from './FormContent.vue';
import './styles.css';

const sampleData = `Ashley Johnson, Portland`;

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

provide('clearFormErrors', () => { formErrors.value = {}; });

function formValidator(values) {
    const errors = {};

    if (!values.fullName || values.fullName.trim() === '') {
        errors.fullName = 'Full Name is required';
    }
    if (!values.city || values.city.trim() === '') {
        errors.city = 'City is required';
    }
    if (!values.postCode || values.postCode.trim() === '') {
        errors.postCode = 'Post Code is required';
    }

    if (Object.keys(errors).length > 0) {
        return errors;
    }
}
</script>


