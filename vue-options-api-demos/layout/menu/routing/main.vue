<template>
  <kendo-menu :items="items" @select="onSelect" />
  <router-view />
</template>

<script>
import { Menu } from "@progress/kendo-vue-layout";

export default {
  name: "App",
  components: { "kendo-menu": Menu },
  mounted () {
     this.$router.push(this.items[0].data);
  },
  data() {
    return {
      items: [
        {
          text: "Home",
          data: {
            path: "/layout/menu/routing/home",
          },
        },
        {
          text: "Products",
          data: {
            path: "/layout/menu/routing/products",
          },
        },
        {
          text: "About",
          data: {
            path: "/layout/menu/routing/about",
          },
          items: [
            {
              text: "Team",
              data: {
                path: "/layout/menu/routing/about/team",
              },
            },
          ],
        },
      ],
    };
  },
  methods: {
    onSelect(e) {
      this.$router.push(e.item.data);
    },
  },
};
</script>

<style>
</style>
