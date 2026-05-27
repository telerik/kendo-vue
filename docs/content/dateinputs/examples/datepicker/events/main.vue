<template>
  <div>
    <datepicker
      :style="{ width: '230px' }"
      @focus="onFocus"
      @blur="onBlur"
      @change="onChange"
      @iconclick="onIconClick"
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

<script>
import { DatePicker } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
        datepicker: DatePicker,
    },
    data() {
        return {
            value: null,
            events: [],
        };
    },
    methods: {
        onFocus() {
            this.log('focus');
        },
        onBlur() {
            this.log('blur');
        },
        onChange() {
            this.log('change');
        },
        onIconClick() {
            this.log('iconclick');
        },
        log(event, arg) {
            const events = this.events;
            events.unshift(`${event} ${arg || ''}`);
        },
    },
};
</script>
