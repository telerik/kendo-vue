<template>
  <div
    class="k-grid"
    :style="{
      display: 'block',
      position: 'absolute',
      zIndex: 20000,
      padding: '8px 12px',
      top: top + 'px',
      left: left + 'px',
    }"
  >
    <table class="k-table k-grid-table">
      <tbody class="k-table-tbody">
        <tr class="k-table-row k-master-row">
          <td class="k-table-td">
            <SvgIcon :icon="hintIcon" :style="{ cursor: 'move' }" />
          </td>
          <td class="k-table-td">{{ dataItem.ProductID }}</td>
          <td class="k-table-td">{{ dataItem.ProductName }}</td>
          <td class="k-table-td">{{ dataItem.UnitPrice }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { SvgIcon } from '@progress/kendo-vue-common';
import { insertMiddleIcon, cancelIcon } from '@progress/kendo-svg-icons';

const props = defineProps({
    left: Number,
    top: Number,
    showContent: Boolean,
    dataItem: {
        type: Object,
        default: () => ({}),
    },
});

const hintIcon = computed(() =>
    props.showContent ? insertMiddleIcon : cancelIcon
);
</script>
