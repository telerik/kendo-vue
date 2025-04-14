<template>
  <div>
    <div>
      <TreeView
        :dataItems="treeDataItems"
        :expandIcons="true"
        @expandchange="onExpandChange"
        :ariaMultiselectable="true"
        @itemclick="onItemClick"
        :checkboxes="true"
        @checkchange="onCheckChange"
      />
    </div>
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>

<script>
import {
  TreeView,
  processTreeViewItems,
  handleTreeViewCheckChange,
} from '@progress/kendo-vue-treeview';
import Logger from './Logger.vue';

export default {
  components: {
    TreeView,
    Logger,
  },
  computed: {
    eventsList() {
      return this.events;
    },
    treeDataItems() {
      return processTreeViewItems(this.tree, {
        select: this.select,
        check: this.check,
        expand: this.expand,
      });
    },
  },
  data() {
    return {
      events: [],
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
  methods: {
    onItemClick(event) {
      this.events.unshift('Node ' + event.item.text + ' was selected');
      this.select = [event.itemHierarchicalIndex];
    },
    onExpandChange(event) {
      event.item.expanded !== true
        ? this.events.unshift('Node ' + event.item.text + ' was expanded')
        : this.events.unshift('Node ' + event.item.text + ' was collapsed');
      let ids = this.expand.ids.slice();
      const index = ids.indexOf(event.item.text);
      index === -1 ? ids.push(event.item.text) : ids.splice(index, 1);
      this.expand = {
        ids,
        idField: 'text',
      };
    },
    onCheckChange(event) {
      event.item.checked !== true
        ? this.events.unshift('Node ' + event.item.text + ' was checked')
        : this.events.unshift('Node ' + event.item.text + ' was unchecked');
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
