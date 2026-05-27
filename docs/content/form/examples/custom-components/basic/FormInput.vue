<template>
    <FieldWrapper>
        <div class="k-form-field-wrap">
            <KInput
                :style="{ width: '230px' }"
                :id="id"
                :value="value"
                @input="handleChange"
            />
        </div>
    </FieldWrapper>
</template>

<script setup>
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Input as KInput } from "@progress/kendo-vue-inputs";

defineProps({
    id: String,
    value: {
        type: String,
        default: ''
    }
});

const emit = defineEmits(['change']);

function handleChange(e) {
    emit('change', e);
}
</script>

