<template>
  <div class="row example-wrapper">
    <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
      <form class="k-form" method="POST" action="/" @submit="handleSubmit">
        <h3>Fill your basket!</h3>
        <div>
          <MultiSelectTree
            label="Foods:"
            name="foods"
            :value="foods"
            @change="handleChange"
            :data-items="foodsTreeData"
            :text-field="textField"
            :data-item-key="dataItemKey"
            :expandField="expandField"
            @expandchange="onExpandChange"
            required
            :validation-message="foodsValidationMessage"
          />
        </div>
        <div>
          <MultiSelectTree
            label="Drinks"
            name="drinks"
            :value="drinks"
            @change="handleChange"
            :data-items="drinksTreeData"
            :text-field="textField"
            :data-item-key="dataItemKey"
            :expandField="expandField"
            @expandchange="onExpandChange"
            required
            :validation-message="drinksValidationMessage"
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
import { Button as KButton } from '@progress/kendo-vue-buttons';
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

const dataItemKey = 'id';
const expandField = 'expanded';
const textField = 'text';

const dataItems = ref(store);
const foods = ref([]);
const drinks = ref([]);
const success = ref(false);
const foodsExpanded = ref([store[0][dataItemKey]]);
const drinksExpanded = ref([store[0][dataItemKey]]);
const foodsValidationMessage = 'Please add foods to your basket!';
const drinksValidationMessage = 'Please add drinks to your basket!';

const foodsTreeData = computed(() =>
    processMultiSelectTreeData(dataItems.value, {
        expanded: foodsExpanded.value,
        value: foods.value,
        dataItemKey,
        expandField,
    })
);

const drinksTreeData = computed(() =>
    processMultiSelectTreeData(dataItems.value, {
        expanded: drinksExpanded.value,
        value: drinks.value,
        dataItemKey,
        expandField,
    })
);

function handleChange(event) {
    const targetName = event.target.name;
    if (targetName === 'foods') {
        foods.value = getMultiSelectTreeValue(dataItems.value, {
            dataItemKey,
            expandField,
            ...event,
            value: foods.value,
        });
    } else if (targetName === 'drinks') {
        drinks.value = getMultiSelectTreeValue(dataItems.value, {
            dataItemKey,
            expandField,
            ...event,
            value: drinks.value,
        });
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
    if (targetName === 'foods') {
        foodsExpanded.value = expandedState(
            event.item,
            dataItemKey,
            foodsExpanded.value
        );
    } else if (targetName === 'drinks') {
        drinksExpanded.value = expandedState(
            event.item,
            dataItemKey,
            drinksExpanded.value
        );
    }
}
</script>
