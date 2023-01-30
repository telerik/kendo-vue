<template>
    <div>
      <h4>Please select a node in the TreeView</h4>
      <span>Currently selected node: </span>
      <b>{{ currentPath }}</b>
      <br />
      <br />
      <br />
      <TreeView
        :dataItems="treeDataItems"
        :expandIcons="true"
        @expandchange="onExpandChange"
        :ariaMultiselectable="true"
        @itemclick="onItemClick"
        :item="'item'"
      >
        <template v-slot:item="{ props }">
          <span>
            <span :class="'k-icon k-i-star'" key="0" />
            {{ props.item.text }}
          </span>
        </template>
      </TreeView>
    </div>
  </template>
  
  <script>
  import {
    TreeView,
    processTreeViewItems,
    handleTreeViewCheckChange,
  } from '@progress/kendo-vue-treeview';
  
  export default {
    components: {
      TreeView,
    },
    data() {
      return {
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
                items: [
                  {
                    text: 'Item 1',
                  },
                  {
                    text: 'Item 2',
                  },
                  {
                    text: 'Item 3',
                  },
                ],
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
        expand: {
          ids: [],
          idField: 'text',
        },
        select: [''],
        currentPath: 'Node is not selected',
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
      getParents(indexArray, index, tree) {
        if (tree[indexArray[index]]) {
          if (index + 1 !== indexArray.length) {
            this.currentPath += tree[indexArray[index]].text + ' > ';
          } else {
            this.currentPath += tree[indexArray[index]].text;
          }
        }
  
        if (index < indexArray.length && tree[indexArray[index]].items) {
          this.getParents(indexArray, index + 1, tree[indexArray[index]].items);
        }
      },
      onItemClick(event) {
        this.currentPath = '';
        this.getParents(
          event.itemHierarchicalIndex.split('_').map(Number),
          0,
          this.tree
        );
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
    },
  };
  </script>
  