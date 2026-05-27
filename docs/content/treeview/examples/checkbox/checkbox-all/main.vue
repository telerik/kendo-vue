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
      :dataItems="tree"
      :checkboxes="true"
      @checkchange="onCheckChange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { TreeView } from '@progress/kendo-vue-treeview';

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

function checkAll() {
    tree.value = tree.value.map((item) => ({
        ...item,
        checked: true,
        items: item.items.map((child) => ({ ...child, checked: true })),
    }));
}

function uncheckAll() {
    tree.value = tree.value.map((item) => ({
        ...item,
        checked: false,
        items: item.items.map((child) => ({ ...child, checked: false })),
    }));
}

function onCheckChange(event) {
    event.item.checked = !event.item.checked;
}
</script>
