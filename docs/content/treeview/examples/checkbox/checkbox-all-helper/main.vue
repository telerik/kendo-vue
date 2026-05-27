<template>
  <div>
    <div class="example-config">
      <button
        @click="checkAll"
        class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
      >
        Check all
      </button>
      <button
        @click="uncheckAll"
        class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
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

<script setup>
import { ref, computed } from 'vue';
import {
    TreeView,
    processTreeViewItems,
    handleTreeViewCheckChange,
} from '@progress/kendo-vue-treeview';

const tree = ref([
    {
        text: 'Furniture',
        expanded: true,
        items: [
            { text: 'Tables & Chairs' },
            { text: 'Sofas' },
            { text: 'Occasional Furniture' },
        ],
    },
    {
        text: 'Decor',
        expanded: true,
        items: [
            { text: 'Bed Linen' },
            { text: 'Curtains & Blinds' },
            { text: 'Carpets' },
        ],
    },
]);

const check = ref([]);
const expand = ref({
    ids: ['Item2'],
    idField: 'text',
});
const select = ref(['']);

const treeDataItems = computed(() =>
    processTreeViewItems(tree.value, {
        select: select.value,
        check: check.value,
        expand: expand.value,
    })
);

function checkAll() {
    check.value = ['0', '0_0', '0_1', '0_2', '1', '1_0', '1_1', '1_2'];
}

function uncheckAll() {
    check.value = [];
}

function onCheckChange(event) {
    const settings = {
        singleMode: false,
        checkChildren: false,
        checkParents: false,
    };
    check.value = handleTreeViewCheckChange(event, check.value, tree.value, settings);
}
</script>
