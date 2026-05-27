<template>
  <div>
    <GridColumnMenuCheckboxFilter
      :column="column"
      :filter="filter"
      :filterable="filterable"
      :unique-data="uniqueData"
      :search-box="false"
      :data-items="products"
      :expanded="true"
      @filterchange="filterChange"
      @expandchange="expandChange"
      @closemenu="closeMenu"
    />
  </div>
</template>

<script setup>
import { GridColumnMenuCheckboxFilter } from '@progress/kendo-vue-grid';
import { products } from './products';

defineProps({
    column: Object,
    filter: Object,
    filterable: Boolean,
    uniqueData: {
        type: Boolean,
        default: true,
    },
});

const emit = defineEmits(['expandchange', 'closemenu', 'filterchange']);

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
