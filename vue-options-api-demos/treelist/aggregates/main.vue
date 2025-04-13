<template>
  <div>
    <TreeList
      :style="{
        maxHeight: '430px',
        overflow: 'auto',
        width: '100%',
      }"
      :expand-field="expandField"
      :sub-items-field="subItemsField"
      @expandchange="onExpandChange"
      :data-items="processData"
      :columns="columns"
    />
  </div>
</template>

<script>
const dateFormat = '{0:MMMM d, yyyy}';
const subItemsField = 'employees';
const expandField = 'expanded';
import employees from './data';
import {
  TreeList,
  mapTree,
  extendDataItem,
} from '@progress/kendo-vue-treelist';

export default {
  components: {
    TreeList,
  },
  data() {
    return {
      dataItems: [...employees],
      expanded: [],
      dateFormat,
      subItemsField,
      expandField,
      columns: [
        {
          field: 'name',
          title: 'Name',
          width: '34%',
          expandable: true,
        },
        {
          field: 'position',
          title: 'Position',
          width: '33%',
        },
        {
          field: 'hireDate',
          title: 'Hire Date',
          width: '33%',
          format: dateFormat,
        },
      ],
    };
  },
  computed: {
    processData() {
      const data = this.addExpandField(this.dataItems);
      const result = mapTree(data, this.subItemsField, this.aggregateSubItems);

      return this.aggregateSubItems({
        [subItemsField]: result,
      })[subItemsField];
    },
  },
  methods: {
    aggregateSubItems(item) {
      const subItems = item[subItemsField];

      if (subItems && subItems.length) {
        const lastHireDate = subItems.reduce(
          (acc, curr) => Math.max(acc, curr.hireDate, curr.lastHireDate || acc),
          new Date(0)
        );
        const date = new Date(lastHireDate);
        const year = new Intl.DateTimeFormat('en', {
          year: 'numeric',
        }).format(date);
        const month = new Intl.DateTimeFormat('en', {
          month: 'long',
        }).format(date);
        const day = new Intl.DateTimeFormat('en', {
          day: '2-digit',
        }).format(date);
        const hireDateString = `Last employee hired on ${month} ${day}, ${year}`;
        const employeesCount = subItems.reduce(
          (acc, curr) => acc + (curr.employeesCount || 0) + 1,
          0
        );
        const aggregateItem = {
          footer: true,
          name: `${employeesCount} employee(s)`,
          hireDate: hireDateString,
        };
        return extendDataItem(item, subItemsField, {
          employeesCount,
          lastHireDate,
          [subItemsField]: [...subItems, aggregateItem],
        });
      }

      return item;
    },
    onExpandChange(event) {
      this.expanded = event.value
        ? this.expanded.filter((id) => id !== event.dataItem.id)
        : [...this.expanded, event.dataItem.id];
    },
    addExpandField(dataArr) {
      const expanded = this.expanded;

      return mapTree(dataArr, subItemsField, (item) =>
        extendDataItem(item, subItemsField, {
          expanded: expanded.includes(item.id),
        })
      );
    },
  },
};
</script>
