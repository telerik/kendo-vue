<template>
  <DropDownList
    :style="{ width: '230px' }"
    :data-items="filterOptions"
    :text-field="'text'"
    :data-item-key="'value'"
    :default-item="{ text: 'Choose Category ...', value: null }"
    @change="handleFilter"
  />
</template>

<script setup>
import { DropDownList } from "@progress/kendo-vue-dropdowns";

const props = defineProps({
    filter: {
        type: [Array, Object],
        required: true
    },
    filterOptions: {
        type: Array,
        required: true
    }
});

const emit = defineEmits(['filterchange']);

const handleFilter = (e) => {
    const nextFilterToEmit = { nextFilter: props.filter };
    nextFilterToEmit.nextFilter.value = e.value.value;
    emit("filterchange", nextFilterToEmit);
};
</script>
