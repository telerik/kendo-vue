<template>
 <LocalizationProvider :language="'es-ES'">
        <IntlProvider :locale="'es'">
  <Scheduler
    :view="view"
    :data-items="sampleData"
    :default-date="displayDate"
    :views="views"
    @viewchange="handleViewChange"
     @itemclick="handleItemClick"
    @itemdoubleclick="handleItemDoubleClick"
    @slotclick="handleSlotClick"
    @slotdoubleclick="handleSlotDoubleClick"
    @taskclick="handleTaskClick"
    @taskdoubleclick="handleTaskDoubleClick"
  >
  </Scheduler>
  </IntlProvider>
  </LocalizationProvider>
</template>
<script lang="ts">
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { sampleData, displayDate } from './events-utc';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import {
  IntlProvider,
  load,
  LocalizationProvider,
  loadMessages,
} from "@progress/kendo-vue-intl";
import likelySubtags from "cldr-core/supplemental/likelySubtags.json";
import currencyData from "cldr-core/supplemental/currencyData.json";
import weekData from "cldr-core/supplemental/weekData.json";
import numbers from "cldr-numbers-full/main/es/numbers.json";
import currencies from "cldr-numbers-full/main/es/currencies.json";
import caGregorian from "cldr-dates-full/main/es/ca-gregorian.json";
import dateFields from "cldr-dates-full/main/es/dateFields.json";
import timeZoneNames from "cldr-dates-full/main/es/timeZoneNames.json";
load(
  likelySubtags,
  currencyData,
  weekData,
  numbers,
  currencies,
  caGregorian,
  dateFields,
  timeZoneNames
);
import esMessages from "./es.json";
loadMessages(esMessages, "es-ES");

export default {
  components: {
    IntlProvider,
    LocalizationProvider,
    Scheduler,
    dropdownlist: DropDownList,
  },
  data() {
    return {
      ddlValue: { name: 'day', title: 'Day' },
      view: 'day',
      views: [
        { name: 'timeline',  columnWidth: 50, workDayStart: '12:00' },
        { name: 'day', class:'aaa', showWorkHours: false, startTime: '09:00', endTime: '11:00', workDayStart: '10:00', workDayEnd: '10:30' },
        { name: 'week', class:'bbb', showWorkHours: true, startTime: '12:00', endTime: '19:00', workDayStart: '13:00', workDayEnd: '14:30'},
        { name: 'workWeek', class:'ccc', showWorkHours: true, startTime: '12:00', endTime: '19:00', workDayStart: '13:00', workDayEnd: '14:30'},
        { name: 'agenda', class:'eeee', numberOfDays: 3, step: 4},
        { name: 'month', class:'ddd', itemsPerSlot: 3 }
      ],
      sampleData,
      displayDate,
    };
  },
  methods: {
    handleViewChange(e) {
      this.view = e.viewName;
      this.ddlValue = this.views.find((el) => el.name === e.viewName);
    },
    handleDropDownListChange(event) {
      this.view = event.value.name;
      this.ddlValue = event.value;
    },
    handleItemClick(args) {
          console.log('itmeclick', args)
      },
      handleItemDoubleClick(args) {
          console.log('itmedoubleclick', args)
      },
      handleSlotClick(args) {
          console.log('slotclick', args)
      },
      handleSlotDoubleClick(args) {
          console.log('slotdoubleclick', args)
      },
      handleTaskClick(args) {
          console.log('taskclick', args)
      },
      handleTaskDoubleClick(args) {
          console.log('taskdoubleclick', args)
      }
  },
};
</script>
