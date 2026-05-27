<template>
  <Window
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
  </Window>
</template>

<script setup>
import { ref } from 'vue';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { Window } from '@progress/kendo-vue-dialogs';
import { RadioGroup, NumericTextBox } from '@progress/kendo-vue-inputs';
import { Button as KButton } from '@progress/kendo-vue-buttons';

defineProps({
    showForm: Boolean,
    maxColumnNumber: Number,
});

const chartTypeDDLValue = ref(1);
const chartSpanValue = ref(1);
const chartPosition = ref('start');

const radioGroupOptions = [
    { label: 'Insert At the Beginning', value: 'start' },
    { label: 'Insert At the End', value: 'end' },
];

const dropDownValues = [
    { id: 1, text: 'Add Page Views Chart' },
    { id: 2, text: 'Add Most Visited Pages Chart' },
    { id: 3, text: 'Add Visitors Chart' },
];

function onSubmit() {
    const tileTemplate =
    chartTypeDDLValue.value === 1
        ? 'pageviews'
        : chartTypeDDLValue.value === 2
            ? 'popularpageschart'
            : 'visitors';

    const title =
    chartTypeDDLValue.value === 1
        ? 'Page Views'
        : chartTypeDDLValue.value === 2
            ? 'Most Visited Pages'
            : 'Visitors';

    emit('addChart', {
        colspan: chartSpanValue.value,
        insertPosition: chartPosition.value,
        tileTemplate,
        title,
    });
    emit('close');
}

function closeWindow() {
    emit('close');
}
</script>
