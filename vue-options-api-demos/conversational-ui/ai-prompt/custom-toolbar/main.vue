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
        @activeviewchange="handleActiveViewChange"
        @promptrequest="handleOnRequest"
        @commandexecute="handleCommandExecute"
        :toolbarItems="[
          promptViewDefaults,
          outputViewDefaults,
          {
            name: 'custom-view',
            content: 'custom',
          },
        ]"
      >
        <template v-slot:custom="{ props }">
          <span class="k-spacer"></span>
          <KButton :svgIcon="xIcon" @click="handleXIconClick"></KButton>
        </template>
        <AIPromptView :promptSuggestions="suggestionsList" />
        <AIPromptOutputView :outputs="outputs" />
      </AIPrompt>
    </Popup>
  </div>
</template>
<script>
import {
  AIPrompt,
  AIPromptOutputView,
  AIPromptView,
  outputViewDefaults,
  promptViewDefaults,
} from "@progress/kendo-vue-conversational-ui";
import { Popup } from "@progress/kendo-vue-popup";
import { TextArea as KTextArea } from "@progress/kendo-vue-inputs";
import { xIcon, sparklesIcon } from "@progress/kendo-svg-icons";
import {
  Button as KButton,
  FloatingActionButton,
} from "@progress/kendo-vue-buttons";

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
    Popup,
    KTextArea,
    FloatingActionButton,
    KButton,
  },
  data: function () {
    return {
      suggestionsList,
      suggestionsResponse,
      unknownRequest,
      outputViewDefaults,
      promptViewDefaults,
      textAreaValue: "",
      localPrompt: "",
      showAIPrompt: false,
      activeView: promptViewDefaults.name,
      outputs: [],
      xIcon,
    };
  },
  computed: {
    fabIcon() {
      return this.showAIPrompt ? xIcon : sparklesIcon;
    },
  },
  methods: {
    handleXIconClick() {
      this.showAIPrompt = false;
    },
    toggleAIPrompt() {
      this.showAIPrompt = !this.showAIPrompt;
    },
    handleOnRequest(prompt, output) {
      if (!prompt) {
        return;
      }

      if (output && output?.isRetry) {
        const responseContent = this.getSuggestion(prompt + "retry");
        this.textAreaValue = responseContent?.response || unknownRequest;
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
        this.textAreaValue = responseContent?.response || unknownRequest;
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
