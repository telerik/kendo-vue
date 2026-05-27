<template>
  <div>
    <Error v-if="visited && validationMessage">{{ validationMessage }}</Error>
    <Grid :data-items="value" :columns="columns">
      <template #myTemplate="{ props }">
        <CommandCell :data-item="props.dataItem" @remove="onRemove" />
      </template>
      <GridToolbar>
        <KButton
          title="Add new"
          :theme-color="'primary'"
          @click="onAdd"
        >
          Add new
        </KButton>
      </GridToolbar>
    </Grid>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Error } from '@progress/kendo-vue-labels';
import { Grid, GridToolbar } from '@progress/kendo-vue-grid';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import CommandCell from './CommandCell.vue';

defineProps({
    touched: Boolean,
    label: String,
    validationMessage: String,
    hint: String,
    id: String,
    valid: Boolean,
    value: Array,
    visited: Boolean,
});

const emit = defineEmits(['unshift', 'remove']);

const columns = ref([
    { field: 'name', title: 'Name' },
    { cell: 'myTemplate', width: '240px' },
]);

function onAdd(e) {
    e.preventDefault();
    emit('unshift', { value: { name: 'new item' } });
}

function onRemove(cellProps) {
    emit('remove', { index: cellProps.dataIndex });
}
</script>
