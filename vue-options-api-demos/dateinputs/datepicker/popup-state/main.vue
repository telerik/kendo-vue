<template>
    <div class="row">
         <div class="col-xs-12 col-md-6 example-col">
             <p>Controlled DatePicker</p>
             <datepicker :style="{ width: '230px' }"
                 :show="show"
             ></datepicker>
             <kbutton :theme-color="'primary'" @click="handleClick">Toggle</kbutton>
         </div>
         <div class="col-xs-12 col-md-6 example-col">
             <p>Always shown</p>
             <datepicker :style="{ width: '230px' }"
                 :show="true"
             ></datepicker>
         </div>
    </div>
</template>
<script>
import { DatePicker } from '@progress/kendo-vue-dateinputs';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
      'datepicker': DatePicker,
      'kbutton': Button
    },
     data: function() {
        return {
            show: false
        };
    },
    methods: {
        handleClick(event) {
            this.show = !this.show;
        }
    }
};

</script>
