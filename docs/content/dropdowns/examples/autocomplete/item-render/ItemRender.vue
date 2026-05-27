<template>
  <li class="k-item" @click="handleClick">
    <span
      :style="{ color: '#00F' }"
      role="option"
      :aria-selected="focused"
      :class="itemClass"
    >
      {{ dataItem }} {{ index }}
    </span>
  </li>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    id: String,
    index: Number,
    dataItem: [Object, String, Number],
    textField: String,
    focused: Boolean,
    selected: Boolean,
});

const emit = defineEmits(["click"]);

const itemClass = computed(() => ({
    "k-item": true,
    "k-state-focused": props.focused,
}));

function handleClick(e) {
    emit("click", e);
}
</script>
