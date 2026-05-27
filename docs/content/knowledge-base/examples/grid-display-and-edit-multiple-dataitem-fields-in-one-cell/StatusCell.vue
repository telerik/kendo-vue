<template>
  <td v-if="!dataItem.inEdit" :class="className">
    <div class="status-cell">
      Status: {{ dataItem[field].active }}
    </div>
    <div class="status-cell">
      Public: {{ dataItem[field].public }}
    </div>
    <div class="status-cell">
      Hide: {{ dataItem[field].hide }}
    </div>
  </td>
  <td :class="className" v-else>
    <div class="status-cell">
      Status:
      <Checkbox :checked="dataItem[field].active" @change="activeChange" />
    </div>
    <div class="status-cell">
      Public:
      <Checkbox :checked="dataItem[field].public" @change="publicChange" />
    </div>
    <div class="status-cell">
      Hide:
      <Checkbox :checked="dataItem[field].hide" @change="hideChange" />
    </div>
  </td>
</template>

<script setup>
import { Checkbox } from '@progress/kendo-vue-inputs';

defineProps({
    field: String,
    dataItem: Object,
    className: String,
});

const emit = defineEmits(['activeChange', 'publicChange', 'hideChange']);

const activeChange = (e) => {
    emit('activeChange', e, e.value);
};

const publicChange = (e) => {
    emit('publicChange', e, e.value);
};

const hideChange = (e) => {
    emit('hideChange', e, e.value);
};
</script>

<style>
.status-cell {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 5px;
}
</style>
