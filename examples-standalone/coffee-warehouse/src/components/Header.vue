<template>
  <header class="app-header" :style="{ '--app-header-background-image': `url(${headerBg})` }">
    <div class="header-start">
      <button ref="menuButton" class="menu-toggle" type="button" :aria-label="navigationOpen ? 'Close navigation menu' : 'Open navigation menu'" aria-controls="primary-navigation" :aria-expanded="navigationOpen" @click="$emit('toggle-navigation')">
        <SvgIcon :icon="menuIcon" :size="'small'" aria-hidden="true" />
      </button>
      <router-link class="brand" to="/">
        <span class="brand-mark">CW</span>
        <span>{{ translate("warehouse", "Coffee Warehouse") }}</span>
      </router-link>
    </div>
    <div class="header-search-region">
      <input class="global-search" type="search" :aria-label="translate('searchRecords', 'Search warehouse records')" :placeholder="translate('searchPlaceholder', 'Search orders, inventory, suppliers')" />
    </div>
    <div class="header-actions">
      <router-link class="notification-link" to="/notifications" aria-label="Notifications: 3 unread">
        <SvgIcon :icon="bellIcon" :size="'small'" aria-hidden="true" />
        <span class="notification-label">{{ translate("notifications", "Notifications") }}</span> <Badge class="notification-count" theme-color="error" :rounded="'full'" aria-hidden="true">3</Badge>
      </router-link>
      <router-link class="profile-link" to="/profile">
        <Avatar :rounded="'full'" :type="'image'" :style="{ width: '32px', height: '32px' }">
          <img src="../assets/images/user.jpg" alt="Peter Douglas" />
        </Avatar>
        <span>Peter Douglas</span>
      </router-link>
      <select class="locale" :value="currentLocale" :aria-label="translate('language', 'Language')" @change="$emit('locale-change', $event.target.value)">
        <option value="English">EN</option>
        <option value="French">FR</option>
        <option value="Spanish">ES</option>
      </select>
    </div>
  </header>
</template>

<script>
import { Avatar } from "@progress/kendo-vue-layout";
import { SvgIcon } from "@progress/kendo-vue-common";
import { Badge } from "@progress/kendo-vue-indicators";
import { provideLocalizationService } from "@progress/kendo-vue-intl";
import { bellIcon, menuIcon } from "@progress/kendo-svg-icons";
import headerBg from "../assets/images/header-bg.png";

export default {
  components: { Avatar, Badge, SvgIcon },
  props: { navigationOpen: Boolean, currentLocale: { type: String, required: true } },
  emits: ["toggle-navigation", "locale-change"],
  inject: { kendoLocalizationService: { default: null } },
  data() {
    return { bellIcon, headerBg, menuIcon };
  },
  methods: {
    translate(key, fallback) {
      return provideLocalizationService(this).toLanguageString(key, fallback);
    },
    focusMenu() {
      this.$refs.menuButton?.focus();
    },
  },
};
</script>
