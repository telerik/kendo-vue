<template>
  <div class="example-container">
    <div class="alternatives-demo">
      <p>Configure maxAlternatives to see different interpretations of your speech</p>

      <div class="config-controls">
        <label for="max-alternatives">Max Alternatives:</label>
        <DropDownList
          id="max-alternatives"
          v-model="maxAlternatives"
          :data-items="[
            { text: '1 (Default)', value: 1 },
            { text: '3', value: 3 },
            { text: '5', value: 5 },
            { text: '10', value: 10 }
          ]"
          :text-field="'text'"
          :data-item-key="'value'"
          :style="{ width: '200px' }"
          @change="onConfigChange"
        />
        <p class="config-description">
          Current setting: {{ maxAlternatives.text }} alternative{{ maxAlternatives > 1 ? 's' : '' }} will be returned
        </p>
      </div>

      <div class="speech-controls">
        <SpeechToTextButton
          :max-alternatives="maxAlternatives.value"
          :interimResults="false"
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
        <h5>Recognition Alternatives:</h5>
        <div class="alternatives-list">
          <div
            v-for="(alternative, index) in currentAlternatives"
            :key="index"
            class="alternative-item"
            :class="{ 'primary': index === 0 }"
          >
            <div class="alternative-header">
              <span class="alternative-rank">{{ index === 0 ? 'Primary' : `Alternative ${index}` }}</span>
              <span class="confidence-score" v-if="alternative.confidence">
                {{ (alternative.confidence * 100).toFixed(1) }}% confidence
              </span>
            </div>
            <div class="alternative-text">{{ alternative.transcript }}</div>
          </div>
        </div>
        <div class="placeholder">
          <p>Speak clearly to see multiple recognition alternatives</p>
          <p class="hint">Try saying words that sound similar like "to", "too", "two" or "right", "write", "rite"</p>
        </div>
      </div>

      <div class="info-panel">
        <h6>How it works:</h6>
        <ul>
          <li>The <code>maxAlternatives</code> property controls how many interpretations the speech recognition engine returns</li>
          <li>Alternatives are ordered by confidence score (highest first)</li>
          <li>This is useful for ambiguous words or when dealing with accents and background noise</li>
          <li>Higher values may provide more options but could impact performance</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SpeechToTextButton } from "@progress/kendo-vue-buttons";
import { DropDownList } from "@progress/kendo-vue-dropdowns";

// State variables
const isListening = ref(false);
const maxAlternatives = ref({ text: '3', value: 3 });
const statusText = ref('Ready to listen');
const currentAlternatives = ref([]);

// Event handlers
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
        currentAlternatives.value = alternatives;
        statusText.value = `Found ${alternatives.length} alternative${alternatives.length > 1 ? 's' : ''}`;
    }
};

const onConfigChange = () => {
    currentAlternatives.value = [];
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

.config-controls {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
}

.config-controls label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

.config-description {
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
  margin-bottom: 20px;
}

.results-container h5 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #333;
  text-align: center;
}

.alternatives-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.alternative-item {
  background-color: white;
  border-radius: 6px;
  padding: 12px;
  border-left: 4px solid #ddd;
  transition: all 0.2s ease;
}

.alternative-item.primary {
  border-left-color: #28a745;
  background-color: #f8fff9;
}

.alternative-item:not(.primary) {
  border-left-color: #6c757d;
}

.alternative-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.alternative-rank {
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  color: #495057;
}

.alternative-item.primary .alternative-rank {
  color: #28a745;
}

.confidence-score {
  font-size: 11px;
  color: #6c757d;
  background-color: #e9ecef;
  padding: 2px 6px;
  border-radius: 10px;
}

.alternative-item.primary .confidence-score {
  background-color: #d4edda;
  color: #155724;
}

.alternative-text {
  font-size: 16px;
  color: #333;
  line-height: 1.4;
}

.placeholder {
  text-align: center;
  color: #999;
  font-style: italic;
}

.placeholder .hint {
  font-size: 13px;
  margin-top: 10px;
  color: #666;
}

.info-panel {
  background-color: #e3f2fd;
  border-radius: 8px;
  padding: 15px;
  text-align: left;
}

.info-panel h6 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #1976d2;
}

.info-panel ul {
  margin: 0;
  padding-left: 20px;
}

.info-panel li {
  margin-bottom: 8px;
  color: #333;
  font-size: 14px;
  line-height: 1.4;
}

.info-panel code {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 2px 4px;
  font-family: monospace;
  font-size: 13px;
}
</style>
