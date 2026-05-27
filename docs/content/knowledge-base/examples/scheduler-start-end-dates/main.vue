<template>
  <div class="example-config">
    Select Scheduler view:
    <DropDownList
      :data-items="views"
      text-field="title"
      data-item-key="name"
      :value="ddlValue"
      @change="handleDropDownListChange"
    />
    <div>start: {{ start }} </div>
    <div>end: {{ end }} </div>
  </div>
  <Scheduler
    :view="view"
    :data-items="sampleData"
    :default-date="displayDate"
    :views="views"
    @viewchange="handleViewChange"
    @datechange="handleDateChange"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { sampleData, displayDate } from './events-utc';

const start = ref(null);
const end = ref(null);
const ddlValue = ref({ name: 'day', title: 'Day' });
const view = ref('day');
const views = [
    { name: 'day', title: 'Day' },
    { name: 'week', title: 'Week' },
    { name: 'month', title: 'Month' },
];

function setRanges() {
    if (document) {
        const allSlots = document.querySelectorAll(
            '.k-scheduler-body .k-scheduler-cell.k-slot-cell'
        );
        const firstSlot = allSlots[0];
        const lastSlot = allSlots[allSlots.length - 1];
        start.value = new Date(parseInt(firstSlot.getAttribute('data-slot-start'), 10));
        end.value = new Date(parseInt(lastSlot.getAttribute('data-slot-end'), 10));
    }
}

function handleViewChange(e) {
    view.value = e.viewName;
    ddlValue.value = views.find((el) => el.name === e.viewName);
}

function handleDateChange(e) {
    displayDate.value = e.date;
}

function handleDropDownListChange(event) {
    view.value = event.value.name;
    ddlValue.value = event.value;
}

onMounted(() => {
    setRanges();
});
</script>
