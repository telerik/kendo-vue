<template>
    <div class="row example-wrapper" :style="{minHeight: '450px'}">
            <div class="col-xs-12 col-md-6 example-col">
                <p>Full-length format description:</p>
                <datetimepicker :style="{ width: '260px' }" :format-placeholder="'wide'" :width="'300px'"/>
            </div>

            <div class="col-xs-12 col-md-6 example-col">
                <p>Narrow-length format description:</p>
                <datetimepicker :style="{ width: '260px' }" :forma-placeholder="'narrow'" :width="'300px'"/>
            </div>

            <div class="col-xs-12 col-md-6 example-col">
                <p>Short-length format description:</p>
                <datetimepicker :style="{ width: '260px' }" :format-placeholder="'short'" :width="'300px'"/>
            </div>

            <div class="col-xs-12 col-md-6 example-col">
                <p>Display defined format:</p>
                <datetimepicker :style="{ width: '260px' }" :format="'MM/dd/yyyy hh:mm'" :format-placeholder="'formatPattern'" :width="'300px'"/>
            </div>

            <div class="col-xs-12 col-md-6 example-col">
                <p>Custom defined format descriptions</p>
                <datetimepicker :style="{ width: '260px' }" :format="'MM/dd/yyyy h:mm'"
                    :format-placeholder="{ year: 'y', month: 'M', day: 'd', hour: 'hour', minute: 'min' }"
                    :width="'300px'" />
            </div>
        </div>
</template>
<script>
import { DateTimePicker } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
      'datetimepicker': DateTimePicker
    }
};

</script>
