<template>
  <div>
    <splitbutton :text="'Paste'" :items="items" :text-field="'actionName'">
    </splitbutton>
  </div>
</template>

<script>
import { SplitButton } from "@progress/kendo-vue-buttons";
import {
  clipboardTextIcon,
  clipboardHtmlIcon,
  clipboardMarkdownIcon,
  copyIcon,
} from "@progress/kendo-svg-icons";

export default {
  components: {
    splitbutton: SplitButton,
  },
  data: function () {
    return {
      items: [
        {
          actionName: "Keep Text Only",
          svgIcon: clipboardTextIcon,
        },
        {
          actionName: "Paste as HTML",
          svgIcon: clipboardHtmlIcon,
          disabled: true,
        },
        {
          actionName: "Paste Markdown",
          svgIcon: clipboardMarkdownIcon,
        },
        {
          actionName: "Set Default Paste",
          svgIcon: copyIcon,
        },
      ],
    };
  },
};
</script>
