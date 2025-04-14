<template>
     <div class="example-wrapper">
                <div class="col-xs-12 col-sm-6 example-col">
                    <p>Select a long date:</p>
                    <dateinput :style="{ width: '230px' }"
                        :format="'dd-MMM-yyyy HH:mm:ss'"
                        v-model="value"
                    ></dateinput>
                </div>
                <div class="col-xs-12 col-sm-6 example-col">
                    <p>Select a short date:</p>
                    <dateinput :style="{ width: '230px' }"
                        :format="'MMMM yyyy'"
                        v-model="value"
                    ></dateinput>
                </div>
                <div class="col-xs-12 col-sm-6 example-col">
                    <p>Custom Skeleton:</p>
                    <dateinput :style="{ width: '230px' }"
                        :format="{
                            skeleton: 'yMMMdEHm'
                        }"
                        v-model="value"
                     ></dateinput>
                </div>
                <div class="col-xs-12 col-sm-6 example-col">
                    <p>Custom Format:</p>
                    <dateinput :style="{ width: '230px' }"
                        :format='{
                            year: "numeric",
                            month: "short"
                        }'
                        v-model="value"
                     ></dateinput>
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
            value: new Date(2017, 2, 10, 13, 30, 0)
        };
    }
};

</script>
