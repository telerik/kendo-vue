<template>
  <div class="example-container">
    <div class="active-state-example">
      <div>
        <SpeechToTextButton
          @start="onStart"
          @end="onEnd"
          class="pulse-animation"
        />
        <p class="status-text">{{ statusText }}</p>
      </div>
      <div class="code-snippet">
        <p class="code-title">CSS Animation for Active State</p>
        <pre>
.k-speech-to-text-button.k-listening {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}</pre>
      </div>
    </div>
    <p class="hint-text">Click the button to see the active state styling</p>
  </div>
</template>

<script setup>
import { SpeechToTextButton } from "@progress/kendo-vue-buttons";
import { ref } from 'vue';

const statusText = ref('Inactive');

const onStart = () => {
    statusText.value = 'Active: recording in progress';
};

const onEnd = () => {
    statusText.value = 'Inactive';
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

.active-state-example {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
}

.status-text {
  margin-top: 10px;
  font-size: 14px;
  color: #0066cc;
}

.hint-text {
  font-size: 13px;
  font-style: italic;
  color: #888888;
  margin-top: 15px;
}

.code-snippet {
  text-align: left;
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 5px;
  max-width: 350px;
}

.code-title {
  font-size: 14px;
  color: #656565;
  margin-top: 0;
  margin-bottom: 10px;
}

pre {
  font-family: monospace;
  font-size: 13px;
  color: #333;
  margin: 0;
}

.pulse-animation.k-speech-to-text-button.k-listening {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.5);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 0 10px rgba(255, 0, 0, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
  }
}
</style>
