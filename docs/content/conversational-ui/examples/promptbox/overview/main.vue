<template>
    <div class="promptbox-demo card-container">
        <div class="k-card custom-card !k-flex-row">
            <div class="custom-card-header">
                <div class="card-actions-container k-pt-4 k-gap-2.5 k-flex-layout k-align-items-center k-flex-col">
                    <div class="custom-card-header-action k-skeleton k-rounded-full"></div>
                    <div class="custom-card-header-action k-skeleton k-rounded-full"></div>
                </div>
            </div>
            <div class="card-content k-p-8 k-w-full">
                <div class="chat-container">
                    <div
                        v-for="(message, index) in messages"
                        :key="message.id"
                        :class="['chat-message', message.isUser ? 'user-message' : 'ai-message']"
                    >
                        <div v-if="!message.isUser" class="avatar ai-avatar" />
                        <div class="message-bubble">
                            <div
                                v-if="index === messages.length - 1 && !message.isUser && isLastMessageLoading"
                                class="typing-indicator"
                            >
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                            </div>
                            <div v-else class="message-text">{{ message.text }}</div>
                        </div>
                        <div v-if="message.isUser" class="avatar user-avatar" />
                    </div>
                </div>
                <div class="promptbox-container">
                    <PromptBox
                        mode="auto"
                        placeholder="Type a message"
                        :value="value"
                        @change="handleValueChange"
                        @promptaction="handleSend"
                        :upload-button-config="false"
                        :start-affix="startAffixRender"
                        max-text-area-height="300"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, h } from 'vue';
import { PromptBox, PromptBoxUploadButton } from '@progress/kendo-vue-conversational-ui';
import './styles.css';

const value = ref('');
const messages = ref([
    { id: 1, text: '', isUser: true },
    { id: 2, text: '', isUser: false },
    { id: 3, text: '', isUser: true },
    { id: 4, text: '', isUser: false }
]);
const isLastMessageLoading = ref(false);

const handleValueChange = (event) => {
    value.value = event.value;
};

const handleSend = () => {
    if (value.value.trim()) {
        isLastMessageLoading.value = true;
        value.value = '';

        setTimeout(() => {
            isLastMessageLoading.value = false;
        }, 3000);
    }
};

const startAffixRender = (props) => h(PromptBoxUploadButton, props.uploadButtonProps);
</script>
