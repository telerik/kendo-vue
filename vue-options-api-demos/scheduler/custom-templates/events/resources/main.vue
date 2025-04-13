<template>
  <div>
    <Scheduler
      :style="{ height: '700px' }"
      :data-items="sampleData"
      :default-date="displayDate"
      :views="views"
      :resources="resources"
      :item="'itemRender'"
    >
      <template v-slot:itemRender="{ props }">
        <SchedulerItem v-bind="props">
          <div class="k-event-template" v-if="!props.isAllDay">
            {{ props.title }}
            <span
              :style="{
                padding: '4px',
                margin: '4px',
                'background-color': getOwnerResource(props.dataItem.ownerID)
                  .color,
              }"
            >
              {{ getOwnerResource(props.dataItem.ownerID).text }}
            </span>
            <div :style="{ 'padding-top': '8px', display: 'flex' }">
              <img :src="props.dataItem.image" :style="{ width: '120px' }" :alt="'Event Image'"/>
              <span :style="{ 'padding-left': '5px' }">{{
                props.description
              }}</span>
            </div>
          </div>
          <div class="k-event-template" v-else>
            <img
              :src="'https://static4.depositphotos.com/1004274/315/v/450/depositphotos_3152530-stock-illustration-eco-icon.jpg'"
              :style="{ width: '18px', 'padding-bottom': '5px' }"
              :alt="'Eco Icon'"
            />
            {{ props.title }}
            <span
              :style="{
                padding: '4px',
                margin: '4px',
                'background-color': getOwnerResource(props.dataItem.ownerID)
                  .color,
              }"
            >
              {{ getOwnerResource(props.dataItem.ownerID).text }}
            </span>
          </div>
        </SchedulerItem>
      </template>
    </Scheduler>
  </div>
</template>
<script>
import { Scheduler, SchedulerItem } from '@progress/kendo-vue-scheduler';
import { sampleData, displayDate } from './events-utc';

export default {
  components: {
    Scheduler,
    SchedulerItem,
  },
  methods: {
    getOwnerResource(ownerID) {
      const resource = JSON.parse(
        JSON.stringify(
          this.resources[1].data.filter((el) => el.value === ownerID)
        )
      )[0];
      return resource !== undefined ? resource : '';
    },
  },
  data() {
    return {
      views: [{ name: 'day' }, { name: 'month' }],
      sampleData,
      displayDate,
      resources: [
        {
          name: 'Rooms',
          data: [
            { text: 'Meeting Room 101', value: 1, color: '#56ca85' },
            { text: 'Meeting Room 201', value: 2, color: '#FF7272' },
          ],
          field: 'roomId',
          valueField: 'value',
          textField: 'text',
          colorField: 'color',
        },
        {
          name: 'Persons',
          data: [
            { text: 'Peter', value: 1, color: '#5392E4' },
            { text: 'Alex', value: 2, color: '#58677B' },
            { text: 'Bob', value: 3, color: '#228B22' },
          ],
          field: 'personId',
          valueField: 'value',
          textField: 'text',
          colorField: 'color',
        },
      ],
    };
  },
};
</script>
