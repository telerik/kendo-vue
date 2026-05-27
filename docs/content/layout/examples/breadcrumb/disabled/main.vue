<template>
    <div>
        <Label>
            Disabled&nbsp;&nbsp;
            <Switch v-model="disabled" />
        </Label>
        <br />
        <br />
        <Breadcrumb :dataItems="items" :disabled="disabled" />
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { Breadcrumb } from '@progress/kendo-vue-layout';
import { Switch } from '@progress/kendo-vue-inputs';
import { Label } from '@progress/kendo-vue-labels';
import { homeIcon } from '@progress/kendo-svg-icons';

const disabled = ref(false);
const items = [
    {
        id: 'dashboard',
        text: 'Dashboard',
        svgIcon: homeIcon,
    },
    {
        id: 'patients',
        text: 'Patients',
    },
    {
        id: 'john-doe',
        text: 'John Doe',
    },
    {
        id: 'medical-history',
        text: 'Medical History',
    },
    {
        id: 'lab-reports',
        text: 'Lab Reports',
    },
];
</script>
