<template>
 <div class="row">
        <div class="col-xs-12 col-md-12 example-col">
             <p>DatePicker with default shown state</p>
            <datepicker :style="{ width: '230px' }"
                :default-show="defaultShow"
             >
             </datepicker>
        </div>
    </div>
</template>
<script>
import { DatePicker } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
      'datepicker': DatePicker
    },
    data: function() {
        return {
            defaultShow: true
        };
    }
};

</script>
