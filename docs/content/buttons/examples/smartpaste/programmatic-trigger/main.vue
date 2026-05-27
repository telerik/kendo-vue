<template>
    <div class="demo-wrapper">
        <div class="demo-hint">
            Click <strong>Fill Form</strong> to copy sample data and automatically fill the form using programmatic
            trigger.
        </div>
        <div class="programmatic-demo">
            <div v-if="isLoading" class="loader-overlay">
                <Loader size="large" type="infinite-spinner" />
            </div>

            <Card class="sample-data-card">
                <CardHeader>
                    <CardTitle>SAMPLE DATA</CardTitle>
                </CardHeader>
                <CardBody>
                    <div class="sample-data-content">{{ sampleData }}</div>
                </CardBody>
                <CardActions layout="end">
                    <KButton :disabled="isLoading" @click="fillForm" theme-color="primary">
                        Fill Form
                    </KButton>
                </CardActions>
            </Card>

            <div class="form-container">
                <Form>
                    <FormContent ref="formContentRef" />
                </Form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import { Form } from '@progress/kendo-vue-form';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { Loader } from '@progress/kendo-vue-indicators';
import { Card, CardHeader, CardTitle, CardBody, CardActions } from '@progress/kendo-vue-layout';
import FormContent from './FormContent.vue';
import './styles.css';

const sampleData = `New hire information:
Name: Sarah Johnson
Email: sarah.johnson@company.com
Phone: (555) 234-5678
Department: Engineering
Start Date: February 15, 2026
Salary: 95000`;

const isLoading = ref(false);
const formContentRef = ref(null);

provide('isLoading', isLoading);

const fillForm = async () => {
    await navigator.clipboard.writeText(sampleData);
    if (formContentRef.value) {
        formContentRef.value.triggerSmartPaste();
    }
};
</script>
