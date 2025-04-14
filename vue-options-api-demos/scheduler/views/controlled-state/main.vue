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
  </div>
  <Scheduler
    :view="view"
    :data-items="sampleData"
    :default-date="displayDate"
    :views="views"
    @viewchange="handleViewChange"
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
  methods: {
    handleViewChange(e) {
      this.view = e.viewName;
      this.ddlValue = this.views.find((el) => el.name === e.viewName);
    },
    handleDropDownListChange(event) {
      this.view = event.value.name;
      this.ddlValue = event.value;
    },
  },
};
</script>
