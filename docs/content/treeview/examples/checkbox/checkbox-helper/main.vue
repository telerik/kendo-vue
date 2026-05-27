<template>
  <div>
    <div class="example-config">
      <h5>Check Settings</h5>
      <Checkbox
        :value="singleMode"
        :label="'Single Mode'"
        @change="onSingleModeChange"
      />
      &nbsp;
      <Checkbox
        :value="checkChildren"
        :label="'Check All Children'"
        @change="onCheckAllChildrenChange"
      />
      &nbsp;
      <Checkbox
        :value="checkAllParents"
        :label="'Check all parents when children are checked'"
        @change="onCheckAllParentsChange"
      />
    </div>
    <TreeView
      :animate="false"
      :checkIndeterminateField="checkIndeterminateField"
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
import { Checkbox } from '@progress/kendo-vue-inputs';

const singleMode = ref(false);
const checkChildren = ref(false);
const checkAllParents = ref(false);
const checkIndeterminateField = 'checkUnknown';

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
            {
                text: 'Carpets',
                expanded: true,
                items: [{ text: 'Yellow' }, { text: 'Blue' }, { text: 'Red' }],
            },
        ],
    },
]);

const check = ref({
    idField: 'text',
    applyCheckIndeterminate: true,
    checkIndeterminateField,
    ids: [],
});

const dataItems = computed(() =>
    processTreeViewItems(tree.value, { check: check.value })
);

function onCheckChange(event) {
    check.value = handleTreeViewCheckChange(event, check.value, tree.value, {
        singleMode: singleMode.value,
        checkChildren: checkChildren.value,
        checkParents: checkAllParents.value,
    });
}

function onSingleModeChange() {
    singleMode.value = !singleMode.value;
}

function onCheckAllChildrenChange() {
    checkChildren.value = !checkChildren.value;
}

function onCheckAllParentsChange() {
    checkAllParents.value = !checkAllParents.value;
}
</script>
