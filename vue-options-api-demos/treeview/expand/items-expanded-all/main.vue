<template>
  <div>
    <div class="example-config">
      <button
        @click="expandAll"
        class="
          k-button k-button-md k-rounded-md k-button-solid k-button-solid-base
        "
      >
        Expand all
      </button>
      <button
        @click="collapseAll"
        class="
          k-button k-button-md k-rounded-md k-button-solid k-button-solid-base
        "
      >
        Collapse all
      </button>
    </div>
    <TreeView
      :dataItems="tree"
      :expandIcons="true"
      @expandchange="onExpandChange"
    />
  </div>
</template>

<script>
import { TreeView } from '@progress/kendo-vue-treeview';

export default {
  components: {
    TreeView,
  },
  data() {
    return {
      tree: [
        {
          text: 'Item1',
          items: [
            {
              text: 'Item1.1',
            },
            {
              text: 'Item1.2',
            },
          ],
        },
        {
          text: 'Item2',
          items: [
            {
              text: 'Item2.1',
            },
            {
              text: 'Item2.2',
            },
          ],
        },
        {
          text: 'Item3',
          items: [
            {
              text: 'Item3.1',
            },
            {
              text: 'Item3.2',
            },
          ],
        },
        {
          text: 'Item4',
          items: [
            {
              text: 'Item4.1',
            },
            {
              text: 'Item4.2',
            },
          ],
        },
        {
          text: 'Item5',
          items: [
            {
              text: 'Item5.1',
            },
            {
              text: 'Item5.2',
            },
          ],
        },
        {
          text: 'Item6',
          items: [
            {
              text: 'Item6.1',
            },
            {
              text: 'Item6.2',
            },
          ],
        },
      ],
    };
  },
  methods: {
    expandAll() {
      this.tree = this.tree.map((item) =>
        Object.assign({}, item, {
          expanded: true,
        })
      );
    },
    collapseAll() {
      this.tree = this.tree.map((item) =>
        Object.assign({}, item, {
          expanded: false,
        })
      );
    },
    onExpandChange(event) {
      const updatedData = this.tree.slice();
      const itemIndex = updatedData.indexOf(event.item);
      updatedData[itemIndex] = { ...event.item };
      updatedData[itemIndex].expanded = !updatedData[itemIndex].expanded;
      this.tree = updatedData;
    },
  },
};
</script>
