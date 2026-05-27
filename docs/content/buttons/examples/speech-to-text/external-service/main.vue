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

        const GOOGLE_API_KEY = '';

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
