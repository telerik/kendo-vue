<template>
  <td v-if="rowType === 'groupFooter'" :class="className">
    {{ computedAggregates }}
  </td>
  <td v-else-if="renderCell" :class="className">
    {{ getNestedValue(field, dataItem) }}
  </td>
  <td
    v-else-if="renderArrow"
    key="'g' + columnIndex"
    class="k-group-cell"
  ></td>
  <td
    v-else-if="columnIndex <= level"
    key="g-colspan"
    :colspan="columnsCount - columnIndex"
  >
    <p class="k-reset">
      <a @click="onClick" tabindex="-1" href="#">
        <SvgIcon :icon="expanded ? chevronDownIcon : chevronRightIcon" />
      </a>
      {{ dataItem[field] }}
    </p>
  </td>
</template>

<script setup>
import { computed } from 'vue';
import { SvgIcon } from '@progress/kendo-vue-common';
import { chevronDownIcon, chevronRightIcon } from '@progress/kendo-svg-icons';

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

const renderArrow = computed(() => {
    return (
        props.columnIndex === undefined ||
      props.level === undefined ||
      props.columnIndex < props.level ||
      props.columnsCount === undefined ||
      props.rowType !== 'groupHeader' ||
      props.dataItem[props.field] === undefined
    ) && props.dataItem[props.field];
});

const renderCell = computed(() => {
    return props.field !== undefined && props.rowType !== 'groupHeader';
});

const computedAggregates = computed(() => {
    if (props.field === 'UnitPrice') {
        return ' Average: ' + props.dataItem.aggregates.UnitPrice.average.toFixed(2);
    } else if (props.field === 'UnitsInStock') {
        return ' Sum: ' + props.dataItem.aggregates.UnitsInStock.sum;
    }
    return '';
});

function onClick(e) {
    emit('click', e, props.dataItem, props.expanded);
}

function getNestedValue(fieldName, dataItem) {
    const path = fieldName.split('.');
    let data = dataItem;
    path.forEach((p) => {
        data = data ? data[p] : undefined;
    });
    return data;
}
</script>
