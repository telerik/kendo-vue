<template>
  <div class="example-config">
    Select Scheduler view:
    <dropdownlist
      :data-items="views"
      :text-field="'title'"
      :data-item-key="'name'"
      :value="ddlValue"
      @change="handleDropDownListChange"
    >
    </dropdownlist>
    <div>start: {{ start }} <div>
    <div>end: {{ end }} </div>
  </div>
  <Scheduler
    :view="view"
    :data-items="sampleData"
    :default-date="displayDate"
    :views="views"
    @viewchange="handleViewChange"
    @datechange="handleDateChange"
  >
  </Scheduler>
</template>
<script>
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { sampleData, displayDate } from './events-utc';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

export default {
  components: {
    Scheduler,
    dropdownlist: DropDownList,
  },
  data() {
    return {
      start: null,
      end: null,
      ddlValue: { name: 'day', title: 'Day' },
      view: 'day',
      views: [
        { name: 'day', title: 'Day' },
        { name: 'week', title: 'Week' },
        { name: 'month', title: 'Month' },
      ],
      sampleData,
      displayDate,
    };
  },
  mounted() {
    this.setRanges();
  },
  updated() {
    this.setRanges();
  },
  methods: {
    setRanges() {
      if (document) {
        const allSlots = document.querySelectorAll(
          '.k-scheduler-body .k-scheduler-cell.k-slot-cell'
        );
        const firstSlot = allSlots[0];
        const lastSlot = allSlots[allSlots.length - 1];
        this.start = new Date(
          parseInt(firstSlot.getAttribute('data-slot-start'), 10)
        );
        this.end = new Date(
          parseInt(lastSlot.getAttribute('data-slot-end'), 10)
        );
      }
    },
    handleViewChange(e) {
      this.view = e.viewName;
      this.ddlValue = this.views.find((el) => el.name === e.viewName);
    },
    handleDateChange(e) {
      this.displayDate = e.date;
    },
    handleDropDownListChange(event) {
      this.view = event.value.name;
      this.ddlValue = event.value;
    },
  },
};
</script>
