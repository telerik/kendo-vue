<template>
    <fieldwrapper>
        <floatinglabel 
            :editor-id="id" 
            :editor-valid="valid" 
            :editor-value="value" 
            :label="label"
            :optional="optional">
            <div class="k-form-field-wrap">
                <numerictextbox :style="{ width: '230px' }" 
                    :valid="valid"
                    :value="value"
                    :id="id"
                    :min="0"
                    :format="format"
                    @change="handleChange"
                    @blur="handleBlur"
                    @focus="handleFocus"
                    />
                <error v-if="showValidationMessage">
                    {{validationMessage}}
                </error>
                <hint v-else>{{hint}}</hint>
            </div>
        </floatinglabel>
    </fieldwrapper> 
</template>
<script>
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, FloatingLabel } from "@progress/kendo-vue-labels";
import { NumericTextBox } from "@progress/kendo-vue-inputs";
export default {
    props: {
        optional: Boolean,
        touched: Boolean,
        label: String,
        format: String,
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
        floatinglabel: FloatingLabel,
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

