<template>
  <div>
    <h1 :class="'title-basic-usage-bottomnav k-color-primary'">My Profile</h1>
    <div :class="'list'">
      <Avatar
        :class="'profile-image'"
        :type="'image'"
        :shape="'circle'"
        :rounded="'full'"
      >
        <img
          :src="kendokaAvatar"
          :alt="'Kendo Logo'" />
        />
      </Avatar>
      <div :class="'email centered'">myusername@mail.com</div>
      <div :class="'list-item separator-basic-usage-bottomnav'" />
      <div :class="'list-item sub-title-basic-usage-bottomnav'">Calendars</div>
      <div :class="'list-item'">
        <Avatar
          :type="'text'"
          :shape="'circle'"
          :theme-color="'primary'"
          :size="'small'"
        />
        <div>Work</div>
        <span :class="'k-icon k-i-saturation my-icon'" />
      </div>
      <div :class="'list-item'">
        <Avatar
          :type="'text'"
          :shape="'circle'"
          :themeColor="'info'"
          :size="'small'"
        />
        <div>Family</div>
        <span :class="'k-icon k-i-saturation my-icon'" />
      </div>
      <div :class="'list-item'">
        <Avatar
          :type="'text'"
          :shape="'circle'"
          :theme-color="'warning'"
          :size="'small'"
        />
        <div>Birthdays</div>
        <span :class="'k-icon k-i-saturation my-icon'" />
      </div>
    </div>
  </div>
</template>
<script>
import { Avatar } from "@progress/kendo-vue-layout";

let kendokaAvatar = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/suite/kendoka-vue.webp';

export default {
  components: {
    Avatar,
  },
  data() {
    return {
      text: "More",
      kendokaAvatar
    };
  },
};
</script>
