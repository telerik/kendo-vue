<template>
<div id="vueapp" class="vue-app">
    <div class="example-config">
        <calendar 
            :mode="'multiple'"
            :value="[
                new Date(2010, 10, 10),
                new Date(2010, 10, 11),
                new Date(2010, 10, 12)
            ]" />
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
