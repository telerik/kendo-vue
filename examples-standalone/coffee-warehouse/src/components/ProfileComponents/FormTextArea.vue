<template>
    <fieldwrapper>
        <klabel :editor-id="id" :editor-valid="valid">
        {{label}}
        </klabel>
        <div class="k-form-field-wrap">
        <span class="k-textarea">
            <KTextArea 
                style="height: 120px;"
                :valid="valid"
                :value="value"
                :id="id"
                @change="handleChange"
                @blur="handleBlur"
                @focus="handleFocus"
            ></KTextArea>
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
import { TextArea } from "@progress/kendo-vue-inputs";
import { Error, Hint, Label } from "@progress/kendo-vue-labels";
export default {
    props: {
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
        KTextArea: TextArea
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
