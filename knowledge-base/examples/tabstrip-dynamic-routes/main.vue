<template>
    <TabStrip
      :selected="selected"
      :animation="false"
      @select="onSelect"
      :tabs="tabs"
    >
      <template #content>
        <RouterView v-slot="slotProps">
          <Component :is="slotProps.Component" />
        </RouterView>
      </template>
    </TabStrip>
  </template>
  
  <script>
  import { ref, watchEffect } from 'vue';
  import { TabStrip } from '@progress/kendo-vue-layout';
  import { RouterView, useRouter, useRoute } from 'vue-router';
  
  export default {
    components: {
      TabStrip,
      RouterView,
    },
    setup() {
      const route = useRoute();
      const router = useRouter();
      const selected = ref(0);
      const tabs = [
        {
          title: 'Tab 1',
          content: 'content',
          pathName: 'Tab1',
        },
        {
          title: 'Tab 2',
          content: 'content',
          pathName: 'Tab2',
        },
      ];
      watchEffect(() => {
        selected.value = tabs.findIndex((tab) => tab.pathName === route.name);
      });
      function onSelect(event) {
        router.push({
          name: tabs[event.selected].pathName,
        });
      }
  
      return {
        selected,
        tabs,
        onSelect,
      };
    },
  };
  </script>
  