---
title: Integration
description: "Learn how to integrate the Kendo UI for Vue SpeechToText Button component with other Kendo UI for Vue components."
slug: integration_speechtotext
position: 60
---

# SpeechToText Button Integration

The Kendo UI for Vue SpeechToText Button can be seamlessly integrated with other Kendo UI for Vue components to create powerful voice-enabled user interfaces. This article demonstrates common integration patterns and use cases.

## TextArea Integration

One of the most practical integrations is using the SpeechToText Button as a prefix for text input components. This allows users to dictate text directly into text areas, enhancing accessibility and user experience.

### TextArea with Speech-to-Text Prefix

The following example demonstrates how to integrate the SpeechToText Button as a prefix for a TextArea component, creating a voice-enabled text input experience:

{% meta height:400 %}
{% embed_file speech-to-text/textarea-prefix/main.vue preview %}
{% embed_file speech-to-text/textarea-prefix/main.js %}
{% endmeta %}


## External Service Integration


The SpeechToText Button can be integrated with external speech recognition services or APIs, such as Google Cloud Speech-to-Text or OpenAI Whisper.


### Google Cloud Speech-to-Text Integration

The following example demonstrates how to integrate the SpeechToText Button with the Google Cloud Speech-to-Text API by using async event handlers to record audio and send it to the Google Cloud service. To test the demo, copy it locally and set your API key to the `GOOGLE_API_KEY` variable.

```jsx
<template>
  <div>
    <SpeechToTextButton
      integration-mode="None"
      @start="onStart"
      @end="onStop"
    />
    <div v-if="transcript" class="transcript">
      {{ transcript }}
    </div>
    <div class="log-area">
      <div v-for="(log, idx) in logs" :key="idx" class="log-entry">{{ log }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SpeechToTextButton } from '@progress/kendo-vue-buttons';

const mediaRecorder = ref(null);
const audioChunks = ref([]);
const transcript = ref('');
const logs = ref([]);

function addLog(message) {
    logs.value.push(message);
}

const onStart = async () => {
    addLog('Speech-to-Text process started');
    await startRecording();
};
const onStop = async () => {
    await stopRecording();
    addLog('Speech-to-Text process stopped');
};

const startRecording = async () => {
    addLog('Starting recording...');
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder.value = new MediaRecorder(stream, {
            mimeType: 'audio/webm;codecs=opus'
        });
        audioChunks.value = [];

        mediaRecorder.value.ondataavailable = (event) => {
            audioChunks.value.push(event.data);
        };

        mediaRecorder.value.onstop = async () => {
            const audioBlob = new Blob(audioChunks.value, { type: 'audio/webm' });
            await sendToGoogleCloud(audioBlob);
        };

        mediaRecorder.value.start();

    } catch (error) {
        addLog('Error starting recording: ' + error.message);
        handleError({ errorMessage: error.message });
    }
};

const stopRecording = () => {
    addLog('Stopping recording...');
    if (mediaRecorder.value && mediaRecorder.value.state === 'recording') {
        mediaRecorder.value.stop();
        mediaRecorder.value.stream.getTracks().forEach(track => track.stop());
    }
};

const sendToGoogleCloud = async (audioBlob) => {
    addLog('Sending audio to Google Cloud Speech-to-Text API...');

    try {
        const audioBase64 = await blobToBase64(audioBlob);

        const requestBody = {
            config: {
                encoding: 'WEBM_OPUS',
                sampleRateHertz: 48000,
                languageCode: 'en-US',
                enableAutomaticPunctuation: true,
                model: 'latest_long'
            },
            audio: {
                content: audioBase64
            }
        };

        // Replace with your own Google Cloud API key
        const GOOGLE_API_KEY = 'YOUR_GOOGLE_CLOUD_API_KEY';

        const response = await fetch(`https://speech.googleapis.com/v1/speech:recognize?key=${GOOGLE_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });

        const result = await response.json();
        addLog('Google Cloud transcription result: ' + JSON.stringify(result));

        if (result.results && result.results.length > 0) {
            addLog('result: ' + JSON.stringify(result));
            transcript.value = result.results[0].alternatives[0].transcript;
        } else {
            addLog('No transcription results received');
        }

    } catch (error) {
        addLog('Error calling Google Cloud Speech-to-Text: ' + error.message);
        handleError({ errorMessage: error.message });
    }
};

const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64 = reader.result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
};

const handleError = (event) => {
    addLog('Speech recognition error: ' + event.errorMessage);
};
</script>

<style scoped>
.log-area {
  margin-top: 1rem;
  padding: 0.5rem;
  border: 1px solid #eee;
  background: #fafbfc;
  font-size: 0.95em;
  max-height: 200px;
  overflow-y: auto;
}
.log-entry {
  margin-bottom: 0.25rem;
  color: #555;
}
</style>

```


When integrating the SpeechToText Button with Google Cloud Speech-to-Text or other external services, several key configurations should be made:

* **Async event handlers**: Configure the `onStart` and `onEnd` event handlers to return promises that resolve only after external service communication is complete. This ensures the component waits for your service calls.
* **Integration mode**: Set the `integrationMode` prop to control how the component behaves with external services. Use `'None'` to disable built-in speech recognition when relying entirely on external services.

## See Also

* [SpeechToText Button Events]({% slug events_speechtotext %})
* [SpeechToText Button Customization]({% slug customization_speechtotext %})
* [SpeechToText Button Speech Configurations]({% slug speech_configs_speechtotext %})
