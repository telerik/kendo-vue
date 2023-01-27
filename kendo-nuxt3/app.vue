<template>
   <div>
    <div class="custom-toolbar">
      <kbutton :icon="'menu'" :fill-mode="'flat'" @click="handleClick" />
      <NuxtLink to="/">Home</NuxtLink>
    </div>
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
import { Drawer, DrawerContent } from "@progress/kendo-vue-layout";
import { Button } from "@progress/kendo-vue-buttons";

export default {
  name: "App",
  components: { Drawer, DrawerContent, "kbutton": Button },
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
                  : this.$router.options.routes
                        .filter(r=>r.path.startsWith('/' + currentRootName))
                        .map(t=>{
                          return {
                          text: t.name,
                          selected: t.name === this.$route.name,
                          data: {
                            path: t.path
                          }
                        }});
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
