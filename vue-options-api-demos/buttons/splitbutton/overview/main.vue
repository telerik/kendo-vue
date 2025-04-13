<template>
  <div>
    <div class="col-xs-12 col-sm-6 example-col">
      <p>Default Button</p>
      <splitbutton :text="'Paste'" :items="items" />
    </div>
    <div class="col-xs-12 col-sm-6 example-col">
      <p>Flat Button</p>
      <splitbutton :text="'Paste'" :items="items" :fill-mode="'flat'" />
    </div>
    <div class="col-xs-12 col-sm-6 example-col">
      <p>Outline Button</p>
      <splitbutton :text="'Paste'" :items="items" :fill-mode="'outline'" />
    </div>
  </div>
</template>

<script>
import { SplitButton } from "@progress/kendo-vue-buttons";
import {
  clipboardTextIcon,
  clipboardHtmlIcon,
  clipboardMarkdownIcon,
} from "@progress/kendo-svg-icons";

export default {
  components: {
    splitbutton: SplitButton,
  },
  data: function () {
    return {
      items: [
        {
          text: "Keep Text Only",
          svgIcon: clipboardTextIcon,
        },
        {
          text: "Paste as HTML",
          svgIcon: clipboardHtmlIcon,
        },
        {
          text: "Paste Markdown",
          svgIcon: clipboardMarkdownIcon,
        },
        {
          text: "Set Default Paste",
        },
      ],
    };
  },
};
</script>
