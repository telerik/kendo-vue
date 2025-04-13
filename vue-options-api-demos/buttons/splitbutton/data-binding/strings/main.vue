<template>
  <div>
    <splitbutton :items="items" :text="'Save'" />
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
      items: ["Save as", "Upload to drive"],
    };
  },
};
</script>