<template>
  <div>
     <div class="col-xs-12 col-sm-6 example-col">
      <p>Default Button</p>
      <dropdownbutton :text="'Paste'" :items="items" />
    </div>
    <div class="col-xs-12 col-sm-6 example-col">
      <p>Default Button</p>
      <splitbutton :text="'Paste'" :items="items" />
    </div>
    <div class="col-xs-12 col-sm-6 example-col">
      <p>Flat Button</p>
      <splitbutton :text="'Paste'" :items="items" :look="'flat'" />
    </div>
    <div class="col-xs-12 col-sm-6 example-col">
      <p>Outline Button</p>
      <splitbutton :text="'Paste'" :items="items" :look="'outline'" />
    </div>
  </div>
</template>

<script>
import { SplitButton, DropDownButton } from "@progress/kendo-vue-buttons";

export default {
  components: {
    dropdownbutton: DropDownButton,
    splitbutton: SplitButton,
  },
  data: function () {
    return {
      items: [
        {
          text: "Keep Text Only",
          icon: "paste-plain-text",
        },
        {
          text: "Paste as HTML",
          icon: "paste-as-html",
        },
        {
          text: "Paste Markdown",
          icon: "paste-markdown",
        },
        {
          text: "Set Default Paste",
        },
      ],
    };
  },
};
</script>