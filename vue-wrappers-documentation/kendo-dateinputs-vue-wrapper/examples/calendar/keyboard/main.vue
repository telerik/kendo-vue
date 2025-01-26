<template>
    <kendo-calendar :value="new Date()" selection
      :selectable="'multiple'"></kendo-calendar>
</template>
<script>
import { Calendar } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-calendar': Calendar
  }
}
</script>
