<template>
<div id="vueapp" class="vue-app">
    <div class="example-config">
        <calendar :default-active-view="'decade'" />
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
