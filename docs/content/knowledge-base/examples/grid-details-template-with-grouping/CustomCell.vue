<template>
  <td v-if="renderCell && field !== 'expanded'" :class="className">
    <b>{{ getNestedValue(field, dataItem) }}</b>
  </td>
  <td v-else-if="renderCell" :class="'k-hierarchy-cell'">
    <span :class="customClass" @click="onDetailClick" />
  </td>
  <td v-else-if="renderArrow" key="'g' + columnIndex" :class="'k-group-cell'"></td>
  <td
    v-else-if="columnIndex <= level"
    key="g-colspan"
    :colSpan="columnsCount - columnIndex"
  >
    <p class="k-reset">
      <span
        @click="onClick"
        tabindex="-1"
        :class="expanded ? 'k-i-collapse k-icon' : 'k-i-expand k-icon'"
      />
      {{ dataItem[field] }}
    </p>
  </td>
</template>

<script setup>
import { computed } from "vue";

defineProps({
    detail: String,
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

const emit = defineEmits(["click"]);

const renderArrow = computed(() => {
    return (
        columnIndex === undefined ||
    level === undefined ||
    columnIndex < level ||
    columnsCount === undefined ||
    rowType !== "groupHeader" ||
    dataItem[field] === undefined
    );
});

const renderCell = computed(() => field !== undefined && rowType !== "groupHeader");

const customClass = computed(() => {
    const expanded = getNestedValue(field, dataItem);
    return expanded ? "k-icon k-i-minus" : "k-icon k-i-plus";
});

function onClick(e) {
    emit("click", e, dataItem, expanded);
}

function onDetailClick(e) {
    const expanded = getNestedValue(field, dataItem);
    emit("click", e, dataItem, expanded);
}

function getNestedValue(fieldName, dataItem) {
    const path = fieldName.split(".");
    let data = dataItem;
    path.forEach((p) => {
        data = data ? data[p] : undefined;
    });
    return data;
}
</script>
