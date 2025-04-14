<template>
  <div>
    <TreeList
      :style="{
        maxHeight: '510px',
        overflow: 'auto',
      }"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      @expandchange="onExpandChange"
      :filter="filter"
      :filterable="true"
      :data-items="processedData"
      @filterchange="handleFilterChange"
      :columns="columns"
    >
      <template v-slot:MyDropDownFilter="{ props }">
        <DropDownFilter
          :data-item="props.dataItem"
          :data="dropDownData"
          :default-item="'Select Position'"
          @change="
            (ev) => {
              props.onChange({
                operator: 'eq',
                field: props.field,
                value: ev.value,
                syntheticEvent: ev.syntheticEvent,
              });
            }
          "
        />
      </template>
    </TreeList>
  </div>
</template>

<script>
import employees from './data';
import DropDownFilter from './DropDownListFilter.vue';
import {
  TreeList,
  filterBy,
  extendDataItem,
  mapTree,
} from '@progress/kendo-vue-treelist';

export default {
  components: {
    TreeList,
    DropDownFilter,
  },
  data() {
    return {
      dropDownData: [],
      dataItems: [...employees],
      filter: [],
      expanded: [1, 2, 32],
      subItemsField: 'employees',
      expandField: 'expanded',
      columns: [
        {
          field: 'name',
          title: 'Name',
          width: '400px',
          expandable: true,
        },
        {
          field: 'position',
          title: 'Position',
          width: '300px',
          filterCell: 'MyDropDownFilter',
        },
        {
          field: 'hireDate',
          title: 'Hire Date',
          width: '300px',
          format: '{0:d}',
        },
        {
          field: 'fullTime',
          title: 'Full Time',
          width: '300px',
        },
      ],
    };
  },
  mounted() {
    const positions = new Set();
    const resultTree = mapTree(this.dataItems, this.subItemsField, (item) => {
      positions.add(item.position);
    });
    this.dropDownData = Array.from(positions);
  },
  computed: {
    processedData() {
      let data = this.dataItems;
      const filteredData = filterBy(data, this.filter, this.subItemsField);
      const resultTree = mapTree(filteredData, this.subItemsField, (item) => {
        return extendDataItem(item, this.subItemsField, {
          [this.expandField]: this.expanded.includes(item.id),
        });
      });
      return resultTree;
    },
  },
  methods: {
    onExpandChange(e) {
      this.expanded = e.value
        ? this.expanded.filter((id) => id !== e.dataItem.id)
        : [...this.expanded, e.dataItem.id];
    },
    handleFilterChange(event) {
      this.filter = event.filter;
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
