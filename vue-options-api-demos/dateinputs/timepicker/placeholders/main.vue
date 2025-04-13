<template>
   <div class="row example-wrapper" :style="{minHeight: '450px'}">
            <div class="col-xs-12 col-md-6 example-col">
                <p>Full-length format description:</p>
                <timepicker :style="{ width: '230px' }" :format-placeholder="'wide'"/>
            </div>

            <div class="col-xs-12 col-md-6 example-col">
                <p>Narrow-length format description:</p>
                <timepicker :style="{ width: '230px' }" :forma-placeholder="'narrow'"/>
            </div>

            <div class="col-xs-12 col-md-6 example-col">
                <p>Short-length format description:</p>
                <timepicker :style="{ width: '230px' }" :format-placeholder="'short'"/>
            </div>

            <div class="col-xs-12 col-md-6 example-col">
                <p>Display defined format:</p>
                <timepicker :style="{ width: '230px' }" :format="'HH:mm:ss'" :format-placeholder="'formatPattern'"/>
            </div>

            <div class="col-xs-12 col-md-6 example-col">
                <p>Custom defined format descriptions</p>
                <timepicker :style="{ width: '230px' }" :format="'HH:mm:ss'"
                    :format-placeholder="{ hour: 'h', minute: 'm', second: 's' }"/>
            </div>
        </div>
</template>
<script>
import { TimePicker } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
      'timepicker': TimePicker
    }
};

</script>
