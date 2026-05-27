<template>
  <div class="example-container">
    <div class="continuous-demo">
      <p>Toggle continuous mode to control how speech recognition behaves after getting results</p>

      <div class="toggle-controls">
        <label>
          <KCheckbox
            v-model="continuousMode"
            @change="onContinuousChange"
            :label="'Enable Continuous Recognition'"
          />
        </label>
        <p class="toggle-description">
          {{ continuousMode ?
              'Recognition will continue listening after results are returned' :
              'Recognition will stop after the first result'
          }}
        </p>
      </div>

      <div class="speech-controls">
        <SpeechToTextButton
          :continuous="continuousMode"
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
        <h5>Recognition Results:</h5>
        <div class="results-list" v-if="allResults.length > 0">
          <div
            v-for="(result, index) in allResults"
            :key="index"
            class="result-item"
          >
            <span class="result-number">{{ index + 1 }}.</span>
            <span class="result-text">{{ result }}</span>
          </div>
        </div>
        <p v-else class="placeholder">
          {{ continuousMode ?
              'Start speaking to see multiple results. Recognition will continue until you stop it.' :
              'Start speaking to see a single result. Recognition will stop automatically.'
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SpeechToTextButton } from "@progress/kendo-vue-buttons";
import { Checkbox as KCheckbox } from "@progress/kendo-vue-inputs";

const isListening = ref(false);
const continuousMode = ref(false);
const statusText = ref('Ready to listen');
const allResults = ref([]);

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
        allResults.value.push(alternatives[0].transcript);

        if (!continuousMode.value) {
            statusText.value = 'Recognition completed';
        }
    }
};

const onContinuousChange = () => {
    allResults.value = [];
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

.results-container h5 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #333;
  text-align: center;
}

.results-list {
  max-height: 200px;
  overflow-y: auto;
}

.result-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  padding: 8px;
  background-color: white;
  border-radius: 4px;
  border-left: 3px solid #0066cc;
}

.result-number {
  font-weight: bold;
  color: #0066cc;
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
</style>
