<template>
  <div class="example-container">
    <div class="interim-demo">
      <p>Enable interim results to see real-time transcription as you speak</p>

      <div class="toggle-controls">
        <label>
          <KCheckbox
            v-model="interimResults"
            @change="onInterimChange"
            :label="'Enable Interim Results'"
          />
        </label>
        <p class="toggle-description">
          {{ interimResults ?
              'Shows partial results in real-time while speaking' :
              'Only shows final results after speech is complete'
          }}
        </p>
      </div>

      <div class="speech-controls">
        <SpeechToTextButton
          :interimResults="interimResults"
          :continuous="true"
          @start="onStart"
          @end="onEnd"
          @error="onError"
          @result="onResult"
        />
        <div class="status" :class="{ 'listening': isListening }">
          {{ statusText }}
        </div>
      </div>

      <div class="results-container">
        <div class="interim-section" v-if="interimResults">
          <h5>Interim (Live) Results:</h5>
          <div class="interim-display">
            <p v-if="currentInterim" class="interim-text">{{ currentInterim }}</p>
            <p v-else class="placeholder">{{ isListening ? 'Speak to see live transcription...' : 'Start speaking to see interim results' }}</p>
          </div>
        </div>

        <div class="final-section">
          <h5>Final Results:</h5>
          <div class="final-results" v-if="finalResults.length > 0">
            <div
              v-for="(result, index) in finalResults"
              :key="index"
              class="result-item"
            >
              <span class="result-number">{{ index + 1 }}.</span>
              <span class="result-text">{{ result }}</span>
            </div>
          </div>
          <p v-else class="placeholder">Final transcription results will appear here</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SpeechToTextButton } from "@progress/kendo-vue-buttons";
import { Checkbox as KCheckbox } from "@progress/kendo-vue-inputs";

// State variables
const isListening = ref(false);
const interimResults = ref(true);
const statusText = ref('Ready to listen');
const currentInterim = ref('');
const finalResults = ref([]);

// Event handlers
const onStart = () => {
    isListening.value = true;
    statusText.value = 'Listening...';
    currentInterim.value = '';
};

const onEnd = () => {
    isListening.value = false;
    statusText.value = 'Ready to listen';
    currentInterim.value = '';
};

const onError = (event) => {
    isListening.value = false;
    statusText.value = 'Error occurred';
    currentInterim.value = '';
    console.error('Speech recognition error:', event);
};

const onResult = (event) => {
    const { isFinal, alternatives } = event;

    if (alternatives.length > 0) {
        const transcript = alternatives[0].transcript;

        if (isFinal) {
            finalResults.value.push(transcript);
            currentInterim.value = '';
        } else if (interimResults.value) {
            currentInterim.value = transcript;
        }
    }
};

const onInterimChange = () => {
    finalResults.value = [];
    currentInterim.value = '';
    statusText.value = 'Ready to listen';
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

.toggle-controls {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
}

.toggle-controls label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: bold;
  cursor: pointer;
}

.toggle-description {
  margin-top: 10px;
  font-size: 14px;
  color: #666;
  font-style: italic;
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

.results-container {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 15px;
  text-align: left;
}

.interim-section, .final-section {
  margin-bottom: 20px;
}

.interim-section h5, .final-section h5 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #333;
  text-align: center;
}

.interim-display {
  background-color: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 4px;
  padding: 10px;
  min-height: 40px;
}

.interim-text {
  margin: 0;
  color: #856404;
  font-style: italic;
  animation: pulse 1.5s infinite;
}

.final-results {
  max-height: 150px;
  overflow-y: auto;
}

.result-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
  padding: 8px;
  background-color: white;
  border-radius: 4px;
  border-left: 3px solid #28a745;
}

.result-number {
  font-weight: bold;
  color: #28a745;
  margin-right: 8px;
  min-width: 20px;
}

.result-text {
  color: #333;
  line-height: 1.4;
}

.placeholder {
  text-align: center;
  color: #999;
  font-style: italic;
  margin: 0;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.6; }
  100% { opacity: 1; }
}
</style>
