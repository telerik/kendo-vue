<template>
    <div class="demo-container">
        <div class="demo-header">
            <h2 class="demo-title">Support Tickets</h2>

            <div class="demo-controls">
                <div class="control-group">
                    <span class="control-label">Width mode:</span>
                    <SegmentedControl
                        :value="selectedLayoutMode"
                        @change="handleLayoutModeChange"
                        :items="layoutModeItems"
                    />
                </div>

                <div class="control-group">
                    <span class="control-label">Language:</span>
                    <DropDownButton
                        :text="selectedLanguage"
                        :svg-icon="globeIcon"
                        :items="languageItems"
                        @itemclick="(event) => selectedLanguage = event.item.text"
                    />
                </div>
            </div>
        </div>

        <div class="tickets-section">
            <SegmentedControl
                :value="selectedReport"
                @change="(val) => selectedReport = val"
                :items="reportSegmentItems"
                :size="'large'"
                :layout-mode="selectedLayoutMode"
            />
        </div>

        <div class="status-bar">
            <div class="status-text">
                Showing: <strong>{{ selectedReportLabel }}</strong>
            </div>

            <button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" @click="simulateUpdate">
                Simulate update
            </button>
        </div>

        <div class="preview-section">
            <div class="preview-header">
                <span class="k-skeleton k-opacity-30 k-rounded-full k-h-10" :style="{ width: '180px' }" />
                <span class="k-skeleton k-opacity-30 k-rounded-full k-h-10" :style="{ width: '120px' }" />
                <span class="k-skeleton k-opacity-30 k-rounded-full k-h-10" :style="{ width: '160px' }" />
            </div>

            <div class="preview-content">
                <div class="preview-content-left">
                    <span class="k-skeleton k-opacity-30 k-rounded-md k-h-5 k-mb-3" :style="{ width: '250px' }" />
                    <span class="k-skeleton k-opacity-25 k-rounded-md k-h-4 k-mb-2" :style="{ width: '80%' }" />
                    <span class="k-skeleton k-opacity-25 k-rounded-md k-h-4" :style="{ width: '60%' }" />
                </div>
                <span class="k-skeleton k-opacity-30 k-rounded-md k-h-10" :style="{ width: '120px' }" />
            </div>

            <div class="preview-content">
                <div class="preview-content-left">
                    <span class="k-skeleton k-opacity-30 k-rounded-md k-h-5 k-mb-3" :style="{ width: '250px' }" />
                    <span class="k-skeleton k-opacity-25 k-rounded-md k-h-4 k-mb-2" :style="{ width: '80%' }" />
                    <span class="k-skeleton k-opacity-25 k-rounded-md k-h-4" :style="{ width: '60%' }" />
                </div>
                <span class="k-skeleton k-opacity-30 k-rounded-md k-h-10" :style="{ width: '120px' }" />
            </div>

            <div class="preview-content">
                <div class="preview-content-left">
                    <span class="k-skeleton k-opacity-30 k-rounded-md k-h-5 k-mb-3" :style="{ width: '250px' }" />
                    <span class="k-skeleton k-opacity-25 k-rounded-md k-h-4 k-mb-2" :style="{ width: '80%' }" />
                    <span class="k-skeleton k-opacity-25 k-rounded-md k-h-4" :style="{ width: '60%' }" />
                </div>
                <span class="k-skeleton k-opacity-30 k-rounded-md k-h-10" :style="{ width: '120px' }" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { SegmentedControl, DropDownButton } from '@progress/kendo-vue-buttons';
import { globeIcon } from '@progress/kendo-svg-icons';
import './styles.css';

const layoutModeItems = [
    { text: 'Equal', value: 'stretch' },
    { text: 'Content-based', value: 'compact' }
];

const initialReportItems = [
    { label: 'Open', value: 'open', count: 16, increment: 5 },
    { label: 'In Progress', value: 'progress', count: 3, increment: 1 },
    { label: 'Waiting on Customer', value: 'waiting', count: 7, increment: 2 },
    { label: 'Resolved', value: 'resolved', count: 48, increment: 4 }
];

const languageItems = [{ text: 'EN' }, { text: 'ES' }, { text: 'FR' }, { text: 'DE' }];

const selectedLayoutMode = ref('stretch');
const selectedReport = ref('progress');
const selectedLanguage = ref('EN');
const reportItems = ref([...initialReportItems]);

const selectedReportLabel = computed(
    () => reportItems.value.find((item) => item.value === selectedReport.value)?.label ?? selectedReport.value
);

const reportSegmentItems = computed(() =>
    reportItems.value.map((item) => ({
        value: item.value,
        text: `${item.label} (${item.count})`
    }))
);

const handleLayoutModeChange = (value) => {
    selectedLayoutMode.value = value;
};

const simulateUpdate = () => {
    reportItems.value = reportItems.value.map((item) => ({
        ...item,
        count: item.count + item.increment
    }));
};
</script>
