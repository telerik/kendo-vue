<template>
    <div class="demo-container">
        <div class="configurator">
            <span class="configurator-label">Mode:</span>
            <div class="radio-group">
                <RadioGroup
                    :value="mode"
                    @change="handleModeChange"
                    :data-items="modeOptions"
                    layout="horizontal"
                />
            </div>
        </div>
        <PromptBox
            :value="value"
            @change="handleValueChange"
            placeholder="Type a message"
            :mode="mode"
            :upload-button-config="true"
            max-text-area-height="100"
            :start-affix="startAffixRender"
        />
    </div>
</template>

<script setup>
import { ref, h } from 'vue';
import { PromptBox } from '@progress/kendo-vue-conversational-ui';
import { RadioGroup } from '@progress/kendo-vue-inputs';
import { SvgIcon } from '@progress/kendo-vue-common';
import { globeIcon } from '@progress/kendo-svg-icons';
import './styles.css';

const modeOptions = [
    { value: 'single', label: 'Single' },
    { value: 'multi', label: 'Multi' },
    { value: 'auto', label: 'Auto' }
];

const mode = ref('auto');
const value = ref(
    'What are the key benefits of using AI in healthcare, and how can it improve patient outcomes while addressing privacy concerns?'
);

const handleValueChange = (event) => {
    value.value = event.value;
};

const handleModeChange = (event) => {
    mode.value = event.value;
};

const startAffixRender = () => h(SvgIcon, { icon: globeIcon });
</script>
