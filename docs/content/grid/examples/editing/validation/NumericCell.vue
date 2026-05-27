<template>
  <td v-if="!dataItem.inEdit">{{ currentValue }}</td>
  <td v-else>
    <NumericTextBox
      ref="numericInput"
      :value="currentValue"
      :valid="valid"
      @change="change"
    ></NumericTextBox>
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

<script setup>
import { computed } from 'vue';
import { NumericTextBox } from '@progress/kendo-vue-inputs';
import { Popup } from '@progress/kendo-vue-popup';

const props = defineProps({
    field: String,
    dataItem: Object,
    valueNotEmpty: Boolean,
    validRange: Boolean,
});
const emit = defineEmits(['change']);
const valid = computed(() => props.valueNotEmpty && props.validRange);
const currentValue = computed(() => props.dataItem[props.field]);

function change(e) {
    props.dataItem[props.field] = e.value;
    emit('change', e);
}
</script>
