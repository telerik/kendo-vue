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

const emit = defineEmits(['dragover', 'dragstart', 'dragend']);
const props = defineProps({
    dataItem: Object,
});

const dragOver = () => {
    emit('dragover', props.dataItem);
};

const dragStart = () => {
    emit('dragstart', props.dataItem);
};

const dragEnd = () => {
    emit('dragend');
};
</script>
