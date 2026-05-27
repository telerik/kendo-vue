<template>
    <div class="example-wrapper">
        <KButton @click="toggleDialog">Open Dialog</KButton>
        <Dialog v-if="visible" :title="'Close on Outside Click'" @close="toggleDialog">
            <p :style="{ margin: '25px', textAlign: 'center' }">Click outside the dialog to close it.</p>
            <DialogActionsBar>
                <KButton @click="toggleDialog">Close</KButton>
            </DialogActionsBar>
        </Dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';
import { Dialog, DialogActionsBar } from '@progress/kendo-vue-dialogs';
import { Button as KButton } from '@progress/kendo-vue-buttons';

const visible = ref(true);

const toggleDialog = () => {
    visible.value = !visible.value;
};

watch(
    visible,
    async (isVisible) => {
        if (isVisible) {
            await nextTick();
            document.querySelector('.k-overlay')?.addEventListener('click', toggleDialog);
        }
    },
    { immediate: true }
);
</script>
