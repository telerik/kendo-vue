<template>
  <TabStrip :selected="selected" @select="onSelect" :tabs="tabs">
    <template v-slot:Paris>
      Paris is the capital and most populous city of France.
    </template>
    <template v-slot:titleRender="{ props }">
      <Title :content="props.title" @tabRemove="(e) => onTabRemove(e)" />
    </template>
    <template v-slot:NewYork>
      The City of New York, often called New York City or simply New York, is
      the most populous city in the United States.
    </template>
    <template v-slot:Tallin>
      Tallinn is the capital and largest city of Estonia.
    </template>
  </TabStrip>
</template>

<script>
import { TabStrip } from '@progress/kendo-vue-layout';
import Title from './Title.vue';

export default {
  components: {
    TabStrip,
    Title,
  },
  data: function () {
    return {
      selected: 0,
      tabs: [
        {
          title: 'Paris',
          content: 'Paris',
          titleRender: 'titleRender',
        },
        {
          title: 'New York City',
          content: 'NewYork',
          titleRender: 'titleRender',
        },
        {
          title: 'Tallinn',
          content: 'Tallin',
          titleRender: 'titleRender',
        },
      ],
    };
  },
  methods: {
    onSelect: function (e) {
      this.selected = e.selected;
    },
    onTabRemove: function (tab) {
      const newTabs = this.tabs.filter((item) => {
        return item.title !== tab;
      });
      this.tabs = newTabs;
    },
  },
};
</script>
