<template>
  <div class="example-container">
    <div class="textarea-speech-demo">
      <p>Use the microphone button to dictate text directly into the textarea</p>

      <div class="textarea-container">
        <TextArea
          v-model="textareaValue"
          :style="{ width: '400px' }"
          :flow="flow"
          :rows="4"
          input-prefix="prefix"
          placeholder="Click the microphone and start speaking..."
        >
          <template #prefix>
            <SpeechToTextButton
              :size="'small'"
              :fill-mode="'flat'"
              :theme-color="'primary'"
              :title="'Speech to Text'"
              :aria-label="'Start speech recognition'"
              @start="onStart"
              @end="onEnd"
              @error="onError"
              @result="onResult"
            />
          </template>
        </TextArea>
      </div>
      <div class="status-container">
        <div class="status" :class="{ 'listening': isListening }">
          Status: {{ statusText }}
        </div>

        <div class="actions">
          <KButton @click="clearText" :theme-color="'error'" :fill-mode="'outline'">Clear Text</KButton>
          <KButton @click="appendText" :theme-color="'primary'" :fill-mode="'outline'">
            Append Mode: {{ appendMode ? 'ON' : 'OFF' }}
          </KButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SpeechToTextButton } from "@progress/kendo-vue-buttons";
import { TextArea } from "@progress/kendo-vue-inputs";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const isListening = ref(false);
const statusText = ref('Ready to listen');
const textareaValue = ref('');
const flow = ref('horizontal');
const appendMode = ref(true);

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
        const transcript = alternatives[0].transcript;

        // Update textarea content
        if (appendMode.value) {
            // Append new text to existing content
            const currentText = textareaValue.value;
            const separator = currentText && !currentText.endsWith(' ') && !currentText.endsWith('\n') ? ' ' : '';
            textareaValue.value = currentText + separator + transcript;
        } else {
            // Replace existing content
            textareaValue.value = transcript;
        }
    }
};

const clearText = () => {
    textareaValue.value = '';
    statusText.value = 'Text cleared - Ready to listen';
};

const appendText = () => {
    appendMode.value = !appendMode.value;
};
</script>

<style scoped>
.example-container {
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.textarea-speech-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

p {
  margin: 0 0 15px 0;
  color: #666;
  text-align: center;
}

.textarea-container {
  display: flex;
  justify-content: center;
}

.status-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.status {
  font-size: 16px;
  color: #555;
  font-weight: bold;
}

.status.listening {
  color: #ff4081;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

.actions {
  display: flex;
  gap: 10px;
}
</style>
