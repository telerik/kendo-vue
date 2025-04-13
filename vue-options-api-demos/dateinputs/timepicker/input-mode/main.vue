<template>
    <div class="k-d-grid k-grid-cols-sm-1 k-grid-cols-md-2 k-gap-4 k-max-w-fit">
        <div class="k-col-span-1">
            <div>
                inputmode=text <i>(default)</i>
            </div>
            <timepicker
                :default-value="value"
                :format="'a HH:mm:ss'"
                :input-attributes="{ inputMode: 'text' }"
                :style="{ width: '300px' }"
            />
        </div>
        <div class="k-col-span-1">
            <div>inputmode=numeric</div>
            <timepicker
                :default-value="value"
                :format="'HH:mm:ss'"
                :input-attributes="{ inputMode: 'numeric' }"
                :style="{ width: '300px' }"
            />
        </div>
        <div class="k-col-span-1">
            <div>
                inputmode=none <br />
                <i>(the user can only pick a value from the popup)</i>
            </div>
            <timepicker
                :default-value="value"
                :input-attributes="{ inputMode: 'none' }"
                :style="{ width: '300px' }"
            />
        </div>
    </div>
</template>
<script>
import { TimePicker } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
        'timepicker': TimePicker
    },
    data() {
        return {
            value: new Date()
        };
    }
};

</script>
