<template>
  <div class="example-container">
    <div class="basic-config-demo">
      <p>Click the microphone button to start speech recognition</p>

      <div class="speech-controls">
        <SpeechToTextButton
          @start="onStart"
          @end="onEnd"
          @error="onError"
          @result="onResult"
        />
        <div class="status" :class="{ 'listening': isListening }">
          {{ statusText }}
        </div>
      </div>

      <div class="result-display" v-if="recognizedText">
        <h5>Recognition Result:</h5>
        <p>{{ recognizedText }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SpeechToTextButton } from "@progress/kendo-vue-buttons";

const isListening = ref(false);
const recognizedText = ref('');
const statusText = ref('Ready to listen');

const onStart = () => {
    isListening.value = true;
    statusText.value = 'Listening...';
};

const onEnd = () => {
    isListening.value = false;
    statusText.value = 'Ready to listen';
};

const onError = (event) => {
    isListening.value = false;
    statusText.value = 'Error occurred';
    console.error('Speech recognition error:', event);
};

const onResult = (event) => {
    const { isFinal, alternatives } = event;

    if (isFinal && alternatives.length > 0) {
        recognizedText.value = alternatives[0].transcript;
    }
};
</script>

<style>
.example-container {
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px;
  text-align: center;
}

h4 {
  margin-bottom: 10px;
  color: #656565;
}

p {
  margin-bottom: 20px;
  color: #888;
}

.speech-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.status {
  font-size: 14px;
  color: #555;
}

.status.listening {
  color: #ff4081;
  font-weight: bold;
}

.result-display {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 15px;
  margin-top: 20px;
}

.result-display h5 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #333;
}

.result-display p {
  margin: 0;
  font-style: italic;
  color: #0066cc;
}
</style>
