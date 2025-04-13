<template>
  <div class="border-demo">
    <div class="custom-toolbar">
      <kbutton :svg-icon="menuIcon" :fill-mode="'flat'" @click="handleClick" />
      <span class="title">Mail Box</span>
    </div>
    <Drawer
      :expanded="expanded"
      :position="position"
      :mode="mode"
      :items="
        items.map((item, index) => ({
          ...item,
          selected: index === selectedId,
        }))
      "
      @select="onSelect"
      :navigation-header="'headerTemplate'"
      :navigation-footer="'footerTemplate'"
    >
      <template v-slot:headerTemplate="{ props }">
        <div class="custom-header">Header Content</div>
      </template>
      <template v-slot:footerTemplate="{ props }">
        <div class="custom-footer">
          Footer Content
        </div>
      </template>
      <DrawerContent>
        <router-view />
      </DrawerContent>
    </Drawer>
  </div>
</template>

<script>
import { Drawer, DrawerContent } from '@progress/kendo-vue-layout';
import { Button } from '@progress/kendo-vue-buttons';
import { menuIcon } from '@progress/kendo-svg-icons';

export default {
  name: 'App',
  components: { Drawer, DrawerContent, kbutton: Button },
  mounted() {
    this.$router.push(this.items[0].data);
  },
  data() {
    return {
      menuIcon,
      items: [
        {
          text: 'Inbox',
          selected: true,
          data: {
            path: '/layout/drawer/templates/header-footer/inbox',
          },
        },
        {
          separator: true,
        },
        {
          text: 'Notifications',
          data: {
            path: '/layout/drawer/templates/header-footer/notifications',
          },
        },
        {
          text: 'Calendar',
          data: {
            path: '/layout/drawer/templates/header-footer/calendar',
          },
        },
        {
          separator: true,
        },
        {
          text: 'Attachments',
          data: {
            path: '/layout/drawer/templates/header-footer/attachments',
          },
        },
        {
          text: 'Favourites',
          data: {
            path: '/layout/drawer/templates/header-footer/favourites',
          },
        },
      ],
      expanded: false,
      selectedId: 0,
      position: 'start',
      mode: 'push',
    };
  },
  methods: {
    onSelect(e) {
      this.selectedId = e.itemIndex;
      this.$router.push(this.items[e.itemIndex].data);
      this.expanded = !this.expanded;
    },
    handleClick() {
      this.expanded = !this.expanded;
    },
  },
};
</script>

<style scoped>
@import './styles.css';
</style>
