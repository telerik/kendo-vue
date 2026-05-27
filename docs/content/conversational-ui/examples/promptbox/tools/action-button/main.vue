<template>
    <div class="demo-container">
        <div class="configuration-panel">
            <div class="config-row">
                <Label class="label-inline">
                    Loading State
                    <Checkbox :value="loading" @change="(e) => (loading = e.value ?? false)" />
                </Label>
            </div>

            <div class="config-row">
                <Label class="label-inline">
                    Disabled
                    <Checkbox
                        :value="actionButtonDisabled"
                        @change="(e) => (actionButtonDisabled = e.value ?? false)"
                    />
                </Label>
            </div>

            <div class="config-row">
                <Label class="label-inline">
                    Send Icon
                    <DropDownList
                        :data-items="iconOptions"
                        :value="selectedIcon"
                        @change="handleIconChange"
                        text-field="text"
                        data-item-key="value"
                        :style="{ width: '200px' }"
                    />
                </Label>
            </div>
        </div>

        <PromptBox
            :value="promptValue"
            @change="handleValueChange"
            :loading="loading"
            :action-button-config="actionButtonSettings"
            placeholder="Type a message..."
            @promptaction="handleAction"
        />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { PromptBox } from '@progress/kendo-vue-conversational-ui';
import { Checkbox } from '@progress/kendo-vue-inputs';
import { Label } from '@progress/kendo-vue-labels';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import {
    arrowRightIcon,
    paperPlaneIcon,
    checkIcon,
    arrowUpIcon,
    stopIcon,
} from '@progress/kendo-svg-icons';

const iconOptions = [
    { text: 'Default', icon: arrowUpIcon, value: 1 },
    { text: 'Paper Plane (send)', icon: paperPlaneIcon, value: 2 },
    { text: 'Arrow Right', icon: arrowRightIcon, value: 3 },
    { text: 'Check', icon: checkIcon, value: 4 },
];

const promptValue = ref('');
const loading = ref(false);
const actionButtonDisabled = ref(false);
const selectedIcon = ref(iconOptions[1]);

const actionButtonSettings = computed(() => ({
    disabled: actionButtonDisabled.value,
    svgIcon: loading.value ? stopIcon : selectedIcon.value.icon,
    themeColor: 'primary',
}));

const handleValueChange = (event) => {
    promptValue.value = event.value;
};

const handleIconChange = (event) => {
    selectedIcon.value = event.value;
};

const handleAction = () => {
    promptValue.value = '';
};
</script>

<style>
.demo-container {
    max-width: 700px;
    margin: 0 auto;
}

.configuration-panel {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    background-color: var(--kendo-color-base);
    border: 1px solid rgba(0, 0, 0, 0.08);
    padding: 20px;
    margin-bottom: 20px;
}

.config-row {
    display: flex;
    align-items: center;
    gap: 8px;
}

.label-inline {
    display: flex;
    align-items: center;
    gap: 8px;
}

.demo-container .k-prompt-box {
    width: 100%;
}
</style>
