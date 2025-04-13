<template>
    <fieldwrapper>
        <klabel
            :id="labelId"
            :editor-id="id"
            :editor-valid="valid"
            :editor-disabled="disabled"
        >
            {{label}}
        </klabel>
        <radiogroup
            :aria-describedby="describedBy"
            :label="label"
            :valid="valid"
            :value="value"
            :layout="layout"
            :data-items="dataItems"
            :id="id"
            :checked="value"
            @change="handleChange"
            @blur="handleBlur"
            @focus="handleFocus"         
        />
        <error v-if="showValidationMessage">
            {{validationMessage}}
        </error>
        <hint >{{hint}}</hint>
    </fieldwrapper> 
</template>
<script>
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, Label } from "@progress/kendo-vue-labels";
import { RadioGroup } from "@progress/kendo-vue-inputs";
export default {
    props: {
         touched: Boolean,
         label: String,
         validationMessage: String,
         hint: String,
         id: String,
         valid: Boolean,
         disabled: Boolean,
         layout: String,
         dataItems: Array,
         value: {
             type: String
         }
    },
    components: {
      fieldwrapper: FieldWrapper,
      error: Error,
      hint: Hint,
      klabel: Label,
      radiogroup: RadioGroup
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
        },
        describedBy(){
            return  `${this.hindId} ${this.errorId}`
        },
        labelId(){
            return this.label ? `${this.id}_label` : "";
        }
    },
    emits: {
        change: null,
        blur: null,
        focus: null
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

