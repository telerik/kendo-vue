<template>
    <div class="page-host">
        <div class="demo-container">
            <SegmentedControl
                :items="itemsWithFocus"
                :value="selectedValue"
                @change="(val) => selectedValue = val"
                :size="'large'"
                :layout-mode="'stretch'"
                :style="{ width: '420px' }"
            />

            <div class="status-group">
                <p class="hint-text">Click the control, then use the keyboard.</p>

                <div class="status-divider" />

                <div class="status-bar">
                    <div class="status-item">
                        <span class="status-label">Focused:</span>
                        <span class="status-value">{{ focusedValue }}</span>
                    </div>
                    <div class="status-separator" />
                    <div class="status-item">
                        <span class="status-label">Selected:</span>
                        <span class="status-value">{{ selectedLabel }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { SegmentedControl } from '@progress/kendo-vue-buttons';
import './styles.css';

const items = [
    { value: 'day', text: 'Day' },
    { value: 'week', text: 'Week' },
    { value: 'month', text: 'Month' },
    { value: 'year', text: 'Year', disabled: true }
];

const selectedValue = ref('week');
const focusedValue = ref('Week');

const selectedLabel = computed(() => items.find((item) => item.value === selectedValue.value)?.text ?? '');

const itemsWithFocus = computed(() =>
    items.map((item) => ({
        ...item,
        onFocus: () => { focusedValue.value = item.text ?? ''; }
    }))
);
</script>
