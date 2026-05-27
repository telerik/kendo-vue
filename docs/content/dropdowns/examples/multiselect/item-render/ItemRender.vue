<template>
  <li class="k-item" @click="handleClick">
    <span :style="{ color: '#00F' }">
      {{ dataItem }} {{ index }}
    </span>
  </li>
</template>

<script setup>
defineProps({
    id: String,
    index: Number,
    dataItem: [Object, String, Number],
    textField: String,
    focused: Boolean,
    selected: Boolean,
});

const emit = defineEmits(['click']);

function handleClick(e) {
    emit('click', e);
}
</script>
