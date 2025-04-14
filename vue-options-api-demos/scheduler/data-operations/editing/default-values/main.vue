<template>
  <Scheduler
    :data-items="sampleData"
    :default-date="displayDate"
    :views="views"
    :view="defaultView"
    :resources="resources"
    :modifyInitialFormValues="modifyInitialFormValues"
    :editable="editable"
    @datachange="handleDataChange"
  >
  </Scheduler>
</template>
<script>
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { guid } from '@progress/kendo-vue-common';
import { sampleData, displayDate } from './events-utc';

export default {
  components: {
    Scheduler,
  },
  methods: {
    modifyInitialFormValues(dataItem) {
      return dataItem.roomId === undefined
        ? {
            ...dataItem,
            roomId: 1,
            isAllDay: true,
          }
        : dataItem;
    },
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
  data() {
    return {
      defaultView: 'day',
      editable: {
        add: true,
        remove: true,
        drag: false,
        resize: false,
        select: false,
        edit: true,
      },
      views: [
        { name: 'timeline' },
        { name: 'month' },
        { name: 'day' },
        { name: 'week' },
        { name: 'workweek' },
        { name: 'agenda' },
      ],
      resources: [
        {
          name: 'Rooms',
          data: [
            {
              text: 'Meeting Room 101',
              value: 1,
              color: 'orange',
            },
            {
              text: 'Meeting Room 201',
              value: 2,
              color: 'green',
            },
          ],
          field: 'roomId',
          valueField: 'value',
          textField: 'text',
          colorField: 'color',
        },
        {
          name: 'Persons',
          data: [
            {
              text: 'Peter',
              value: 1,
              color: 'red',
            },
            {
              text: 'Alex',
              value: 2,
              color: 'blue',
            },
          ],
          field: 'personId',
          valueField: 'value',
          textField: 'text',
          colorField: 'color',
        },
      ],
      sampleData,
      displayDate,
    };
  },
};
</script>
