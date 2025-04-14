<template>
<div id="vueapp" class="vue-app">
  <div class="example-wrapper">
        <div class="example-config">
            <p>
                The value is: <br />
                start: {{value.start ? value.start.toDateString() : ''}} <br />
                end: {{value.end ? value.end.toDateString() : ''}}
            </p>
        </div>
        <calendar
            :allow-reverse="true"
            @change="handleChange"
            :mode="'range'"
        ></calendar>
    </div>
</div>
</template>
<script>
import { Calendar } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
      'calendar': Calendar
    },
    data: function() {
        return {
             value: {
                start: null,
                end: null
            }
        }
    },
    methods: {
        handleChange (event) {
            this.value = event.target.value;
        }
    }
};

</script>
