<template>
    <div class="smartpaste-wrapper">
        <h4 class="smartpaste-title">Recommendation Letter</h4>
        <div class="smartpaste-container">
            <Skeleton
                :is-copied="isCopied"
                :show-copied-text="showCopiedText"
                @button-copy="handleCopy"
                @text-copy="handleTextCopy"
            />
            <div class="form-container">
                <div v-if="isLoading" class="loader-container">
                    <Loader size="large" type="infinite-spinner" />
                </div>
                <Form
                    :validator="formValidator"
                    @submit="handleSubmit"
                >
                    <FormContent />
                </Form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import { Form } from '@progress/kendo-vue-form';
import { Loader } from '@progress/kendo-vue-indicators';
import Skeleton from './Skeleton.vue';
import FormContent from './FormContent.vue';
import './styles.css';
import './Skeleton.css';

const isLoading = ref(false);
const isCopied = ref(false);
const showCopiedText = ref(false);
const isPasted = ref(false);

const formValidator = (values) => {
    const errors = {};

    if (!values.fullName) {
        errors.fullName = 'Full Name is required';
    }

    if (!values.phone) {
        errors.phone = 'Phone Number is required';
    }

    return Object.keys(errors).length > 0 ? errors : undefined;
};

const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));

const clearSelection = () => {
    const selection = window.getSelection();
    if (selection) {
        selection.removeAllRanges();
    }
};

const onPasteComplete = () => {
    isPasted.value = true;
    isCopied.value = false;
    showCopiedText.value = false;
    clearSelection();
};

const onReset = () => {
    isCopied.value = false;
    showCopiedText.value = false;
    isPasted.value = false;
    clearSelection();
};

const handleCopy = () => {
    isCopied.value = true;
    showCopiedText.value = true;
    isPasted.value = false;
};

const handleTextCopy = () => {
    isCopied.value = true;
    isPasted.value = false;
};

provide('isLoading', isLoading);
provide('isPasted', isPasted);
provide('onPasteComplete', onPasteComplete);
provide('onReset', onReset);
</script>
