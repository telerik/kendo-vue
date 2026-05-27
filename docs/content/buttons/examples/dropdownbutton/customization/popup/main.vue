<template>
  <div>
    <DropDownButton
      :popup-settings="popupSettings"
      :items="items"
      text="User Settings"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DropDownButton } from "@progress/kendo-vue-buttons";

const popupSettings = ref({
    animate: false,
    popupClass: "'my-popup'",
});

const items = ref([
    "My Profile",
    "Friend Requests",
    "Account Settings",
    "Support",
    "Log Out",
]);
</script>

<style scoped>
.my-popup {
  font-style: oblique;
}
</style>
