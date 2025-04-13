<template>
    <splitbutton
      :popup-settings="popupSettings"
      :items="items"
      :text="'Reply'"
    />
</template>

<script>
import { SplitButton } from "@progress/kendo-vue-buttons";

export default {
  components: {
    splitbutton: SplitButton,
  },
  data: function () {
    return {
      items: ["Reply All", "Forward", "Reply & Delete"],
      popupSettings: {
        animate: false,
        popupClass: "my-popup",
      },
    };
  },
};
</script>

<style scoped>
.my-popup {
  font-style: oblique;
}
</style>
