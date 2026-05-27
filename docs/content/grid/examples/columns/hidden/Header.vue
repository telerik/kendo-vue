<template>
  <div
    :style="{
      display: 'flex',
    }"
  >
    <div :style="{ paddingTop: '5px', paddingRight: '40px' }">{{ title }}</div>
    <KButton
      @click="hideColumn(field)"
      :theme-color="'primary'"
      style="float: right"
    >
      Hide
    </KButton>
  </div>
</template>

<script setup>
import { Button as KButton } from '@progress/kendo-vue-buttons';

defineProps({
    field: String,
    title: String,
    sortable: [Boolean, Object],
});

const emit = defineEmits(['hidecolumn']);

const hideColumn = (field) => {
    emit('hidecolumn', field);
};
</script>
