<template>
  <div class="profile-demo card-container">
    <div class="k-card custom-card">
      <div class="card-row">
        <div class="card-column no-flex">
          <div class="sidebar-container k-skeleton">
            <div class="description-container">
              <div class="k-skeleton skeleton-small-text"></div>
              <div class="k-skeleton skeleton-small-text"></div>
              <div class="k-skeleton skeleton-small-text"></div>
            </div>
          </div>
        </div>
        <div class="card-column">
          <div class="avatar-title-container">
            <div class="k-skeleton skeleton-avatar"></div>
            <h4 class="k-h4">New E-mail</h4>
          </div>
          <div class="skeleton-container top">
            <div class="k-skeleton skeleton-box-small"></div>
            <div class="k-skeleton skeleton-box-large"></div>
            <div class="k-skeleton skeleton-box-large"></div>
          </div>
          <div class="component-container">
            <KTextArea :style="{ height: '300px' }" :value="textAreaValue" />
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
                :toolbarItems="[promptViewDefaults, outputViewDefaults]"
              >
                <AIPromptView :promptSuggestions="suggestionsList" />
                <AIPromptOutputView :outputs="outputs" />
              </AIPrompt>
            </Popup>
          </div>
        </div>
      </div>
    </div>
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
import { FloatingActionButton } from "@progress/kendo-vue-buttons";
import "./overview-styles.css";

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
    };
  },
  computed: {
    fabIcon() {
      return this.showAIPrompt ? xIcon : sparklesIcon;
    },
  },
  methods: {
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
