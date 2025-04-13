<template>
    <fieldwrapper>
        <klabel :class="'k-form-label'" :editor-id="id" :editor-valid="valid" :optional="optional">
        {{label}}
        </klabel>
        <div class="k-form-field-wrap">
        <span>
          <checkbox 
                :value="value"
                :valid="valid"
                :id="id"
                @change="handleChange"
                @blur="handleBlur"
                @focus="handleFocus" />
          </span>
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
import { Checkbox } from "@progress/kendo-vue-inputs";

export default {
    props: {
        touched: Boolean,
        label: String,
        validationMessage: String,
        hint: String,
        id: String,
        valid: Boolean,
        disabled: Boolean,
        optional: Boolean,
        visited: Boolean,
        modified: Boolean,
        value: {
             type: [Boolean, String],
             default: false
        }
    },
    emits: {
        change: null,
        blur: null,
        focus: null
    },
    components: {
        fieldwrapper: FieldWrapper,
        error: Error,
        hint: Hint,
        klabel: Label,
        checkbox: Checkbox
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

