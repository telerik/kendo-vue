<template>
  <div>
    <div class="example-config">
      <div class="row">
        <div class="col">
          <h5>Timezone:</h5>
          <DropDownList
            :style="{ width: '200px' }"
            :value="timezone"
            :data-items="timezones"
            @change="handleTimezoneChange"
          />
        </div>
      </div>
    </div>
    <Scheduler
      :data-items="data"
      :model-fields="customModelFields"
      :default-date="displayDate"
      :view="view"
      :views="views"
      :group="group"
      :resources="resources"
      :timezone="timezone"
    >
    </Scheduler>
  </div>
</template>
<script lang="ts">
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import '@progress/kendo-date-math/tz/Etc/UTC';
import '@progress/kendo-date-math/tz/Europe/Sofia';
import '@progress/kendo-date-math/tz/Europe/Madrid';
import '@progress/kendo-date-math/tz/Asia/Dubai';
import '@progress/kendo-date-math/tz/Asia/Tokyo';
import '@progress/kendo-date-math/tz/America/New_York';
import '@progress/kendo-date-math/tz/America/Los_Angeles';
import { timezoneNames } from '@progress/kendo-date-math';
import {
  sampleDataWithCustomSchema,
  displayDate,
  customModelFields,
} from './events-utc';

export default {
  components: {
    Scheduler,
    DropDownList,
  },

  data() {
    return {
      timezone: 'Etc/UTC',
      timezones: timezoneNames(),
      data: sampleDataWithCustomSchema,
      customModelFields: customModelFields,
      view: 'day',
      views: [
        { name: 'timeline', title: 'Timeline' },
        { name: 'day', title: 'Day View' },
        { name: 'week', title: 'Week View' },
        { name: 'month', title: 'Month View' },
        { name: 'agenda', title: 'Agenda View' },
      ],
      displayDate,
      resources: [
        {
          name: 'Rooms',
          data: [
            { text: 'Meeting Room 101', value: 1 },
            { text: 'Meeting Room 201', value: 2, color: '#FF7272' },
          ],
          field: 'RoomID',
          valueField: 'value',
          textField: 'text',
          colorField: 'color',
        },
        {
          name: 'Persons',
          data: [
            { text: 'Peter', value: 1, color: '#5392E4' },
            { text: 'Alex', value: 2, color: '#54677B' },
          ],
          field: 'PersonIDs',
          valueField: 'value',
          textField: 'text',
          colorField: 'color',
        },
      ],
      group: {
        resources: ['Rooms', 'Persons'],
        orientation: 'horizontal',
      },
    };
  },
  methods: {
    handleTimezoneChange(event) {
      console.log(event);
      this.timezone = event.value;
    },
  },
};
</script>
