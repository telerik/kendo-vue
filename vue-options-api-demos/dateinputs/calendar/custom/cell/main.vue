<template>
  <div class="example-config">
        <calendar :cell="customCell" >
          <template v-slot:myTemplate="{props}">
            <custom v-bind="props"/>
        </template>
        </calendar>
    </div>
</template>
<script>
import { Calendar } from '@progress/kendo-vue-dateinputs';
import Cell from './Cell.vue';

export default {
    components: {
      'calendar': Calendar,
      'custom': Cell
    },
    data: function(){
        return {
            customCell: 'myTemplate'
        };
    }
};

</script>
