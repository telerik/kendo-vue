<template>
  <div class="example-wrapper">
    <div class="page">
      <div class="content">
        <h3 class="title k-color-primary">Custom Item Demo</h3>
      </div>
      <BottomNavigation
        :position-mode="'sticky'"
        :items="computedItems"
        @select="onSelect"
      >
        <template v-slot:badge="{ props }">
          <span class="badge">
            <span :class="`k-icon k-i-${props.item.icon}`" />
            <Badge :size="'small'">{{ props.item.notifications }} </Badge>
          </span>
        </template>
        <template v-slot:floating="{ props }">
          <FloatingActionButton
            :icon="props.item.icon"
            :position-mode="'absolute'"
            :align="{ horizontal: 'center', vertical: 'bottom' }"
            :align-offset="{ y: 20 }"
          />
        </template>
        <template v-slot:icon="{ props }">
          <span :class="`k-icon k-i-${props.item.icon}`" />
        </template>
      </BottomNavigation>
    </div>
  </div>
</template>

<script>
import { BottomNavigation } from "@progress/kendo-vue-layout";
import { Badge } from "@progress/kendo-vue-indicators";
import { FloatingActionButton } from "@progress/kendo-vue-buttons";
import { heartIcon, homeIcon, plusIcon, searchIcon, userIcon } from "@progress/kendo-svg-icons";

export default {
  name: "App",
  components: { BottomNavigation, Badge, FloatingActionButton },
  data() {
    return {
      items: [
        { svgIcon: homeIcon, selected: true, notifications: 2, item: "badge" },
        { svgIcon: searchIcon, item: "icon" },
        { svgIcon: plusIcon, item: "floating" },
        { svgIcon: heartIcon, notifications: 5, item: "badge" },
        { svgIcon: userIcon, item: "icon" },
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

<style>
.badge {
  position: relative;
  overflow: visible;
}
.example-wrapper {
  width: 380px;
  margin: 0 auto;
  box-shadow: 0px 10px 20px #00000029;
  border-radius: 30px;
}

.page {
  padding: 10px 10px 0 10px;
}

.content {
  background: #F9F9F9;
  border-radius: 30px 30px 0 0;
  height: 550px;
}

.k-bottom-nav {
  border-radius: 0 0 20px 20px;
  overflow: visible;
}

.k-bottom-nav-item {
  min-width: 40px;
}

.title {
  text-align: center;
  font-size: 30px;
  padding: 40px 0;
}
</style>
