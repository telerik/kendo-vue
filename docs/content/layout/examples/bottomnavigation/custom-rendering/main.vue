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
        <template #badge="{ props }">
          <span class="badge">
            <SvgIcon :icon="props.item.svgIcon" :size="'large'"/>
            <Badge :size="'small'">{{ props.item.notifications }}</Badge>
          </span>
        </template>
        <template #floating="{ props }">
          <FloatingActionButton
            :svg-icon="props.item.svgIcon"
            :position-mode="'absolute'"
            :align="{ horizontal: 'center', vertical: 'bottom' }"
            :align-offset="{ y: 20 }"
          />
        </template>
        <template #icon="{ props }">
          <SvgIcon :icon="props.item.svgIcon" :size="'large'"/>
        </template>
      </BottomNavigation>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { SvgIcon } from '@progress/kendo-vue-common';
import { BottomNavigation } from '@progress/kendo-vue-layout';
import { Badge } from '@progress/kendo-vue-indicators';
import { FloatingActionButton } from '@progress/kendo-vue-buttons';
import { heartIcon, homeIcon, plusIcon, searchIcon, userIcon } from '@progress/kendo-svg-icons';

const selected = ref(0);
const items = ref([
    { svgIcon: homeIcon, selected: true, notifications: 2, item: 'badge' },
    { svgIcon: searchIcon, item: 'icon' },
    { svgIcon: plusIcon, item: 'floating' },
    { svgIcon: heartIcon, notifications: 5, item: 'badge' },
    { svgIcon: userIcon, item: 'icon' },
]);

const computedItems = computed(() =>
    items.value.map((item, index) => ({
        ...item,
        selected: index === selected.value,
    }))
);

function onSelect(e) {
    selected.value = e.itemIndex;
}
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
  background: #f9f9f9;
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
