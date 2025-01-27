<template>
 <div class="row">
        <div class="col-xs-12 col-sm-6 example-col">
            <p>ColorPicker</p>
            <kendo-colorpicker v-model="color"></kendo-colorpicker>
            <p>MaskedTextBox</p>
            <kendo-maskedtextbox v-model="phoneNumber" mask="(999) 000-0000"></kendo-maskedtextbox>
            <p>NumericTextBox</p>
            <kendo-numerictextbox v-model.number="numeric"></kendo-numerictextbox>
        </div>
        <div class="col-xs-12 col-sm-6 example-col">
            <p>Slider</p>
            <kendo-slider v-model.number="numeric"
                          :min="10"
                          :max="40">
            </kendo-slider>
            <p>RangeSlider</p>
            <kendo-rangeslider :selection-start="start"
                               :selection-end="end"
                               :min="0"
                               :max="100">
            </kendo-rangeslider>
            <p>Switch</p>
            <kendo-switch></kendo-switch>
        </div>
    </div>
</template>
<script>
import { ColorPicker, MaskedTextBox, NumericTextBox, Slider, RangeSlider, Switch } from '@progress/kendo-inputs-vue-wrapper';
export default {
  components: {
    'kendo-colorpicker': ColorPicker,
    'kendo-maskedtextbox': MaskedTextBox,
    'kendo-numerictextbox': NumericTextBox,
    'kendo-slider': Slider,
    'kendo-rangeslider': RangeSlider,
    'kendo-switch': Switch,
  },
   data: function() {
        return {
            color: "#F00",
            phoneNumber: "",
            numeric: 17,
            start: 25,
            end: 75
        }
    }
}
</script>
