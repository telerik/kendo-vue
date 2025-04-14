<template>
  <AIPrompt
    :activeView="activeView"
    @activeviewchange="handleActiveViewChange"
    @promptrequest="handleOnRequest"
    @commandexecute="handleCommandExecute"
    :toolbarItems="[
      promptViewDefaults,
      outputViewDefaults,
      commandsViewDefaults,
    ]"
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
<script>
import {
  AIPrompt,
  AIPromptCommandsView,
  AIPromptOutputView,
  AIPromptView,
  commandsViewDefaults,
  outputViewDefaults,
  promptViewDefaults,
} from "@progress/kendo-vue-conversational-ui";
import { spellCheckerIcon, tellAFriendIcon } from "@progress/kendo-svg-icons";
import Logger from "./Logger.vue";

export default {
  components: {
    AIPrompt,
    AIPromptCommandsView,
    AIPromptOutputView,
    AIPromptView,
    Logger,
  },
  data: function () {
    return {
      events: [],
      commandsViewDefaults,
      outputViewDefaults,
      promptViewDefaults,
      activeView: promptViewDefaults.name,
      outputs: [],
      command: undefined,
      commands: [
        {
          id: "1",
          title: "Correct Spelling and grammar",
          svgIcon: spellCheckerIcon,
        },
        {
          id: "2",
          title: "Change Tone",
          svgIcon: tellAFriendIcon,
          items: [
            { id: "3", title: "Professional" },
            { id: "4", title: "Conversational" },
            { id: "5", title: "Humorous" },
            { id: "6", title: "Empathic" },
            { id: "7", title: "Academic" },
          ],
        },
      ],
    };
  },
  computed: {
    eventsList() {
      return this.events;
    },
  },
  methods: {
    handleOnRequest(prompt, outputItem) {
      this.events.unshift("Prompt request sent: " + prompt);

      if (!prompt) {
        return;
      }

      if (outputItem?.ratingType) {
        console.log("ratingType", outputItem?.ratingType);
      } else {
        this.outputs = [
          ...this.outputs,
          {
            id: this.outputs.length + 1,
            title: "Title",
            subTitle: `Request ${this.outputs.length + 1}`,
            responseContent: `Response content ${prompt + this.outputs.length}`,
            prompt,
            command: this.command,
          },
        ];
        this.activeView = outputViewDefaults.name;
        this.command = undefined;
      }
    },
    handleActiveViewChange(viewName) {
      this.activeView = viewName;
      this.events.unshift("Active view changed to: " + viewName);
    },
    handleCommandExecute(commandData) {
      this.command = commandData;
      this.activeView = promptViewDefaults.name;
      this.events.unshift("'" + commandData.title + "' command executed");
    },
    handleCopy(params) {
      this.events.unshift("Content copied: " + params);
    },
    handleRetry(params) {
      this.events.unshift(
        "Prompt retry with the following parameters was triggered " +
          JSON.stringify(params)
      );
    },
    handleRating(params, rating) {
      this.events.unshift("Rating received: " + rating);
    },
  },
};
</script>
