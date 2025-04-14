<template>
    <div class="k-d-grid k-grid-cols-sm-1 k-grid-cols-md-2 k-gap-4 k-max-w-fit">
        <div class="k-col-span-1">
            <div>
                inputmode=text <i>(default)</i>
            </div>
            <dateinput
                :format='{
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                }'
                :default-value="value"
                :input-attributes="{ inputMode: 'text' }"
                :style="{ width: '300px' }"
            />
        </div>
        <div class="k-col-span-1">
            <div>inputmode=numeric</div>
            <dateinput
                :format="'dd-MM-yyyy HH:mm:ss'"
                :default-value="value"
                :input-attributes="{ inputMode: 'numeric' }"
                :style="{ width: '300px' }"
            />
        </div>
    </div>
</template>
<script>
import { DateInput } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
        'dateinput': DateInput
    },
    data() {
        return {
            value: new Date()
        };
    }
};

</script>
