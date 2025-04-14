<template>
<div id="vueapp" class="vue-app">
    <div class="example-config">
        Number of rendered views: &nbsp;
        <numerictextbox :style="{ width: '230px' }" :min="1" :max="10" @change="handleInputChange" :value="views">
        </numerictextbox>
    </div>
    <calendar
        :views=views
    />
</div>
</template>
<script>
import { Calendar } from '@progress/kendo-vue-dateinputs';
import { NumericTextBox } from '@progress/kendo-vue-inputs';

export default {
    components: {
        'calendar': Calendar,
        'numerictextbox': NumericTextBox
    },
    data: function(){
        return {
            views: 2
        }
    },
    methods: {
        handleInputChange (event) {
            if (!event.target.value || event.target.value < 11) {
                this.views = event.target.value;
            }
        }
    }
};

</script>
