<template>
<div id="vueapp" class="vue-app">
     <div>
            <div class="example-config">
                Selected date is: <b>{{value ? value.toDateString() : ''}}</b>
            </div>
            <calendar
                :bottom-view="'year'"
                :top-view="'decade'"
                @change="handleChange"
            />
        </div>
</div>
</template>
<script>
import { Calendar } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
      'calendar': Calendar
    },
    data: function(){
        return {
            value: null
        };
    },
    methods: {
        handleChange (event) {
            this.value = event.value;
        }
    }
};

</script>
