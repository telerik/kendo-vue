<template>
  <td v-if="!dataItem['inEdit']" class="k-command-cell k-table-td">
    <KButton
      theme-color="primary"
      class="k-grid-edit-command"
      @click="editHandler"
    >
      Edit
    </KButton>
    <KButton class="k-grid-remove-command" @click="removeHandler">
      Remove
    </KButton>
  </td>
  <td v-else>
    <KButton class="k-grid-save-command" @click="addUpdateHandler">
      {{ dataItem.ProductID ? 'Update' : 'Add' }}
    </KButton>
    <KButton class="k-grid-cancel-command" @click="cancelDiscardHandler">
      {{ dataItem.ProductID ? 'Cancel' : 'Discard' }}
    </KButton>
  </td>
</template>

<script setup>
import { Button as KButton } from '@progress/kendo-vue-buttons';

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
    editor: String,
});

const emit = defineEmits(['edit', 'remove', 'save', 'cancel']);

function editHandler() {
    emit('edit', { dataItem: props.dataItem });
}

function removeHandler() {
    emit('remove', { dataItem: props.dataItem });
}

function addUpdateHandler() {
    emit('save', { dataItem: props.dataItem });
}

function cancelDiscardHandler() {
    emit('cancel', { dataItem: props.dataItem });
}
</script>
