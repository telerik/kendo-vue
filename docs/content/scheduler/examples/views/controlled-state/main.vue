<template>
  <div class="example-config">
    Select Scheduler view:
    <DropDownList
      :data-items="views"
      :text-field="'title'"
      :data-item-key="'name'"
      :value="ddlValue"
      @change="handleDropDownListChange"
    />
  </div>
  <Scheduler
    :view="view"
    :data-items="sampleData"
    :default-date="displayDate"
    :views="views"
    @viewchange="handleViewChange"
  />
</template>

<script setup>
import { ref } from 'vue';
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { sampleData, displayDate } from './events-utc';

const ddlValue = ref({ name: 'day', title: 'Day' });
const view = ref('day');
const views = ref([
    { name: 'day', title: 'Day' },
    { name: 'week', title: 'Week' },
    { name: 'month', title: 'Month' },
]);

const handleViewChange = (e) => {
    view.value = e.viewName;
    ddlValue.value = views.value.find((el) => el.name === e.viewName);
};

const handleDropDownListChange = (event) => {
    view.value = event.value.name;
    ddlValue.value = event.value;
};
</script>
