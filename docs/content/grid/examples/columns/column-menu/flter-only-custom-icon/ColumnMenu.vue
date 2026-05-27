<template>
  <div>
    <GridColumnMenuFilter
      :expanded="true"
      :column="column"
      :filterable="filterable"
      :filter="filter"
      @filterfocus="handleFocus"
      @closemenu="closeMenu"
      @expandchange="expandChange"
      @filterchange="filterChange"
    />
  </div>
</template>

<script setup>
import {
    GridColumnMenuFilter,
} from '@progress/kendo-vue-grid';

defineProps({
    column: Object,
    sortable: [Boolean, Object],
    sort: Array,
    filter: Object,
    filterable: Boolean,
    columns: Array,
});

const emit = defineEmits([
    'columnssubmit',
    'closemenu',
    'expandchange',
    'filterchange',
    'sortchange',
]);

const handleFocus = (e) => {
    emit('contentfocus', e);
};

const expandChange = () => {
    emit('expandchange');
};

const closeMenu = () => {
    emit('closemenu');
};

const filterChange = (newDescriptor, e) => {
    emit('filterchange', newDescriptor, e);
};

</script>
