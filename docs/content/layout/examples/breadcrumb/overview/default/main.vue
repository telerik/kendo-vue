<template>
    <div style="display: flex; flex-direction: column; align-items: center">
        <Breadcrumb :dataItems="items" />
    </div>
</template>
<script setup>
import { Breadcrumb } from '@progress/kendo-vue-layout';
import { homeIcon } from '@progress/kendo-svg-icons';

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
