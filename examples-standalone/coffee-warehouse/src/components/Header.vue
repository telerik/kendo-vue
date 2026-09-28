<template>
  <header class="app-header" :style="{ '--app-header-background-image': `url(${headerBg})` }">
    <div class="header-start">
      <button ref="menuButton" class="menu-toggle" type="button" :aria-label="navigationOpen ? 'Close navigation menu' : 'Open navigation menu'" aria-controls="primary-navigation" :aria-expanded="navigationOpen" @click="$emit('toggle-navigation')">
        <SvgIcon :icon="menuIcon" :size="'small'" aria-hidden="true" />
      </button>
      <router-link class="brand" to="/" :aria-label="translate('warehouse', 'Coffee Warehouse')">
        <span class="brand-full">{{ translate("warehouse", "Coffee Warehouse") }}</span>
        <span class="brand-short">{{ translate("warehouseShort", "Coffee") }}</span>
      </router-link>
    </div>
    <div class="header-actions">
      <DropDownList
        class="locale-picker"
        :data-items="locales"
        text-field="language"
        data-item-key="language"
        :value="selectedLocale"
        :aria-label="translate('language', 'Language')"
        @change="$emit('locale-change', $event.value.language)"
      />
      <router-link class="profile-link" to="/profile">
        <Avatar :rounded="'full'" :type="'image'" :style="{ width: '32px', height: '32px' }">
          <img src="../assets/images/user.jpg" alt="Peter Douglas" />
        </Avatar>
        <span>Peter Douglas</span>
      </router-link>
    </div>
  </header>
</template>

<script>
import { Avatar } from "@progress/kendo-vue-layout";
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import { SvgIcon } from "@progress/kendo-vue-common";
import { provideLocalizationService } from "@progress/kendo-vue-intl";
import { menuIcon } from "@progress/kendo-svg-icons";
import headerBg from "../assets/images/header-bg.png";

export default {
  components: { Avatar, DropDownList, SvgIcon },
  props: { navigationOpen: Boolean, currentLocale: { type: String, required: true } },
  emits: ["toggle-navigation", "locale-change"],
  inject: { kendoLocalizationService: { default: null } },
  data() {
    return {
      headerBg,
      menuIcon,
      locales: [{ language: "English" }, { language: "French" }, { language: "Spanish" }],
    };
  },
  computed: {
    selectedLocale() {
      return this.locales.find((locale) => locale.language === this.currentLocale);
    },
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
