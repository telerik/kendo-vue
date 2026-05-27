<template>
  <td class="k-command-cell k-table-td">
    <KButton
      :class="editButtonClass"
      type="button"
      theme-color="primary"
      @click="editHandler"
    >
      {{ editText }}
    </KButton>
    <KButton :class="removeButtonClass" @click="removeHandler">
      {{ removeText }}
    </KButton>
  </td>
</template>

<script setup>
import { computed } from 'vue';
import { Button as KButton } from '@progress/kendo-vue-buttons';

const props = defineProps({
    id: String,
    field: String,
    dataItem: Object,
    format: String,
    className: String,
    columnIndex: Number,
    columnsCount: Number,
    rowType: String,
    level: Number,
    expanded: Boolean,
});

const emit = defineEmits(['edit', 'remove', 'save', 'cancel']);

const editText = computed(() =>
    props.dataItem.inEdit
        ? props.dataItem.ProductID
            ? 'Update'
            : 'Add'
        : 'Edit'
);

const removeText = computed(() =>
    props.dataItem.inEdit
        ? props.dataItem.ProductID
            ? 'Cancel'
            : 'Discard'
        : 'Remove'
);

const editButtonClass = computed(() =>
    props.dataItem.inEdit ? 'k-grid-save-command' : 'k-grid-edit-command'
);

const removeButtonClass = computed(() =>
    props.dataItem.inEdit ? 'k-grid-cancel-command' : 'k-grid-remove-command'
);

function editHandler() {
    const command = props.dataItem.inEdit ? 'save' : 'edit';
    emit(command, { dataItem: props.dataItem });
}

function removeHandler() {
    const command = props.dataItem.inEdit ? 'cancel' : 'remove';
    emit(command, { dataItem: props.dataItem });
}
</script>
