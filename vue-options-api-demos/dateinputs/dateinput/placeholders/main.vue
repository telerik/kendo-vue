<template>
<div id="vueapp" class="vue-app">
    <div class="row example-wrapper" :style="{ minHeight: 450 }">
                <div class="col-xs-12 col-md-6 example-col">
                    <p>Full-length format description:</p>
                    <dateinput :style="{ width: '230px' }" :format-placeholder="'wide'" ></dateinput>
                </div>

                <div class="col-xs-12 col-md-6 example-col">
                    <p>Narrow-length format description:</p>
                    <dateinput :style="{ width: '230px' }" :format-placeholder="'narrow'" ></dateinput>
                </div>

                <div class="col-xs-12 col-md-6 example-col">
                    <p>Short-length format description:</p>
                    <dateinput :style="{ width: '230px' }" :format-placeholder="'short'" ></dateinput>
                </div>

                <div class="col-xs-12 col-md-6 example-col">
                    <p>Display defined format:</p>
                    <dateinput :style="{ width: '230px' }"
                        :format="'MM/dd/yyyy'"
                        :format-placeholder="'formatPattern'"
                    ></dateinput>
                </div>

                <div class="col-xs-12 col-md-6 example-col">
                    <p>Custom defined format descriptions</p>
                    <dateinput :style="{ width: '230px' }"
                        :format="'G'"
                        :format-placeholder="customFormatPlaceholder"
                    ></dateinput>
                </div>
    </div>
</div>
</template>
<script>
import { DateInput } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
      'dateinput': DateInput
    },
    data: function() {
        return {
             customFormatPlaceholder: {
                year: 'y',
                month: 'M',
                day: 'd',
                hour: 'h',
                minute: 'm',
                second: 's'
            }
        };
    }
};

</script>
