<template>
    <div class="row">
                <div class="col-xs-12 col-md-6 example-col">
                    <p>Controlled DatePicker</p>
                    <datetimepicker :style="{ width: '260px' }"
                        :show="show"
                    />
                    <kbutton :theme-color="'primary'" @click="handleClick">Toggle</kbutton>
                </div>
                <div class="col-xs-12 col-md-6 example-col">
                    <p>Always shown</p>
                    <datetimepicker :style="{ width: '260px' }"
                        :show="true"
                    />
                </div>
            </div>
</template>
<script>
import { DateTimePicker } from '@progress/kendo-vue-dateinputs';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
      'datetimepicker': DateTimePicker,
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
