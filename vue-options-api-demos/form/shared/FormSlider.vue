<template>
    <fieldwrapper>
        <klabel :class="'k-form-label'" :editor-id="id" :editor-valid="valid" :editor-disabled="disabled">
        {{label}}
        </klabel>
        <div class="k-form-field-wrap">
            <slider
                :buttons="false"
                :min="min"
                :max="max"
                :valid="valid"
                :value="value"
                :id="id"
                :disabled="disabled"
                @change="handleChange"
                @blur="handleBlur"
                @focus="handleFocus"
            >
              <slider-label v-for="(item, index) in data" :position="item" :key="index">{{item}}</slider-label>
            </slider>
            <error v-if="showValidationMessage">
                {{validationMessage}}
            </error>
            <hint v-else>{{hint}}</hint>
        </div>
    </fieldwrapper> 
</template>
<script>
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, Label } from "@progress/kendo-vue-labels";
import { Slider, SliderLabel } from "@progress/kendo-vue-inputs";
export default {
    props: {
        disabled: Boolean,
        min: Number,
        max: Number,
        data: Object, 
        touched: Boolean,
        label: String,
        validationMessage: String,
        hint: String,
        id: String,
        valid: Boolean,
        value: {
             type: Number,
             default: null
        }
    },
    components: {
        fieldwrapper: FieldWrapper,
        error: Error,
        hint: Hint,
        klabel: Label,
        slider: Slider,
        'slider-label': SliderLabel
    },
    emits: {
        change: null,
        blur: null,
        focus: null
    },
    computed: {
        showValidationMessage() {
            return this.$props.touched && this.$props.validationMessage;
        },
        showHint() {
            return !this.showValidationMessage && this.$props.hint;
        },
        hintId() {
            return this.showHint ? `${this.$props.id}_hint` : "";
        },
        errorId() {
            return this.showValidationMessage ? `${this.$props.id}_error` : "";
        }
    },
    methods: {
        handleChange(e){
            this.$emit('change', e);
        },
        handleBlur(e){
            this.$emit('blur', e);
        },
        handleFocus(e){
            this.$emit('focus', e);
        }
    }
}
</script>

