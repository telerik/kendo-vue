<template>
    <div class="demo-wrapper">
        <div class="demo-hint">
            Copy the sample data to your clipboard, then click <strong>Smart Paste</strong> to automatically fill
            the form.
        </div>
        <div class="field-types-demo">
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
                <Form>
                    <FormContent />
                </Form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Form } from '@progress/kendo-vue-form';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { Card, CardHeader, CardTitle, CardBody, CardActions } from '@progress/kendo-vue-layout';
import { copyIcon } from '@progress/kendo-svg-icons';
import FormContent from './FormContent.vue';
import './styles.css';

const sampleData = `Support Ticket #4521
Customer: Michael Chen
Contact: (555) 987-6543
Submitted: January 15, 2026
Priority: High
Estimated Hours: 8`;

const copyToClipboard = () => {
    navigator.clipboard.writeText(sampleData);
};
</script>
