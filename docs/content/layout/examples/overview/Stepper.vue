<template>
  <Stepper :value="value" @change="handleChange" :items="items" />
</template>

<script setup>
import { ref } from 'vue';
import { Stepper } from '@progress/kendo-vue-layout';
import { lockIcon, trackChangesIcon, userIcon } from '@progress/kendo-svg-icons';

const value = ref(0);
const items = [
    { label: 'Account Info', svgIcon: lockIcon },
    { label: 'Personal Info', svgIcon: userIcon },
    { label: 'Payment Details', svgIcon: trackChangesIcon, optional: true },
];

function handleChange(e) {
    value.value = e.value;
}
</script>
