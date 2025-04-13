<template>
  <div :class="'example-wrapper'">
    <div :class="'page'">
      <div :class="'content'">
        <router-view />
      </div>
      <BottomNavigation :position-mode="'sticky'" :items="computedItems" @select="onSelect" />
    </div>
  </div>
</template>

<script>
import { dollarIcon, fileTxtIcon, gearIcon, homeIcon, moreHorizontalIcon } from "@progress/kendo-svg-icons";
import { BottomNavigation } from "@progress/kendo-vue-layout";

export default {
  name: "App",
  components: { BottomNavigation },
  mounted() {
    this.$router.push(this.items[0].data);
  },
  data() {
    return {
      items: [
        {
          text: "Home",
          id: 1,
          svgIcon: homeIcon,
          data: {
            path: "/layout/bottomnavigation/routing/home",
          },
          selected: true,
        },
        {
          text: "Bills",
          id: 2,
          svgIcon: fileTxtIcon,
          data: {
            path: "/layout/bottomnavigation/routing/bills",
          },
        },
        {
          text: "Payments",
          id: 3,
          svgIcon: dollarIcon,
          data: {
            path: "/layout/bottomnavigation/routing/payments",
          },
        },
        {
          text: "Services",
          id: 3,
          svgIcon: gearIcon,
          data: {
            path: "/layout/bottomnavigation/routing/services",
          },
        },
        {
          text: "More",
          id: 3,
          svgIcon: moreHorizontalIcon,
          data: {
            path: "/layout/bottomnavigation/routing/more",
          },
        },
      ],
      selected: 0,
    };
  },
  computed: {
    computedItems() {
      return this.items.map((item, index) => ({
        ...item,
        selected: index === this.selected,
      }));
    },
  },
  methods: {
    onSelect(e) {
      this.selected = e.itemIndex;
      this.$router.push(e.itemTarget.data.path);
    },
  },
};
</script>

<style scoped>
.example-wrapper {
  width: 750px;
  margin: 0 auto;
  box-shadow: 0px 10px 20px #00000029;
  border-radius: 30px;
}

.page {
  padding: 10px 10px 0 10px;
}

.content {
  background: #F9F9F9;
  border-radius: 30px 30px 0 0;
  height: 350px;
  text-align: center;
}

.k-bottom-nav {
  border-radius: 0 0 20px 20px;
}

.title {
  text-align: center;
  font-size: 30px;
  padding: 40px 0;
}
</style>
