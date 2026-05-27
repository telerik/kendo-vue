<template>
    <FormElement :style="{ maxWidth: '650px' }">
        <fieldset class="k-form-fieldset">
            <FieldArray
                name="users"
                component="myTemplate"
                :validator="arrayLengthValidator"
            >
                <template #myTemplate="{ props }">
                    <FormGrid
                        v-bind="props"
                        @remove="props.onRemove"
                        @unshift="props.onUnshift"
                    />
                </template>
            </FieldArray>
        </fieldset>
        <div class="k-form-buttons">
            <KButton type="submit" :disabled="!kendoForm.allowSubmit">
                Submit
            </KButton>
            <KButton type="button" @click="clear">
                Clear
            </KButton>
        </div>
    </FormElement>
</template>

<script setup>
import { inject } from 'vue';
import { FieldArray, FormElement } from "@progress/kendo-vue-form";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import FormGrid from "./FormGrid.vue";

const kendoForm = inject('kendoForm', {});

function arrayLengthValidator(value) {
    return value && value.length ? "" : "Please add at least one record.";
}

function clear() {
    kendoForm.onFormReset();
}
</script>
