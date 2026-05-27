<template>
    <div class="demo-container">
        <PromptBox
            :value="promptValue"
            @change="handleValueChange"
            mode="single"
            placeholder="Type your message..."
            @promptaction="handleSend"
            :speech-to-text-button-config="false"
            :upload-button-config="true"
            :action-button-config="false"
            :start-affix="startAffix"
            :end-affix="endAffix"
        />
    </div>
</template>

<script setup>
import { ref, h } from 'vue';
import {
    PromptBox,
    PromptBoxActionButton,
    PromptBoxSpeechToTextButton,
} from '@progress/kendo-vue-conversational-ui';

const promptValue = ref('Explain the principles of sustainable architecture');

const handleValueChange = (event) => {
    promptValue.value = event.value;
};

const handleSend = () => {
    promptValue.value = '';
};

const startAffix = (props) =>
    h(PromptBoxActionButton, {
        ...props.actionButtonProps,
        fillMode: 'solid',
        themeColor: 'primary',
    });

const endAffix = (props) =>
    h(PromptBoxSpeechToTextButton, props.speechToTextButtonProps);
</script>

<style>
.demo-container {
    max-width: 600px;
    margin: 0 auto;
}
</style>
