<template>
<div id="vueapp" class="vue-app">
    <div class="example-config">
        <calendar 
         :min="new Date(2010, 10, 10)"
         :max="new Date(2010, 10, 20)"
        />
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
