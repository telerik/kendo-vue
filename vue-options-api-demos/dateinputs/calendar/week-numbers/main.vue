<template>
<div id="vueapp" class="vue-app">
    <div class="example-config">
        <calendar :week-number="true" />
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
