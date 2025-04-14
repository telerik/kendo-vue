<template>
  <div>
    <kFilter
      :fields="fields"
      :value="filter"
      @change="onFilterChange"
      :default-group-filter="defaultGroupFilter"
    >
    </kFilter>
    <br />
    <div class="example-config">
      <h5>{{ title }}</h5>
      <ul class="event-log">
        <li v-for="(event, index) in events" :key="index">{{ event }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Filter, Operators } from '@progress/kendo-vue-data-tools';
import { filterBy } from '@progress/kendo-data-query';
import Logger from './Logger.vue';

export default {
  components: {
    kFilter: Filter,
    Logger,
  },
  data: function () {
    return {
      title: 'Event log',
      events: [],
      defaultGroupFilter: {
        logic: 'and',
        filters: [],
      },
      filter: {
        logic: 'and',
        filters: [
          { field: 'ProductName', operator: 'contains', value: 'an' },
          { field: 'UnitPrice', operator: 'neq', value: 22 },
        ],
      },
      fields: [
        {
          name: 'ProductName',
          label: 'Product Name',
          filter: 'text',
          operators: Operators.text,
        },
        {
          name: 'UnitPrice',
          label: 'Unit Price',
          filter: 'numeric',
          operators: Operators.numeric,
        },
        {
          name: 'FirstOrderedOn',
          label: 'First Ordered On',
          filter: 'date',
          operators: Operators.date,
        },
        {
          name: 'Discontinued',
          label: 'Discontinued',
          filter: 'boolean',
          operators: Operators.boolean,
        },
      ],
    };
  },
  computed: {
    eventsList() {
      return this.events;
    },
  },
  methods: {
    onFilterChange(event) {
      if (event.filter !== null) {
        this.filter = event.filter;
        this.log('filterChange', event);
      } else {
        this.filter = this.defaultGroupFilter;
      }
    },
    log: function (event) {
      this.events.unshift(`Event: ${event} was triggered`);
    },
  },
};
</script>
