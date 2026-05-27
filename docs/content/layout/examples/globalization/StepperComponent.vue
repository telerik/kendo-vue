<template>
  <Stepper :value="value" @change="handleChange" :items="items" dir="rtl" />
</template>

<script setup>
import { ref } from 'vue';
import { Stepper } from '@progress/kendo-vue-layout';

const value = ref(0);
const items = [
    { label: 'Account Info', icon: 'lock' },
    { label: 'Personal Info', icon: 'user' },
    { label: 'Payment Details', icon: 'track-changes', optional: true },
];

function handleChange(e) {
    value.value = e.value;
}
</script>
