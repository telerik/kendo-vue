<template>
  <td v-if="!dataItem.inEdit">{{ dataItem[field] }}</td>
  <td v-else>
    <TextBox
      ref="nameInput"
      :value="dataItem[field]"
      @input="onInput"
      @change="change"
      :valid="isValidLength"
    />
    <Popup
      :anchor="'nameInput'"
      :show="!isValidLength && touched"
      popup-class="popup-content"
    >
      <span class="errorMessage">Should be more than 3 symbols.</span>
    </Popup>
  </td>
</template>

<script setup>
import { ref, computed } from 'vue';
import { TextBox } from '@progress/kendo-vue-inputs';
import { Popup } from '@progress/kendo-vue-popup';

const props = defineProps({
    field: String,
    dataItem: Object,
});

const emit = defineEmits(['change']);

const touched = ref(false);

const isValidLength = computed(() =>
    props.dataItem[props.field] && props.dataItem[props.field].length > 3
);

function onInput(e) {
    props.dataItem[props.field] = e.value;
    touched.value = true;
}

function change(e) {
    props.dataItem[props.field] = e.value;
    touched.value = true;
    emit('change', e);
}
</script>
