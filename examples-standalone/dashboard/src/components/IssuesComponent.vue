<template>
    <section class="page issues-page">
        <header class="page-header">
            <div>
                <p class="eyebrow">Telerik / kendo-ui-core</p>
                <h1>Issue explorer</h1>
                <p class="page-description">Filter, sort, and expand the latest 100 GitHub issues. Pull requests are excluded.</p>
            </div>
            <KButton :disabled="loading" fill-mode="outline" @click="loadIssues(true)">Refresh issues</KButton>
        </header>
        <p v-if="loading && !loaded" role="status">Loading issues from GitHub…</p>
        <p v-if="error" class="data-message" role="alert">{{ error }}</p>
        <Grid v-if="loaded" class="issues-grid" :data-items="result.data" :total="result.total"
            :columns="columns" :skip="skip" :take="take" :sort="sort" :filter="filter"
            :pageable="pageable" :sortable="true" :filterable="true"
            :detail="'DetailComponent'" :expand-field="'expanded'"
            @pagechange="onPageChange" @datastatechange="onDataStateChange" @expandchange="onExpandChange">
            <template #DetailComponent="{ props }"><DetailComponent :data-item="props.dataItem" /></template>
            <template #IDTemplate="{ props }"><IDTemplate :data-item="props.dataItem" /></template>
            <template #TitleTemplate="{ props }"><TitleTemplate :data-item="props.dataItem" /></template>
            <template #LabelsTemplate="{ props }"><LabelsTemplate :data-item="props.dataItem" /></template>
            <template #MilestoneTemplate="{ props }"><MilestoneTemplate :data-item="props.dataItem" /></template>
            <template #AssigneeTemplate="{ props }"><AssigneeTemplate :data-item="props.dataItem" /></template>
        </Grid>
    </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, shallowRef } from 'vue';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { Grid } from '@progress/kendo-vue-grid';
import { process } from '@progress/kendo-data-query';
import { issues, loading, error, loaded, loadIssues } from '../shared/github-issues';
import DetailComponent from './DetailComponent.vue';
import IDTemplate from './IssuesTemplates/IDTemplate.vue';
import TitleTemplate from './IssuesTemplates/TitleTemplate.vue';
import LabelsTemplate from './IssuesTemplates/LabelsTemplate.vue';
import MilestoneTemplate from './IssuesTemplates/MilestoneTemplate.vue';
import AssigneeTemplate from './IssuesTemplates/AssigneeTemplate.vue';

const columns = [
    { field: 'number', title: 'ID', width: 90, filterable: false, cell: 'IDTemplate' },
    { field: 'title', title: 'Title', cell: 'TitleTemplate' },
    { field: 'state', title: 'State', width: 110 },
    { field: 'labels', title: 'Labels', filterable: false, sortable: false, cell: 'LabelsTemplate' },
    { field: 'milestone', title: 'Milestone', filterable: false, sortable: false, cell: 'MilestoneTemplate' },
    { field: 'assignee', title: 'Assignee', filterable: false, sortable: false, cell: 'AssigneeTemplate' }
];
const pageable = { buttonCount: 5, info: true, type: 'numeric', pageSizes: [10, 15, 20, 'all'], previousNext: true };
const skip = ref(0);
const take = ref(10);
const sort = shallowRef([]);
const filter = shallowRef(null);
const expanded = shallowRef(new Set<number>());
const result = computed(() => process(
    issues.value.map((issue) => ({ ...issue, expanded: expanded.value.has(issue.number) })),
    { skip: skip.value, take: take.value, sort: sort.value, filter: filter.value }
));

function onPageChange(event: any) {
    skip.value = event.page.skip;
    take.value = event.page.take;
}

function onDataStateChange(event: any) {
    skip.value = event.data.skip ?? 0;
    take.value = event.data.take ?? take.value;
    sort.value = event.data.sort ?? [];
    filter.value = event.data.filter ?? null;
}

function onExpandChange(event: any) {
    const next = new Set(expanded.value);
    if (next.has(event.dataItem.number)) next.delete(event.dataItem.number);
    else next.add(event.dataItem.number);
    expanded.value = next;
}

onMounted(() => loadIssues());
</script>
