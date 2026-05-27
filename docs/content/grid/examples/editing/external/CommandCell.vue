<template>
    <td class="k-command-cell k-table-td">
      <KButton
        :theme-color="'primary'"
        class="k-grid-edit-command"
        @click="editHandler"
      >
        Edit
      </KButton>

      <KButton
        class="k-grid-remove-command"
        @click="removeHandler"
      >
        Remove
      </KButton>
    </td>
  </template>

<script setup>
import { Button as KButton } from '@progress/kendo-vue-buttons';

// Define props
const props = defineProps({
    field: String,
    dataItem: Object,
    format: String,
    className: String,
    columnIndex: Number,
    columnsCount: Number,
    rowType: String,
    level: Number,
    expanded: Boolean,
    editor: String
});

// Define emits
const emit = defineEmits(['edit', 'remove']);

// Handler methods
const editHandler = () => {
    emit('edit', props.dataItem);
};

const removeHandler = () => {
    if (confirm('Confirm deleting: ' + props.dataItem.ProductName)) {
        emit('remove', props.dataItem);
    }
};
</script>
