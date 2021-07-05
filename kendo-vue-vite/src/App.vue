<template>
    <div id="root">
      <div class="content">
          <nav-header :project-name="'Kendo UI for Vue in a Vite project'" />
          <router-view></router-view>
    </div>
    <div class="footer">
      <nav-footer />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    'nav-header': Header,
    'nav-footer': Footer
  }
}

</script>
<style>
@import './assets/styles/app.css';
</style>