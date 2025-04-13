<template>
<CalendarHeaderTitle 
                    :id="id"
                    :value="value"
                    :view="view"
                    @click="clickHandler"
                >
                {{view === 0
                    ? value.split(' ')[0]
                    : value}}
                <code v-if="view !== 3">↑</code>
            </CalendarHeaderTitle>
</template>
<script>
import { CalendarHeaderTitle } from '@progress/kendo-vue-dateinputs';

export default {
     name: 'CustomHeaderTitle',
    props: CalendarHeaderTitle.props,
    emits: {
        click:null
    },
    methods: {
        clickHandler: function(e) {
            this.$emit('click', e);
        }
    }
}
</script>
