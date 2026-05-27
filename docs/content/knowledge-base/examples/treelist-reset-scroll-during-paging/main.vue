<template>
  <TreeList
    ref="treelistRef"
    :style="{ height: '430px', overflow: 'auto' }"
    :data-items="state.data"
    :columns="columns"
    :sub-items-field="subItemsField"
    :expand-field="expandField"
    :pageable="true"
    :skip="state.skip"
    :take="state.take"
    @expandchange="onExpandChange"
    @pagechange="onPageChange"
  />
</template>

<script lang="ts">
import { defineComponent, nextTick } from "vue";
import {
  TreeList,
  mapTreeItem,
  extendDataItem,
} from "@progress/kendo-vue-treelist";

const numberOfColumns = 4;
const columnWidth = 200;
const numberOfRows = 5000;
const subItemsField = "subItems";
const expandField = "expanded";

type RowItem = {
  id: number;
  [key: string]: any;
  subItems?: RowItem[];
  expanded?: boolean;
};

const makeRow = (id: number, level: number, maxLevel: number): RowItem => {
  const row: RowItem = { id, expanded: false };
  for (let c = 1; c <= numberOfColumns; c++)
    row[`field_${c}`] = `Row ${id} / Col ${c}`;
  if (level < maxLevel) {
    const childrenCount = 3;
    row[subItemsField] = Array.from({ length: childrenCount }, (_, i) =>
      makeRow(id * 10 + (i + 1), level + 1, maxLevel)
    );
  }
  return row;
};

const buildData = (): RowItem[] => {
  const maxLevel = 3;
  return Array.from({ length: numberOfRows }, (_, i) =>
    makeRow(i + 1, 1, maxLevel)
  );
};

const columns = Array.from({ length: numberOfColumns }, (_, i) => ({
  field: `field_${i + 1}`,
  title: `Column ${i + 1}`,
  width: columnWidth,
}));

export default defineComponent({
  name: "Main",
  components: { TreeList },
  data() {
    return {
      columns,
      subItemsField,
      expandField,
      state: {
        data: buildData(),
        expanded: [] as number[],
        skip: 0,
        take: 20,
      },
    };
  },
  methods: {
    onExpandChange(event: any) {
      const expanded = !event.value;
      const tree = [...this.state.data];
      mapTreeItem(tree, event.level, this.subItemsField, (item: any) =>
        extendDataItem(item, this.subItemsField, {
          [this.expandField]: expanded,
        })
      );
      this.state = {
        ...this.state,
        data: tree,
        expanded: event.value
          ? this.state.expanded.filter((id) => id !== event.dataItem.id)
          : [...this.state.expanded, event.dataItem.id],
      };
    },
    async onPageChange(event: any) {
      const skip = event.skip || 0;
      const take = event.take || 20;
      this.state = { ...this.state, skip, take };
      await nextTick();
      const root = (this.$refs.treelistRef as any)?.$el as
        | HTMLElement
        | undefined;
      const scrollEl =
        root?.querySelector(".k-grid-content") ||
        root?.querySelector(".k-treelist-content") ||
        root;
      if (scrollEl && "scrollTop" in scrollEl)
        (scrollEl as HTMLElement).scrollTop = 0;
    },
  },
});
</script>
