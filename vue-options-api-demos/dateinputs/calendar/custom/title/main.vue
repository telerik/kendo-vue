<template>
  <div class="example-config">
        <calendar :header-title="customHeaderTitle" >
          <template v-slot:myTemplate="{props}">
            <custom
            :value="props.value"
            :view="props.view"
            :id="props.id"
            @click="(e) =>  props.onClick(e)" />
        </template>
        </calendar>
    </div>
</template>
<script>
import { Calendar } from '@progress/kendo-vue-dateinputs';
import Title from './Title.vue';

export default {
    components: {
      'calendar': Calendar,
      'custom': Title
    },
    data: function(){
        return {
            customHeaderTitle: 'myTemplate'
        };
    }
};

</script>
