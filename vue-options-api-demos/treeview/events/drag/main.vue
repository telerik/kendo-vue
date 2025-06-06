<template>
  <div>
    <div>
      <TreeView
        :draggable="true"
        @itemdragover="onItemDragOver"
        @itemdragend="onItemDragEnd"
        @itemdragstart="onItemDragStart"
        :dataItems="dataItems"
        :expandIcons="true"
        @expandchange="onExpandChange"
        @itemclick="onItemClick"
      />
      <TreeViewDragClue ref="dragClue" />
    </div>
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>

<script>
import {
  TreeView,
  TreeViewDragClue,
  processTreeViewItems,
  moveTreeViewItem,
  TreeViewDragAnalyzer,
} from '@progress/kendo-vue-treeview';
import {
  plusIcon,
  insertTopIcon,
  insertMiddleIcon,
  insertBottomIcon,
  cancelIcon,
} from '@progress/kendo-svg-icons';
import Logger from './Logger.vue';

function getSiblings(itemIndex, data) {
  let result = data;
  const indices = itemIndex.split(SEPARATOR).map((index) => Number(index));
  for (let i = 0; i < indices.length - 1; i++) {
    result = result[indices[i]].items || [];
  }
  return result;
}

const SEPARATOR = '_';

export default {
  components: {
    TreeView,
    TreeViewDragClue,
    Logger,
  },
  created() {
    this.dragOverCnt = 0;
    this.isDragDrop = false;
  },
  computed: {
    eventsList() {
      return this.events;
    },
    dataItems() {
      return processTreeViewItems(this.tree, {
        expand: this.expand,
        select: this.selected,
      });
    },
  },
  data() {
    return {
      events: [],
      expand: {
        ids: [],
        idField: 'text',
      },
      selected: {
        ids: [],
        idField: 'text',
      },
      tree: [
        {
          text: 'Furniture',
          expanded: true,
          items: [
            {
              text: 'Tables & Chairs',
            },
            {
              text: 'Sofas',
            },
            {
              text: 'Occasional Furniture',
            },
          ],
        },
        {
          text: 'Decor',
          expanded: true,
          items: [
            {
              text: 'Bed Linen',
            },
            {
              text: 'Curtains & Blinds',
            },
            {
              text: 'Carpets',
            },
          ],
        },
      ],
    };
  },
  methods: {
    getClueIcon(event) {
      const eventAnalyzer = new TreeViewDragAnalyzer(event).init();
      const { itemHierarchicalIndex: itemIndex } =
        eventAnalyzer.destinationMeta;
      if (eventAnalyzer.isDropAllowed) {
        switch (eventAnalyzer.getDropOperation()) {
          case 'child':
            return plusIcon;
          case 'before':
            return itemIndex === '0' || itemIndex.endsWith(`${SEPARATOR}0`)
              ? insertTopIcon
              : insertMiddleIcon;
          case 'after':
            const siblings = getSiblings(itemIndex, this.tree);
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
    onItemDragOver(event) {
      this.events.unshift(
        'The dragOver event of Node ' + event.item.text + ' was triggered'
      );
      this.dragOverCnt++;
      this.$refs.dragClue.show(
        event.pageY + 10,
        event.pageX,
        event.item.text,
        this.getClueIcon(event)
      );
    },
    onItemDragStart(event) {
      this.events.unshift(
        'The drag of Node ' + event.item.text + ' has started'
      );
    },
    onItemDragEnd(event) {
      this.isDragDrop = this.dragOverCnt > 0;
      this.dragOverCnt = 0;
      this.$refs.dragClue.hide();
      const eventAnalyzer = new TreeViewDragAnalyzer(event).init();
      if (eventAnalyzer.isDropAllowed) {
        const updatedTree = moveTreeViewItem(
          event.itemHierarchicalIndex,
          this.tree,
          eventAnalyzer.getDropOperation() || 'child',
          eventAnalyzer.destinationMeta.itemHierarchicalIndex
        );
        this.tree = updatedTree;
      }
      this.events.unshift('The drag of Node ' + event.item.text + ' has ended');
    },
    onItemClick(event) {
      if (!this.isDragDrop) {
        let ids = this.selected.ids.slice();
        const index = ids.indexOf(event.item.text);
        index === -1 ? ids.push(event.item.text) : ids.splice(index, 1);
        this.selected = {
          ids,
          idField: 'text',
        };
      }
    },
    onExpandChange(event) {
      event.item.expanded = !event.item.expanded;
    },
  },
};
</script>
