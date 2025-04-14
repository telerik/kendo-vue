<template>
  <div class="row example-wrapper">
    <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
      <form class="k-form" method="POST" action="/" @submit="handleSubmit">
        <h3>Fill your basket!</h3>
        <div>
          <MultiSelectTree
            :label="'Food'"
            :name="'food'"
            :value="food"
            @change="handleChange"
            :data-items="foodTreeData"
            :text-field="textField"
            :data-item-key="dataItemKey"
            :expandField="expandField"
            @expandchange="onExpandChange"
          />
        </div>
        <div>
          <MultiSelectTree
            :label="'Drinks'"
            :name="'drinks'"
            :value="drinks"
            @change="handleChange"
            :data-items="drinksTreeData"
            :valid="validateDrinks()"
            :text-field="textField"
            :data-item-key="dataItemKey"
            :validation-message="getDrinksErrorMessage()"
            :expandField="expandField"
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
<script>
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
const checkField = 'checkField';
const checkIndeterminateField = 'checkIndeterminateField';
const subItemsField = 'items';
const expandField = 'expanded';
const textField = 'text';

const fields = {
  dataItemKey,
  checkField,
  checkIndeterminateField,
  expandField,
  subItemsField,
};

export default {
  components: {
    MultiSelectTree,
    KButton,
  },
  data() {
    return {
      success: false,
      fields,
      dataItems: store,
      food: [],
      drinks: [],
      textField,
      dataItemKey,
      checkField,
      checkIndeterminateField,
      subItemsField,
      expandField,
      foodExpanded: [store[0][dataItemKey]],
      drinksExpanded: [store[0][dataItemKey]],
    };
  },
  computed: {
    foodTreeData() {
      return processMultiSelectTreeData(this.dataItems, {
        expanded: this.foodExpanded,
        value: this.food,
        ...fields,
      });
    },
    drinksTreeData() {
      return processMultiSelectTreeData(this.dataItems, {
        expanded: this.drinksExpanded,
        value: this.drinks,
        ...fields,
      });
    },
  },
  methods: {
    getDrinksErrorMessage() {
      return this.drinks.length
        ? 'Please select drinks only!'
        : 'Please select an item!';
    },
    validateDrinks() {
      if (this.drinks.length === 0) {
        return false;
      }
      let result = true;
      this.drinks.forEach((drink) => {
        if (
          drink.text !== 'Juice' &&
          drink.text !== 'Water' &&
          drink.text !== 'Milk'
        ) {
          result = false;
        }
      });

      return result;
    },
    handleChange(event) {
      this[event.target.name] = getMultiSelectTreeValue(this.dataItems, {
        ...fields,
        ...event,
        value: this[event.target.name],
      });
    },
    handleSubmit(event) {
      event.preventDefault();
      this.success = true;
      setTimeout(() => {
        this.success = false;
      }, 3000);
    },
    onExpandChange(event) {
      this[event.target.name + 'Expanded'] = expandedState(
        event.item,
        dataItemKey,
        this[event.target.name + 'Expanded']
      );
    },
  },
};
</script>
