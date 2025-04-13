<template>
  <div>
    <div class="example-config">
      <button @click="selectAll" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base">
        Select all
      </button>
      <button @click="unselectAll" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base">
        Deselect all
      </button>
    </div>
    <TreeView :dataItems="dataItems" @itemclick="onItemClick" />
  </div>
</template>

<script>
import { TreeView, processTreeViewItems } from '@progress/kendo-vue-treeview';

export default {
  components: {
    TreeView
  },
  data() {
    return {
      select: [],
      tree: [
        {
          text: "Item1",
          expanded: true,
          items: [
            {
              text: "Item1.1",
            },
            {
              text: "Item1.2",
            },
          ],
        },
        {
          text: "Item2",
          expanded: true,
          items: [
            {
              text: "Item2.1",
            },
            {
              text: "Item2.2",
            },
          ],
        },
        {
          text: "Item3",
          expanded: true,
          items: [
            {
              text: "Item3.1",
            },
            {
              text: "Item3.2",
            },
          ],
        },
      ]
    };
  },
  computed: {
    dataItems() {
      return processTreeViewItems(this.tree, {
        select: this.select,
      })
    }
  },
  methods: {
    selectAll() {
      this.select = ["0", "0_0", "0_1", "1", "1_0", "1_1", "2", "2_0", "2_1"];
    },
    unselectAll() {
      this.select = [];
    },
    onItemClick(event) {
      let select = this.select.slice();
      const index = select.indexOf(event.itemHierarchicalIndex);
      index === -1
        ? select.push(event.itemHierarchicalIndex)
        : select.splice(index, 1);
      this.select = select;
    }
  }
};

</script>

