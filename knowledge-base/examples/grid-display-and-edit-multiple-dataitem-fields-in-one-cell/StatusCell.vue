<template>
  <td v-if="!dataItem.inEdit" :class="className">
    <div class="status-cell">
      Status:
      {{ dataItem[field].active }}
    </div>
    <div class="status-cell">
      Public:
      {{ dataItem[field].public }}
    </div>
    <div class="status-cell">
      Hide:
      {{ dataItem[field].hide }}
    </div>
  </td>
  <td :class="className" v-else>
    <div class="status-cell">
      Status:
      <kcheckbox :checked="dataItem[field].active" @change="activeChange" />
    </div>
    <div class="status-cell">
      Public:
      <kcheckbox :checked="dataItem[field].public" @change="publicChange" />
    </div>
    <div class="status-cell">
      Hide:
      <kcheckbox :checked="dataItem[field].hide" @change="hideChange" />
    </div>
  </td>
</template>
<script>
import { Checkbox } from '@progress/kendo-vue-inputs';
export default {
  components: {
    kcheckbox: Checkbox,
  },
  props: {
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
  },
  methods: {
    activeChange(e) {
      this.$emit('activeChange', e, e.value);
    },
    publicChange(e) {
      this.$emit('publicChange', e, e.value);
    },
    hideChange(e) {
      this.$emit('hideChange', e, e.value);
    },
  },
};
</script>
<style>
.status-cell {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 5px;
}
</style>
