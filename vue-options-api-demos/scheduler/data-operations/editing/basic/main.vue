<template>
  <Scheduler
    :data-items="sampleData"
    :default-date="displayDate"
    :views="views"
    :view="view"
    :editable="editable"
    @datachange="handleDataChange"
  ></Scheduler>
</template>
<script>
import { displayDate, sampleData } from './events-utc';
import { guid } from '@progress/kendo-vue-common';
import { Scheduler } from '@progress/kendo-vue-scheduler';

export default {
  components: {
    Scheduler,
  },
  data() {
    return {
      view: 'day',
      editable: {
        add: true,
        remove: true,
        drag: true,
        resize: true,
        edit: true,
      },
      views: [
        { name: 'day' },
        { name: 'timeline' },
        { name: 'week' },
        { name: 'agenda' },
      ],
      sampleData,
      displayDate,
    };
  },
  methods: {
    handleDataChange({ created, updated, deleted }) {
      const newData = [...this.sampleData] // Filter the deleted items
        .filter(
          (item) =>
            deleted.find((current) => current.id === item.id) === undefined
        ) // Find and replace the updated items
        .map(
          (item) => updated.find((current) => current.id === item.id) || item
        ) // Add the newly created items and assign an `id`.
        .concat(
          created.map((item) =>
            Object.assign({}, item, {
              id: guid(),
            })
          )
        );

      this.sampleData = newData;
    },
  },
};
</script>
