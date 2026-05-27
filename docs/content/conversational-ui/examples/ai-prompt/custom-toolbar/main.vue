<template>
    <div class="k-card custom-card">
        <KTextArea :style="{ height: '500px' }" :value="textAreaValue" />
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
                v-if="showAIPrompt"
                :style="{ width: '400px', height: '400px' }"
                :activeView="activeView"
                :loading="isLoading"
                :streaming="isStreaming"
                :suggestions-view="'modern'"
                @activeviewchange="handleActiveViewChange"
                @promptrequest="handleOnRequest"
                @commandexecute="handleCommandExecute"
                @cancel="handleCancel"
                :toolbarItems="[
                    promptViewDefaults,
                    outputViewDefaults,
                    {
                        name: 'custom-view',
                        content: 'custom',
                    },
                ]"
            >
                <template #custom>
                    <span class="k-spacer"></span>
                    <KButton :svgIcon="xIcon" @click="handleXIconClick"></KButton>
                </template>
                <AIPromptView :promptSuggestions="suggestionsList" />
                <AIPromptOutputView :outputs="outputs" />
            </AIPrompt>
        </Popup>
    </div>
</template>

<script setup>
import {
    AIPrompt,
    AIPromptOutputView,
    AIPromptView,
    outputViewDefaults,
    promptViewDefaults,
} from '@progress/kendo-vue-conversational-ui';
import { Popup } from '@progress/kendo-vue-popup';
import { TextArea as KTextArea } from '@progress/kendo-vue-inputs';
import { xIcon, sparklesIcon } from '@progress/kendo-svg-icons';
import { Button as KButton, FloatingActionButton } from '@progress/kendo-vue-buttons';
import { ref, computed } from 'vue';

import { suggestionsList } from './ai-data';

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

const handleXIconClick = () => {
    showAIPrompt.value = false;
};

const toggleAIPrompt = () => {
    showAIPrompt.value = !showAIPrompt.value;
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
    activeView.value = outputViewDefaults.name;

    try {
        let responseContent;

        if (output?.isRetry) {
            responseContent = await getSuggestion(
                prompt + ' (please provide an alternative response)',
                controller.signal
            );
        } else {
            responseContent = await getSuggestion(prompt, controller.signal);
        }

        if (controller.signal.aborted) {
            return;
        }

        isLoading.value = false;

        const newOutput = {
            id: outputs.value.length + 1,
            title: prompt,
            responseContent: '',
            prompt,
        };

        outputs.value = [newOutput, ...outputs.value];

        // Stream the response
        const chunkSize = 15;
        let currentIndex = 0;

        while (currentIndex < responseContent.length && !controller.signal.aborted) {
            await new Promise((resolve) => setTimeout(resolve, 80));

            if (controller.signal.aborted) {
                break;
            }

            const nextChunk = responseContent.slice(0, currentIndex + chunkSize);

            outputs.value = [
                {
                    ...outputs.value[0],
                    responseContent: nextChunk,
                },
                ...outputs.value.slice(1),
            ];

            currentIndex += chunkSize;
        }

        if (!controller.signal.aborted && outputs.value[0]?.id === newOutput.id) {
            outputs.value = [
                {
                    ...outputs.value[0],
                    responseContent: responseContent,
                },
                ...outputs.value.slice(1),
            ];

            // Update textarea with the complete response
            textAreaValue.value = responseContent;
        }
    } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
            return;
        }

        const errorOutput = {
            id: outputs.value.length + 1,
            title: prompt,
            responseContent: 'Sorry, there was an error processing your request. Please try again.',
            prompt,
        };
        outputs.value = [errorOutput, ...outputs.value];
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
        abortController.value = null;
        isLoading.value = false;
        isStreaming.value = false;
    }
};

const handleCommandExecute = async (command) => {
    if (command.text) {
        await handleOnRequest(`Execute command: ${command.text}`);
    }
};
</script>
