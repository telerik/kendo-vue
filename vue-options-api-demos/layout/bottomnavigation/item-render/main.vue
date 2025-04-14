<template>
  <div>
    <BottomNavigation
      :position-mode="'sticky'"
      :items="computedItems"
      :fill="'solid'"
      :theme-color="'light'"
      :item="'itemTemplate'"
      @select="onSelect"
    >
      <template v-slot:itemTemplate="{ props }">
        <span :style="{ 'text-align': 'center', 'text-decoration': 'none' }">
          <span
            role="presentation"
            :class="`k-icon k-i-${props.item.icon}`"
          ></span>
          <div>{{ props.item.text }}</div>
        </span>
      </template>
    </BottomNavigation>
  </div>
</template>

<script>
import { homeIcon, heartIcon, searchIcon, userIcon } from "@progress/kendo-svg-icons";
import { BottomNavigation } from "@progress/kendo-vue-layout";

export default {
  name: "App",
  components: { BottomNavigation },
  data() {
    return {
      items: [
        { svgIcon: homeIcon, text: "Home" },
        { svgIcon: searchIcon, text: "Search" },
        { svgIcon: heartIcon, text: "Favorites" },
        { svgIcon: userIcon, text: "Profile" },
      ],
      selected: 0,
    };
  },
  computed: {
    computedItems() {
      return this.items.map((item, index) => ({
        ...item,
        selected: index === this.selected,
      }));
    },
  },
  methods: {
    onSelect(e) {
      this.selected = e.itemIndex;
    },
  },
};
</script>
