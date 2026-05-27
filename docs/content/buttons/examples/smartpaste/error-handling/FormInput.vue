<template>
    <FieldWrapper>
        <Label
            class="k-form-label"
            :editor-id="id"
            :editor-valid="valid"
        >
            {{ label }}
        </Label>
        <div class="k-form-field-wrap">
            <KInput
                :id="id"
                :value="value"
                :valid="valid"
                :placeholder="placeholder"
                :class="highlighted ? 'pasted-input' : ''"
                @input="handleChange"
                @blur="handleBlur"
                @focus="handleFocus"
            />
            <Error v-if="showValidationMessage">
                {{ validationMessage }}
            </Error>
        </div>
    </FieldWrapper>
</template>

<script setup>
import { computed } from 'vue';
import { FieldWrapper } from '@progress/kendo-vue-form';
import { Error, Label } from '@progress/kendo-vue-labels';
import { Input as KInput } from '@progress/kendo-vue-inputs';

const props = defineProps({
    placeholder: String,
    touched: Boolean,
    label: String,
    validationMessage: String,
    id: String,
    valid: Boolean,
    highlighted: Boolean,
    value: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['change', 'blur', 'focus']);

const showValidationMessage = computed(
    () => props.touched && props.validationMessage
);

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
