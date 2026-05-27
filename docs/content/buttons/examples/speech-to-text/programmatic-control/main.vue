<template>
    <div class="demo-section">
      <h4>Speech to Text Button</h4>
      <SpeechToTextButton
        ref="sttButton"
        @start="handleStart"
        @end="handleStop"
        @result="handleResult"
        @error="handleError"
      />
    </div>

    <div class="demo-section">
      <h4>Programmatic Controls</h4>
      <div class="control-buttons">
        <KButton
          @click="startRecognition"
          :disabled="isButtonActive"
          themeColor="success"
          class="control-btn">
          Start Recognition
        </KButton>
        <KButton
          @click="stopRecognition"
          :disabled="!isButtonActive"
          themeColor="error"
          class="control-btn">
          Stop Recognition
        </KButton>
        <KButton
          @click="abortRecognition"
          :disabled="!isButtonActive"
          themeColor="warning"
          class="control-btn">
          Abort Recognition
        </KButton>
        <KButton
          @click="checkActiveState"
          themeColor="primary"
          class="control-btn">
          Check Active State
        </KButton>
      </div>
    </div>

    <div v-if="transcript" class="demo-section">
      <h4>Transcript</h4>
      <div class="transcript">
        <div v-if="interimText" class="interim-text">
          <strong>Interim:</strong> {{ interimText }}
        </div>
        <div v-if="finalText" class="final-text">
          <strong>Final:</strong> {{ finalText }}
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h4>Event Log</h4>
      <div class="event-log">
        <div v-for="(event, index) in eventLog" :key="index" class="log-entry">
          <span class="timestamp">{{ event.timestamp }}</span>
          <span class="event-type">{{ event.type }}</span>
          <span class="event-message">{{ event.message }}</span>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { SpeechToTextButton } from '@progress/kendo-vue-buttons';
import { Button as KButton } from '@progress/kendo-vue-buttons';

const sttButton = ref(null);
const isButtonActive = ref(false);
const transcript = ref('');
const interimText = ref('');
const finalText = ref('');
const eventLog = ref([]);

const addLogEntry = (type, message) => {
    const timestamp = new Date().toLocaleTimeString();
    eventLog.value.unshift({
        timestamp,
        type,
        message
    });

    // Keep only the last 10 entries
    if (eventLog.value.length > 10) {
        eventLog.value = eventLog.value.slice(0, 10);
    }
};

/**
 * Programmatically start speech recognition
 */
const startRecognition = async () => {
    if (sttButton.value) {
        addLogEntry('METHOD', 'Called start() method');
        sttButton.value.start();
        await updateActiveState();
    }
};

/**
 * Programmatically stop speech recognition
 */
const stopRecognition = async () => {
    if (sttButton.value) {
        addLogEntry('METHOD', 'Called stop() method');
        sttButton.value.stop();
        await updateActiveState();
    }
};

/**
 * Programmatically abort speech recognition
 */
const abortRecognition = async () => {
    if (sttButton.value) {
        addLogEntry('METHOD', 'Called abort() method');
        sttButton.value.abort();
        await updateActiveState();
    }
};

/**
 * Check the active state of the speech recognition
 */
const checkActiveState = () => {
    if (sttButton.value) {
        const active = sttButton.value.isActive();
        isButtonActive.value = active;
        addLogEntry('METHOD', `Called isActive() method - Result: ${active}`);
    }
};

/**
 * Update the active state
 */
const updateActiveState = async () => {
    if (sttButton.value) {
        // Wait for the next tick to ensure the internal state is updated
        await new Promise(resolve => setTimeout(resolve, 100));
        isButtonActive.value = sttButton.value.isActive();
    }
};

/**
 * Handle speech recognition start
 */
const handleStart = async () => {
    await updateActiveState();
    addLogEntry('EVENT', 'Speech recognition started');
};

/**
 * Handle speech recognition stop
 */
const handleStop = async () => {
    await updateActiveState();
    addLogEntry('EVENT', 'Speech recognition stopped');
};

/**
 * Handle speech recognition results
 */
const handleResult = (event) => {
    if (event.alternatives && event.alternatives.length > 0) {
        const text = event.alternatives[0].transcript;

        if (event.isFinal) {
            finalText.value = text;
            interimText.value = '';
            addLogEntry('RESULT', `Final result: "${text}"`);
        } else {
            interimText.value = text;
            addLogEntry('RESULT', `Interim result: "${text}"`);
        }

        transcript.value = text;
    }
};

/**
 * Handle speech recognition errors
 */
const handleError = async (event) => {
  console.error('Speech recognition error:', event.errorMessage);
    await updateActiveState();
    addLogEntry('ERROR', event.errorMessage);
};

onMounted(async () => {
    addLogEntry('SYSTEM', 'Demo initialized');
    await updateActiveState();
});
</script>

<style scoped>
.demo-section {
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: #fafafa;
}

.demo-section h4 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #333;
}

.control-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.control-btn {
  min-width: 150px;
}

.transcript {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
}

.interim-text {
  color: #666;
  font-style: italic;
  margin-bottom: 0.5rem;
}

.final-text {
  color: #333;
  font-weight: 500;
}

.event-log {
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.5rem;
  max-height: 300px;
  overflow-y: auto;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
}

.log-entry {
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 1rem;
  padding: 0.25rem 0;
  border-bottom: 1px solid #eee;
}

.log-entry:last-child {
  border-bottom: none;
}

.timestamp {
  color: #666;
  font-weight: 500;
}

.event-type {
  padding: 0.125rem 0.5rem;
  border-radius: 3px;
  font-weight: 500;
  font-size: 0.75rem;
  text-align: center;
  min-width: 60px;
}

.event-type:contains('METHOD') {
  background-color: #007bff;
  color: white;
}

.event-type:contains('EVENT') {
  background-color: #28a745;
  color: white;
}

.event-type:contains('RESULT') {
  background-color: #ffc107;
  color: black;
}

.event-type:contains('ERROR') {
  background-color: #dc3545;
  color: white;
}

.event-type:contains('SYSTEM') {
  background-color: #6c757d;
  color: white;
}

.event-message {
  color: #333;
}
</style>
