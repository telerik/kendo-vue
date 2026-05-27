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
const props = defineProps({
    dataItem: Object,
});

const emit = defineEmits(['dragover', 'dragstart', 'dragend']);

function dragOver() {
    emit('dragover', props.dataItem);
}

function dragStart() {
    emit('dragstart', props.dataItem);
}

function dragEnd() {
    emit('dragend');
}
</script>
