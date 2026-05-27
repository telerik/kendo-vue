<template>
    <div class="example-wrapper">
        <div
            class="parent-container"
            :style="{
                position: 'relative',
                height: '300px',
                width: '100%',
                border: '2px dashed #ccc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#f5f5f5',
            }"
        >
            <KButton @click="toggleDialog">Open Dialog</KButton>
            <Dialog
                v-if="visible"
                :title="'Dialog Centered in Parent'"
                :style="{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }"
                @close="toggleDialog"
            >
                <p :style="{ margin: '25px', textAlign: 'center' }">
                    This dialog is centered within its parent container, not the entire viewport.
                </p>
                <DialogActionsBar>
                    <KButton @click="toggleDialog">Close</KButton>
                </DialogActionsBar>
            </Dialog>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Dialog, DialogActionsBar } from '@progress/kendo-vue-dialogs';
import { Button as KButton } from '@progress/kendo-vue-buttons';

const visible = ref(false);

const toggleDialog = () => {
    visible.value = !visible.value;
};
</script>
