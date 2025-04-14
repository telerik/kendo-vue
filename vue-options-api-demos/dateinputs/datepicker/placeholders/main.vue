<template>
    <div class="row example-wrapper" :style="{ minHeight: 450 }">
                <div class="col-xs-12 col-md-6 example-col">
                    <p>Full-length format description:</p>
                    <datepicker :style="{ width: '230px' }" :format-placeholder="'wide'" ></datepicker>
                </div>

                <div class="col-xs-12 col-md-6 example-col">
                    <p>Narrow-length format description:</p>
                    <datepicker :style="{ width: '230px' }" :format-placeholder="'narrow'" ></datepicker>
                </div>

                <div class="col-xs-12 col-md-6 example-col">
                    <p>Short-length format description:</p>
                    <datepicker :style="{ width: '230px' }" :format-placeholder="'short'" ></datepicker>
                </div>

                <div class="col-xs-12 col-md-6 example-col">
                    <p>Display defined format:</p>
                    <datepicker :style="{ width: '230px' }"
                        :format="'MM/dd/yyyy'"
                        :format-placeholder="'formatPattern'"
                    ></datepicker>
                </div>

                <div class="col-xs-12 col-md-6 example-col">
                    <p>Custom defined format descriptions</p>
                    <datepicker :style="{ width: '230px' }"
                        :format="'G'"
                        :format-placeholder="customFormatPlaceholder"
                    ></datepicker>
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
             customFormatPlaceholder: {
                year: 'y',
                month: 'M',
                day: 'd'
            }
        };
    }
};

</script>
