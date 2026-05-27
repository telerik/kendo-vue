<template>
    <div class="example-wrapper">
        <h4>MultiSelect with Select All and Checkboxes</h4>
        <p>Select European countries:</p>

        <MultiSelect
            :data-items="dataWithSelectAll"
            :value="displayedValue"
            :auto-close="false"
            @change="handleChange"
            :item-render="'customItem'"
            :tag-render="'customTag'"
            :tags="customTags"
        >
            <template #customItem="{ props }">
                <li :class="props.itemClass" @click="props.onClick">
                    <Checkbox :checked="props.selected">
                        <span class="k-checkbox-label">&nbsp;{{ props.dataItem }}</span>
                    </Checkbox>
                </li>
            </template>
            <template #customTag="{ props }">
                <Chip :text="props.tagData.text" :removable="true" @remove="handleTagRemove(props.tagData)" />
            </template>
        </MultiSelect>

        <div class="selection-info">
            <p><strong>Selected items:</strong> {{ value.length }} / {{ countries.length }}</p>
            <p><strong>Selected countries:</strong> {{ value.join(', ') || 'None' }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { MultiSelect } from '@progress/kendo-vue-dropdowns';
import { Checkbox } from '@progress/kendo-vue-inputs';
import { Chip } from '@progress/kendo-vue-buttons';

const countries = ['Albania', 'Andorra', 'Austria', 'Belarus', 'Belgium'];
const SELECT_ALL = 'Select All';
const dataWithSelectAll = [SELECT_ALL, ...countries];

const value = ref([]);

const handleChange = (event) => {
    const selected = event.value;
    const hasSelectAll = selected.includes(SELECT_ALL);
    const hadAllSelected = value.value.length === countries.length;

    if (hasSelectAll && !hadAllSelected) {
        // Select all items
        value.value = [...countries];
    } else if (!hasSelectAll && hadAllSelected) {
        // Deselect all items
        value.value = [];
    } else {
        // Filter out "Select All" from regular selections
        const filtered = selected.filter((v) => v !== SELECT_ALL);
        value.value = filtered;
    }
};

const isAllSelected = computed(() => value.value.length === countries.length);

// Display "Select All" in the input when all items are selected
const displayedValue = computed(() => {
    return isAllSelected.value ? [SELECT_ALL, ...value.value] : value.value;
});

// Generate custom tags for display
const customTags = computed(() => {
    if (value.value.length === 0) return [];

    if (value.value.length > 3) {
        return [
            {
                text: `${value.value.length} of ${countries.length} selected`,
                data: [...value.value],
            },
        ];
    }

    return value.value.map((v) => ({
        text: v,
        data: [v],
    }));
});

const handleTagRemove = (tag) => {
    if (tag.data.length === value.value.length) {
        // Remove all if this is the summary tag
        value.value = [];
    } else {
        // Remove specific item
        value.value = value.value.filter((v) => v !== tag.text);
    }
};
</script>

<style scoped>
.example-wrapper {
    padding: 20px;
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
