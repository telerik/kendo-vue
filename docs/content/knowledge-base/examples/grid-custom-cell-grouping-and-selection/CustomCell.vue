<template>
  <td v-if="renderCell" :class="className">
    <b v-if="field !== 'selected'">{{ getNestedValue(field, dataItem) }}</b>
    <span v-else>
      <KCheckbox
        :checked="getNestedValue(field, dataItem)"
        id="inputId"
        @change="handleOnChange"
      />
      <label class="k-checkbox-label" for="inputId" />
    </span>
  </td>
  <td v-else-if="renderArrow" key="'g' + columnIndex" :class="'k-group-cell'"></td>
  <td
    v-else-if="columnIndex <= level"
    key="g-colspan"
    :colSpan="columnsCount - columnIndex"
  >
    <p class="k-reset">
      <a
        @click="onClick"
        tabindex="-1"
        href="#"
        :class="expanded ? 'k-i-collapse k-icon' : 'k-i-expand k-icon'"
      />
      {{ dataItem[field] }}
    </p>
  </td>
</template>

<script setup>
import { Checkbox as KCheckbox } from "@progress/kendo-vue-inputs";
import { computed } from "vue";

const props = defineProps({
    isSelected: Boolean,
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

const emit = defineEmits(["click", "selectionchange"]);

const renderArrow = computed(() => {
    return (
        props.columnIndex === undefined ||
        props.level === undefined ||
        props.columnIndex < props.level ||
        props.columnsCount === undefined ||
        props.rowType !== "groupHeader" ||
        props.dataItem[props.field] === undefined
    );
});

const renderCell = computed(() => props.field !== undefined && props.rowType !== "groupHeader");

function handleOnChange(event) {
    emit("selectionchange", {
        event: event,
        dataItem: props.dataItem,
    });
}

function onClick(e) {
    emit("click", e);
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
