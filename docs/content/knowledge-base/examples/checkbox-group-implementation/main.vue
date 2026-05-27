<template>
    <div class="example-wrapper">
        <h4>Checkbox Group with Select All and Limited Selection</h4>
        <p>
            <strong>Note:</strong> You can select up to 2 individual checkboxes. Use "Select All" to select all at once.
        </p>

        <div class="checkbox-group">
            <!-- Select All Checkbox -->
            <Checkbox :label="'Select All'" :checked="isAllSelected" @change="handleSelectAllChange" />

            <div class="separator"></div>

            <!-- Individual Checkboxes -->
            <Checkbox
                v-for="index in 6"
                :key="index"
                :label="'Option ' + index"
                :checked="selectedItems.has(index - 1)"
                :disabled="!selectedItems.has(index - 1) && selectedItems.size >= 2 && !isAllSelected"
                @change="(e) => handleCheckboxChange(e, index - 1)"
            />
        </div>

        <div class="selection-info">
            <p><strong>Selected items:</strong> {{ selectedCount }} / 6</p>
            <p><strong>Selected indices:</strong> {{ selectedIndices }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Checkbox } from '@progress/kendo-vue-inputs';

const selectedItems = ref(new Set());

// Derived state: true if all items are selected
const isAllSelected = computed(() => selectedItems.value.size === 6);

// Count of selected items
const selectedCount = computed(() => selectedItems.value.size);

// Display selected indices
const selectedIndices = computed(() => {
    return (
        Array.from(selectedItems.value)
            .sort((a, b) => a - b)
            .map((i) => i + 1)
            .join(', ') || 'None'
    );
});

const handleCheckboxChange = (event, index) => {
    const updated = new Set(selectedItems.value);

    if (event.value) {
        updated.add(index);
    } else {
        updated.delete(index);
    }

    selectedItems.value = updated;
};

const handleSelectAllChange = (event) => {
    if (event.value) {
        // Select all
        selectedItems.value = new Set([0, 1, 2, 3, 4, 5]);
    } else {
        // Deselect all
        selectedItems.value = new Set();
    }
};
</script>

<style scoped>
.example-wrapper {
    padding: 20px;
}

.checkbox-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 20px 0;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #f9f9f9;
}

.separator {
    height: 1px;
    background-color: #ddd;
    margin: 8px 0;
}

.selection-info {
    margin-top: 20px;
    padding: 15px;
    background-color: #e3f2fd;
    border-radius: 4px;
    border-left: 4px solid #2196f3;
}

.selection-info p {
    margin: 5px 0;
    font-size: 14px;
}
</style>
