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
        :position-mode="'sticky'"
        :items="computedItems"
        @select="onSelect"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { BottomNavigation } from '@progress/kendo-vue-layout';
import { RadioGroup } from '@progress/kendo-vue-inputs';
import {
    cameraIcon,
    folderIcon,
    searchIcon,
    moreHorizontalIcon,
} from '@progress/kendo-svg-icons';

const itemContent = ref('Icon & Text');
const selected = ref(0);
const contentTypes = ref([
    { label: 'Icon & Text', value: 'Icon & Text' },
    { label: 'Icon', value: 'Icon' },
]);

const content = ref([
    { text: 'Photos', svgIcon: cameraIcon, selected: true },
    { text: 'Albums', svgIcon: folderIcon },
    { text: 'Search', svgIcon: searchIcon },
    { text: 'More', svgIcon: moreHorizontalIcon },
]);

const computedItems = computed(() =>
    content.value.map(({ text, ...rest }, index) =>
        itemContent.value === 'Icon'
            ? { ...rest, selected: index === selected.value }
            : { text, ...rest, selected: index === selected.value }
    )
);

function onSelect(ev) {
    selected.value = ev.itemIndex;
}
</script>

<style>
.content-item {
  line-height: 200px;
  text-align: center;
  vertical-align: middle;
}
</style>
