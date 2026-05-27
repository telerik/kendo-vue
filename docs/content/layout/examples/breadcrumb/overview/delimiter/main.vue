<template>
    <div style="display: flex; flex-direction: column; align-items: center">
        <Breadcrumb :dataItems="items" :breadcrumbDelimiter="'DividerDelimiter'">
            <template #DividerDelimiter>
                <SvgIcon :icon="divideIcon" :class="'k-breadcrumb-delimiter-icon'" />
            </template>
        </Breadcrumb>
        <br />
        <Breadcrumb :dataItems="items" :breadcrumbDelimiter="'ConnectorDelimiter'">
            <template #ConnectorDelimiter>
                <SvgIcon :icon="connectorIcon" :class="'k-breadcrumb-delimiter-icon'" />
            </template>
        </Breadcrumb>
        <br />
        <Breadcrumb :dataItems="items" :breadcrumbDelimiter="'ChevronDelimiter'">
            <template #ChevronDelimiter>
                <SvgIcon :icon="chevronRightIcon" :class="'k-breadcrumb-delimiter-icon'" />
            </template>
        </Breadcrumb>
    </div>
</template>
<script setup>
import { Breadcrumb } from '@progress/kendo-vue-layout';
import { SvgIcon } from '@progress/kendo-vue-common';
import { homeIcon, chevronRightIcon, connectorIcon, divideIcon } from '@progress/kendo-svg-icons';

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
