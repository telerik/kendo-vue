<template>
  <td v-if="rowType === 'groupFooter'">
    {{ computedAggregates }}
  </td>
  <td v-else-if="renderCell" :class="className">
    {{ getNestedValue(field, dataItem) }}
  </td>
  <td
    v-else-if="renderArrow"
    key="'g' + columnIndex"
    :class="'k-group-cell'"
  ></td>
  <td
    v-else-if="columnIndex <= level"
    key="g-colspan"
    :colSpan="columnsCount - columnIndex"
  >
    <p class="k-reset">
      <a @click="onClick" tabIndex="-1" href="#">
        <SvgIcon
          :icon="expanded ? caretAltDownIcon : caretAltRightIcon"
        ></SvgIcon>
      </a>
      {{ dataItem[field] }}
    </p>
  </td>
</template>
<script>
import { SvgIcon } from '@progress/kendo-vue-common';
import { caretAltDownIcon, caretAltRightIcon } from '@progress/kendo-svg-icons';

export default {
  components: {
    SvgIcon,
  },
  emits: {
    click: null,
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
  computed: {
    renderArrow() {
      var returnValue =
        this.columnIndex === undefined ||
        this.level === undefined ||
        this.columnIndex < this.level ||
        this.columnsCount === undefined ||
        this.rowType !== 'groupHeader' ||
        this.dataItem[this.field] === undefined;
      return returnValue && this.dataItem[this.field];
    },
    renderCell() {
      return this.field !== undefined && this.rowType !== 'groupHeader';
    },
    computedAggregates() {
      let renderedString;
      if (this.field === 'UnitPrice') {
        renderedString =
          ' Average: ' + this.dataItem.aggregates.UnitPrice.average.toFixed(2);
      } else if (this.field === 'UnitsInStock') {
        renderedString = ' Sum: ' + this.dataItem.aggregates.UnitsInStock.sum;
      }

      return renderedString;
    },
  },
  data() {
    return { caretAltDownIcon, caretAltRightIcon };
  },
  methods: {
    onClick(e) {
      // @ts-ignore
      this.$emit('click', e, this.dataItem, this.expanded);
    },
    getNestedValue(fieldName, dataItem) {
      const path = fieldName.split('.');
      let data = dataItem;
      path.forEach((p) => {
        data = data ? data[p] : undefined;
      });

      return data;
    },
  },
};
</script>
