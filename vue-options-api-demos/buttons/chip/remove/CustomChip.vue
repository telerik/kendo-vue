<template>
  <chip
    :rounded="'full'"
     :data-item="dataItem"
    :text="text"
    :value="value"
    :removable="true"/>
</template>
<script>
import { Chip } from '@progress/kendo-vue-buttons';

export default {
    name: 'CustomChip',
    components: {
        'chip': Chip,
    },
    props: {
        dataItem: Object,
        value: String,
        text: String
    }
}
</script>
