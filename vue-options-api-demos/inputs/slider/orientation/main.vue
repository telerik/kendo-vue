<template>
    <div>
            <slider
                :vertical="true"
                :buttons="true"
                :step="1"
                :default-value="7"
                :min="1"
                :max="10"
            >
            <slider-label :position="1">1</slider-label>
            <slider-label :position="3">3</slider-label>
            <slider-label :position="5">5</slider-label>
            <slider-label :position="7">7</slider-label>
            <slider-label :position="10">10</slider-label>
            </slider>
        </div>
</template>
<script>
import { Slider, SliderLabel } from '@progress/kendo-vue-inputs';

export default {
    components: {
        'slider': Slider,
        'slider-label': SliderLabel
    }
};

</script>
