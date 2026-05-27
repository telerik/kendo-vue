<template>
  <div class="example-container">
    <h4>Rounded Style Options</h4>
    <div class="rounded-examples">
      <div>
        <span>Small</span>
        <SpeechToTextButton :rounded="'small'" />
      </div>
      <div>
        <span>Medium (default)</span>
        <SpeechToTextButton :rounded="'medium'" />
      </div>
      <div>
        <span>Large</span>
        <SpeechToTextButton :rounded="'large'" />
      </div>
      <div>
        <span>Full</span>
        <SpeechToTextButton :rounded="'full'" />
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

.rounded-examples {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.rounded-examples > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.rounded-examples span {
  font-size: 14px;
  color: #656565;
}
</style>
