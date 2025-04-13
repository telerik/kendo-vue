<template>
     <div class="row">
                <div class="col-md-6">
                    <timepicker :style="{ width: '230px' }"
                        @change="handleChange"
                        :value="value"
                    />
                </div>
                <div class="col-md-6">
                    <div class="example-config">
                      <h5>{{"TimePicker Events"}}</h5>
                      <ul class="event-log" :style="{ maxHeight: '300px' }">
                          <li key={index} v-for="(event, index) in logs">{{event}}</li>
                      </ul>
            </div>
                </div>
            </div>
</template>
<script>
import { TimePicker } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
      'timepicker': TimePicker
    },
    data () {
        return {
           value: new Date(),
           logs: []
        };
    },
    methods: {
         handleChange (event) {
            this.logs.unshift("change: " + event.target.value);

            this.value = event.target.value;
        }
    }
};

</script>
