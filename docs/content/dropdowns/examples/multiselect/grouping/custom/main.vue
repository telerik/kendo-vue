<template>
  <MultiSelect
    :data-items="groupedData"
    :text-field="textField"
    :group-field="'position'"
    :style="{ width: '300px' }"
    :itemRender="'myCustomItem'"
    :groupHeaderItemRender="'myGroupHeaderItemRender'"
    :groupStickyHeaderItemRender="'myStickyHeaderRender'"
  >
    <template #myCustomItem="{ props }">
      <ItemRender
        :style="props.style"
        :class="props.itemClass"
        :data-item="props.dataItem"
        :focused="props.focused"
        :index="props.index"
        :text-field="textField"
        @click="props.onClick"
      />
    </template>
    <template #myGroupHeaderItemRender="{ props }">
      <GroupHeaderItemRender
        :id="props.id"
        :group="props.group"
        :index="props.index"
      />
    </template>
    <template #myStickyHeaderRender="{ props }">
      <StickyHeaderRender :group="props.group" />
    </template>
  </MultiSelect>
</template>

<script setup>
import { ref } from 'vue';
import { MultiSelect } from '@progress/kendo-vue-dropdowns';
import ItemRender from './ItemRender.vue';
import GroupHeaderItemRender from './GroupHeaderItemRender.vue';
import StickyHeaderRender from './StickyHeaderRender.vue';
import { groupBy } from '@progress/kendo-data-query';
import { employees } from './grouping-data.js';

const textField = ref('name');
const groupedData = ref(
    groupBy(employees, [{ field: 'position' }]).reduce(
        (res, group) => [...res, ...group.items],
        []
    )
);
</script>
