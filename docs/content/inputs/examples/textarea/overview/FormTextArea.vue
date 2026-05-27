<template>
    <FieldWrapper :style="{ width: '300px' }">
        <KLabel :editor-id="id" :editor-valid="valid">
            {{ label }}
        </KLabel>
        <div class="k-form-field-wrap">
            <span class="k-textarea">
                <TextArea
                    :valid="valid"
                    :value="value"
                    :id="id"
                    :maxlength="max"
                    @input="handleChange"
                    @blur="handleBlur"
                    @focus="handleFocus"
                    input-prefix="textAreaIcon"
                >
                    <template #textAreaIcon="{ props }">
                        <span :class="props.className">
                            <SvgIcon :icon="iconName" />
                        </span>
                    </template>
                </TextArea>
            </span>
            <Error v-if="showValidationMessage">
                {{ validationMessage }}
                <Hint direction="end"> {{ value.length }} / {{ max }} </Hint>
            </Error>
            <div v-else style="display: flex; justify-content: space-between">
                <Hint>{{ hint }}</Hint>
                <Hint direction="end"> {{ value.length }} / {{ max }} </Hint>
            </div>
        </div>
    </FieldWrapper>
</template>

<script setup>
import { computed } from "vue";
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, Label as KLabel } from "@progress/kendo-vue-labels";
import { TextArea } from "@progress/kendo-vue-inputs";
import { SvgIcon } from "@progress/kendo-vue-common";

const props = defineProps({
    touched: Boolean,
    label: String,
    validationMessage: String,
    hint: String,
    id: String,
    max: Number,
    valid: Boolean,
    value: {
        type: String,
        default: "",
    },
    iconName: Object,
});

const emit = defineEmits(["change", "blur", "focus"]);

const showValidationMessage = computed(
    () => props.touched && props.validationMessage
);

function handleChange(e) {
    emit("change", e);
}

function handleBlur(e) {
    emit("blur", e);
}

function handleFocus(e) {
    emit("focus", e);
}
</script>
