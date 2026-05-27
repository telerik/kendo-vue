<template>
  <AutoComplete
    :opened="true"
    :data-items="groupedData"
    :text-field="textField"
    :group-field="'position'"
    placeholder="Please select ..."
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
        @click="(ev) => props.onClick(ev)"
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
  </AutoComplete>
</template>

<script setup>
import { AutoComplete } from "@progress/kendo-vue-dropdowns";
import ItemRender from "./ItemRender.vue";
import GroupHeaderItemRender from "./GroupHeaderItemRender.vue";
import StickyHeaderRender from "./StickyHeaderRender.vue";
import { groupBy } from "@progress/kendo-data-query";
import { employees } from "./grouping-data.js";

const textField = "name";
const groupedData = groupBy(employees, [{ field: "position" }]).reduce(
    (res, group) => [...res, ...group.items],
    []
);
</script>
