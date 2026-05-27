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
        :toolbarItems="[
            promptViewDefaults,
            outputViewDefaults,
            commandsViewDefaults,
            {
                name: 'custom-view',
                content: 'custom',
            },
            {
                name: 'joke-view',
                content: 'joke',
            },
        ]"
    >
        <template #custom>
            <span class="k-spacer"></span>
            <KButton :svgIcon="starIcon" @click="handleCustomClick"> Custom LLM Response </KButton>
        </template>
        <template #joke>
            <KButton :svgIcon="dribbbleIcon" @click="handleJokeClick">Joke</KButton>
        </template>
        <AIPromptView />
        <AIPromptOutputView :outputs="outputs" />
        <AIPromptCommandsView :commands="commands" />
        <AIPromptViewRender :name="'custom-view'">
            <AIPromptContent>
                🌟 Here are the results returned from our internal LLM. These results could be more acurate than what
                you got from the default LLM.
                <br />
                <ul>
                    <li>Option 1: 10000 pcs</li>
                    <li>Option 2: 9922 pcs or less</li>
                    <li>Option 3: 9911 to 9967 pcs</li>
                </ul>
                * This PromptContent view is a fully customizable one.
            </AIPromptContent>
        </AIPromptViewRender>
        <AIPromptViewRender :name="'joke'">
            <AIPromptContent>
                <b>Why do programmers prefer dark mode?</b>
                <span>Because light attracts bugs!</span>
                * This a second fully customizable PromptContent View.
            </AIPromptContent>
        </AIPromptViewRender>
    </AIPrompt>
</template>

<script setup>
import {
    AIPrompt,
    AIPromptCommandsView,
    AIPromptOutputView,
    AIPromptView,
    commandsViewDefaults,
    outputViewDefaults,
    promptViewDefaults,
    AIPromptViewRender,
    AIPromptContent,
} from '@progress/kendo-vue-conversational-ui';
import { spellCheckerIcon, tellAFriendIcon, starIcon, dribbbleIcon } from '@progress/kendo-svg-icons';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { ref } from 'vue';

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
const outputs = ref([
    {
        id: 1,
        title: 'Sample Text',
        subTitle: 'Initial Content',
        responseContent:
            'This is a sample text that can be processed by AI commands. You can use the commands to transform this content in various ways such as correcting grammar, changing tone, or summarizing the content.',
        prompt: 'Sample Text',
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
                controller.signal
            );
        } else {
            // Regular request
            responseContent = await getSuggestion(prompt, controller.signal);
        }

        // Check if request was aborted during API call
        if (controller.signal.aborted) {
            return;
        }

        // Set loading to false after getSuggestion completes
        isLoading.value = false;

        // Create output with complete response content
        const newOutput = {
            id: outputs.value.length + 1,
            title: 'Title',
            subTitle: `Request ${outputs.value.length + 1}`,
            responseContent: responseContent,
            prompt,
            command: command.value,
        };

        outputs.value = [newOutput, ...outputs.value];
        command.value = undefined;
    } catch (error) {
        // Handle abort - don't add any output, just stop streaming
        if (error instanceof Error && error.name === 'AbortError') {
            return;
        }

        // Handle other errors
        const errorOutput = {
            id: outputs.value.length + 1,
            title: 'Title',
            subTitle: `Request ${outputs.value.length + 1}`,
            responseContent: 'Sorry, there was an error processing your request. Please try again.',
            prompt,
            command: command.value,
        };
        outputs.value = [errorOutput, ...outputs.value];
        activeView.value = outputViewDefaults.name;
        command.value = undefined;
    } finally {
        isLoading.value = false;
        isStreaming.value = false;
        abortController.value = null;
    }
};

const handleActiveViewChange = (viewName) => {
    activeView.value = viewName;
};

const handleCommandExecute = async (commandData) => {
    command.value = commandData;

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

const handleCancel = () => {
    if (abortController.value) {
        abortController.value.abort();
        abortController.value = null;
        isLoading.value = false;
        isStreaming.value = false;
    }
};

const handleCustomClick = () => {
    activeView.value = 'custom-view';
};

const handleJokeClick = () => {
    activeView.value = 'joke';
};
</script>
