<template>
  <td v-if="!dataItem.inEdit">{{ formattedCurrentValue }}</td>
  <td v-else>
    <DatePicker
      :style="{ width: '100%' }"
      ref="dateInput"
      :value="dataItem[field]"
      :valid="dateInRange"
      @change="change"
    />
    <Popup
      :anchor="'dateInput'"
      :show="!dateInRange"
      popup-class="popup-content"
    >
      <span class="errorMessage">
        Should be between 1.1.1995 and 31.12.2022
      </span>
    </Popup>
  </td>
</template>

<script setup>
import { computed } from 'vue';
import { DatePicker } from '@progress/kendo-vue-dateinputs';
import { Popup } from '@progress/kendo-vue-popup';

const props = defineProps({
    field: String,
    dataItem: Object,
    dateInRange: Boolean,
});

const emit = defineEmits(['change']);

const formattedCurrentValue = computed(() =>
    new Intl.DateTimeFormat('en-US').format(props.dataItem[props.field])
);

function change(e) {
    props.dataItem[props.field] = e.value;
    emit('change', e);
}
</script>

