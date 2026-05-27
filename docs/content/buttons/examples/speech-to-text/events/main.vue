<template>
  <div class="events-demo">
    <div class="demo-section">
      <p>Click the microphone button and speak to see the events being triggered</p>

      <div class="speech-controls">
        <SpeechToTextButton
          :interimResults="true"
          :continuous="false"
          @start="onStart"
          @result="onResult"
          @end="onEnd"
          @error="onError"
        />
        <div class="current-status">
          <strong>Current Status:</strong> {{ currentStatus }}
        </div>
        <div class="recognized-text" v-if="recognizedText">
          <strong>Recognized Text:</strong> {{ recognizedText }}
        </div>
      </div>
    </div>

    <Logger
      :events="eventLog"
      :title="'Event Log'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SpeechToTextButton } from '@progress/kendo-vue-buttons';
import Logger from './Logger.vue';

const currentStatus = ref('Ready');
const recognizedText = ref('');
const eventLog = ref([]);

const addEvent = (eventType, details = '') => {
    const timestamp = new Date().toLocaleTimeString();
    const eventMessage = details
        ? `${eventType} - ${details} (${timestamp})`
        : `${eventType} (${timestamp})`;

    eventLog.value.unshift(eventMessage);
};

const onStart = () => {
    currentStatus.value = 'Listening...';
    addEvent('start', 'Speech recognition started');
};

const onResult = (event) => {
    const { isFinal, alternatives } = event;

    if (alternatives.length > 0) {
        const text = alternatives[0].transcript;
        const confidence = alternatives[0].confidence;

        if (isFinal) {
            recognizedText.value = text;
            currentStatus.value = 'Recognition completed';
            addEvent('result', `Final: "${text}" (confidence: ${confidence ? (confidence * 100).toFixed(1) + '%' : 'N/A'})`);
        } else {
            addEvent('result', `Interim: "${text}"`);
        }
    }
};

const onEnd = () => {
    currentStatus.value = 'Recognition ended';
    addEvent('end', 'Speech recognition stopped');
};

const onError = (event) => {
    currentStatus.value = `Error: ${event.error}`;
    addEvent('error', `Error occurred: ${event.error}`);
    console.error('Speech recognition error:', event);
};
</script>

<style scoped>
.events-demo {
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.demo-section {
  margin-bottom: 30px;
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
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-bottom: 20px;
}

.current-status {
  font-size: 16px;
  color: #333;
  padding: 8px 16px;
  background-color: white;
  border-radius: 6px;
  border: 1px solid #ddd;
  min-width: 200px;
  text-align: center;
}

.recognized-text {
  font-size: 14px;
  color: #0066cc;
  padding: 8px 16px;
  background-color: #f0f8ff;
  border-radius: 6px;
  border: 1px solid #b3d9ff;
  max-width: 400px;
  text-align: center;
  word-wrap: break-word;
}
</style>
