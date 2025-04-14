<template>
  <div>
    <DropDownButton
      :popup-settings="popupSettings"
      :items="items"
      :text="'User Settings'"
    />
  </div>
</template>

<script>
import { DropDownButton } from "@progress/kendo-vue-buttons";

export default {
  components: {
    DropDownButton,
  },
  data: function () {
    return {
      popupSettings: {
        animate: false,
        popupClass: "'my-popup'",
      },
      items: [
        "My Profile",
        "Friend Requests",
        "Account Settings",
        "Support",
        "Log Out",
      ],
    };
  },
};
</script>

<style scoped>
.my-popup {
  font-style: oblique;
}
</style>