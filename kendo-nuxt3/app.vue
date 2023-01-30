<template>
  <div>
    <AppBar>
        <AppBarSection>
          <kbutton :icon="'menu'" :fill-mode="'flat'" @click="handleClick" />
        </AppBarSection>
        <AppBarSpacer :width="4" />
        <AppBarSection>
          <NuxtLink to="/">Home</NuxtLink>
        </AppBarSection>
    </AppBar>
    <Drawer
      :expanded="expanded"
      :position="position"
      :mode="mode"
      :items="items"
      @select="onSelect"
    >
      <DrawerContent>
        <NuxtPage />
      </DrawerContent>
    </Drawer>
  </div>

</template>
<script>
import { Drawer, DrawerContent, AppBar, AppBarSection, AppBarSpacer } from "@progress/kendo-vue-layout";
import { Button } from "@progress/kendo-vue-buttons";

export default {
  name: "App",
  components: { Drawer, DrawerContent, "kbutton": Button,
  AppBar, AppBarSection, AppBarSpacer },
  mounted() {
    this.$router.push(this.items[0].data);
  },
  computed: {
    items() {
      const splitName = this.$route.name.split('-')
      const currentRootName = splitName[0];
      const rootroutes = this.$route.name === 'index' 
                  ? this.$router.options.routes
                        .filter(r=>r.path.split('/').length === 2)
                        .map(t=>{
                          return {
                          text: t.name,
                          selected: t.name === this.$route.name,
                          data: {
                            path: t.path
                          }
                        }})
                  : [
                      {
                        text: 'Go Back',
                        data: {
                          path: '/'
                        }
                      },
                      ...this.$router.options.routes
                          .filter(r=> {
                            return r.path.startsWith('/' + currentRootName) && r.path.endsWith('main')
                          })
                          .map(t=>{
                            return {
                            text: t.name.split('-main')[0],
                            selected: t.name === this.$route.name,
                            data: {
                              path: t.path
                            }
                          }})
                    ];
      return rootroutes;
    }
  },
  data() {
  
    return {
      expanded: true,
      position: "start",
      mode: "push",
    };
  },
  methods: {
    onSelect(e) {
      this.$router.push(this.items[e.itemIndex].data);
    },
    handleClick() {
      this.expanded = !this.expanded;
    },
  },
};
</script>
