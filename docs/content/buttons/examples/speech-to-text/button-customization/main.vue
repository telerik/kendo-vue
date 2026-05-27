<template>
  <div class="customization-demo">
    <div class="demo-section">
      <p>Customize the appearance of the SpeechToTextButton button using the controls below</p>

      <div class="customization-controls">
        <div class="control-grid">
          <div class="control-item">
            <label for="size-select">Size:</label>
            <DropDownList
              id="size-select"
              :data-items="sizeOptions"
              :data-item-key="'value'"
              :text-field="'text'"
              :value-field="'value'"
              :value="config.size"
              @change="(e) => config.size = e.target.value"
            />
          </div>

          <div class="control-item">
            <label for="fill-mode-select">Fill Mode:</label>
            <DropDownList
              id="fill-mode-select"
              :data-items="fillModeOptions"
              :data-item-key="'value'"
              :text-field="'text'"
              :value-field="'value'"
              :value="config.fillMode"
              @change="(e) => config.fillMode = e.target.value"
            />
          </div>

          <div class="control-item">
            <label for="rounded-select">Rounded:</label>
            <DropDownList
              id="rounded-select"
              :data-items="roundedOptions"
              :data-item-key="'value'"
              :text-field="'text'"
              :value-field="'value'"
              :value="config.rounded"
              @change="(e) => config.rounded = e.target.value"
            />
          </div>

          <div class="control-item">
            <label for="theme-color-select">Theme Color:</label>
            <DropDownList
              id="theme-color-select"
              :data-items="themeColorOptions"
              :data-item-key="'value'"
              :text-field="'text'"
              :value-field="'value'"
              :value="config.themeColor"
              @change="(e) => config.themeColor = e.target.value"
            />
          </div>
        </div>
      </div>

      <div class="button-demo-area">
        <div class="demo-button-container">
          <SpeechToTextButton
            :size="config.size.value"
            :fillMode="config.fillMode.value"
            :rounded="config.rounded.value"
            :themeColor="config.themeColor.value"
            @start="onStart"
            @end="onEnd"
            @error="onError"
            @result="onResult"
          />
        </div>

        <div class="config-display">
          <h5>Current Configuration:</h5>
          <div class="config-details">
            <span class="config-item">Size: <code>{{ config.size.value }}</code></span>
            <span class="config-item">Fill Mode: <code>{{ config.fillMode.value }}</code></span>
            <span class="config-item">Rounded: <code>{{ config.rounded.value }}</code></span>
            <span class="config-item">Theme Color: <code>{{ config.themeColor.value }}</code></span>
          </div>
        </div>
      </div>

      <div class="status-section" v-if="statusMessage">
        <div class="status-message" :class="statusClass">
          {{ statusMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { SpeechToTextButton } from '@progress/kendo-vue-buttons';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

// Configuration options
const sizeOptions = [
    { text: 'Small', value: 'small' },
    { text: 'Medium', value: 'medium' },
    { text: 'Large', value: 'large' }
];

const fillModeOptions = [
    { text: 'Solid', value: 'solid' },
    { text: 'Outline', value: 'outline' },
    { text: 'Flat', value: 'flat' },
    { text: 'Link', value: 'link' }
];

const roundedOptions = [
    { text: 'Small', value: 'small' },
    { text: 'Medium', value: 'medium' },
    { text: 'Large', value: 'large' },
    { text: 'Full', value: 'full' }
];

const themeColorOptions = [
    { text: 'Base', value: 'base' },
    { text: 'Primary', value: 'primary' },
    { text: 'Secondary', value: 'secondary' },
    { text: 'Tertiary', value: 'tertiary' },
    { text: 'Info', value: 'info' },
    { text: 'Success', value: 'success' },
    { text: 'Warning', value: 'warning' },
    { text: 'Error', value: 'error' }
];

// Reactive configuration
const config = reactive({
    size:   { text: 'Medium', value: 'medium' },
    fillMode: { text: 'Solid', value: 'solid' },
    rounded:  { text: 'Medium', value: 'medium' },
    themeColor:  { text: 'Primary', value: 'primary' },
});

// Status tracking
const statusMessage = ref('');
const statusClass = ref('');

// Event handlers
const onStart = () => {
    statusMessage.value = 'Speech recognition started - speak now!';
    statusClass.value = 'listening';
};

const onEnd = () => {
    statusMessage.value = 'Speech recognition ended';
    statusClass.value = 'ended';
    setTimeout(() => {
        statusMessage.value = '';
    }, 3000);
};

const onError = (event) => {
    statusMessage.value = `Error: ${event.error}`;
    statusClass.value = 'error';
    setTimeout(() => {
        statusMessage.value = '';
    }, 5000);
};

const onResult = (event) => {
    const { isFinal, alternatives } = event;

    if (isFinal && alternatives.length > 0) {
        statusMessage.value = `Recognized: "${alternatives[0].transcript}"`;
        statusClass.value = 'result';
        setTimeout(() => {
            statusMessage.value = '';
        }, 5000);
    }
};
</script>

<style scoped>
.customization-demo {
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.demo-section {
  text-align: center;
}

h4 {
  margin-bottom: 10px;
  color: #656565;
}

p {
  margin-bottom: 25px;
  color: #888;
}

.customization-controls {
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 25px;
  border: 1px solid #e9ecef;
}

.control-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 15px;
}

.control-item {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.control-item label {
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
  font-size: 14px;
}

.control-item .k-dropdown {
  width: 100%;
}

.button-demo-area {
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 20px;
  border: 1px solid #e9ecef;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.demo-button-container {
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
}

.config-display {
  border-top: 1px solid #e9ecef;
  padding-top: 20px;
}

.config-display h5 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #495057;
  font-size: 16px;
}

.config-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.config-item {
  background-color: #f8f9fa;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  color: #495057;
}

.config-item code {
  background-color: #e9ecef;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  color: #333;
}

.status-section {
  margin-top: 20px;
}

.status-message {
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.3s ease;
}

.status-message.listening {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.status-message.ended {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.status-message.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.status-message.result {
  background-color: #e3f2fd;
  color: #1976d2;
  border: 1px solid #bbdefb;
}

/* Responsive design */
@media (max-width: 768px) {
  .control-grid {
    grid-template-columns: 1fr;
  }

  .config-details {
    flex-direction: column;
    align-items: center;
  }

  .customization-demo {
    padding: 15px;
  }
}
</style>
