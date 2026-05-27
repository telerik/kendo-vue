<template>
  <td class="k-command-cell">
    <KButton v-if="!isInEdit" @click="addChildHandler" type="button">
      Add Employee
    </KButton>
    <KButton
      :class="editButtonClass"
      type="button"
      theme-color="primary"
      @click="editHandler"
    >
      {{ editText }}
    </KButton>
    <KButton
      type="button"
      :class="removeButtonClass"
      @click="removeHandler"
    >
      {{ removeText }}
    </KButton>
  </td>
</template>

<script setup>
import { computed } from 'vue';
import { Button as KButton } from "@progress/kendo-vue-buttons";;

const props = defineProps({
    dataItem: Object,
    editField: String,
});

const isInEdit = computed(() => props.dataItem['inEdit']);
const isNew = computed(() => props.dataItem.isNew);

const emit = defineEmits(['edit', 'save', 'cancel', 'remove', 'addchild']);

const editText = computed(() => {
    if (isInEdit.value) {
        return isNew.value ? 'Add' : 'Update';
    } else {
        return 'Edit';
    }
});

const removeText = computed(() => {
    if (isInEdit.value) {
        return isNew.value ? 'Discard' : 'Cancel';
    } else {
        return 'Remove';
    }
});

const editButtonClass = computed(() =>
    isInEdit.value ? 'k-grid-save-command' : 'k-grid-edit-command'
);

const removeButtonClass = computed(() =>
    isInEdit.value ? 'k-grid-cancel-command' : 'k-grid-remove-command'
);

function addChildHandler() {
    emit('addchild', props.dataItem);
}

function editHandler() {
    const command = isInEdit.value ? 'save' : 'edit';
    emit(command, props.dataItem);
}

function removeHandler() {
    const command = isInEdit.value ? 'cancel' : 'remove';
    emit(command, props.dataItem);
}
</script>
