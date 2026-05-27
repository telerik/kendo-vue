<template>
    <div>
        <h3>RadioGroup with Disabled Options</h3>
        <RadioGroup :data-items="radioData" :value="selectedValue" @change="onChange" />
    </div>
</template>

<script setup>
import { RadioGroup } from '@progress/kendo-vue-inputs';

const radioData = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2 (Disabled)', value: 'option2', disabled: true },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4 (Disabled)', value: 'option4', disabled: true },
    { label: 'Option 5', value: 'option5' },
];
</script>
