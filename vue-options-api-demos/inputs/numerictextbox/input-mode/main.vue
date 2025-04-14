<template>
    <div class="k-d-grid k-grid-cols-sm-1 k-grid-cols-md-2 k-gap-4 k-max-w-fit">
        <div class="k-col-span-1">
            <div>inputmode=numeric</div>
            <numerictextbox
                :format="'n0'"
                :default-value="value"
                :input-attributes="{ inputMode: 'numeric' }"
                :input-prefix="'prefix'"
                :style="{ width: '300px' }"
            >
                <template v-slot:prefix>
                    <svgicon :icon="mapMarkerTargetIcon" />
                </template>
            </numerictextbox>
        </div>
        <div class="k-col-span-1">
            <div>inputmode=decimal</div>
            <numerictextbox
                :format="'n4'"
                :default-value="value2"
                :input-attributes="{ inputMode: 'decimal' }"
                :input-prefix="'prefix'"
                :style="{ width: '300px' }"
            >
                <template v-slot:prefix>
                    <svgicon :icon="mapMarkerTargetIcon" />
                </template>
            </numerictextbox>
        </div>
    </div>
</template>
<script>
import { NumericTextBox } from '@progress/kendo-vue-inputs';
import { SvgIcon } from "@progress/kendo-vue-common";
import { mapMarkerTargetIcon } from "@progress/kendo-svg-icons";

export default {
    components: {
        'numerictextbox': NumericTextBox,
        'svgicon': SvgIcon,
    },
    data() {
        return {
            value: 42,
            value2: 42.6977,
            mapMarkerTargetIcon
        };
    }
};

</script>
