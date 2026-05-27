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
    <Logger :title="'Events list'" :events="events" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
    TreeView,
    processTreeViewItems,
    handleTreeViewCheckChange,
} from '@progress/kendo-vue-treeview';
import Logger from './Logger.vue';

const tree = ref([
    {
        text: 'Furniture',
        items: [
            { text: 'Tables & Chairs' },
            { text: 'Sofas' },
            { text: 'Occasional Furniture' },
        ],
    },
    {
        text: 'Decor',
        items: [
            { text: 'Bed Linen' },
            { text: 'Curtains & Blinds' },
            { text: 'Carpets' },
        ],
    },
]);

const events = ref([]);
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

function onItemClick(event) {
    events.value.unshift(`Node ${event.item.text} was selected`);
    select.value = [event.itemHierarchicalIndex];
}

function onExpandChange(event) {
    const action = event.item.expanded ? 'collapsed' : 'expanded';
    events.value.unshift(`Node ${event.item.text} was ${action}`);
    const ids = [...expand.value.ids];
    const index = ids.indexOf(event.item.text);
    index === -1 ? ids.push(event.item.text) : ids.splice(index, 1);
    expand.value = {
        ids,
        idField: 'text',
    };
}

function onCheckChange(event) {
    const action = event.item.checked ? 'unchecked' : 'checked';
    events.value.unshift(`Node ${event.item.text} was ${action}`);
    const settings = {
        singleMode: false,
        checkChildren: false,
        checkParents: false,
    };
    check.value = handleTreeViewCheckChange(event, check.value, tree.value, settings);
}
</script>
