<template>
    <div class="k-d-grid k-grid-cols-sm-1 k-grid-cols-md-2 k-gap-4 k-max-w-fit">
        <div class="k-col-span-1">
            <div>
                inputmode=text <i>(default)</i>
            </div>
            <datepicker
                :default-value="value"
                :format='{
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                }'
                :input-attributes="{ inputMode: 'text' }"
                :style="{ width: '300px' }"
            />
        </div>
        <div class="k-col-span-1">
            <div>inputmode=numeric</div>
            <datepicker
                :default-value="value"
                :format="'dd-MM-yyyy HH:mm:ss'"
                :input-attributes="{ inputMode: 'numeric' }"
                :style="{ width: '300px' }"
            />
        </div>
        <div class="k-col-span-1">
            <div>
                inputmode=none <br />
                <i>(the user can only pick a value from the popup)</i>
            </div>
            <datepicker
                :default-value="value"
                :input-attributes="{ inputMode: 'none' }"
                :style="{ width: '300px' }"
            />
        </div>
    </div>
</template>
<script>
import { DatePicker } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
        'datepicker': DatePicker
    },
    data() {
        return {
            value: new Date()
        };
    }
};

</script>
