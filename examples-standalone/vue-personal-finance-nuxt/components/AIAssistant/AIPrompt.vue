<template>
    <AIPrompt v-if="mounted" :activeView="activeView" @activeviewchange="handleActiveViewChange" @promptrequest="handleOnRequest"
        @commandexecute="handleCommandExecute" :toolbarItems="[promptViewDefaults, outputViewDefaults]">
        <AIPromptView :promptSuggestions="suggestionsList" />
        <AIPromptOutputView :outputs="outputs" />
    </AIPrompt>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { AIPrompt, AIPromptView, AIPromptOutputView, outputViewDefaults, promptViewDefaults } from "@progress/kendo-vue-conversational-ui";
import { suggestionsList, suggestionsResponse, unknownRequest } from '@/data/ai-data';

const mounted = ref(false);
const activeView = ref(promptViewDefaults.name);
const outputs = ref([]);

const handleActiveViewChange = (viewName) => {
    activeView.value = viewName;
}

const handleCommandExecute = (commandData) => {
    const responseItem = getSuggestion(localPrompt.value || "");
    const commandText = commandData.text;
    outputs.value = [
        {
            id: outputs.value.length + 1,
            title: localPrompt.value,
            subTitle: commandText,
            responseContent:
                (responseItem?.commands && responseItem.commands[commandText]) ||
                unknownRequest,
            prompt: localPrompt.value,
        },
        ...outputs.value,
    ];

    activeView.value = outputViewDefaults.name;
};

const getSuggestion = (prompt) => {
    return suggestionsResponse.find((item) => {
        return item.suggestion === prompt && item;
    });
};


const handleOnRequest = (prompt, output) => {
    if (!prompt) {
        return;
    }
    if (output?.isRetry) {
        const responseContent = getSuggestion(prompt + 'retry');
        outputs.value = [{
            id: outputs.value.length + 1,
            title: prompt,
            responseContent: responseContent?.response || unknownRequest,
            prompt
        }, ...outputs.value];
    } else if (output?.ratingType) {
        const responseContent = getSuggestion(prompt);
        outputs.value = [{
            id: outputs.value.length + 1,
            title: prompt,
            responseContent: responseContent?.response || unknownRequest,
            prompt
        }, ...outputs.value];
    } else {
        const responseContent = getSuggestion(prompt);
        outputs.value = [{
            id: outputs.value.length + 1,
            title: prompt,
            responseContent: responseContent?.response || unknownRequest,
            prompt
        }, ...outputs.value];
    }
    activeView.value = outputViewDefaults.name;
};

onMounted(() => {
    mounted.value = true;
});
</script>