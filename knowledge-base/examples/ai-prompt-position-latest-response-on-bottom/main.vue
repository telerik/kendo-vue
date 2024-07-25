<template>
  <AIPrompt
    :activeView="activeView"
    @activeviewchange="handleActiveViewChange"
    @promptrequest="handleOnRequest"
    :toolbarItems="[
      promptViewDefaults,
      outputViewDefaults,
      commandsViewDefaults,
    ]"
  >
    <AIPromptView />
    <AIPromptOutputView :outputs="outputs" :showOutputRating="true" />
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
} from '@progress/kendo-vue-conversational-ui';
import { spellCheckerIcon, tellAFriendIcon } from '@progress/kendo-svg-icons';

export default {
  components: {
    AIPrompt,
    AIPromptCommandsView,
    AIPromptOutputView,
    AIPromptView,
    AIPromptViewRender,
  },
  data: function () {
    return {
      commandsViewDefaults,
      outputViewDefaults,
      promptViewDefaults,
      activeView: 'commands-view',
      outputs: [],
      command: undefined,
      commands: [
        {
          id: '1',
          title: 'Correct Spelling and grammar',
          svgIcon: spellCheckerIcon,
        },
        {
          id: '2',
          title: 'Change Tone',
          svgIcon: tellAFriendIcon,
          items: [
            { id: '3', title: 'Professional' },
            { id: '4', title: 'Conversational' },
            { id: '5', title: 'Humorous' },
            { id: '6', title: 'Empathic' },
            { id: '7', title: 'Academic' },
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
      } else {
        this.outputs.push({
          id: this.outputs.length + 1,
          title: 'Title',
          subTitle: `Request ${this.outputs.length + 1}`,
          responseContent: `Response to ${prompt} Iteration: ${this.outputs.length}`,
          prompt,
          command: this.command,
        });
        this.activeView = outputViewDefaults.name;
        this.command = undefined;
      }
    },
    handleActiveViewChange(viewName) {
      this.activeView = viewName;
    },
  },
};
</script>