<template>
 <div class="example-wrapper">
      <DateRangePicker v-model="value"/>
      <p>
        (use Alt+<code>↓</code> to open the calendar, <code>←</code> and{{" "}}
        <code>→</code> to navigate, <code>↑</code> to increment and{{" "}}
        <code>↓</code> to decrement the value)
      </p>
    </div>
</template>

<script>

import {
 DateRangePicker
    } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
       DateRangePicker
    },
    data() {
      return {
        value: {
          start: new Date(2022, 12, 7),
          end: new Date(2022, 12, 9)
        }
      }
    }
};
</script>

