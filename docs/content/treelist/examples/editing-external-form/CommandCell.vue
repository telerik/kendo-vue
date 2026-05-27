<template>
  <td class="k-command-cell">
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
</template>

<script setup>
import { Button as KButton } from "@progress/kendo-vue-buttons";;

const props = defineProps({
    dataItem: Object,
});
const emit = defineEmits(['edit', 'remove']);

function editHandler() {
    emit('edit', props.dataItem);
}

function removeHandler() {
    if (confirm(`Confirm deleting: ${props.dataItem.ProductName}`)) {
        emit('remove', props.dataItem);
    }
}
</script>
