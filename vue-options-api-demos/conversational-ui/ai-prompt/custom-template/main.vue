<template>
  <AIPrompt
    style="width: 550px"
    :activeView="activeView"
    @activeviewchange="handleActiveViewChange"
    @promptrequest="handleOnRequest"
    @commandexecute="handleCommandExecute"
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
    <template v-slot:custom="{ props }">
      <span class="k-spacer"></span>
      <Button :svgIcon="starIcon" @click="handleCustomClick"
        >Custom LLM Response</Button
      >
    </template>
    <template v-slot:joke="{ props }">
      <Button :svgIcon="dribbbleIcon" @click="handleJokeClick">Joke</Button>
    </template>
    <AIPromptView />
    <AIPromptOutputView :outputs="outputs" :showOutputRating="true" />
    <AIPromptCommandsView :commands="commands" />
    <AIPromptViewRender :name="'custom-view'">
      <AIPromptContent>
        🌟 Here are the results returned from our internal LLM. These results
        could be more acurate than what you got from the default LLM.
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
<script>
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
} from "@progress/kendo-vue-conversational-ui";
import {
  spellCheckerIcon,
  tellAFriendIcon,
  starIcon,
  dribbbleIcon,
} from "@progress/kendo-svg-icons";
import { Button } from "@progress/kendo-vue-buttons";

export default {
  components: {
    AIPrompt,
    AIPromptCommandsView,
    AIPromptOutputView,
    AIPromptView,
    AIPromptViewRender,
    AIPromptContent,
    Button,
  },
  data: function () {
    return {
      starIcon,
      dribbbleIcon,
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
  methods: {
    handleOnRequest(prompt, outputItem) {
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
    },
    handleCommandExecute(commandData) {
      this.command = commandData;
      this.activeView = promptViewDefaults.name;
    },
    handleCustomClick() {
      this.activeView = "custom-view";
    },
    handleJokeClick() {
      this.activeView = "joke";
    },
  },
};
</script>
