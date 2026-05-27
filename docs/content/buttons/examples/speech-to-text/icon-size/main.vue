<template>
    <div class="size-examples">
      <div>
        <span>Small</span>
        <SpeechToTextButton :icon-size="'small'" />
      </div>
      <div>
        <span>Medium</span>
        <SpeechToTextButton :icon-size="'medium'" />
      </div>
      <div>
        <span>Large</span>
        <SpeechToTextButton :icon-size="'large'" />
      </div>
    </div>
</template>

<script setup>
import { SpeechToTextButton } from "@progress/kendo-vue-buttons";
</script>

<style>
.size-examples {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.size-examples > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.size-examples span {
  font-size: 14px;
  color: #656565;
}
</style>
