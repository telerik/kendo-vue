<template>
  <div class="app-shell">
    <Header ref="header" :navigation-open="navigationOpen" @toggle-navigation="toggleNavigation" />
    <div class="app-body">
      <MenuNavContainer ref="sidebar" :open="navigationOpen" @navigate="closeNavigation" />
      <button v-if="navigationOpen" class="nav-backdrop" type="button" aria-label="Close navigation menu" tabindex="-1" @click="closeNavigation"></button>
      <main class="app-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MenuNavContainer from "./components/MenuNavContainer.vue";

export default {
  components: { Header, MenuNavContainer },
  data() {
    return { navigationOpen: false, navigationTrigger: null };
  },
  mounted() {
    window.addEventListener("keydown", this.handleNavigationKeydown);
    window.addEventListener("resize", this.handleViewportChange);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleNavigationKeydown);
    window.removeEventListener("resize", this.handleViewportChange);
    document.body.style.overflow = "";
  },
  watch: {
    navigationOpen(open) {
      document.body.style.overflow = open && this.isMobileViewport() ? "hidden" : "";
      if (open) {
        this.$nextTick(() => this.$refs.sidebar?.focusFirstItem());
      }
    },
  },
  methods: {
    isMobileViewport() {
      return window.innerWidth < 768;
    },
    handleViewportChange() {
      if (!this.isMobileViewport() && this.navigationOpen) {
        this.navigationOpen = false;
      }
    },
    toggleNavigation() {
      if (this.navigationOpen) {
        this.closeNavigation();
        return;
      }
      this.navigationTrigger = document.activeElement;
      this.navigationOpen = true;
    },
    closeNavigation() {
      if (!this.navigationOpen) return;
      this.navigationOpen = false;
      this.$nextTick(() => {
        if (this.navigationTrigger?.isConnected) {
          this.navigationTrigger.focus();
        } else {
          this.$refs.header?.focusMenu();
        }
        this.navigationTrigger = null;
      });
    },
    handleNavigationKeydown(event) {
      if (!this.navigationOpen || !this.isMobileViewport()) return;
      if (event.key === "Escape") {
        event.preventDefault();
        this.closeNavigation();
        return;
      }
      if (event.key !== "Tab") return;
      const links = Array.from(this.$refs.sidebar?.$el.querySelectorAll(".nav-item") || []);
      if (!links.length) return;
      const first = links[0];
      const last = links[links.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
  },
};
</script>
