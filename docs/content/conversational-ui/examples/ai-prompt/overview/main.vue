<template>
    <div class="profile-demo card-container">
        <div class="k-card custom-card">
            <div class="card-row">
                <div class="card-column no-flex">
                    <div class="sidebar-container k-skeleton">
                        <div class="description-container">
                            <div class="k-skeleton skeleton-small-text"></div>
                            <div class="k-skeleton skeleton-small-text"></div>
                            <div class="k-skeleton skeleton-small-text"></div>
                        </div>
                    </div>
                </div>
                <div class="card-column">
                    <div class="avatar-title-container">
                        <div class="k-skeleton skeleton-avatar"></div>
                        <h4 class="k-h4">New E-mail</h4>
                    </div>
                    <div class="skeleton-container top">
                        <div class="k-skeleton skeleton-box-small"></div>
                        <div class="k-skeleton skeleton-box-large"></div>
                        <div class="k-skeleton skeleton-box-large"></div>
                    </div>
                    <div class="component-container">
                        <TextArea :style="{ height: '300px' }" :value="textAreaValue" @change="handleTextAreaChange" />
                        <FloatingActionButton
                            :style="{ zIndex: 2 }"
                            ref="button"
                            :svgIcon="fabIcon"
                            :align="{
                                horizontal: 'end',
                                vertical: 'bottom',
                            }"
                            :alignOffset="{
                                x: 40,
                                y: 40,
                            }"
                            :positionMode="'absolute'"
                            @click="toggleAIPrompt"
                        />
                        <Popup
                            :anchor="'button'"
                            :show="showAIPrompt"
                            :direction="'up'"
                            :popupAlign="{ vertical: 'bottom', horizontal: 'right' }"
                            :anchorAlign="{ vertical: 'bottom', horizontal: 'left' }"
                        >
                            <AIPrompt
                                :style="{ width: '400px', height: '440px' }"
                                :activeView="activeView"
                                :loading="isLoading"
                                :streaming="isStreaming"
                                :suggestions-view="'modern'"
                                @activeviewchange="handleActiveViewChange"
                                @promptrequest="handleOnRequest"
                                @commandexecute="handleCommandExecute"
                                @cancel="handleCancel"
                                :toolbarItems="[promptViewDefaults, outputViewDefaults, commandsViewDefaults]"
                            >
                                <AIPromptView :enable-speech-to-text="true" :promptSuggestions="suggestionsList" />
                                <AIPromptOutputView :outputs="outputs" />
                                <AIPromptCommandsView :commands="promptCommands" />
                            </AIPrompt>
                        </Popup>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
    AIPrompt,
    AIPromptCommandsView,
    AIPromptOutputView,
    AIPromptView,
    commandsViewDefaults,
    outputViewDefaults,
    promptViewDefaults,
} from '@progress/kendo-vue-conversational-ui';
import { Popup } from '@progress/kendo-vue-popup';
import { TextArea } from '@progress/kendo-vue-inputs';
import { xIcon, sparklesIcon } from '@progress/kendo-svg-icons';
import { FloatingActionButton } from '@progress/kendo-vue-buttons';
import './overview-styles.css';

import { promptCommands, suggestionsList } from './ai-data';

// Real API function to get suggestion from Telerik's AI service
const getSuggestion = async (prompt, signal) => {
    const url = 'https://demos.telerik.com/service/v2/ai/completion';
    const data = [
        {
            role: 'user',
            contents: [
                {
                    $type: 'text',
                    text:
                        'You are a helpful AI assistant. Help me with the following request: ' +
                        prompt +
                        '. Provide a clear and concise response. Make the response informative and helpful.',
                },
            ],
        },
    ];

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            signal: signal,
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json();
        try {
            const parsedData = result.messages[0].contents[0].text;
            return parsedData;
        } catch (parseError) {
            return 'Something went wrong. Please try again.';
        }
    } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
            throw error; // Re-throw abort errors to handle them specifically
        }
        return 'Error making request. Please try again.';
    }
};

const textAreaValue = ref('');
const showAIPrompt = ref(false);
const activeView = ref(promptViewDefaults.name);
const outputs = ref([]);
const isLoading = ref(false);
const isStreaming = ref(false);
const abortController = ref(null);

const fabIcon = computed(() => {
    return showAIPrompt.value ? xIcon : sparklesIcon;
});

const toggleAIPrompt = () => {
    showAIPrompt.value = !showAIPrompt.value;
};

const handleTextAreaChange = (event) => {
    textAreaValue.value = event.target.value;
};

const handleOnRequest = async (prompt, output) => {
    if (!prompt) {
        return;
    }

    // Create new abort controller for this request
    const controller = new AbortController();
    abortController.value = controller;

    isLoading.value = true;
    isStreaming.value = true;
    activeView.value = outputViewDefaults.name; // Switch to output view when streaming starts

    try {
        let responseContent;

        if (output?.isRetry) {
            // Handle retry - get a new response
            responseContent = await getSuggestion(
                prompt + ' (please provide an alternative response)',
                controller.signal,
            );
        } else {
            // Regular request
            responseContent = await getSuggestion(prompt, controller.signal);
        }

        // Set loading to false after getSuggestion completes
        isLoading.value = false;

        // Streaming output in chunks
        const newOutput = {
            id: outputs.value.length + 1,
            title: prompt,
            responseContent: '',
            prompt,
        };

        outputs.value = [newOutput, ...outputs.value];

        // Simulate streaming by splitting responseContent into chunks
        const chunkSize = 20;
        let currentIndex = 0;
        while (currentIndex < responseContent.length && !controller.signal.aborted) {
            await new Promise((resolve) => setTimeout(resolve, 100));

            if (controller.signal.aborted) {
                break;
            }

            const nextChunk = responseContent.slice(0, currentIndex + chunkSize);
            const updated = [...outputs.value];
            if (updated[0]?.id === newOutput.id) {
                updated[0] = {
                    ...updated[0],
                    responseContent: nextChunk,
                };
            }
            outputs.value = updated;
            currentIndex += chunkSize;
        }
        textAreaValue.value = responseContent;
        activeView.value = outputViewDefaults.name;
    } catch (error) {
        // Handle abort - don't add any output, just stop streaming
        if (error instanceof Error && error.name === 'AbortError') {
            return;
        }

        // Handle other errors
        const errorOutput = {
            id: outputs.value.length + 1,
            title: prompt,
            responseContent: 'Sorry, there was an error processing your request. Please try again.',
            prompt,
        };
        outputs.value = [errorOutput, ...outputs.value];
        activeView.value = outputViewDefaults.name;
    } finally {
        isLoading.value = false;
        isStreaming.value = false;
        abortController.value = null;
    }
};

const handleActiveViewChange = (viewName) => {
    activeView.value = viewName;
};

const handleCancel = () => {
    if (abortController.value) {
        abortController.value.abort();
    }
};

const handleCommandExecute = async (command) => {
    // When a command is executed, use its prompt and the current textAreaValue to make a request
    if (command.prompt && textAreaValue.value) {
        const prompt = command.prompt(textAreaValue.value);
        await handleOnRequest(prompt);
        activeView.value = outputViewDefaults.name;
    }
};
</script>
