<template>
  <AIPrompt
    :active-view="activeView"
    @activeviewchange="handleActiveViewChange"
    @promptrequest="handleOnRequest"
    :toolbar-items="[promptViewDefaults, outputViewDefaults, commandsViewDefaults]"
  >
    <AIPromptView />
    <AIPromptOutputView :outputs="outputs" :show-output-rating="true" />
  </AIPrompt>
</template>

<script setup>
import { ref } from 'vue';
import {
    AIPrompt,
    AIPromptOutputView,
    AIPromptView,
    commandsViewDefaults,
    outputViewDefaults,
    promptViewDefaults,
} from '@progress/kendo-vue-conversational-ui';

const activeView = ref('commands-view');
const outputs = ref([]);
const command = ref(undefined);

function handleOnRequest(prompt, outputItem) {
    if (!prompt) return;

    if (!outputItem?.ratingType) {
        outputs.value.push({
            id: outputs.value.length + 1,
            title: 'Title',
            subTitle: `Request ${outputs.value.length + 1}`,
            responseContent: `Response to ${prompt} Iteration: ${outputs.value.length}`,
            prompt,
            command: command.value,
        });
        activeView.value = outputViewDefaults.name;
        command.value = undefined;
    }
}

function handleActiveViewChange(viewName) {
    activeView.value = viewName;
}
</script>
