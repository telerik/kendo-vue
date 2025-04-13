<template>
   <div>
            <slider
                :step="1"
                :min="1"
                :max="10"
                :value="value"
                @change="onChange"
            >
                <slider-label
                    :title="value.toString()"
                    :key="value"
                    @click="handleClick(value)"
                    :position="value"
                    v-for="value in [ 1, 3, 5, 6, 10 ]">
                </slider-label>
            </slider>
        </div>
</template>
<script>
import { Slider, SliderLabel } from '@progress/kendo-vue-inputs';

export default {
    components: {
        'slider': Slider,
        'slider-label': SliderLabel
    },
    data () {
        return {
            value: 7
        };
    },
    methods: {
        onChange (event) {
            this.value = event.value;
        },
        handleClick (value) {
            this.value = value;
        }
    }
};

</script>
