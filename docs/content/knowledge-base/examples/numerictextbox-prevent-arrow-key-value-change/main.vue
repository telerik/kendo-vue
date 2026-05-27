<template>
    <div :style="{ padding: '24px', fontFamily: 'Arial, sans-serif' }">
        <div :style="{ maxWidth: '360px', margin: '0 auto' }">
            <Label editor-id="number-input">Enter a value:</Label>

            <div @keydown="onParentKeyDown" :style="{ marginTop: '8px' }">
                <div @keydown.capture="interceptArrowKeys" @wheel.capture="interceptWheel">
                    <NumericTextBox
                        id="number-input"
                        ref="numericRef"
                        :value="value"
                        :style="{ width: '100%' }"
                        :spinners="true"
                        @change="handleChange"
                        @focus="isFocused = true"
                        @blur="isFocused = false"
                    />
                </div>
            </div>

            <div :style="{ marginTop: '12px' }">
                <KButton
                    type="button"
                    :disabled="isFocused"
                    @click="handleFocus"
                >
                    {{ isFocused ? 'Input is Focused' : 'Focus Input' }}
                </KButton>
            </div>

            <div :style="{ marginTop: '12px' }">
                <strong>Current value:</strong> {{ value ?? 'null' }}
            </div>

            <div :style="{ marginTop: '8px' }">
                <strong>Last parent key:</strong> {{ lastParentKey }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { NumericTextBox } from '@progress/kendo-vue-inputs';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { Label } from '@progress/kendo-vue-labels';

const numericRef = ref(null);
const value = ref(10);
const isFocused = ref(false);
const lastParentKey = ref('none');

function onParentKeyDown(e) {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        lastParentKey.value = e.key;
    }
}

function interceptArrowKeys(e) {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        e.stopPropagation();

        // Re-dispatch so the parent @keydown handler still fires
        const parent = e.currentTarget.parentElement;
        if (parent) {
            parent.dispatchEvent(new KeyboardEvent('keydown', {
                key: e.key,
                code: e.code,
                keyCode: e.keyCode,
                bubbles: true,
            }));
        }
    }
}

function interceptWheel(e) {
    e.preventDefault();
    e.stopPropagation();
}

function handleChange(e) {
    value.value = e.value ?? null;
}

function handleFocus() {
    numericRef.value?.focus();
}
</script>
