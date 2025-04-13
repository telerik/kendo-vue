<template>
  <localization :language="'es-ES'">
    <TreeList
      :style="{
        maxHeight: '510px',
        overflow: 'auto',
      }"
      :expandField="expandField"
      :subItemsField="subItemsField"
      @expandchange="onExpandChange"
      :filter="filter"
      :data-items="processData"
      @filterchange="handleFilterChange"
      :columns="columns"
    />
  </localization>
</template>

<script>
import {
  TreeList,
  filterBy,
  extendDataItem,
  mapTree,
} from '@progress/kendo-vue-treelist';

import { LocalizationProvider, loadMessages } from '@progress/kendo-vue-intl';
import esMessages from './es.json';
import employees from './data';
loadMessages(esMessages, 'es-ES');
const subItemsField = 'employees';
const expandField = 'expanded';
const columns = [
  {
    field: 'name',
    title: 'Nombre',
    width: '320px',
    expandable: true,
  },
  {
    field: 'hireDate',
    title: 'Fecha de contratación',
    width: '280px',
    format: '{0:d}',
  },
  {
    field: 'timeInPosition',
    title: 'Año(s) en posición',
    width: '280px',
  },
  {
    field: 'fullTime',
    title: 'Tiempo completo',
    width: '190px',
  },
];

export default {
  components: {
    TreeList,
    localization: LocalizationProvider,
  },
  data() {
    return {
      dataItems: [...employees],
      filter: [],
      expanded: [1, 2, 32],
      columns,
      subItemsField,
      expandField,
    };
  },
  computed: {
    processData() {
      let data = this.dataItems;
      let filteredData = filterBy(data, this.filter, subItemsField);
      return this.addExpandField(filteredData);
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
      return mapTree(dataTree, subItemsField, (item) =>
        extendDataItem(item, subItemsField, {
          [expandField]: expanded.includes(item.id),
        })
      );
    },
  },
};
</script>
