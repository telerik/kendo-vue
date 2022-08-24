<template>
  <link rel="stylesheet" :href="themeLink" />
  <div id="app" class="app">
    <MenuComponent @theme-change="onThemeChange" />
  </div>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue'


export default {
  components: {
    MenuComponent
  },
  data() {
    return {
      currentTheme: "kendo-theme-default"
    }
  },
  methods: {
    onThemeChange(value) {
      this.currentTheme = value;
    }
  },
  computed: {
    themeLink() {
      return "https://unpkg.com/@progress/" + this.currentTheme + "@latest/dist/all.css"
    }
  }
}
</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
