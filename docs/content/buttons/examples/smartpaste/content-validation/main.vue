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
                <CardActions layout="stretched">
                    <KButton :svg-icon="copyIcon" @click="copyToClipboard" theme-color="primary">
                        Copy
                    </KButton>
                    <KButton @click="clearClipboard">Clear Clipboard</KButton>
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

const sampleData = `Ticket #12345
Customer: John Smith
Issue: Unable to login to account
Priority: High
Description: Customer reports getting "Invalid credentials" error when trying to login with correct password.`;

const copyToClipboard = () => {
    navigator.clipboard.writeText(sampleData);
};

const clearClipboard = () => {
    navigator.clipboard.writeText('');
};
</script>
