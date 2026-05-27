<template>
  <div class="example-container">
    <h4>Theme Color Options</h4>
    <div class="themecolor-examples">
      <div>
        <span>Base (default)</span>
        <SpeechToTextButton
          :theme-color="'base'"
          @start="onStart"
          @end="onEnd"
          @result="onResult"
        />
      </div>
      <div>
        <span>Primary</span>
        <SpeechToTextButton
          :theme-color="'primary'"
          @start="onStart"
          @end="onEnd"
          @result="onResult"
        />
      </div>
      <div>
        <span>Secondary</span>
        <SpeechToTextButton
          :theme-color="'secondary'"
          @start="onStart"
          @end="onEnd"
          @result="onResult"
        />
      </div>
      <div>
        <span>Tertiary</span>
        <SpeechToTextButton
          :theme-color="'tertiary'"
          @start="onStart"
          @end="onEnd"
          @result="onResult"
        />
      </div>
      <div>
        <span>Info</span>
        <SpeechToTextButton
          :theme-color="'info'"
          @start="onStart"
          @end="onEnd"
          @result="onResult"
        />
      </div>
      <div>
        <span>Success</span>
        <SpeechToTextButton
          :theme-color="'success'"
          @start="onStart"
          @end="onEnd"
          @result="onResult"
        />
      </div>
      <div>
        <span>Warning</span>
        <SpeechToTextButton
          :theme-color="'warning'"
          @start="onStart"
          @end="onEnd"
          @result="onResult"
        />
      </div>
      <div>
        <span>Error</span>
        <SpeechToTextButton
          :theme-color="'error'"
          @start="onStart"
          @end="onEnd"
          @result="onResult"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { SpeechToTextButton } from "@progress/kendo-vue-buttons";

// Event handlers
const onStart = () => {
    console.log('Speech recognition started');
};

const onEnd = () => {
    console.log('Speech recognition ended');
};

const onResult = (event) => {
    console.log('Speech recognition result:', event);
    const { isFinal, alternatives } = event;

    if (alternatives.length > 0) {
        const transcript = alternatives[0].transcript;
        const confidence = alternatives[0].confidence;

        console.log(`Transcript: "${transcript}"`);
        console.log(`Is final: ${isFinal}`);
        if (confidence) {
            console.log(`Confidence: ${(confidence * 100).toFixed(1)}%`);
        }
    }
};
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

.themecolor-examples {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 15px;
}

.status-colors {
  margin-top: 10px;
}

.themecolor-examples > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.themecolor-examples span {
  font-size: 14px;
}
</style>
