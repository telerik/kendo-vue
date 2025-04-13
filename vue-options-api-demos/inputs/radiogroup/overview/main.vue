<template>
    <div>
        <radiogroup :data-items="dataItems" />
    </div>
</template>
<script>
import { RadioGroup } from '@progress/kendo-vue-inputs';

export default {
    components: {
        radiogroup: RadioGroup
    },
    data() {
        return {
            dataItems: [
            {
                label: "Female",
                value: "female",
            },
            {
                label: "Male",
                value: "male",
            },
            {
                label: "Other",
                value: "other",
            },
            ]
        }
    }
};

</script>
