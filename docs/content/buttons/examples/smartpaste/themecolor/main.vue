<template>
    <div class="demo-container">
        <div class="toggle-container">
            <label>
                Disabled&nbsp;&nbsp;
                <KSwitch :checked="isDisabled" @change="handleSwitchChange" />
            </label>
        </div>
        <div class="button-container">
            <SmartPasteButton themeColor="base" :disabled="isDisabled">Base</SmartPasteButton>
            <SmartPasteButton themeColor="primary" :disabled="isDisabled">Primary</SmartPasteButton>
            <SmartPasteButton themeColor="secondary" :disabled="isDisabled">Secondary</SmartPasteButton>
            <SmartPasteButton themeColor="tertiary" :disabled="isDisabled">Tertiary</SmartPasteButton>
            <SmartPasteButton themeColor="info" :disabled="isDisabled">Info</SmartPasteButton>
            <SmartPasteButton themeColor="success" :disabled="isDisabled">Success</SmartPasteButton>
            <SmartPasteButton themeColor="warning" :disabled="isDisabled">Warning</SmartPasteButton>
            <SmartPasteButton themeColor="error" :disabled="isDisabled">Error</SmartPasteButton>
            <SmartPasteButton themeColor="inverse" :disabled="isDisabled">Inverse</SmartPasteButton>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SmartPasteButton } from '@progress/kendo-vue-buttons';
import { Switch as KSwitch } from '@progress/kendo-vue-inputs';

const isDisabled = ref(false);

const handleSwitchChange = (event) => {
    isDisabled.value = event.value;
};
</script>

<style>
.demo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}

.toggle-container {
    display: flex;
    justify-content: center;
}

.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
}

.k-button {
    margin: 5px;
}
</style>
