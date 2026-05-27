<template>
  <DropDownList
    :data-items="data"
    :default-item="defaultItem"
    @change="onChange"
  />
</template>

<script setup>
import { DropDownList } from '@progress/kendo-vue-dropdowns';

defineProps({
    dataItem: Object,
    data: Array,
    defaultItem: String,
});

const emit = defineEmits(['change']);

function onChange(e) {
    emit('change', { value: e.value, syntheticEvent: e.event });
}
</script>
