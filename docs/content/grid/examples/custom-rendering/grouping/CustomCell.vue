<template>
  <td v-if="renderCell" :class="className">
    <b>{{ getNestedValue(field, dataItem) }}</b>
  </td>
  <td
    v-else-if="renderArrow && columnIndex < level"
    key="'g' + columnIndex"
    class="k-table-td"
  ></td>
  <td
    v-else-if="columnIndex <= level"
    key="g-colspan"
    :role="'gridcell'"
    :colSpan="columnsCount - columnIndex"
    class="k-table-td k-group-cell"
    style="left: 0px; right: 0px"
  >
    <p class="k-reset">
      <a @click="onClick" tabIndex="-1" href="#">
        <SvgIcon :icon="arrowIcon" />
      </a>
      {{ dataItem[field] }}
    </p>
  </td>
</template>

<script setup>
import { computed } from 'vue';
import { SvgIcon } from '@progress/kendo-vue-common';
import { chevronDownIcon, chevronUpIcon } from '@progress/kendo-svg-icons';

const props = defineProps({
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

const emit = defineEmits(['click']);
const arrowIcon = computed(() => {
    return props.expanded ? chevronDownIcon : chevronUpIcon;
});

const renderArrow = computed(() => {
    return (
        props.columnIndex === undefined ||
        props.level === undefined ||
        props.columnIndex < props.level ||
        props.columnsCount === undefined ||
        props.rowType !== 'groupHeader' ||
        props.dataItem[props.field] === undefined
    );
});

const renderCell = computed(() => {
    return props.field !== undefined && props.rowType !== 'groupHeader';
});

const onClick = (e) => {
    emit('click', e, props.dataItem, props.expanded);
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
