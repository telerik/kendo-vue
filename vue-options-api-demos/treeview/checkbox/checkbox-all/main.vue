<template>
  <div>
    <div class="example-config">
      <button
        @click="checkAll"
        class="
          k-button k-button-md k-rounded-md k-button-solid k-button-solid-base
        "
      >
        Check all
      </button>
      <button
        @click="uncheckAll"
        class="
          k-button k-button-md k-rounded-md k-button-solid k-button-solid-base
        "
      >
        Uncheck all
      </button>
    </div>
    <TreeView
      :dataItems="tree"
      :checkboxes="true"
      @checkchange="onCheckChange"
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
    checkAll() {
      let newData = this.tree.map((item) => {
        item.checked = true;
        item.items = item.items.map((child) => {
          child.checked = true;
          return child;
        });
        return item;
      });
      this.tree = newData;
    },

    uncheckAll() {
      let newData = this.tree.map((item) => {
        item.checked = false;
        item.items = item.items.map((child) => {
          child.checked = false;
          return child;
        });
        return item;
      });
      this.tree = newData;
    },
    onCheckChange(event) {
      event.item.checked = !event.item.checked;
    },
  },
};
</script>
