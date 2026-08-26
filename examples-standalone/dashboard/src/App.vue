<template>
  <RouterView v-if="isStandalone" />
  <MenuComponent v-else />
</template>

<script>
import MenuComponent from './components/MenuComponent.vue';

export default {
  components: { MenuComponent },
  computed: {
    isStandalone() {
      return ['Login', 'Register', 'NotFound'].includes(this.$route.name);
    }
  }
};
</script>
