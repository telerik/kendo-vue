<template>
     <kendo-dateinput v-model="date"></kendo-dateinput>
    <p>(use <code>←</code> and <code>→</code> to navigate, <code>↑</code> and <code>↓</code> to update)</p>
</template>
<script>
import { DateInput } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-dateinput': DateInput
  },
  data: function () {
    return {
      date: null
    };
  }
}
</script>
