<template>
    <div class="demo-container">
        <PromptBox
            :value="promptValue"
            @change="handleValueChange"
            mode="multi"
            :upload-button-config="true"
            max-text-area-height="250"
            placeholder="Start typing to see the character counter update..."
            @promptaction="handleSend"
            :input-attributes="{ maxLength: characterLimit }"
            :top-affix="topAffix"
        />
    </div>
</template>

<script setup>
import { ref, computed, h } from 'vue';
import { PromptBox } from '@progress/kendo-vue-conversational-ui';
import './styles.css';

const promptValue = ref(
    'Explain how transformer models process context in natural language understanding.'
);
const characterLimit = 100;

const handleValueChange = (event) => {
    promptValue.value = event.value;
};

const characterCount = computed(() => promptValue.value.length);
const isWarning = computed(() => characterCount.value > 80);
const isLimit = computed(() => characterCount.value >= characterLimit);
const icon = computed(() => (isLimit.value ? '⛔' : isWarning.value ? '⚠️' : '✏️'));
const iconClass = computed(() =>
    isLimit.value ? 'icon-error' : isWarning.value ? 'icon-warning' : 'icon-normal'
);
const statusText = computed(() =>
    isLimit.value ? 'LIMIT REACHED' : `${characterLimit - characterCount.value} left`
);

const handleSend = () => {
    if (promptValue.value.trim() && characterCount.value <= characterLimit) {
        promptValue.value = '';
    }
};

const topAffix = () => {
    const children = [
        h('div', { class: 'counter-wrapper' }, [
            h('div', { class: 'icon-badge' }, [
                h('span', { class: iconClass.value }, icon.value),
            ]),
            h('div', { class: 'counter-info' }, [
                h('span', { class: 'label' }, 'Character Count'),
                h('div', { class: 'value-container' }, [
                    h('span', { class: 'value' }, `${characterCount.value}/${characterLimit}`),
                ]),
            ]),
        ]),
    ];

    if (isWarning.value) {
        children.push(
            h(
                'div',
                { class: `status-badge${isLimit.value ? ' error-badge' : ''}` },
                statusText.value
            )
        );
    }

    return h(
        'div',
        {
            class: `affix-content${isWarning.value ? ' warning-state' : ''}${isLimit.value ? ' limit-state' : ''}`,
        },
        children
    );
};
</script>
