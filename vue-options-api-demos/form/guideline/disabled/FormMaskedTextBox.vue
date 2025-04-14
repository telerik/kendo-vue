<template>
    <fieldwrapper>
        <klabel :class="'k-form-label'"
                :editor-id="id" 
                :editor-valid="valid"
                :optional="optional"
                >
            {{label}}
        </klabel>
        <div class="k-form-field-wrap">
            <maskedtextbox :style="{ width: '230px' }" 
                :valid="valid"
                :value="value"
                :id="id"
                :mask="mask"
                :readonly="readonly"
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
import { MaskedTextBox } from "@progress/kendo-vue-inputs";
export default {
    props: {
        readonly: Boolean,
        optional: Boolean,
        mask: String,
        touched: Boolean,
        label: String,
        validationMessage: String,
        hint: String,
        id: String,
        valid: Boolean,
        value: {
            type: String,
            default: ''
        }
    },
    components: {
      fieldwrapper: FieldWrapper,
      error: Error,
      hint: Hint,
      klabel: Label,
      maskedtextbox: MaskedTextBox
    },
    emits: {
        input: null,
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

