<template>
<toggle-button @click="handleClick">
            <span class="k-icon k-i-sort-desc-sm"></span>
        </toggle-button>
</template>
<script>
import { ToggleButton } from '@progress/kendo-vue-dateinputs';

export default {
    emits: {
        'click': null,
        'mousedown': null,
        'mouseup': null
    },
    components: {
        'toggle-button': ToggleButton
    },
    methods: {
        handleClick: function(e) {
            this.$emit('click', e);
        }
    }
}
</script>
