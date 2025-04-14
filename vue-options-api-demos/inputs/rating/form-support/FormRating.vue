<template>
    <fieldwrapper>
        <klabel :class="'k-form-label'" :editor-id="id" :editor-valid="valid" :disabled="disabled" :optional="optional">
        {{label}}
        </klabel>
        <div class="k-form-field-wrap">
            <Rating v-if="value === 0" :style="{ width: '230px' }"
                :valid="valid"
                :id="id"
                @change="handleChange"
                @blur="handleBlur"
                @focus="handleFocus"
                />
            <Rating v-else :style="{ width: '230px' }"
                :valid="valid"
                :id="id"
                :value="value"
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
import { Rating } from "@progress/kendo-vue-inputs";

export default {
    props: {
        optional: Boolean,
        disabled: Boolean,
        placeholder: String,
        touched: Boolean,
        label: String,
        validationMessage: String,
        hint: String,
        id: String,
        valid: Boolean,
        value: {
            type: Number,
            default: 0
        }
    },
    components: {
      fieldwrapper: FieldWrapper,
      error: Error,
      hint: Hint,
      klabel: Label,
      Rating
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
        input: null,
        change: null,
        blur: null,
        focus: null
    },
    methods: {
        handleChange(e){
            console.log('change', e);

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

