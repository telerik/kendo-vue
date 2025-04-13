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
      :dataItems="treeDataItems"
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
    checkAll() {
      this.check = ['0', '0_0', '0_1', '0_2', '1', '1_0', '1_1', '1_2'];
    },
    uncheckAll() {
      this.check = [];
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
