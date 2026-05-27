<template>
    <AIPrompt
        :style="{ width: '400px', height: '400px' }"
        :activeView="activeView"
        :loading="isLoading"
        :streaming="isStreaming"
        @activeviewchange="handleActiveViewChange"
        @promptrequest="handleOnRequest"
        @cancel="handleCancel"
        :toolbarItems="[promptViewDefaults, outputViewDefaults]"
    >
        <AIPromptView :enable-speech-to-text="true" :promptSuggestions="suggestionsList" />
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

const outOfOffice = 'Generate an Out of Office email.';

const linkedInPost = 'Write a LinkedIn post for the importance of work/life balance.';

const suggestionsList = [outOfOffice, linkedInPost];

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
const outputs = ref([]);
const isLoading = ref(false);
const isStreaming = ref(false);
const abortController = ref(null);

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

        const newOutput = {
            id: outputs.value.length + 1,
            title: prompt,
            responseContent: responseContent,
            prompt,
        };

        outputs.value = [newOutput, ...outputs.value];
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
</script>
