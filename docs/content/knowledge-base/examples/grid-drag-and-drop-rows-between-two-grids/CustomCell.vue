<template>
  <td @dragover="dragOver">
    <span
      class="k-icon k-i-reorder"
      draggable="true"
      style="cursor: move"
      @dragstart="dragStart"
      @dragend="dragEnd"
    ></span>
  </td>
</template>

<script setup>
defineProps({
    dataItem: Object,
});

defineEmits(['dragover', 'dragstart', 'dragend']);

function dragOver() {
    emit('dragover', dataItem);
}

function dragStart() {
    emit('dragstart', dataItem);
}

function dragEnd() {
    emit('dragend');
}
</script>
