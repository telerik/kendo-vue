<template>
    <div class="demo-container">
        <div class="configuration-panel">
            <div class="config-grid">
                <div class="config-row">
                    <Label class="label-inline">
                        Continuous Mode
                        <Checkbox :value="continuous" @change="(e) => (continuous = e.value ?? false)" />
                    </Label>
                </div>

                <div class="config-row">
                    <Label class="label-inline">
                        Interim Results
                        <Checkbox
                            :value="interimResults"
                            @change="(e) => (interimResults = e.value ?? false)"
                        />
                    </Label>
                </div>

                <div class="config-row">
                    <Label class="label-compact">Language:</Label>
                    <DropDownList
                        :data-items="languageOptions"
                        :value="selectedLanguageOption"
                        @change="handleLanguageChange"
                        text-field="text"
                        data-item-key="value"
                        class="dropdown-compact"
                    />
                </div>

                <div class="config-row">
                    <Label class="label-inline">
                        Disabled
                        <Checkbox :value="disabled" @change="(e) => (disabled = e.value ?? false)" />
                    </Label>
                </div>
            </div>
        </div>

        <PromptBox
            :value="promptValue"
            @change="handleValueChange"
            :speech-to-text-button-config="speechToTextButtonSettings"
            placeholder="Click microphone or type a message..."
            @promptaction="handleSend"
        />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { PromptBox } from '@progress/kendo-vue-conversational-ui';
import { Checkbox } from '@progress/kendo-vue-inputs';
import { Label } from '@progress/kendo-vue-labels';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

const languageOptions = [
    { text: 'English (US)', value: 'en-US' },
    { text: 'Spanish (Spain)', value: 'es-ES' },
    { text: 'French (France)', value: 'fr-FR' },
    { text: 'German (Germany)', value: 'de-DE' },
];

const promptValue = ref('');
const continuous = ref(false);
const interimResults = ref(true);
const selectedLanguage = ref('en-US');
const disabled = ref(false);

const speechToTextButtonSettings = computed(() => ({
    continuous: continuous.value,
    interimResults: interimResults.value,
    lang: selectedLanguage.value,
    themeColor: 'base',
    disabled: disabled.value,
}));

const selectedLanguageOption = computed(
    () => languageOptions.find((opt) => opt.value === selectedLanguage.value) || languageOptions[0]
);

const handleValueChange = (event) => {
    promptValue.value = event.value;
};

const handleLanguageChange = (event) => {
    selectedLanguage.value = event.value.value;
};

const handleSend = () => {
    console.log('Sending prompt:', promptValue.value);
    promptValue.value = '';
};
</script>

<style>
.demo-container {
    max-width: 700px;
    margin: 0 auto;
}

.configuration-panel {
    background-color: var(--kendo-color-base);
    border: 1px solid rgba(0, 0, 0, 0.08);
    padding: 20px;
    margin-bottom: 20px;
}

.config-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px 16px;
    align-items: center;
}

.config-row {
    display: flex;
    align-items: center;
    gap: 8px;
    min-height: 32px;
}

.label-inline {
    display: flex;
    align-items: center;
    gap: 8px;
}

.label-compact {
    min-width: 75px;
    font-size: 13px;
}

.dropdown-compact {
    flex: 1;
    min-width: 0;
}

.demo-container .k-prompt-box {
    width: 100%;
}
</style>
