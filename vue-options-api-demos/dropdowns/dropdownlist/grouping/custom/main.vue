<template>
  <DropDownList
    :data-items="groupedData"
    :text-field="textField"
    :group-field="'position'"
    :style="{
      width: '300px',
    }"
    :itemRender="'myCustomItem'"
    :groupHeaderItemRender="'myGroupHeaderItemRender'"
    :groupStickyHeaderItemRender="'myStickyHeaderRender'"
  >
    <template v-slot:myCustomItem="{ props }">
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
    <template v-slot:myGroupHeaderItemRender="{ props }">
      <GroupHeaderItemRender
        :id="props.id"
        :group="props.group"
        :index="props.index"
      />
    </template>
    <template v-slot:myStickyHeaderRender="{ props }">
      <StickyHeaderRender :group="props.group" />
    </template>
  </DropDownList>
</template>
<script>
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import ItemRender from "./ItemRender.vue";
import GroupHeaderItemRender from "./GroupHeaderItemRender.vue";
import StickyHeaderRender from "./StickyHeaderRender.vue";
import { groupBy } from "@progress/kendo-data-query";
import { employees } from "./grouping-data.js";

export default {
  components: {
    DropDownList,
    ItemRender,
    GroupHeaderItemRender,
    StickyHeaderRender,
    DropDownList
},
  data() {
    return {
      textField: "name",
      groupedData: groupBy(employees, [{ field: "position" }]).reduce(
        (res, group) => [...res, ...group.items],
        []
      ),
    };
  },
};
</script>
