<template>
  <div class="example-container">
    <h4>Disabled State</h4>
    <div class="disabled-state-examples">
      <div>
        <span>Enabled (default)</span>
        <SpeechToTextButton />
      </div>
      <div>
        <span>Disabled</span>
        <SpeechToTextButton :disabled="true" />
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

.disabled-state-examples {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.disabled-state-examples > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.disabled-state-examples span {
  font-size: 14px;
  color: #656565;
}
</style>
