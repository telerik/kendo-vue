<template>
    <kendo-calendar :value="new Date()" ></kendo-calendar>
</template>
<script>
import { Calendar } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-calendar': Calendar
  }
}
</script>
