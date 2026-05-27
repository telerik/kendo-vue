<template>
  <div>
    <DropDownList
      :style="{ width: '230px' }"
      :data-items="source"
      @open="onOpen"
      @close="onClose"
      @focus="onFocus"
      @blur="onBlur"
      @change="onChange"
      @filterchange="onFilterChange"
      :filterable="true"
    />
    <br />
    <br />
    <div class="example-config">
      <h5>Event log</h5>
      <ul class="event-log" :style="{ textAlign: 'right' }">
        <li v-for="(event, index) in events" :key="index">
          {{ event }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

const source = ['Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan'];
const events = ref([]);

function onOpen() {
    log('open');
}

function onClose() {
    log('close');
}

function onFocus() {
    log('focus');
}

function onBlur() {
    log('blur');
}

function onChange(event) {
    log('change', event.target.value);
}

function onFilterChange(event) {
    log('filterChange', event.filter.value);
}

function log(event, arg) {
    events.value.unshift(`${event} ${arg || ''}`);
}
</script>
