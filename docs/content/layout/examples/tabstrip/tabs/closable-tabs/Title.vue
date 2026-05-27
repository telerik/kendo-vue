<template>
  <span class="k-item k-state-default">
    <span class="k-link">{{ content }}</span>
    <span class="k-link" @click="() => onTabRemove(content)">
      <SvgIcon :icon="xIcon" />
    </span>
  </span>
</template>

<script setup>
import { SvgIcon } from "@progress/kendo-vue-common";
import { xIcon } from "@progress/kendo-svg-icons";

defineProps({
    content: String,
});

const onTabRemove = (e) => {
    emit("tabRemove", e);
};

const emit = defineEmits(["tabRemove"]);
</script>
