<template>
<div id="vueapp" class="vue-app">
    <div class="example-config">
        <calendar :focused-date="new Date(2010, 10, 10)" />
    </div>
</div>
</template>
<script>
import { Calendar } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
      'calendar': Calendar
    }
};

</script>
