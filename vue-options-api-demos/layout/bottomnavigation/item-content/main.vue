<template>
  <div class="border-demo">
    <div class="page">
      <div class="example-config">
        <legend>Item content settings</legend>
        <RadioGroup
          :data-items="contentTypes"
          v-model="itemContent"
          :layout="'horizontal'"
        />
      </div>
      <p class="content-item" v-if="selected === 0">Inbox Content</p>
      <p class="content-item" v-if="selected === 1">Calendar Content</p>
      <p class="content-item" v-if="selected === 2">Profile Content</p>
      <p class="content-item" v-if="selected === 3">More Content</p>
      <BottomNavigation
        :positionMode="'sticky'"
        :items="computedItems"
        @select="onSelect"
      />
    </div>
  </div>
</template>
<script>
import { BottomNavigation } from "@progress/kendo-vue-layout";
import { RadioGroup } from "@progress/kendo-vue-inputs";
import {
  cameraIcon,
  folderIcon,
  searchIcon,
  moreHorizontalIcon,
} from "@progress/kendo-svg-icons";
export default {
  components: {
    BottomNavigation,
    RadioGroup,
  },
  computed: {
    computedItems() {
      return this.content.map(({ text, ...rest }, index) =>
        this.itemContent === "Icon"
          ? {
              ...rest,
              selected: index === this.selected,
            }
          : {
              text,
              ...rest,
              selected: index === this.selected,
            }
      );
    },
  },
  data() {
    return {
      contentTypes: [
        {
          label: "Icon & Text",
          value: "Icon & Text",
        },
        {
          label: "Icon",
          value: "Icon",
        },
      ],
      itemContent: "Icon & Text",
      selected: 0,
      content: [
        {
          text: "Photos",
          svgIcon: cameraIcon,
          selected: true,
        },
        {
          text: "Albums",
          svgIcon: folderIcon,
        },
        {
          text: "Search",
          svgIcon: searchIcon,
        },
        {
          text: "More",
          svgIcon: moreHorizontalIcon,
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
.content-item {
  line-height: 200px;
  text-align: center;
  vertical-align: middle;
}
</style>
