<template>
  <chip
    :rounded="'full'"
     :data-item="dataItem"
    :disabled="winterMonths.some((f) => f === dataItem.value)"
    :style="{backgroundColor: colorMap[dataItem.value]}"
    :text="text"
    :value="value"
     :removable="true"/>
</template>
<script>
import { Chip } from '@progress/kendo-vue-buttons';

const colorMap = {
    '1': '#B4E5F4',
    '2': '#B4E5F4',
    '3': '#B4E5F4',
    '4': '#F0C88B',
    '5': '#F0C88B',
    '6': '#F0C88B'
};

const winterMonths = [
    '1', '2', '3'
];

export default {
    name: 'CustomChip',
    components: {
        'chip': Chip,
    },
    props: {
        dataItem: Object,
        value: String,
        text: String
    },
    data () {
        return {
            winterMonths: winterMonths,
            colorMap: colorMap
        };
    }
}
</script>
