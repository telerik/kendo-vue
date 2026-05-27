<template>
  <td v-if="!dataItem.inEdit" :class="className">{{ dataItem[field] }}</td>
  <td v-else>
    <DropDownList
      :style="{ width: '100px' }"
      @change="change"
      :value="dataItem[field]"
      :data-items="dataitems"
    />
  </td>
</template>

<script setup>
import { ref } from 'vue';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

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

const emit = defineEmits(['change']);

const dataitems = ref(['True', 'False']);

function change(e) {
    emit('change', e, e.target.value);
}
</script>
