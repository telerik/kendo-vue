---
title: Validation
page_title: Vue Grid - Editing Validation - Kendo UI for Vue Native Grid
description: "Learn how the data validation can be implemented when creating or editing records in the Kendo UI for Vue Native Grid"
slug: editing_validation_grid
position: 6
---

# Data validation

Data validation is a complex scenario with many possible cases. In the Vue ecosystem, the good implementation practices are to use custom validation components to control the data input. The Kendo UI for Vue Native Grid follows the popular development practices. That is why the component doesn't provide built-in data validation. We recommend the usage of custom components for handling the data validation when creating or editing records.

When creating custom components as editors in the Grid, we recommend using the Kendo UI for Vue Native components. The Kendo UI for Vue Native components are created with inbuilt support for validation cases and they provide the recommended approach to handle these state changes.

The below demo demonstrates a possible approach that can be used to validate Grid's data.

{% meta height:580 %}
{% embed_file editing/validation/main.vue preview %}
{% embed_file editing/validation/DatePickerCell.vue %}
{% embed_file editing/validation/InputCell.vue %}
{% embed_file editing/validation/NumericCell.vue %}
{% embed_file editing/validation/CommandCell.vue %}
{% embed_file editing/validation/products.js %}
{% embed_file editing/validation/verificationFunctions.js %}
{% embed_file editing/validation/main.js %}
{% endmeta %}


## Validation

The validation of the input data is implemented through the validate method in the `main.vue` file. The method is called every time a custom editor changes.

```jsx-no-run
validate: function(dataItem) {
    const unitsInStockValue = dataItem.UnitsInStock;
    const productNameValue = dataItem.ProductName;
    const orderDateValue = dataItem.FirstOrderedOn;

    this.unitsFieldHasValue = unitsFieldHasValue(unitsInStockValue);
    this.unitsFieldValueIsInRange = unitsFieldValueIsInRange(unitsInStockValue);
    this.productNameFieldLengthaboveThree =  isLengthAboveThree(productNameValue);
    this.firstOrderedOnDateBetweenRange = isDateBetweenRange(orderDateValue);

    return this.unitsFieldHasValue
        && this.unitsFieldValueIsInRange
        && this.productNameFieldLengthaboveThree
        && this.firstOrderedOnDateBetweenRange;
}
```

When the validate method is called the values of the `unitsFieldHasValue`, `unitsFieldValueIsInRange`, `productNameFieldLengthaboveThree` and `firstOrderedOnDateBetweenRange` data properties are changed. Each of these properties is passed as a property to the custom components used for the data editing and validation. Based on the values of the properties, the custom components display a validation message if the input data doesn't meet the validation criteria.

## Custom editor
The sample scenario uses [custom editors]({% slug editing_custom_template_grid %}) to implement the data validation. Each editable column in the Grid has its own custom editor. Each custom editor is a separate component defined in the `InputCell.vue`, `DatePickerCell.vue` and `NumericCell.vue` files.

Below is the definition of the `NumericCell` component. The input entered in the NumericTextBox is validated by two criteria - The **field must have a value** and this **value must be between 0 and 500**. The visibility of the error validation messages is controlled by the `valueNotEmpty` and `validRange` props of the `NumericCell`. These props are passed to the component by its parent and they update on-the-fly the visibility of the error messages. The same approach is used also in the implementation of the `InputCell` and `DatePickerCell` components.

```html-no-run
<template>
  <td v-if="!dataItem.inEdit">{{ currentValue }}</td>
      <td v-else>
      <numerictextbox
            ref="numericInput"
            :value="currentValue"
            :width="'100%'"
            :valid="valid"
            @change="change"
        ></numerictextbox>
          <Popup
              :anchor="'numericInput'"
              :show="!valueNotEmpty || !validRange"
              :popup-class="'popup-content'"
          >
            <span v-if="!valueNotEmpty" class="errorMessage">The field is Required</span>
            <span v-if="!validRange" class="errorMessage">Should be between 0 and 500</span>
            </Popup>
  </td>
</template>
<script>
import { NumericTextBox } from '@progress/kendo-vue-inputs';
import { Popup } from '@progress/kendo-vue-popup';

export default {
    components: {
      'numerictextbox': NumericTextBox,
      'Popup': Popup
    },
    props: {
        field: String,
        dataItem: Object,
        valueNotEmpty: Boolean,
        validRange: Boolean
    },
    computed: {
        valid: function() {
          return this.valueNotEmpty && this.validRange;
        },
        currentValue: function(){
          return this.dataItem[this.field];
        }
    },
    methods: {
        change: function(e) {
            this.dataItem[this.field] = e.value;
            this.$emit('change', e);
        }
    }
}
</script>

```

The last thing that deserves attention is the usage of the [valid property]({% slug api_inputs_numerictextboxprops %}#valid) of the `NumericTextbox`. This property controls the built-in validation styles of the component and is also available in the DatePicker and Input components.

## Suggested Links

* [API Reference of the Grid]({% slug api_grid_gridprops %})
* [API Index of the Grid]({% slug api_grid %})
