<template>
  <div class="row example-wrapper">
    <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
      <form class="k-form" method="POST" action="/" @submit="handleSubmit">
        <h3>Fill your basket!</h3>
        <div>
          <DropDownTree
            :label="'Food'"
            :name="'food'"
            :value="food"
            @change="handleChange"
            :data-items="foodTreeData"
            :text-field="textField"
            :data-item-key="dataItemKey"
            :expand-field="expandField"
            @expandchange="onExpandChange"
          />
        </div>
        <div>
          <DropDownTree
            :label="'Drinks'"
            :name="'drinks'"
            :value="drinks"
            @change="handleChange"
            :data-items="drinksTreeData"
            :valid="validateDrinks()"
            :text-field="textField"
            :data-item-key="dataItemKey"
            :validation-message="getDrinksErrorMessage()"
            :expand-field="expandField"
            @expandchange="onExpandChange"
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
const food = ref(null);
const drinks = ref(null);
const foodExpanded = ref([store[0][dataItemKey]]);
const drinksExpanded = ref([store[0][dataItemKey]]);
const dataItems = ref(store);

const foodTreeData = computed(() =>
    processTreeData(dataItems.value, { expanded: foodExpanded.value, value: food.value }, fields)
);

const drinksTreeData = computed(() =>
    processTreeData(dataItems.value, { expanded: drinksExpanded.value, value: drinks.value }, fields)
);

function getDrinksErrorMessage() {
    return drinks.value
        ? 'Please select drinks only!'
        : 'Please select an item!';
}

function validateDrinks() {
    if (!drinks.value) {
        return false;
    }
    return (
        drinks.value.text === 'Juice' ||
    drinks.value.text === 'Water' ||
    drinks.value.text === 'Milk'
    );
}

function handleChange(event) {
    if (event.target.name === 'food') {
        food.value = event.value;
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
    if (event.target.name === 'food') {
        foodExpanded.value = expandedState(event.item, dataItemKey, foodExpanded.value);
    } else if (event.target.name === 'drinks') {
        drinksExpanded.value = expandedState(event.item, dataItemKey, drinksExpanded.value);
    }
}
</script>
