<template>
  <div class="example-container">
    <div class="language-config-demo">
      <p>Select a language and start speaking to see recognition in different languages</p>

      <div class="language-selector">
        <label for="language-select">Recognition Language:</label>
        <DropDownList
          id="language-select"
          :data-items="languageOptions"
          :data-item-key="'value'"
          :text-field="'text'"
          :value-field="'value'"
          :value="selectedLanguage"
          @change="(e) => { selectedLanguage = e.target.value; onLanguageChange(); }"
        />
      </div>

      <div class="speech-controls">
        <SpeechToTextButton
          :lang="selectedLanguage.value"
          @start="onStart"
          @end="onEnd"
          @error="onError"
          @result="onResult"
        />
        <div class="status" :class="{ 'listening': isListening }">
          {{ statusText }}
        </div>
      </div>

      <div class="language-info">
        <p><strong>Current Language:</strong> {{ getLanguageName(selectedLanguage).value }}</p>
        <p><em>Speak in {{ getLanguageName(selectedLanguage).text }} for best results</em></p>
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
import { DropDownList } from "@progress/kendo-vue-dropdowns";

// Language options for DropDownList
const languageOptions = [
    { text: 'English (US)', value: 'en-US' },
    { text: 'English (UK)', value: 'en-GB' },
    { text: 'Spanish (Spain)', value: 'es-ES' },
    { text: 'French (France)', value: 'fr-FR' },
    { text: 'German (Germany)', value: 'de-DE' },
    { text: 'Italian (Italy)', value: 'it-IT' },
    { text: 'Portuguese (Brazil)', value: 'pt-BR' },
    { text: 'Japanese (Japan)', value: 'ja-JP' },
    { text: 'Korean (Korea)', value: 'ko-KR' },
    { text: 'Chinese (Mandarin)', value: 'zh-CN' }
];

// State variables
const isListening = ref(false);
const recognizedText = ref('');
const statusText = ref('Ready to listen');
const selectedLanguage = ref(languageOptions[0]);

const languageNames = {
    'en-US': 'English (US)',
    'en-GB': 'English (UK)',
    'es-ES': 'Spanish (Spain)',
    'fr-FR': 'French (France)',
    'de-DE': 'German (Germany)',
    'it-IT': 'Italian (Italy)',
    'pt-BR': 'Portuguese (Brazil)',
    'ja-JP': 'Japanese (Japan)',
    'ko-KR': 'Korean (Korea)',
    'zh-CN': 'Chinese (Mandarin)'
};

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
        recognizedText.value = alternatives[0].transcript;
    }
};

const onLanguageChange = () => {
    recognizedText.value = '';
    statusText.value = 'Ready to listen';
};

const getLanguageName = (code) => {
    return languageNames[code] || code;
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

.language-selector {
  margin-bottom: 20px;
}

.language-selector label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
}

.language-selector select,
.language-selector .k-dropdown {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  min-width: 200px;
}

.language-selector .k-dropdownlist {
  width: 200px;
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

.language-info {
  background-color: #e3f2fd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
}

.language-info p {
  margin: 5px 0;
  color: #1976d2;
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
