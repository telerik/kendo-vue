<template>
  <div style="display:flex">
    <div class="panelbar-wrapper-routing">
      <PanelBar :items="items" @select="onSelect" />
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import { PanelBar } from '@progress/kendo-vue-layout';

export default {
  name: 'App',
  components: { PanelBar },
  mounted() {
    this.$router.push(this.items[0].data);
  },
  data() {
    return {
      items: [
        {
          title: 'Home',
          data: {
            path: '/layout/panelbar/routing/home',
          },
        },
        {
          title: 'Products',
          data: {
            path: '/layout/panelbar/routing/products',
          },
        },
        {
          title: 'About',
          data: {
            path: '/layout/panelbar/routing/about',
          },
          items: [
            {
              title: 'Team',
              data: {
                path: '/layout/panelbar/routing/about/team',
              },
            },
          ],
        },
      ],
    };
  },
  methods: {
    onSelect(e) {
      this.$router.push(e.target.data);
    },
  },
};
</script>

<style>
.panelbar-wrapper-routing {
    min-width: 180px;
    max-width: 300px;
    margin-right: 15px;
}
</style>
