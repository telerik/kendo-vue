<template>
    <AIPrompt
        :style="{ width: '400px', height: '400px' }"
        :active-view="activeView"
        :loading="isLoading"
        :streaming="isStreaming"
        :toolbar-items="[promptViewDefaults, outputViewDefaults]"
        @activeviewchange="handleActiveViewChange"
        @promptrequest="handleOnRequest"
        @cancel="handleCancel"
    >
        <AIPromptView :generate-button="'generate-button'" :prompt-input="'prompt-input'">
            <template #prompt-input>
                <TextBox
                    placeholder="💬 Enter your AI prompt here..."
                    :value="localPrompt"
                    @input="onTextChange"
                    style="width: 100%"
                />
            </template>
            <template #generate-button>
                <Button
                    size="medium"
                    theme-color="primary"
                    fill-mode="flat"
                    rounded="full"
                    @click="handleOnRequest(localPrompt)"
                >
                    🚀 Generate AI Response
                </Button>
            </template>
        </AIPromptView>
        <AIPromptOutputView :outputs="outputs" />
    </AIPrompt>
</template>

<script setup>
import { ref } from 'vue';
import {
    AIPrompt,
    AIPromptOutputView,
    AIPromptView,
    outputViewDefaults,
    promptViewDefaults,
} from '@progress/kendo-vue-conversational-ui';
import { TextBox } from '@progress/kendo-vue-inputs';
import { Button } from '@progress/kendo-vue-buttons';

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

const activeView = ref(promptViewDefaults.name);
const localPrompt = ref('');
const outputs = ref([]);
const isLoading = ref(false);
const isStreaming = ref(false);
const abortController = ref(null);

const onTextChange = (event) => {
    localPrompt.value = event.target.value?.toString() || '';
};

const handleActiveViewChange = (viewName) => {
    activeView.value = viewName;
};

const handleOnRequest = async (promptText, output) => {
    // For retry, use the prompt from the output object
    if (output?.isRetry && output?.prompt) {
        promptText = output.prompt;
    }

    // Validate prompt or set default
    if (!promptText || typeof promptText !== 'string') {
        if (output?.isRetry) {
            return;
        }
        promptText = 'Sample prompt for custom components';
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
                promptText + ' (please provide an alternative response)',
                controller.signal
            );
        } else {
            // Regular request
            responseContent = await getSuggestion(promptText, controller.signal);
        }

        // Check if request was aborted during API call
        if (controller.signal.aborted) {
            return;
        }

        // Create output with complete response content
        const newOutput = {
            id: outputs.value.length + 1,
            title: promptText,
            responseContent: responseContent,
            prompt: promptText,
        };

        outputs.value = [newOutput, ...outputs.value];
    } catch (error) {
        // Handle abort - don't add any output, just stop streaming
        if (error instanceof Error && error.name === 'AbortError') {
            return;
        }

        // Handle other errors
        const errorOutput = {
            id: outputs.value.length + 1,
            title: promptText,
            responseContent: 'Sorry, there was an error processing your request. Please try again.',
            prompt: promptText,
        };
        outputs.value = [errorOutput, ...outputs.value];
        activeView.value = outputViewDefaults.name;
    } finally {
        isLoading.value = false;
        isStreaming.value = false;
        abortController.value = null;
    }
};

const handleCancel = () => {
    if (abortController.value) {
        abortController.value.abort();
        abortController.value = null;
        isLoading.value = false;
        isStreaming.value = false;
    }
};
</script>
