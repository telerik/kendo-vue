<template>
    <AIPrompt
        :style="{ width: '400px', height: '400px' }"
        :activeView="activeView"
        :streaming="isStreaming"
        :loading="isLoading"
        @activeviewchange="handleActiveViewChange"
        @promptrequest="handleOnRequest"
        @commandexecute="handleCommandExecute"
        @cancel="handleCancel"
        :toolbarItems="[promptViewDefaults, outputViewDefaults, commandsViewDefaults]"
    >
        <AIPromptView />
        <AIPromptOutputView
            @copy="handleCopy"
            @retry="handleRetry"
            @rating="handleRating"
            :outputs="outputs"
            :showOutputRating="true"
        />

        <AIPromptCommandsView :commands="commands" />
    </AIPrompt>
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
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
import { spellCheckerIcon, tellAFriendIcon } from '@progress/kendo-svg-icons';
import Logger from './Logger.vue';

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

const events = ref([]);
const activeView = ref(promptViewDefaults.name);
const outputs = ref([
    {
        id: 1,
        title: 'Sample Text for Commands',
        responseContent:
            'This is a sample text that demonstrates how AI commands work. The text contains some intentional errors and informal language that can be improved using the available commands.',
        prompt: 'Sample Text for Commands',
        command: undefined,
    },
]);
const command = ref(undefined);
const isLoading = ref(false);
const isStreaming = ref(false);
const abortController = ref(null);
const commands = ref([
    {
        id: '1',
        title: 'Correct Spelling and grammar',
        svgIcon: spellCheckerIcon,
        prompt: (text) => `Please correct the spelling and grammar of the following text: "${text}"`,
    },
    {
        id: '2',
        title: 'Change Tone',
        svgIcon: tellAFriendIcon,
        items: [
            {
                id: '3',
                title: 'Professional',
                prompt: (text) => `Please rewrite the following text in a professional tone: "${text}"`,
            },
            {
                id: '4',
                title: 'Conversational',
                prompt: (text) => `Please rewrite the following text in a conversational tone: "${text}"`,
            },
            {
                id: '5',
                title: 'Humorous',
                prompt: (text) => `Please rewrite the following text in a humorous tone: "${text}"`,
            },
            {
                id: '6',
                title: 'Empathic',
                prompt: (text) => `Please rewrite the following text in an empathic tone: "${text}"`,
            },
            {
                id: '7',
                title: 'Academic',
                prompt: (text) => `Please rewrite the following text in an academic tone: "${text}"`,
            },
        ],
    },
]);

const eventsList = computed(() => {
    return events.value;
});

const handleOnRequest = async (prompt, outputItem) => {
    events.value.unshift('Prompt request sent: ' + prompt);

    if (!prompt) {
        return;
    }

    if (outputItem?.ratingType) {
        events.value.unshift('Rating received: ' + outputItem.ratingType);
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
            events.value.unshift('Retry request initiated');
            responseContent = await getSuggestion(
                prompt + ' (please provide an alternative response)',
                controller.signal
            );
        } else {
            responseContent = await getSuggestion(prompt, controller.signal);
        }

        if (controller.signal.aborted) {
            events.value.unshift('Request was cancelled');
            return;
        }

        isLoading.value = false;

        const newOutput = {
            id: outputs.value.length + 1,
            title: prompt,
            responseContent: '',
            prompt,
            command: command.value,
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

        command.value = undefined;
        events.value.unshift('Request completed successfully');
    } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
            events.value.unshift('Request was cancelled');
            return;
        }

        const errorOutput = {
            id: outputs.value.length + 1,
            title: prompt,
            responseContent: 'Sorry, there was an error processing your request. Please try again.',
            prompt,
            command: command.value,
        };
        outputs.value = [errorOutput, ...outputs.value];
        events.value.unshift('Request failed with error');
    } finally {
        isLoading.value = false;
        isStreaming.value = false;
        abortController.value = null;
    }
};

const handleActiveViewChange = (viewName) => {
    activeView.value = viewName;
    events.value.unshift('Active view changed to: ' + viewName);
};

const handleCommandExecute = async (commandData) => {
    command.value = commandData;
    events.value.unshift("'" + commandData.title + "' command executed");

    // Execute the command if it has a prompt function and there's existing output
    if (commandData.prompt && outputs.value.length > 0) {
        const currentOutput = outputs.value[0];
        const prompt = commandData.prompt(currentOutput.responseContent);
        await handleOnRequest(prompt);
        activeView.value = outputViewDefaults.name;
    } else {
        // If no existing output, just switch to prompt view for manual input
        activeView.value = promptViewDefaults.name;
    }
};

const handleCopy = (params) => {
    events.value.unshift('Content copied: ' + params);
};

const handleRetry = (params) => {
    events.value.unshift('Prompt retry with the following parameters was triggered ' + JSON.stringify(params));
};

const handleRating = (params, rating) => {
    events.value.unshift('Rating received: ' + rating);
};

const handleCancel = () => {
    if (abortController.value) {
        abortController.value.abort();
        abortController.value = null;
        isLoading.value = false;
        isStreaming.value = false;
    }
    events.value.unshift('Request cancelled by user');
};
</script>
