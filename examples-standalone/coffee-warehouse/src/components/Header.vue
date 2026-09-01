<template>
  <header class="app-header" :style="{ '--app-header-background-image': `url(${headerBg})` }">
    <div class="header-start">
      <button ref="menuButton" class="menu-toggle" type="button" :aria-label="navigationOpen ? 'Close navigation menu' : 'Open navigation menu'" aria-controls="primary-navigation" :aria-expanded="navigationOpen" @click="$emit('toggle-navigation')">
        <SvgIcon :icon="menuIcon" :size="'small'" aria-hidden="true" />
      </button>
      <router-link class="brand" to="/">
        <span class="brand-mark">CW</span>
        <span>Coffee Warehouse</span>
      </router-link>
    </div>
    <div class="header-search-region">
      <input class="global-search" type="search" aria-label="Search warehouse records" placeholder="Search orders, inventory, suppliers" />
    </div>
    <div class="header-actions">
      <router-link class="notification-link" to="/notifications" aria-label="Notifications: 3 unread">
        <SvgIcon :icon="bellIcon" :size="'small'" aria-hidden="true" />
        <span class="notification-label">Notifications</span> <Badge class="notification-count" theme-color="error" :rounded="'full'" aria-hidden="true">3</Badge>
      </router-link>
      <router-link class="profile-link" to="/profile">
        <Avatar :rounded="'full'" :type="'image'" :style="{ width: '32px', height: '32px' }">
          <img src="../assets/images/user.jpg" alt="Peter Douglas" />
        </Avatar>
        <span>Peter Douglas</span>
      </router-link>
      <span class="locale" aria-label="Current language: English">
        <span>EN</span><SvgIcon :icon="chevronDownIcon" :size="'small'" aria-hidden="true" />
      </span>
    </div>
  </header>
</template>

<script>
import { Avatar } from "@progress/kendo-vue-layout";
import { SvgIcon } from "@progress/kendo-vue-common";
import { Badge } from "@progress/kendo-vue-indicators";
import { bellIcon, chevronDownIcon, menuIcon } from "@progress/kendo-svg-icons";
import headerBg from "../assets/images/header-bg.png";

export default {
  components: { Avatar, Badge, SvgIcon },
  props: { navigationOpen: Boolean },
  emits: ["toggle-navigation"],
  data() {
    return { bellIcon, chevronDownIcon, headerBg, menuIcon };
  },
  methods: {
    focusMenu() {
      this.$refs.menuButton?.focus();
    },
  },
};
</script>
