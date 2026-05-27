<template>
  <ComboBox
    :style="{ width: '230px' }"
    :data-items="items"
    :text-field="'text'"
    :filterable="true"
    @change="handleChange"
    @filterchange="filterChange"
  />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ComboBox } from "@progress/kendo-vue-dropdowns";
import { filterBy } from "@progress/kendo-data-query";

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

const emit = defineEmits(['change']);
const items = ref([]);

onMounted(() => {
    items.value = props.filterOptions.slice();
});

const handleChange = (e) => {
    const nextFilterToEmit = {
        nextFilter: {
            ...props.filter,
            value: e.value ? e.value.text : "",
        },
    };
    emit("change", nextFilterToEmit);
};

const filterData = (filter) => {
    const data = props.filterOptions.slice();
    return filterBy(data, filter);
};

const filterChange = (event) => {
    items.value = filterData(event.filter);
};
</script>
