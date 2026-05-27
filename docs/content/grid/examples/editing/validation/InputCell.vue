<template>
  <td v-if="!dataItem.inEdit">{{ dataItem[field] }}</td>
  <td v-else>
    <KInput
      ref="nameInput"
      :value="dataItem[field]"
      @input="onInput"
      @change="change"
      :valid="validLength"
    />
    <Popup
      :anchor="'nameInput'"
      :show="!validLength"
      popup-class="popup-content"
    >
      <span class="errorMessage">Should be more than 3 symbols.</span>
    </Popup>
  </td>
</template>

<script setup>
import { Input as KInput } from '@progress/kendo-vue-inputs';
import { Popup } from '@progress/kendo-vue-popup';

const props = defineProps({
    field: String,
    dataItem: Object,
    validLength: Boolean,
});

const emit = defineEmits(['change']);

function onInput(e) {
    props.dataItem[props.field] = e.value;
}

function change(e) {
    props.dataItem[props.field] = e.value;
    emit('change', e);
}
</script>
