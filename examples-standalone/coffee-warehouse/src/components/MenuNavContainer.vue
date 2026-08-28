<template>
  <aside id="primary-navigation" ref="sidebar" class="sidebar" :class="{ 'sidebar-open': open }" :aria-hidden="!open && isMobileViewport">
    <nav v-if="!isMobileViewport || open" aria-label="Primary navigation" :inert="isMobileViewport && !open">
      <p class="nav-label">Warehouse</p>
      <router-link v-for="item in warehouseItems" :key="item.to" class="nav-item" active-class="nav-item-active" exact-active-class="nav-item-active" :to="item.to" @click="$emit('navigate')">
        <SvgIcon class="nav-item-icon" :icon="item.icon" :size="'small'" aria-hidden="true" />
        <span>{{ item.label }}</span>
      </router-link>
      <p class="nav-label">Operations</p>
      <router-link v-for="item in operationItems" :key="item.to" class="nav-item" active-class="nav-item-active" exact-active-class="nav-item-active" :to="item.to" @click="$emit('navigate')">
        <SvgIcon class="nav-item-icon" :icon="item.icon" :size="'small'" aria-hidden="true" />
        <span>{{ item.label }}</span>
      </router-link>
      <p class="nav-label">Account</p>
      <router-link v-for="item in accountItems" :key="item.to" class="nav-item" active-class="nav-item-active" exact-active-class="nav-item-active" :to="item.to" @click="$emit('navigate')">
        <SvgIcon class="nav-item-icon" :icon="item.icon" :size="'small'" aria-hidden="true" />
        <span>{{ item.label }}</span>
      </router-link>
    </nav>
  </aside>
</template>

<script>
import { SvgIcon } from "@progress/kendo-vue-common";
import {
  bellIcon,
  buildingsIcon,
  calendarIcon,
  chartBarClusteredIcon,
  clipboardIcon,
  dashboardIcon,
  gearIcon,
  gearsIcon,
  infoCircleIcon,
  packageIcon,
  questionCircleIcon,
  truckIcon,
  userIcon,
  usersIcon,
} from "@progress/kendo-svg-icons";

export default {
  components: { SvgIcon },
  props: { open: Boolean },
  emits: ["navigate"],
  data() {
    return {
      isMobileViewport: typeof window !== "undefined" && window.innerWidth < 768,
      warehouseItems: [
        { label: "Dashboard", to: "/", icon: dashboardIcon },
        { label: "Inventory", to: "/inventory", icon: packageIcon },
        { label: "Purchase orders", to: "/purchase-orders", icon: clipboardIcon },
        { label: "Sales orders", to: "/sales-orders", icon: truckIcon },
        { label: "Suppliers", to: "/suppliers", icon: buildingsIcon },
        { label: "Team Members", to: "/team", icon: usersIcon },
        { label: "Info", to: "/info", icon: infoCircleIcon },
      ],
      operationItems: [
        { label: "Planning", to: "/planning", icon: calendarIcon },
        { label: "Warehouse operations", to: "/operations", icon: packageIcon },
        { label: "Assets", to: "/assets", icon: gearIcon },
        { label: "Manufacturing", to: "/manufacturing", icon: gearsIcon },
        { label: "Financial reporting", to: "/finance", icon: chartBarClusteredIcon },
      ],
      accountItems: [
        { label: "Notifications", to: "/notifications", icon: bellIcon },
        { label: "Profile", to: "/profile", icon: userIcon },
        { label: "Settings", to: "/settings", icon: gearIcon },
        { label: "Help & Support", to: "/help", icon: questionCircleIcon },
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
    updateViewport() {
      this.isMobileViewport = window.innerWidth < 768;
    },
    focusFirstItem() {
      this.$refs.sidebar?.querySelector(".nav-item")?.focus();
    },
  },
};
</script>
