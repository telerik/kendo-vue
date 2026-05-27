<template>
  <SplitButton
    :popup-settings="popupSettings"
    :items="items"
    :text="'Reply'"
  />
</template>

<script setup>
import { SplitButton } from "@progress/kendo-vue-buttons";
import { ref } from "vue";

const items = ref(["Reply All", "Forward", "Reply & Delete"]);
const popupSettings = ref({
    animate: false,
    popupClass: "my-popup",
});
</script>

<style scoped>
.my-popup {
  font-style: oblique;
}
</style>
