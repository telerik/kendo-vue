<template>
  <div class="app-shell">
    <Header @toggle-navigation="navigationOpen = !navigationOpen" />
    <div class="app-body">
      <MenuNavContainer :open="navigationOpen" @navigate="navigationOpen = false" />
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
    return { navigationOpen: false };
  },
};
</script>
