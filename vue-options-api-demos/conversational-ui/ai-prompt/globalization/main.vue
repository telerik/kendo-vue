<template>
  <AIPrompt
    dir="rtl"
    :activeView="activeView"
    @activeviewchange="handleActiveViewChange"
    @promptrequest="handleOnRequest"
    :toolbarItems="[promptViewDefaults, outputViewDefaults]"
  >
    <AIPromptView />
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

export default {
  components: {
    AIPrompt,
    AIPromptOutputView,
    AIPromptView,
  },
  data: function () {
    return {
      outputViewDefaults,
      promptViewDefaults,
      activeView: promptViewDefaults.name,
      outputs: [],
    };
  },
  methods: {
    handleOnRequest(prompt, outputItem) {
      if (!prompt) {
        return;
      }

      this.outputs = [
        {
          id: this.outputs.length + 1,
          title: "Title",
          subTitle: `Request ${this.outputs.length + 1}`,
          responseContent: `Response content for prompt ${
            prompt + ". Generation: " + this.outputs.length
          }`,
          prompt,
        },
        ...this.outputs,
      ];
      this.activeView = outputViewDefaults.name;
    },
    handleActiveViewChange(viewName) {
      this.activeView = viewName;
    },
  },
};
</script>
