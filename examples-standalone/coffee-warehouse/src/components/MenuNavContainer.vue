<template>
  <aside id="primary-navigation" ref="sidebar" class="sidebar" :class="{ 'sidebar-open': open }" :aria-hidden="!open && isMobileViewport">
    <nav v-if="!isMobileViewport || open" aria-label="Primary navigation" :inert="isMobileViewport && !open">
      <p class="nav-label">{{ translate("warehouseSection", "Warehouse") }}</p>
      <router-link v-for="item in items" :key="item.to" class="nav-item" active-class="nav-item-active" exact-active-class="nav-item-active" :to="item.to" @click="$emit('navigate')">
        <SvgIcon class="nav-item-icon" :icon="item.icon" :size="'small'" aria-hidden="true" />
        <span>{{ translate(item.key, item.label) }}</span>
      </router-link>
    </nav>
  </aside>
</template>

<script>
import { SvgIcon } from "@progress/kendo-vue-common";
import { provideLocalizationService } from "@progress/kendo-vue-intl";
import {
  dashboardIcon,
  infoCircleIcon,
  userIcon,
  usersIcon,
} from "@progress/kendo-svg-icons";

export default {
  components: { SvgIcon },
  props: { open: Boolean },
  emits: ["navigate"],
  inject: { kendoLocalizationService: { default: null } },
  data() {
    return {
      isMobileViewport: typeof window !== "undefined" && window.innerWidth < 768,
      items: [
        { key: "teamMembers", label: "Team Members", to: "/", icon: usersIcon },
        { key: "dashboard", label: "Dashboard", to: "/dashboard", icon: dashboardIcon },
        { key: "profile", label: "Profile", to: "/profile", icon: userIcon },
        { key: "info", label: "Info", to: "/info", icon: infoCircleIcon },
      ],
    };
  },
  mounted() {
    window.addEventListener("resize", this.updateViewport);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateViewport);
  },
  methods: {
    translate(key, fallback) {
      return provideLocalizationService(this).toLanguageString(key, fallback);
    },
    updateViewport() {
      this.isMobileViewport = window.innerWidth < 768;
    },
    focusFirstItem() {
      this.$refs.sidebar?.querySelector(".nav-item")?.focus();
    },
  },
};
</script>
