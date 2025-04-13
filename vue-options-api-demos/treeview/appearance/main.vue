<template>
  <div>
    <StyleConfigurator :size="size" @sizechange="setSize" />

    <TreeView
      :size="size"
      :dataItems="treeDataItems"
      :expandIcons="true"
      @expandchange="onExpandChange"
      :ariaMultiselectable="true"
      @itemclick="onItemClick"
      :checkboxes="true"
      @checkchange="onCheckChange"
    />
  </div>
</template>

<script>
import {
  TreeView,
  processTreeViewItems,
  handleTreeViewCheckChange,
} from '@progress/kendo-vue-treeview';
import StyleConfigurator from './StyleConfigurator.vue';

export default {
  components: {
    TreeView,
    StyleConfigurator,
  },
  data() {
    return {
      size: 'medium',
      tree: [
        {
          text: 'Furniture',
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
      check: [],
      expand: {
        ids: ['Item2'],
        idField: 'text',
      },
      select: [''],
    };
  },
  computed: {
    treeDataItems() {
      return processTreeViewItems(this.tree, {
        select: this.select,
        check: this.check,
        expand: this.expand,
      });
    },
  },
  methods: {
    setSize(event) {
      this.size = event.value;
    },
    onItemClick(event) {
      this.select = [event.itemHierarchicalIndex];
    },
    onExpandChange(event) {
      let ids = this.expand.ids.slice();
      const index = ids.indexOf(event.item.text);
      index === -1 ? ids.push(event.item.text) : ids.splice(index, 1);
      this.expand = {
        ids,
        idField: 'text',
      };
    },
    onCheckChange(event) {
      const settings = {
        singleMode: false,
        checkChildren: false,
        checkParents: false,
      };
      this.check = handleTreeViewCheckChange(
        event,
        this.check,
        this.tree,
        settings
      );
    },
  },
};
</script>
