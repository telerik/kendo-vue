<template>
  <Stepper :value="value" @change="handleChange" :items="items" />
</template>

<script>
import { lockIcon, trackChangesIcon, userIcon } from "@progress/kendo-svg-icons";
import { Stepper } from "@progress/kendo-vue-layout";
export default {
    components: {
        Stepper,
    },
    data() {
        return {
            value: 0,
            items: [
                {
                    label: "Account Info",
                    svgIcon: lockIcon
                },
                {
                    label: "Personal Info",
                    svgIcon: userIcon
                },
                {
                    label: "Payment Details",
                    svgIcon: trackChangesIcon,
                    optional: true,
                },
            ],
        };
    },
    methods: {
        handleChange(e) {
            this.value = e.value;
        },
    },
};
</script>
