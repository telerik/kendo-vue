<template>
  <div>
    <TreeView
      :dataItems="tree1"
      :draggable="true"
      @itemdragover="onItemDragOver"
      @itemdragend="onItemDragEnd"
      :expandIcons="true"
      @expandchange="onExpandChange"
      @itemclick="onItemClick"
      :id="'firstTree'"
    />
    <hr />
    <TreeView
      :dataItems="tree2"
      :draggable="true"
      @itemdragover="onItemDragOver"
      @itemdragend="onItemDragEnd"
      :expandIcons="true"
      @expandchange="onExpandChange"
      @itemclick="onItemClick"
      :id="'secondTree'"
    />
    <TreeViewDragClue ref="dragClue" />
  </div>
</template>

<script>
import {
  TreeView,
  TreeViewDragClue,
  processTreeViewItems,
  moveTreeViewItem,
  TreeViewDragAnalyzer,
} from "@progress/kendo-vue-treeview";
import {
  plusIcon,
  insertTopIcon,
  insertMiddleIcon,
  insertBottomIcon,
  cancelIcon,
} from "@progress/kendo-svg-icons";

function getSiblings(itemIndex, data) {
  let result = data;
  const indices = itemIndex.split(SEPARATOR).map((index) => Number(index));
  for (let i = 0; i < indices.length - 1; i++) {
    result = result[indices[i]].items;
  }
  return result;
}
const SEPARATOR = "_";
export default {
  components: {
    TreeView,
    TreeViewDragClue,
  },
  created() {
    this.dragOverCnt = 0;
    this.isDragDrop = false;
  },
  data() {
    return {
      expand: {
        ids: [],
        idField: "text",
      },
      selected: {
        ids: [],
        idField: "text",
      },
      tree1: [
        {
          text: "Furniture",
          expanded: true,
          items: [
            { text: "Tables & Chairs" },
            { text: "Sofas" },
            { text: "Occasional Furniture" },
          ],
        },
        {
          text: "Decor",
          expanded: true,
          items: [
            { text: "Bed Linen" },
            { text: "Curtains & Blinds" },
            { text: "Carpets" },
          ],
        },
      ],
      tree2: [
        {
          text: "Storage",
          expanded: true,
          items: [
            { text: "Wall Shelving" },
            { text: "Floor Shelving" },
            { text: "Kids Storage" },
          ],
        },
        {
          text: "Lights",
          expanded: true,
          items: [{ text: "Ceiling" }, { text: "Table" }, { text: "Floor" }],
        },
      ],
    };
  },
  computed: {
    dataItems() {
      return processTreeViewItems(this.tree, {
        expand: this.expand,
        select: this.selected,
      });
    },
  },
  methods: {
    onItemDragOver(event) {
      this.dragOverCnt++;
      this.$refs.dragClue.show(
        event.pageY + 10,
        event.pageX,
        event.item.text,
        this.getClueIcon(event)
      );
    },
    onItemDragEnd(event) {
      this.isDragDrop = this.dragOverCnt > 0;
      this.dragOverCnt = 0;
      this.$refs.dragClue.hide();
      const eventAnalyzer = new TreeViewDragAnalyzer(event).init();
      if (eventAnalyzer.isDropAllowed) {
        const { sourceData, targetData } = moveTreeViewItem(
          event.itemHierarchicalIndex,
          this.resolveData(event.target.guid()),
          eventAnalyzer.getDropOperation(),
          eventAnalyzer.destinationMeta.itemHierarchicalIndex,
          this.resolveData(eventAnalyzer.destinationMeta.treeViewGuid)
        );

        (this[this.resolveDataKey(event.target.guid())] = sourceData),
          (this[
            this.resolveDataKey(eventAnalyzer.destinationMeta.treeViewGuid)
          ] = targetData);
      }
    },
    onItemClick(event) {
      if (!this.isDragDrop) {
        event.item.selected = !event.item.selected;
      }
    },
    onExpandChange(event) {
      event.item.expanded = !event.item.expanded;
    },
    getClueIcon(event) {
      const eventAnalyzer = new TreeViewDragAnalyzer(event).init();
      const { itemHierarchicalIndex: itemIndex, treeViewGuid } =
        eventAnalyzer.destinationMeta;
      if (eventAnalyzer.isDropAllowed) {
        switch (eventAnalyzer.getDropOperation()) {
          case "child":
            return plusIcon;
          case "before":
            return itemIndex === "0" || itemIndex.endsWith(`${SEPARATOR}0`)
              ? insertTopIcon
              : insertMiddleIcon;
          case "after":
            const siblings = getSiblings(
              itemIndex,
              this.resolveData(treeViewGuid)
            );
            const lastIndex = Number(itemIndex.split(SEPARATOR).pop());
            return lastIndex < siblings.length - 1
              ? insertMiddleIcon
              : insertBottomIcon;
          default:
            break;
        }
      }
      return cancelIcon;
    },
    resolveData(treeViewGuid) {
      return treeViewGuid === "firstTree" ? this.tree1 : this.tree2;
    },
    resolveDataKey(treeViewGuid) {
      return treeViewGuid === "firstTree" ? "tree1" : "tree2";
    },
  },
};
</script>
