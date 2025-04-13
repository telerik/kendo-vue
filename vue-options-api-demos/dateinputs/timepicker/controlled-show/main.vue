<template>
  <div class="row">
                <div class="col-xs-12 col-md-6 example-col">
                    <p>Controlled TimePicker</p>
                    <timepicker :style="{ width: '230px' }"
                        :show="show"
                    />&nbsp;
                    <kbutton :theme-color="'primary'" @click="handleClick">Toggle</kbutton>
                </div>
                <div class="col-xs-12 col-md-6 example-col">
                    <p>Always shown</p>
                    <timepicker :style="{ width: '230px' }"
                        :show="true"
                    />
                </div>
            </div>
</template>
<script>
import { TimePicker } from '@progress/kendo-vue-dateinputs';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
      'timepicker': TimePicker,
      'kbutton': Button
    },
    data () {
        return {
           show: false
        };
    },
    methods: {
       handleClick (event) {
          this.show = !this.show;
       }
    }
};

</script>
