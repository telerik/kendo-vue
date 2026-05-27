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
        :position-mode="'sticky'"
        :item-flow="itemFlow"
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
import { calendarIcon, envelopeIcon, userIcon } from '@progress/kendo-svg-icons';

const itemFlow = ref('vertical');
const selected = ref(0);
const contentTypes = ref([
    { label: 'Horizontal', value: 'vertical' },
    { label: 'Vertical', value: 'horizontal' },
]);

const items = ref([
    { text: 'Inbox', id: 1, svgIcon: envelopeIcon, selected: true },
    { text: 'Calendar', id: 2, svgIcon: calendarIcon },
    { text: 'Profile', id: 3, svgIcon: userIcon },
]);

const computedItems = computed(() =>
    items.value.map((item, index) => ({
        ...item,
        selected: index === selected.value,
    }))
);

function onSelect(ev) {
    selected.value = ev.itemIndex;
}
</script>

<style>
.content-item-flow {
  line-height: 200px;
  text-align: center;
  vertical-align: middle;
}
</style>
