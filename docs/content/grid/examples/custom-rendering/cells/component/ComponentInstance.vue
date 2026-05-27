<template>
  <td :class="className" @click="clickHandler">
    <b>{{ getNestedValue(field, dataItem) }}</b>
  </td>
</template>

<script setup>

defineProps({
    field: String,
    dataItem: Object,
    format: String,
    className: String,
    columnIndex: Number,
    columnsCount: Number,
    rowType: String,
    level: Number,
    expanded: Boolean,
    editor: String,
});

const emit = defineEmits(['custom']);

const clickHandler = (e) => {
    emit('custom', e);
};

const getNestedValue = (fieldName, dataItem) => {
    const path = fieldName.split('.');
    let data = dataItem;
    path.forEach((p) => {
        data = data ? data[p] : undefined;
    });
    return data;
};
</script>
