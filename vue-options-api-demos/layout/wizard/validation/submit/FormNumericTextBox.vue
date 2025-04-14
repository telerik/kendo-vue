<template>
    <fieldwrapper>
        <klabel :class="'k-form-label'" :editor-id="id" :editor-valid="valid">
        {{label}}
        </klabel>
        <div class="k-form-field-wrap">
            <numerictextbox :style="{ width: '230px' }" 
                :valid="valid"
                :value="value"
                :id="id"
                :min="0"
                @change="handleChange"
                @blur="handleBlur"
                @focus="handleFocus"
                />
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
import { NumericTextBox } from "@progress/kendo-vue-inputs";
export default {
    props: {
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
        numerictextbox: NumericTextBox
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

