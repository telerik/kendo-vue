<template>
  <TreeList
    :style="{
      maxHeight: '510px',
      overflow: 'auto',
    }"
    :expand-field="expandField"
    :sub-items-field="subItemsField"
    :data-items="processedData"
    :columns="columns"
    :filter="filter"
    :filterable="true"
    :sort="sort"
    :sortable="true"
    @datastatechange="handleDataStateChange"
    @expandchange="onExpandChange"
  >
    <template v-slot:myCellTemplate="{ props }">
      <td>
        <span
          :style="{
            color: props.value ? 'green' : 'red',
          }"
        >
          {{ props.value }}
        </span>
      </td>
    </template>
    <template v-slot:zeroColumnCellTemplate="{ props }">
      <td
        :class="props.class"
        :colspan="props.colSpan"
        :aria-colindex="props['aria-colindex']"
        :aria-expanded="props['aria-expanded']"
        :aria-selected="props['aria-selected']"
        :role="props.role"
        :data-grid-col-index="props['data-grid-col-index']"
      >
        <span
        class="k-treelist-toggle k-icon k-svg-icon"
          v-for="(iteration, index) in props.level.slice(1)"
          :key="index"
        ></span>

        <span
          @click="
            onExpandChange({
              dataItem: props.dataItem,
              value: props['aria-expanded'],
            })
          "
          :data-prevent-selection="true"
        >
        <SvgIcon :icon="props['aria-expanded']
              ? caretAltDownIcon
              : props.dataItem['employees']
              ? caretAltRightIcon
              : ''" />
      </span>
        <b style="color: brown">{{ props.value }}</b>
      </td>
    </template>
  </TreeList>
</template>

<script>
import employees from './data';
import {
    TreeList,
    filterBy,
    orderBy,
    mapTree,
    extendDataItem,
} from '@progress/kendo-vue-treelist';
import { caretAltDownIcon, caretAltRightIcon } from '@progress/kendo-svg-icons';
import {SvgIcon} from '@progress/kendo-vue-common'

export default {
    components: {
        TreeList,
        SvgIcon
    },
    data() {
        return {
            employees,
            caretAltRightIcon,
            caretAltDownIcon,
            subItemsField: 'employees',
            expandField: 'expanded',
            expanded: [1, 2, 32],
            filter: [],
            sort: [
                {
                    field: 'name',
                    dir: 'asc',
                },
            ],
            columns: [
                {
                    field: 'name',
                    title: 'Name',
                    expandable: true,
                    width: '40%',
                    cell: 'zeroColumnCellTemplate',
                },
                {
                    field: 'position',
                    title: 'Position',
                    width: '40%',
                },
                {
                    field: 'fullTime',
                    title: 'Full Time',
                    width: '20%',
                    cell: 'myCellTemplate',
                },
            ],
        };
    },
    computed: {
        processedData() {
            let data = this.employees;
            let filteredData = filterBy(data, this.filter, this.subItemsField);
            let sortedData = orderBy(filteredData, this.sort, this.subItemsField);
            return this.addExpandField(sortedData);
        },
    },
    methods: {
        getIndent(id) {
            const level = id.filter((el) => el === '.').length;
            return level;
        },
        onExpandChange(e) {
            this.expanded = e.value
                ? this.expanded.filter((id) => id !== e.dataItem.id)
                : [...this.expanded, e.dataItem.id];
        },
        createAppState: function (dataState) {
            this.sort = dataState.sort;
            this.filter = dataState.filter;
        },
        handleDataStateChange: function (event) {
            this.createAppState(event.data);
        },
        addExpandField(dataTree) {
            const expanded = this.expanded;
            return mapTree(dataTree, this.subItemsField, (item) =>
                extendDataItem(item, this.subItemsField, {
                    [this.expandField]: expanded.includes(item.id),
                })
            );
        },
    },
};
</script>
