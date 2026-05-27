<template>
  <div>
    <TreeView
      :checkField="checkField"
      :checkboxes="true"
      @checkchange="onCheckChange"
      :dataItems="dataItems"
    />
    <div :style="{ marginTop: '5px' }">
      <i>Press SPACE to check/uncheck the active item</i>
      <div class="example-config">Checked IDs: {{ check.ids.join(',') }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
    TreeView,
    processTreeViewItems,
    handleTreeViewCheckChange,
} from '@progress/kendo-vue-treeview';

const checkField = 'marked';

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

const check = ref({
    idField: 'text',
    operationField: checkField,
    ids: [],
});

const dataItems = computed(() =>
    processTreeViewItems(tree.value, { check: check.value })
);

function onCheckChange(event) {
    const settings = { checkChildren: true, checkParents: true };
    check.value = handleTreeViewCheckChange(event, check.value, tree.value, settings);
}
</script>
