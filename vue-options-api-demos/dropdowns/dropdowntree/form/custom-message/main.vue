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
            :expandField="expandField"
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
<script>
import { DropDownTree } from '@progress/kendo-vue-dropdowns';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { processTreeData, expandedState } from './tree-data-operations';

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

export default {
  components: {
    DropDownTree,
    KButton,
  },
  data() {
    return {
      success: false,
      fields,
      dataItems: store,
      foods: null,
      drinks: null,
      textField,
      dataItemKey,
      selectField,
      subItemsField,
      expandField,
      foodsExpanded: [store[0][dataItemKey]],
      drinksExpanded: [store[0][dataItemKey]],
      foodsValidationMessage: 'Please add foods to your basket!',
      drinksValidationMessage: 'Please add drinks to your basket!',
    };
  },
  computed: {
    foodsTreeData() {
      return processTreeData(
        this.dataItems,
        { expanded: this.foodsExpanded, value: this.foods },
        fields
      );
    },
    drinksTreeData() {
      return processTreeData(
        this.dataItems,
        { expanded: this.drinksExpanded, value: this.drinks },
        fields
      );
    },
  },
  methods: {
    handleChange(event) {
      this[event.target.name] = event.value;
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
