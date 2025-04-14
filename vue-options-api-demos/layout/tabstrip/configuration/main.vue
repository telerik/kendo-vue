<template>
  <TabStrip :selected="selected" @select="onSelect" :tabs="tabs">
    <template v-slot:Paris>
      Paris is the capital and most populous city of France.</template>
    <template v-slot:NewYork>
      The City of New York, often called New York City or simply New York, is
      the most populous city in the United States.</template>
    <template v-slot:Tallin>
      Tallinn is the capital and largest city of Estonia.</template>
  </TabStrip>
</template>

<script>
import { TabStrip } from '@progress/kendo-vue-layout';

const initialTabs = [
  {
    title: 'Paris',
    content: 'Paris',
  },
  {
    title: 'NewYork',
    content: 'NewYork',
  },
  {
    title: 'Tallinn',
    content: 'Tallin',
  },
];

export default {
  components: {
    TabStrip
  },
  data: function () {
    return {
      selected: 0,
      tabs: initialTabs,
    };
  },
  methods: {
    onSelect: function (e) {
      this.selected = e.selected;
    },
  },
};
</script>
