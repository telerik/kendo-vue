<template>
<div class="example-wrapper">
      <div class="example-config">
        <p>
          The value is: <br />
          start: {{value.start}} <br />
          end: {{value.end}}
        </p>
      </div>
      <DateRangePicker
        :allow-reverse="true"
        @change="handleChange"
        :show="true"
      />
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
    data () {
      return {
        value: {
           start: null,
           end: null,
        }
      }
    },
    methods: {
      handleChange (event) {
        this.value = event.value;
      }
    }
};
</script>
