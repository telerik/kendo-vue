<template>
    <calendar
        :min="new Date()"
        :value="value"
        @change="handleChange"
    />
</template>
<script>
import { Calendar } from '@progress/kendo-vue-dateinputs';

export default {
    props: Calendar.props,
    emits: {
      change: null
    },
    components: {
        Calendar
    },
    methods: {
        handleChange (event) {
              this.$emit('change', {
                    event: event.event,
                    value: event.value,
                    target: {
                        value: event.value
                    }
                });
        }
    }
  }
</script>
