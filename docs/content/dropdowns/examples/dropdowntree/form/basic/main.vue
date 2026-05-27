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
            :expandField="expandField"
            @expandchange="onExpandChange"
            :required="true"
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
            :expandField="expandField"
            @expandchange="onExpandChange"
            :required="true"
          />
        </div>
        <div :style="{ marginTop: '10px' }">
          <KButton type="submit">Submit</KButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { DropDownTree } from '@progress/kendo-vue-dropdowns';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { processTreeData, expandedState } from './tree-data-operations';

const store = [
    { id: 1, text: 'Fruits', items: [{ id: 2, text: 'Banana' }, { id: 3, text: 'Strawberry' }] },
    { id: 4, text: 'Carrot' },
    { id: 5, text: 'Bread' },
    { id: 6, text: 'Milk' },
    { id: 7, text: 'Water' },
    { id: 8, text: 'Juice' },
];

const dataItemKey = 'id';
const selectField = 'selected';
const subItemsField = 'items';
const expandField = 'expanded';
const textField = 'text';

const fields = { dataItemKey, selectField, expandField, subItemsField };

const dataItems = ref(store);
const foods = ref(null);
const drinks = ref(null);
const foodsExpanded = ref([store[0][dataItemKey]]);
const drinksExpanded = ref([store[0][dataItemKey]]);

const foodsTreeData = computed(() =>
    processTreeData(dataItems.value, { expanded: foodsExpanded.value, value: foods.value }, fields)
);

const drinksTreeData = computed(() =>
    processTreeData(dataItems.value, { expanded: drinksExpanded.value, value: drinks.value }, fields)
);

function handleChange(event) {
    if (event.target.name === 'foods') foods.value = event.value;
    if (event.target.name === 'drinks') drinks.value = event.value;
}

function handleSubmit(e) {
    e.preventDefault();
    console.log('SUBMIT!', JSON.stringify({ foods: foods.value, drinks: drinks.value }));
}

function onExpandChange(event) {
    if (event.target.name === 'foods') {
        foodsExpanded.value = expandedState(event.item, dataItemKey, foodsExpanded.value);
    }
    if (event.target.name === 'drinks') {
        drinksExpanded.value = expandedState(event.item, dataItemKey, drinksExpanded.value);
    }
}
</script>
