<template>
  <div class="row menu">
    <div class="col-xs-3 bg-inverse text-white py-5 k-vbox" :style="{ 'background-color': '#252830', width: '312px' }">
      <div id="nav" v-if="this.$route.path.toLowerCase() !== '/signin'" :class="{ expand: navState }">
        <span id="nav-toggle" class="nav-toggle d-md-none" @click="navState = !navState">
          <span class="k-icon k-i-hamburger"></span>
        </span>
        <h1 id="app-title">Issues</h1>
        <p id="app-subtitle">Sample Dashboard</p>
        <hr />
        <div class="nav nav-pills flex-column">

          <Drawer :expanded="expanded" :position="position" :width="300" :mode="mode" :items="
            items.map((item, index) => ({
              ...item,
              selected: index === selectedId,
            }))
          " @select="onSelect">

          </Drawer>
        </div>
      </div>
      <div id="nav">

        <hr class="k-flex" />
        <div id="copy">
          <p>Copyright &copy; {{ year }},<br /><a href="http://www.progress.com">Progress Software Corporation</a>
            and/or
            its
            subsidiaries or affiliates.</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <DrawerContent>
        <router-view />
      </DrawerContent>
    </div>
  </div>
</template>

<script>
import { Drawer, DrawerContent } from "@progress/kendo-vue-layout";

export default {
  name: "App",
  components: { Drawer, DrawerContent },
  mounted() {
    this.$router.push(this.items[0].data);
  },
  data() {
    return {
      year: '2022',
      items: [
        {
          text: "Dashboard",
          selected: true,
          data: {
            path: "/",
          },
        },
        {
          text: "Issues",
          data: {
            path: "/issues",
          },
        },
        {
          text: "Profile",
          data: {
            path: "/profile",
          },
        },
        {
          text: "Sign In",
          data: {
            path: "/signin",
          },
        },
      ],
      expanded: true,
      selectedId: 0,
      position: "start",
      mode: "push",
    };
  },
  methods: {
    onSelect(e) {
      this.selectedId = e.itemIndex;
      this.$router.push(this.items[e.itemIndex].data);
    },
  },
};
</script>

<style>
#nav>div>div>div {
  background-color: transparent;
}

#nav ul > li.k-drawer-item.k-selected {
  color: #111;
  background-color: #1ca8dd;
}
</style>
