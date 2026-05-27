<template>
    <FieldWrapper>
        <Label :class="'k-form-label'" :editor-id="id" :editor-valid="valid" :editor-disabled="disabled">
            {{ label }}
        </Label>
        <div class="k-form-field-wrap">
            <Slider
                :buttons="false"
                :min="min"
                :max="max"
                :valid="valid"
                :value="value"
                :id="id"
                :disabled="disabled"
                @change="handleChange"
                @blur="handleBlur"
                @focus="handleFocus"
            >
                <SliderLabel v-for="(item, index) in data" :position="item" :key="index">
                    {{ item }}
                </SliderLabel>
            </Slider>
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
import { Slider, SliderLabel } from "@progress/kendo-vue-inputs";

defineOptions({ inheritAttrs: false });

const props = defineProps({
    disabled: Boolean,
    min: Number,
    max: Number,
    data: Object,
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

