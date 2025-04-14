<template>
  <AIPrompt
    :style="{ width: '400px', height: '400px' }"
    :activeView="activeView"
    @activeviewchange="handleActiveViewChange"
    @promptrequest="handleOnRequest"
    @commandexecute="handleCommandExecute"
    :toolbarItems="[promptViewDefaults, outputViewDefaults]"
  >
    <AIPromptView :promptSuggestions="suggestionsList" />
    <AIPromptOutputView :outputs="outputs" />
  </AIPrompt>
</template>
<script>
import {
  AIPrompt,
  AIPromptOutputView,
  AIPromptView,
  outputViewDefaults,
  promptViewDefaults,
} from "@progress/kendo-vue-conversational-ui";

import {
  suggestionsList,
  suggestionsResponse,
  unknownRequest,
} from "./ai-data";

export default {
  components: {
    AIPrompt,
    AIPromptOutputView,
    AIPromptView,
  },
  data: function () {
    return {
      suggestionsList,
      suggestionsResponse,
      unknownRequest,
      outputViewDefaults,
      promptViewDefaults,
      localPrompt: "",
      showAIPrompt: false,
      activeView: promptViewDefaults.name,
      outputs: [],
    };
  },
  methods: {
    handleOnRequest(prompt, output) {
      if (!prompt) {
        return;
      }

      if (output && output?.isRetry) {
        const responseContent = this.getSuggestion(prompt + "retry");
        this.outputs = [
          {
            id: this.outputs.length + 1,
            title: prompt,
            responseContent: responseContent?.response || unknownRequest,
            prompt,
          },
          ...this.outputs,
        ];
      } else if (output && output?.ratingType) {
        const ratingOutput = this.outputs.map((item) => {
          return output.id === item.id
            ? { ...item, ratingType: output.ratingType }
            : item;
        });
        this.outputs = ratingOutput;
      } else {
        const responseContent = this.getSuggestion(prompt);
        this.outputs = [
          {
            id: this.outputs.length + 1,
            title: prompt,
            responseContent: responseContent?.response || unknownRequest,
            prompt,
          },
          ...this.outputs,
        ];
      }

      this.localPrompt = prompt;
      this.activeView = outputViewDefaults.name;
    },
    handleActiveViewChange(viewName) {
      this.activeView = viewName;
    },
    handleCommandExecute(commandData) {
      const responseItem = this.getSuggestion(this.localPrompt || "");
      const commandText = commandData.text;
      this.outputs = [
        {
          id: this.outputs.length + 1,
          title: this.localPrompt,
          subTitle: commandData.text,
          responseContent:
            (responseItem?.commands && responseItem.commands[commandText]) ||
            unknownRequest,
          prompt: this.localPrompt,
        },
        ...outputs,
      ];

      this.activeView = outputViewDefaults.name;
    },
    getSuggestion(prompt) {
      return suggestionsResponse.find((item) => {
        return item.suggestion === prompt && item;
      });
    },
  },
};
</script>
