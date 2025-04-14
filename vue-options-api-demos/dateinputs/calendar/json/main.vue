<template>
<div id="vueapp" class="vue-app">
    <div class="example-config">
        <calendar :value="value" @change="onChange" />
    </div>
</div>
</template>
<script>
import { Calendar } from '@progress/kendo-vue-dateinputs';
import { provideIntlService } from '@progress/kendo-vue-intl';

export default {
    components: {
      'calendar': Calendar
    },
    data: function(){
        return {
            value: null
        };
    },
    mounted: function(){
          setTimeout(() => {
            const date = '2016-01-04';
            this.value = provideIntlService(this).parseDate(date);
        }, 1000);
    },
    methods: {
        onChange (event) {
            this.value = event.value;
        }
    }
};

</script>
