<template>
    <FieldWrapper>
        <Label :class="'k-form-label'" :editor-id="id" :editor-valid="valid">
            {{ label }}
        </Label>
        <div class="k-form-field-wrap">
            <span class="k-textarea">
                <textarea
                    class="k-input"
                    style="margin-top: 0px; margin-bottom: 0px; height: 36px;"
                    :valid="valid"
                    :value="value"
                    :id="id"
                    @change="handleChange"
                    @blur="handleBlur"
                    @focus="handleFocus"
                ></textarea>
            </span>
            <Error v-if="showValidationMessage">
                {{ validationMessage }}
            </Error>
            <Hint v-else>{{ hint }}</Hint>
        </div>
    </FieldWrapper>
</template>

<script setup>
import { computed } from 'vue';
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, Label } from "@progress/kendo-vue-labels";

defineOptions({ inheritAttrs: false });

const props = defineProps({
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
});

const emit = defineEmits(['change', 'blur', 'focus']);

const showValidationMessage = computed(() => props.touched && props.validationMessage);

function handleChange(e) {
    emit('change', e);
}

function handleBlur(e) {
    emit('blur', e);
}

function handleFocus(e) {
    emit('focus', e);
}
</script>

