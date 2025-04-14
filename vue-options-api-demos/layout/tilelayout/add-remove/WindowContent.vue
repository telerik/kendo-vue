<template>
    <window
      v-if="showForm"
      :title="'Configure the Chart you want to add'"
      :width="450"
      @close="closeWindow"
    >
      <div class="k-form">
        <fieldset>
          <label class="k-form-field">
            Select Chart Type:
            <DropDownList
              :data-items="dropDownValues"
              :text-field="'text'"
              :data-item-key="'id'"
              :value-field="'id'"
              :value-primitive="true"
              v-model="chartTypeDDLValue"
            />
          </label>
          <label class="k-form-field">
            Select Column Span:
            <NumericTextBox
              :min="1"
              :max="maxColumnNumber"
              v-model="chartSpanValue"
            />
          </label>
          <label class="k-form-field">
            Select Where the New Chart to be Inserted:
            <RadioGroup v-model="chartPosition" :data-items="radioGroupOptions" />
          </label>
        </fieldset>
  
        <KButton :theme-color="'primary'" @click="onSubmit">Insert</KButton>
      </div>
    </window>
  </template>
  <script>
  import { DropDownList } from '@progress/kendo-vue-dropdowns';
  import { Window } from '@progress/kendo-vue-dialogs';
  import { RadioGroup, NumericTextBox } from '@progress/kendo-vue-inputs';
  import { Button as KButton } from '@progress/kendo-vue-buttons';
  
  export default {
    components: { Window, DropDownList, NumericTextBox, RadioGroup, KButton },
    props: {
      showForm: Boolean,
      maxColumnNumber: Number,
    },
    data() {
      return {
        chartTypeDDLValue: 1,
        chartSpanValue: 1,
        chartPosition: 'start',
        radioGroupOptions: [
          {
            label: 'Insert At the Beginning',
            value: 'start',
          },
          {
            label: 'Insert At the End',
            value: 'end',
          },
        ],
        dropDownValues: [
          {
            id: 1,
            text: 'Add Page Views Chart',
          },
          {
            id: 2,
            text: 'Add Most Visited Pages Chart',
          },
          {
            id: 3,
            text: 'Add Visitors Chart',
          },
        ],
      };
    },
    emits: ['addChart', 'close'],
    methods: {
      onSubmit(e) {
        this.$emit('addChart', {
          colspan: this.chartSpanValue,
          insertPosition: this.chartPosition,
          tileTemplate:
            this.chartTypeDDLValue === 1
              ? 'pageviews'
              : this.chartTypeDDLValue === 2
              ? 'popularpageschart'
              : 'visitors',
          title:
            this.chartTypeDDLValue === 1
              ? 'Page Views'
              : this.chartTypeDDLValue === 2
              ? 'Most Visited Pages'
              : 'Visitors',
        });
        this.$emit('close');
      },
      closeWindow() {
        this.$emit('close');
      },
    },
  };
  </script>
  