<template>
   <div class="example-wrapper">
            <slider
                :buttons="true"
                :step="1"
                :default-value="6"
                :min="1"
                :max="10"
            >
            <slider-label :position="1">1</slider-label>
            <slider-label :position="3">3</slider-label>
            <slider-label :position="5">5</slider-label>
            <slider-label :position="7">7</slider-label>
            <slider-label :position="10">10</slider-label>
            </slider>
            <rangeslider
                :buttons="true"
                :step="1"
                :default-value="{
                    start:2,
                    end: 7
                }"
                :min="1"
                :max="10"
            >
            <slider-label :position="1">1</slider-label>
            <slider-label :position="3">3</slider-label>
            <slider-label :position="5">5</slider-label>
            <slider-label :position="7">7</slider-label>
            <slider-label :position="10">10</slider-label>
            </rangeslider>
        </div>
</template>

<script>
import { Slider, RangeSlider, SliderLabel } from '@progress/kendo-vue-inputs';

export default {
 components: {
        'slider': Slider,
        'rangeslider': RangeSlider,
        'slider-label': SliderLabel
    }
};
</script>