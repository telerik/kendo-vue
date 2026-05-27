<template>
  <div class="row example-wrapper">
    <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
      <form class="k-form" method="POST" action="/" @submit="handleSubmit">
        <h3>Fill your basket!</h3>
        <div>
          <DropDownTree
            :label="'Foods:'"
            :name="'foods'"
            :value="foods"
            @change="handleChange"
            :data-items="foodsTreeData"
            :text-field="textField"
            :data-item-key="dataItemKey"
            :expand-field="expandField"
            @expandchange="onExpandChange"
            :required="true"
            :validation-message="foodsValidationMessage"
          />
        </div>
        <div>
          <DropDownTree
            :label="'Drinks'"
            :name="'drinks'"
            :value="drinks"
            @change="handleChange"
            :data-items="drinksTreeData"
            :text-field="textField"
            :data-item-key="dataItemKey"
            :expand-field="expandField"
            @expandchange="onExpandChange"
            :required="true"
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
      :class="'alert alert-success'"
      :style="{ position: 'absolute' }"
    >
      Form submitted!
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { DropDownTree } from '@progress/kendo-vue-dropdowns';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { processTreeData, expandedState } from './tree-data-operations';

const dataItemKey = 'id';
const selectField = 'selected';
const subItemsField = 'items';
const expandField = 'expanded';
const textField = 'text';

const fields = {
    dataItemKey,
    selectField,
    expandField,
    subItemsField,
};

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

const success = ref(false);
const foods = ref(null);
const drinks = ref(null);
const foodsExpanded = ref([store[0][dataItemKey]]);
const drinksExpanded = ref([store[0][dataItemKey]]);
const dataItems = ref(store);

const foodsValidationMessage = 'Please add foods to your basket!';
const drinksValidationMessage = 'Please add drinks to your basket!';

const foodsTreeData = computed(() =>
    processTreeData(dataItems.value, { expanded: foodsExpanded.value, value: foods.value }, fields)
);

const drinksTreeData = computed(() =>
    processTreeData(dataItems.value, { expanded: drinksExpanded.value, value: drinks.value }, fields)
);

function handleChange(event) {
    if (event.target.name === 'foods') {
        foods.value = event.value;
    } else if (event.target.name === 'drinks') {
        drinks.value = event.value;
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
    if (event.target.name === 'foods') {
        foodsExpanded.value = expandedState(event.item, dataItemKey, foodsExpanded.value);
    } else if (event.target.name === 'drinks') {
        drinksExpanded.value = expandedState(event.item, dataItemKey, drinksExpanded.value);
    }
}
</script>
