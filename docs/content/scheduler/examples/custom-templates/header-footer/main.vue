<template>
  <div>
    <div class="example-config">
      <div class="row">
        <div class="col-">
          Show/Hide Header:
          <Switch :default-checked="true" @change="handleHeaderChange" />
        </div>
        <div class="col">
          Show/Hide Footer:
          <Switch :default-checked="true" @change="handleFooterChange" />
        </div>
      </div>
    </div>
    <Scheduler
      :data-items="sampleData"
      :default-date="displayDate"
      :views="views"
      :style="{ height: '700px' }"
      header="headerRender"
      footer="footerRender"
    >
      <template #headerRender="{ props }">
        <SchedulerHeader v-if="showHeader">
          <SchedulerNavigation
            @prevclick="props.onPrevclick"
            @nextclick="props.onNextclick"
            @todayclick="props.onTodayclick"
          />
          <span
            :style="{
              'background-color': '#ff7272',
              'padding-top': '5px',
              'padding-bottom': '5px',
              'padding-left': '3px',
              'padding-right': '3px',
            }"
          >
            Something
          </span>
          <NavigationDatePicker
            :value="props.currentDate"
            @change="props.onDatepickerchange"
          />
          <span
            :style="{
              'background-color': '#56ca85',
              'padding-top': '5px',
              'padding-bottom': '5px',
              'padding-left': '3px',
              'padding-right': '3px',
            }"
          >
            Before Spacer
          </span>
          <ToolbarSpacer />
          <span
            :style="{
              'background-color': '#ccff99',
              'padding-top': '5px',
              'padding-bottom': '5px',
              'padding-left': '3px',
              'padding-right': '3px',
            }"
          >
            After Spacer
          </span>
          <SchedulerViewSelector />
        </SchedulerHeader>
      </template>
      <template #footerRender="{ props }">
        <SchedulerFooter v-if="showFooter">
          <BusinessHours
            :slot-duration="props.slotDuration"
            @click="props.onShowworkhoursclick"
          />
          <span
            :style="{
              'background-color': '#ff7272',
              'padding-top': '5px',
              'padding-bottom': '5px',
              'padding-left': '3px',
              'padding-right': '3px',
            }"
          >
            Custom Footer Template
          </span>
        </SchedulerFooter>
      </template>
    </Scheduler>
  </div>
</template>

<script setup>
import { ToolbarSpacer } from '@progress/kendo-vue-buttons';
import { Switch } from '@progress/kendo-vue-inputs';
import {
    Scheduler,
    SchedulerHeader,
    SchedulerFooter,
    BusinessHours,
    SchedulerNavigation,
    NavigationDatePicker,
    SchedulerViewSelector,
} from '@progress/kendo-vue-scheduler';
import { sampleData, displayDate } from './events-utc';
import { ref } from 'vue';

const views = [
    { name: 'week' },
    { name: 'day' },
    { name: 'workWeek' },
    { name: 'month' },
    { name: 'agenda' },
    { name: 'timeline' },
];

const showHeader = ref(true);
const showFooter = ref(true);

function handleHeaderChange() {
    showHeader.value = !showHeader.value;
}

function handleFooterChange() {
    showFooter.value = !showFooter.value;
}
</script>
