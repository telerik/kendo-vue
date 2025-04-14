<template>
    <fieldwrapper>
        <klabel :class="'k-form-label'" :editor-id="id" :editor-valid="valid">
        {{label}}
        </klabel>
        <div class="k-form-field-wrap">
        <span>
            <upload 
                :valid="valid"
                :value="value"
                :id="id"
                :auto-upload="false"
                :multiple="false"
                :show-action-buttons="false"
                :files="value"
                @blur="handleBlur"
                @focus="handleFocus"
                @add="onAddHandler"
                @remove="onRemoveHandler"
            />
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
import { Upload } from "@progress/kendo-vue-upload";

export default {
    props: {
        touched: Boolean,
        optional: Boolean,
        label: String,
        validationMessage: String,
        hint: String,
        id: String,
        valid: Boolean,
        value: Array
    },
    components: {
        fieldwrapper: FieldWrapper,
        error: Error,
        hint: Hint,
        klabel: Label,
        upload: Upload
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
    emits: {
        change: null,
        blur: null,
        focus: null
    },
    methods: {
        handleBlur(e){
            this.$emit('blur', e);
        },
        handleFocus(e){
            this.$emit('focus', e);
        },
         onAddHandler(e) {
            this.$emit('change', {
                value: e.newState
            });
        },
        onRemoveHandler(e) {
            this.$emit('change', {
                value: e.newState
            });
        }
    }
}
</script>

