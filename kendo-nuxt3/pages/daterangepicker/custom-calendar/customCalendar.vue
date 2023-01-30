<template>
    <div  :id="id" tabindex="0" @focusin="handleFocus" @focusout="handleBlur" @keydown="handleKeydown">
      <Calendar
       :view-list-id="id"
        :value="value.start"
        @change="handleStartChange"
      />
      <Calendar
        :value="value.end"
        @change="handleEndChange"
      />
    </div>
</template>

<script>
import { Calendar } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
       Calendar
    },
    inheritAttrs: false,
    props: {
      value: Object,
      id: String
    },
    methods: {
     handleStartChange (event) {
        this.$emit('change', {
          value: {
            start: event.target.value,
            end: this.value.end,
          },
          event: event
        });
      },
      handleEndChange (event) {
          this.$emit('change', {
          value: {
            start: this.value.start,
            end: event.target.value,
          },
          event: event
        });
      },
      handleFocus(e){
        this.$emit('focus', e);
      },
      handleBlur(e){
        this.$emit('blur', e);
      },
      handleKeydown(e) {
        this.$emit('keydown', e);
      }
    }
};
</script>

