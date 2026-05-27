<template>
  <div class="row example-wrapper">
    <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
      <form class="k-form" method="POST" action="/" @submit="handleSubmit">
        <h3>Fill your basket!</h3>
        <div>
          <MultiSelectTree
            :label="'Foods:'"
            :name="'foods'"
            :value="foods"
            @change="handleChange"
            :data-items="foodsTreeData"
            :text-field="fields.textField"
            :data-item-key="fields.dataItemKey"
            :expand-field="fields.expandField"
            @expandchange="onExpandChange"
            :required="true"
          />
        </div>
        <div>
          <MultiSelectTree
            :label="'Drinks'"
            :name="'drinks'"
            :value="drinks"
            @change="handleChange"
            :data-items="drinksTreeData"
            :text-field="fields.textField"
            :data-item-key="fields.dataItemKey"
            :expand-field="fields.expandField"
            @expandchange="onExpandChange"
            :required="true"
          />
        </div>
        <div :style="{ marginTop: '10px' }">
          <KButton type="submit">Submit</KButton>
        </div>
      </form>
    </div>
    <div
      v-if="success"
      class="alert alert-success"
      :style="{ position: 'absolute' }"
    >
      Form submitted!
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import {
    MultiSelectTree,
    getMultiSelectTreeValue,
} from '@progress/kendo-vue-dropdowns';
import {
    processMultiSelectTreeData,
    expandedState,
} from './multiselecttree-data-operations';

const store = [
    {
        id: 1,
        text: 'Fruits',
        items: [
            { id: 2, text: 'Banana' },
            { id: 3, text: 'Strawberry' },
        ],
    },
    { id: 4, text: 'Carrot' },
    { id: 5, text: 'Bread' },
    { id: 6, text: 'Milk' },
    { id: 7, text: 'Water' },
    { id: 8, text: 'Juice' },
];

const fields = {
    dataItemKey: 'id',
    checkField: 'checkField',
    checkIndeterminateField: 'checkIndeterminateField',
    expandField: 'expanded',
    subItemsField: 'items',
    textField: 'text',
};

const success = ref(false);
const dataItems = ref(store);
const foods = ref([]);
const drinks = ref([]);
const foodsExpanded = ref([store[0][fields.dataItemKey]]);
const drinksExpanded = ref([store[0][fields.dataItemKey]]);

const foodsTreeData = computed(() =>
    processMultiSelectTreeData(dataItems.value, {
        expanded: foodsExpanded.value,
        value: foods.value,
        ...fields,
    })
);

const drinksTreeData = computed(() =>
    processMultiSelectTreeData(dataItems.value, {
        expanded: drinksExpanded.value,
        value: drinks.value,
        ...fields,
    })
);

function handleChange(event) {
    const targetName = event.target.name;
    if (targetName) {
        const updatedValue = getMultiSelectTreeValue(dataItems.value, {
            ...fields,
            ...event,
            value: targetName === 'foods' ? foods.value : drinks.value,
        });
        if (targetName === 'foods') {
            foods.value = updatedValue;
        } else {
            drinks.value = updatedValue;
        }
    }
}

function handleSubmit(event) {
    event.preventDefault();
    success.value = true;
    setTimeout(() => {
        success.value = false;
    }, 3000);
}

function onExpandChange(event) {
    const targetName = event.target.name;
    if (targetName) {
        const expandedStateValue = expandedState(
            event.item,
            fields.dataItemKey,
            targetName === 'foods' ? foodsExpanded.value : drinksExpanded.value
        );
        if (targetName === 'foods') {
            foodsExpanded.value = expandedStateValue;
        } else {
            drinksExpanded.value = expandedStateValue;
        }
    }
}
</script>
