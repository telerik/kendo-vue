<template>
  <div>
    <splitbutton :items="items" :text="'Enabled Button'" /> &nbsp;
    <splitbutton :disabled="true" :items="items" :text="'Disabled Button'" />
  </div>
</template>

<script>
import { SplitButton } from "@progress/kendo-vue-buttons";

export default {
  components: {
    splitbutton: SplitButton,
  },
  data: function () {
    return {
      items: ["Item1", "Item2", "Item3"],
    };
  },
};
</script>
