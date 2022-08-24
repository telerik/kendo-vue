<template>
  <div class="row menu">
    <div v-if="this.$route.path.toLowerCase() !== '/signin'" class="col-3 bg-inverse text-white py-5 k-vbox"
      :style="{ 'background-color': '#252830', width: '311px', justifyContent: 'space-between' }">
      <div id="nav">
        <div style="margin-bottom:50px">
          <div id="app-title">Change theme:</div>
          <DropDownList :style="{ width: '230px' }" :data-items="themes" :text-field="'text'" :data-item-key="'value'"
            :value="themeValue" @change="onThemeChange">
          </DropDownList>
        </div>
        <h1 id="app-title">Issues</h1>
        <p id="app-subtitle">Sample Dashboard</p>
        <hr />
        <div class="nav nav-pills flex-column">
          <Drawer ref="drawer" :expanded="expanded" :position="position" :width="300" :mode="mode" :items="
            items.map((item, index) => ({
              ...item,
              selected: index === selectedId,
            }))
          " @select="onSelect">

          </Drawer>
        </div>

      </div>
      <div id="nav">
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
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import { Drawer, DrawerContent } from "@progress/kendo-vue-layout";

export default {
  name: "App",
  components: { Drawer, DrawerContent, DropDownList },
  mounted() {
    this.$router.push(this.items[0].data);
  },
  data() {
    return {
      themeValue: {
        text: "Kendo Theme Default",
        value: "kendo-theme-default"
      },
      year: '2022',
      themes: [{
        text: "Kendo Theme Default",
        value: "kendo-theme-default"
      }, {
        text: "Kendo Theme Bootstrap",
        value: "kendo-theme-bootstrap"
      }, {
        text: "Kendo Theme Material",
        value: "kendo-theme-material"
      }],
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
      position: "start",
      mode: "push",
    };
  },
  emits: ['themeChange'],
  methods: {
    onSelect(e) {
      this.$router.push(this.items[e.itemIndex].data);
    },
    onThemeChange(e) {
      this.themeValue = e.value;
      this.$emit("themeChange", this.themeValue.value)
    }
  },
  computed: {
    selectedId() {
      return this.items.map((item) => item.data.path).indexOf(this.$route.path.toLowerCase());
    }
  }
};
</script>

<style>
#nav>div>div>div {
  background-color: transparent;
}

#nav ul>li.k-drawer-item.k-selected {
  color: #111;
  background-color: #1ca8dd;
}
</style>
