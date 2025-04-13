<template>
    <div :key="dataItem.ProductID">
      <Card :orientation="'horizontal'" :style="{ borderWidth: '0px 0px 1px' }">
        <CardBody v-if="dataItem.edit">
          <div class="k-hbox k-justify-content-between k-flex-wrap">
            <div style="{ width: '40%', padding: '5px 0px' }">
              <label :style="{ display: 'block' }">Name:</label>
              <Input
                :value="dataItem.ProductName"
                @input="(e) => handleChange(e, 'ProductName')"
              />
              <label :style="{ display: 'block' }">Category:</label>
              <DropDownList
                :data-items="dropDownData"
                :text-field="'CategoryName'"
                :value="dataItem.Category"
                @change="(e) => handleChange(e, 'Category')"
              />
            </div>
            <div :style="{ width: '35%', padding: '5px 0px' }">
              <label :style="{ display: 'block' }">Price:</label>
              <NumericTextBox
                :value="dataItem.UnitPrice"
                :format="'c2'"
                @change="(e) => handleChange(e, 'UnitPrice')"
              />
              <label :style="{ display: 'block' }">Available:</label>
              <NumericTextBox
                :value="dataItem.UnitsInStock"
                @change="(e) => handleChange(e, 'UnitsInStock')"
              />
            </div>
            <div :style="{ width: '25%', padding: '5px 0px' }">
              <button
                class="
                  k-button
                  k-button-md
                  k-rounded-md
                  k-button-solid
                  k-button-solid-primary
                "
                :style="{ marginRight: '5px' }"
                @click="handleSave(dataItem)"
              >
                Save
              </button>
              <button
                class="
                  k-button
                  k-button-md
                  k-rounded-md
                  k-button-solid
                  k-button-solid-base
                "
                @click="cancelEdit(dataItem)"
              >
                Cancel
              </button>
            </div>
          </div>
        </CardBody>
        <CardBody v-else>
          <div class="k-hbox k-justify-content-between k-flex-wrap">
            <div :style="{ width: '40%', padding: '5px 0px' }">
              <CardTitle :style="{ fontSize: '16px' }">
                {{ dataItem.ProductName }}
              </CardTitle>
              <CardSubtitle>{{ dataItem.Category.CategoryName }}</CardSubtitle>
            </div>
            <div :style="{ width: '35%', padding: '5px 0px' }">
              <div>
                Price:{{ ' ' }}
                {{ formattedPrice }}
              </div>
              <div>Available units: {{ dataItem.UnitsInStock }}</div>
            </div>
            <div :style="{ width: '25%', padding: '5px 0px' }">
              <KButton
                :rounded="'medium'"
                :fill="'solid'"
                :theme-color="'primary'"
                :style="{ marginRight: '5px' }"
                @click="enterEdit"
              >
                Edit
              </KButton>
              <KButton
                :rounded="'medium'"
                :fill="'solid'"
                @click="handleDelete(dataItem)"
              >
                Delete
              </KButton>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  </template>
  
  <script>
  import {
    Card,
    CardTitle,
    CardSubtitle,
    CardBody,
  } from '@progress/kendo-vue-layout';
  import { Input, NumericTextBox } from '@progress/kendo-vue-inputs';
  import { Button } from '@progress/kendo-vue-buttons';
  import { DropDownList } from '@progress/kendo-vue-dropdowns';
  import { provideIntlService } from '@progress/kendo-vue-intl';
  
  export default {
    components: {
      Card,
      CardTitle,
      CardSubtitle,
      CardBody,
      Input,
      NumericTextBox,
      DropDownList,
      KButton: Button,
    },
    props: {
      dataItem: Object,
    },
    data() {
      return {
        originalDataItem: null,
        dropDownData: [
          { CategoryName: 'Beverages', CategoryID: 1 },
          { CategoryName: 'Condiments', CategoryID: 2 },
          { CategoryName: 'Confections', CategoryID: 3 },
          { CategoryName: 'Dairy Products', CategoryID: 4 },
          { CategoryName: 'Grains/Cereals', CategoryID: 5 },
          { CategoryName: 'Meat/Poultry', CategoryID: 6 },
          { CategoryName: 'Produce', CategoryID: 7 },
          { CategoryName: 'Seafood', CategoryID: 8 },
        ],
      };
    },
    inject: {
      kendoIntlService: { default: null },
    },
    computed: {
      formattedPrice: function () {
        return provideIntlService(this).formatNumber(
          this.$props.dataItem.UnitPrice,
          'c'
        );
      },
    },
    emits: ['saveitem', 'deleteitem', 'update'],
    methods: {
      enterEdit() {
        this.originalDataItem = { ...this.$props.dataItem };
        this.$props.dataItem.edit = true;
      },
      cancelEdit() {
        Object.assign(this.$props.dataItem, this.originalDataItem);
        this.$props.dataItem.edit = false;
      },
      handleChange(e, field) {
        this.$props.dataItem[field] = e.value;
      },
      handleSave(ev) {
        this.$emit('saveitem', ev);
      },
      handleDelete(ev) {
        this.$emit('deleteitem', ev);
      },
    },
  };
  </script>
  