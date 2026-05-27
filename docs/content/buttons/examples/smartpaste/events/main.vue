<template>
    <div class="demo-wrapper">
        <div class="demo-hint">
            Copy the sample data to your clipboard, then click <strong>Smart Paste</strong> to see the events in the
            log.
        </div>
        <div class="events-demo">
            <div class="sample-data-box">
                <strong>Sample Data:</strong> {{ sampleData }}
                <KButton :svg-icon="copyIcon" @click="copyToClipboard" fill-mode="flat" size="small">
                    Copy
                </KButton>
            </div>

            <div class="main-content">
                <div class="form-container">
                    <Form @submit="handleSubmit">
                        <FormContent />
                    </Form>
                </div>

                <div class="event-logger">
                    <div class="event-logger-header">
                        <strong>Event Log</strong>
                        <KButton @click="clearLogs" fill-mode="flat" size="small">
                            Clear
                        </KButton>
                    </div>
                    <div class="event-logger-content">
                        <span v-if="eventLogs.length === 0" class="placeholder-text">Click Smart Paste to see event data...</span>
                        <div
                            v-for="(log, index) in eventLogs"
                            :key="index"
                            :class="['event-logger-item', log.type]"
                        >
                            <div class="event-logger-label">
                                {{ log.type === 'request' ? 'Request' : 'Response' }} @ {{ log.timestamp }}
                            </div>
                            <div>{{ JSON.stringify(log.data, null, 2) }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import { Form } from '@progress/kendo-vue-form';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { copyIcon } from '@progress/kendo-svg-icons';
import FormContent from './FormContent.vue';
import './styles.css';

const sampleData = `John Smith
Email: john.smith@example.com
Phone: (555) 123-4567
Company: Acme Corp`;

const eventLogs = ref([]);

const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));

const copyToClipboard = () => {
    navigator.clipboard.writeText(sampleData);
};

const clearLogs = () => {
    eventLogs.value = [];
};

provide('eventLogs', eventLogs);
</script>
