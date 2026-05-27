<template>
    <AIPrompt
        :style="{ width: '400px', height: '400px' }"
        :activeView="activeView"
        :loading="isLoading"
        :streaming="isStreaming"
        @activeviewchange="handleActiveViewChange"
        @promptrequest="handleOnRequest"
        @commandexecute="handleCommandExecute"
        @cancel="handleCancel"
        :toolbarItems="[outputViewDefaults, commandsViewDefaults]"
    >
        <AIPromptOutputView :outputs="outputs" />
        <AIPromptCommandsView :commands="promptCommands" />
    </AIPrompt>
</template>

<script setup>
import {
    AIPrompt,
    AIPromptCommandsView,
    AIPromptOutputView,
    commandsViewDefaults,
    outputViewDefaults,
} from '@progress/kendo-vue-conversational-ui';
import { ref } from 'vue';

import { promptCommands } from './ai-data';

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

const activeView = ref(commandsViewDefaults.name);
const outputs = ref([
    {
        id: 1,
        title: 'Sample Text',
        responseContent:
            "This is a sample text that demonstrates how AI commands can transform content. You can select different commands from the Commands view to see how this text gets processed - whether it's changing formality, translating to different languages, simplifying, or expanding the content.",
        prompt: 'Sample text for command processing',
    },
]);
const isLoading = ref(false);
const isStreaming = ref(false);
const abortController = ref(null);

const handleOnRequest = async (prompt, outputItem) => {
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

        if (outputItem?.isRetry) {
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
    // When a command is executed, apply it to the current output's content
    if (command.prompt && outputs.value.length > 0) {
        const currentOutput = outputs.value[0];
        const prompt = command.prompt(currentOutput.responseContent);
        await handleOnRequest(prompt);
        activeView.value = outputViewDefaults.name;
    }
};
</script>
