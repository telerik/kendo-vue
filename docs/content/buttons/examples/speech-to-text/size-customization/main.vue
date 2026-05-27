<template>
  <div class="example-container">
    <h4>Button Size Options</h4>
    <div class="size-examples">
      <div>
        <span>Small</span>
        <SpeechToTextButton :size="'small'" />
      </div>
      <div>
        <span>Medium (default)</span>
        <SpeechToTextButton :size="'medium'" />
      </div>
      <div>
        <span>Large</span>
        <SpeechToTextButton :size="'large'" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { SpeechToTextButton } from "@progress/kendo-vue-buttons";
</script>

<style>
.example-container {
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px;
  text-align: center;
}

h4 {
  margin-bottom: 15px;
  color: #656565;
}

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
