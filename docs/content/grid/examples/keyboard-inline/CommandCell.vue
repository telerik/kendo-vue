<template>
  <td v-bind="navAttrs">
    <KButton
      :class="editButtonClass"
      :type="'button'"
      :primary="true"
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
import { ref, computed, onMounted, inject } from 'vue';
import { Button as KButton } from '@progress/kendo-vue-buttons';

const emit = defineEmits(['edit', 'save', 'remove', 'cancel']);
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

const getKeyboardNavigationAttributes = inject('getKeyboardNavigationAttributes', {});
const navAttrs = ref({});

onMounted(() => {
    navAttrs.value = getKeyboardNavigationAttributes(props.id);
});

const editText = computed(() => {
    if (props.dataItem['inEdit']) {
        return props.dataItem.ProductID ? 'Update' : 'Add';
    } else {
        return 'Edit';
    }
});

const removeText = computed(() => {
    if (props.dataItem['inEdit']) {
        return props.dataItem.ProductID ? 'Cancel' : 'Discard';
    } else {
        return 'Remove';
    }
});

const editButtonClass = computed(() => {
    return props.dataItem['inEdit'] ? 'k-grid-save-command' : 'k-grid-edit-command';
});

const removeButtonClass = computed(() => {
    return props.dataItem['inEdit'] ? 'k-grid-cancel-command' : 'k-grid-remove-command';
});

function editHandler() {
    const command = props.dataItem['inEdit'] ? 'save' : 'edit';
    emit(command, { dataItem: props.dataItem });
}

function removeHandler() {
    const command = props.dataItem['inEdit'] ? 'cancel' : 'remove';
    emit(command, { dataItem: props.dataItem });
}
</script>
