<template>
    <div class="profile-demo card-container">
        <div class="main-layout">
            <div>
                <PromptBox
                    :value="value"
                    @change="handleValueChange"
                    @focus="handleFocus"
                    @blur="handleBlur"
                    @promptaction="handlePromptAction"
                    mode="single"
                    placeholder="Type your message..."
                    max-text-area-height="150"
                    :style="{ width: '500px' }"
                    :action-button-config="{
                        svgIcon: paperPlaneIcon,
                        fillMode: 'flat',
                        themeColor: 'primary',
                    }"
                    :upload-button-config="uploadButtonConfig"
                    :speech-to-text-button-config="speechToTextButtonConfig"
                />
            </div>

            <div class="example-config">
                <h5>Event log</h5>
                <ul class="event-log" :style="{ textAlign: 'right' }">
                    <li v-for="(event, index) in events.slice(0, 20)" :key="index">
                        {{ event }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { PromptBox } from '@progress/kendo-vue-conversational-ui';
import { paperPlaneIcon, paperclipIcon } from '@progress/kendo-svg-icons';
import './styles.css';

const events = ref([]);
const value = ref('');

const logEvent = (eventName, eventData) => {
    const dataStr = eventData !== undefined && eventData !== null ? `: ${JSON.stringify(eventData)}` : '';
    events.value = [`${eventName}${dataStr}`, ...events.value];
};

const handleValueChange = (event) => {
    value.value = event.value;
    logEvent('onChange', event.value);
};

const handleFocus = () => {
    logEvent('onFocus', null);
};

const handleBlur = () => {
    logEvent('onBlur', null);
};

const handlePromptAction = (event) => {
    logEvent('onPromptAction', { value: event.value, attachments: event.attachments });
    value.value = '';
};

const handleSelectAttachments = (event) => {
    logEvent('onSelectAttachments', {
        selectedFiles: event.selectedFiles.map((f) => ({ name: f.name, size: f.size })),
        allFiles: event.allFiles.map((f) => ({ name: f.name, size: f.size })),
    });
};

const handleRemoveAttachment = (fileName) => {
    logEvent('onRemoveAttachment', { name: fileName });
};

const handleSpeechToTextStart = () => {
    logEvent('onStart', null);
};

const handleSpeechToTextEnd = () => {
    logEvent('onEnd', null);
};

const handleSpeechToTextError = (event) => {
    logEvent('onError', { errorMessage: event.errorMessage });
};

const handleSpeechToTextResult = (event) => {
    logEvent('onResult', {
        isFinal: event.isFinal,
        transcript: event.alternatives[0]?.transcript,
        confidence: event.alternatives[0]?.confidence,
    });
};

const uploadButtonConfig = {
    svgIcon: paperclipIcon,
    onSelectAttachments: handleSelectAttachments,
    onRemoveAttachment: handleRemoveAttachment,
};

const speechToTextButtonConfig = {
    fillMode: 'flat',
    onStart: handleSpeechToTextStart,
    onEnd: handleSpeechToTextEnd,
    onError: handleSpeechToTextError,
    onResult: handleSpeechToTextResult,
};
</script>
