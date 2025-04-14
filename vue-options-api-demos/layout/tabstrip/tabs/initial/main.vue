<template>
  <TabStrip :selected="selected" @select="onSelect" :tabs="tabs">
    <template v-slot:TabOne>
      <p>Tab 1 Content</p>
    </template>
    <template v-slot:TabTwo>
      <p>Tab 2 Content</p>
    </template>
    <template v-slot:TabThree>
      <p>Tab 3 Content</p>
    </template>
  </TabStrip>
</template>

<script>
import { TabStrip } from '@progress/kendo-vue-layout';

export default {
  components: {
    TabStrip,
  },
  data: function () {
    return {
      selected: 2,
      tabs: [
        {
          title: 'Tab 1 Title',
          content: 'TabOne',
        },
        {
          title: 'Tab 2 Title',
          content: 'TabTwo',
        },
        {
          title: 'Tab 3 Title',
          content: 'TabThree',
        },
      ],
    };
  },
  methods: {
    onSelect: function (e) {
      this.selected = e.selected;
    },
  },
};
</script>
