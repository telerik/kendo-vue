<template>
    <div class="row example-wrapper" :style="{ minHeight: '250px' }">
        <div class="col-12 col-md-6 example-col">
            <p>Input</p>
            <KInput :style="{ width: '230px' }" :placeholder="'First name'" />
        </div>
        <div class="col-12 col-md-6 example-col">
            <p>NumericTextBox</p>
            <NumericTextBox :style="{ width: '230px' }" :default-value="123.45" :format="'c2'" />
        </div>
        <div class="col-12 col-md-6 example-col">
            <p>MaskedTextBox</p>
            <MaskedTextBox :style="{ width: '230px' }" :mask="'9-000'" :default-value="'_-___'" />
        </div>
        <div class="col-12 col-md-6 example-col">
            <p>Slider</p>
            <Slider :buttons="true" :step="1" :default-value="7" :min="1" :max="10" />
        </div>
        <div class="col-12 col-md-6 example-col">
            <p>RangeSlider</p>
            <RangeSlider :step="1" :default-value="{ start: 3, end: 8 }" :min="1" :max="10">
                <SliderLabel :position="1">1</SliderLabel>
                <SliderLabel :position="3">3</SliderLabel>
                <SliderLabel :position="5">5</SliderLabel>
                <SliderLabel :position="7">7</SliderLabel>
                <SliderLabel :position="10">10</SliderLabel>
            </RangeSlider>
        </div>
        <div class="col-12 col-md-6 example-col">
            <p>Checkbox</p>
            <Checkbox :default-checked="true" :label="'Checkbox Option'" />
        </div>
        <div class="col-12 col-md-6 example-col">
            <p>RadioButton</p>
            <RadioButton :checked="true" :label="'RadioButton Option'" />
        </div>
        <div class="col-12 col-md-6 example-col">
            <p>RadioGroup</p>
            <RadioGroup :data-items="dataItems" :default-value="dataItems[2].value" />
        </div>
        <div class="col-12 col-md-6 example-col">
            <p>Switch</p>
            <Switch />
        </div>
        <div class="col-12 col-md-6 example-col">
            <p>TextArea</p>
            <TextArea />
        </div>
        <div class="col-12 col-md-6 example-col">
            <p>ColorPicker</p>
            <ColorPicker />
        </div>
        <div class="col-12 col-md-6 example-col">
            <p>ColorPalette</p>
            <ColorPalette />
        </div>
        <div class="col-12 col-md-6 example-col">
            <p>ColorGradient</p>
            <ColorGradient />
        </div>
        <div class="col-12 col-md-6 example-col">
            <p>FlatColorPicker</p>
            <FlatColorPicker />
        </div>
    </div>
</template>

<script setup>
import {
    NumericTextBox,
    Input as KInput,
    MaskedTextBox,
    Slider,
    SliderLabel,
    RangeSlider,
    Checkbox,
    RadioButton,
    RadioGroup,
    Switch,
    TextArea,
    ColorGradient,
    ColorPicker,
    FlatColorPicker,
    ColorPalette,
} from '@progress/kendo-vue-inputs';

const dataItems = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
];
</script>
