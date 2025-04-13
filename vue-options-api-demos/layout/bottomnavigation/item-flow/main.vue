<template>
  <div class="border-demo">
    <div class="page">
      <div class="example-config">
        <legend>Item flow settings</legend>
        <RadioGroup
          :data-items="contentTypes"
          v-model="itemFlow"
          :layout="'horizontal'"
        />
      </div>
      <p class="content-item-flow" v-if="selected === 0">Inbox Content</p>
      <p class="content-item-flow" v-if="selected === 1">Calendar Content</p>
      <p class="content-item-flow" v-if="selected === 2">Profile Content</p>
      <BottomNavigation
        :positionMode="'sticky'"
        :itemFlow="itemFlow"
        :items="computedItems"
        @select="onSelect"
      />
    </div>
  </div>
</template>
<script>
import { BottomNavigation } from '@progress/kendo-vue-layout';
import { RadioGroup } from '@progress/kendo-vue-inputs';
import { calendarIcon, envelopIcon, userIcon } from '@progress/kendo-svg-icons';

export default {
  components: {
    BottomNavigation,
    RadioGroup,
  },
  computed: {
    computedItems() {
      return this.items.map((item, index) => ({
        ...item,
        selected: index === this.selected,
      }));
    },
  },
  data() {
    return {
      contentTypes: [
        {
          label: 'Horizontal',
          value: 'vertical',
        },
        {
          label: 'Vertical',
          value: 'horizontal',
        },
      ],
      itemFlow: 'vertical',
      selected: 0,
      items: [
        {
          text: 'Inbox',
          id: 1,
          svgIcon: envelopIcon,
          selected: true,
        },
        {
          text: 'Calendar',
          id: 2,
          svgIcon: calendarIcon,
        },
        {
          text: 'Profile',
          id: 3,
          svgIcon: userIcon,
        },
      ],
    };
  },
  methods: {
    onSelect(ev) {
      this.selected = ev.itemIndex;
    },
  },
};
</script>
<style>
.content-item-flow {
  line-height: 200px;
  text-align: center;
  vertical-align: middle;
}
</style>
