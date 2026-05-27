<template>
  <div class="example-container">
    <h4>Fill Mode Options</h4>
    <div class="fillmode-examples">
      <div>
        <span>Solid (default)</span>
        <SpeechToTextButton :fill-mode="'solid'" />
      </div>
      <div>
        <span>Outline</span>
        <SpeechToTextButton :fill-mode="'outline'" />
      </div>
      <div>
        <span>Flat</span>
        <SpeechToTextButton :fill-mode="'flat'" />
      </div>
      <div>
        <span>Link</span>
        <SpeechToTextButton :fill-mode="'link'" />
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

.fillmode-examples {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.fillmode-examples > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.fillmode-examples span {
  font-size: 14px;
  color: #656565;
}
</style>
