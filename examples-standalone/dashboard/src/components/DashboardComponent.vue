<template>
    <section class="page dashboard-page">
        <header class="page-header">
            <div>
                <p class="eyebrow">Telerik / kendo-ui-core</p>
                <h1>Issue activity</h1>
                <p class="page-description">Explore the latest 100 GitHub issues, excluding pull requests. Figures reflect issues created in the selected period.</p>
            </div>
            <div class="dashboard-actions">
                <KButton :disabled="loading" fill-mode="outline" @click="loadIssues(true)">Refresh</KButton>
                <KButton theme-color="primary" @click="$router.push('/issues')">Browse issues</KButton>
            </div>
        </header>

        <div class="period-toolbar">
            <span>Created in the last</span>
            <ButtonGroup aria-label="Issue activity period">
                <KButton v-for="period in periods" :key="period.days" :selected="days === period.days"
                    :aria-pressed="days === period.days" @click="days = period.days">{{ period.label }}</KButton>
            </ButtonGroup>
            <a href="https://github.com/telerik/kendo-ui-core/issues" target="_blank" rel="noopener noreferrer">View on GitHub ↗</a>
        </div>

        <p v-if="loading && !loaded" role="status">Loading issues from GitHub…</p>
        <p v-if="error" class="data-message" role="alert">{{ error }}</p>
        <template v-if="loaded">
            <div class="kpi-grid" aria-label="Issue summary">
                <article v-for="metric in metrics" :key="metric.label" class="kpi-card">
                    <span>{{ metric.label }}</span>
                    <strong>{{ metric.value }}</strong>
                    <small>{{ metric.detail }}</small>
                </article>
            </div>

            <div v-if="summary.active.length" class="dashboard-grid">
                <Card class="wide-card">
                    <CardHeader>Issues created by date</CardHeader>
                    <CardBody>
                        <p class="chart-description">Open and closed issues created during this period. Hover over a column for counts.</p>
                        <Chart class="activity-chart">
                            <ChartLegend position="bottom" />
                            <ChartCategoryAxis>
                                <ChartCategoryAxisItem type="date" base-unit="days" :labels="{ format: 'dd MMM', rotation: 'auto' }" />
                            </ChartCategoryAxis>
                            <ChartValueAxis><ChartValueAxisItem :min="0" /></ChartValueAxis>
                            <ChartSeries>
                                <ChartSeriesItem name="Open" type="column" field="count" category-field="date"
                                    aggregate="count" :stack="true" :data-items="summary.groupedIssues.open" />
                                <ChartSeriesItem name="Closed" type="column" field="count" category-field="date"
                                    aggregate="count" :stack="true" :data-items="summary.groupedIssues.closed" />
                            </ChartSeries>
                        </Chart>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>Issue types</CardHeader>
                    <CardBody>
                        <p class="chart-description">Share of issues by their primary label.</p>
                        <Chart class="breakdown-chart">
                            <ChartLegend position="bottom" />
                            <ChartSeries>
                                <ChartSeriesItem type="donut" field="value" category-field="type"
                                    :data-items="summary.issueTypes.filter((item) => item.value)" />
                            </ChartSeries>
                        </Chart>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>Types over time</CardHeader>
                    <CardBody>
                        <p class="chart-description">Trend of the most common issue categories.</p>
                        <Chart class="breakdown-chart">
                            <ChartLegend position="bottom" />
                            <ChartCategoryAxis>
                                <ChartCategoryAxisItem type="date" base-unit="days" :labels="{ format: 'dd MMM', rotation: 'auto' }" />
                            </ChartCategoryAxis>
                            <ChartSeries>
                                <ChartSeriesItem v-for="type in distributionTypes" :key="type" :name="type" type="line"
                                    field="value" category-field="date" aggregate="count"
                                    :data-items="summary.typesDistribution[type]" />
                            </ChartSeries>
                        </Chart>
                    </CardBody>
                </Card>
            </div>
            <p v-else class="data-message" role="status">No issues were created in this period. Try a longer range.</p>
        </template>

        <div class="section-heading"><h2>Workspace snapshot</h2><RouterLink to="/projects">All projects →</RouterLink></div>
        <div class="dashboard-grid">
            <Card class="wide-card">
                <CardHeader>Project health</CardHeader>
                <CardBody>
                    <div class="project-health-list">
                        <article v-for="project in projects" :key="project.id" class="health-row">
                            <div>
                                <RouterLink :to="`/projects/${project.id}`">{{ project.name }}</RouterLink>
                                <span>{{ project.team }} contributors · Due {{ project.deadline }}</span>
                            </div>
                            <div class="health-progress">
                                <KBadge class="status-badge" :theme-color="statusThemeColor(project.status)" size="small">{{ project.status }}</KBadge>
                                <div class="progress-track" :aria-label="`${project.progress}% complete`"><span :style="{ width: `${project.progress}%` }"></span></div>
                            </div>
                        </article>
                    </div>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>My tasks</CardHeader>
                <CardBody>
                    <ul class="compact-list">
                        <li v-for="task in tasks.slice(0, 3)" :key="task.id">
                            <RouterLink :to="`/tasks/${task.id}`">{{ task.title }}</RouterLink>
                            <span>{{ task.due }} · {{ task.status }}</span>
                        </li>
                    </ul>
                    <RouterLink class="text-link" to="/my-tasks">View all assigned tasks</RouterLink>
                </CardBody>
            </Card>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { Button as KButton, ButtonGroup } from '@progress/kendo-vue-buttons';
import { Badge as KBadge } from '@progress/kendo-vue-indicators';
import { Card, CardBody, CardHeader } from '@progress/kendo-vue-layout';
import {
    Chart, ChartCategoryAxis, ChartCategoryAxisItem, ChartLegend, ChartSeries,
    ChartSeriesItem, ChartValueAxis, ChartValueAxisItem
} from '@progress/kendo-vue-charts';
import { issues, loading, error, loaded, loadIssues } from '../shared/github-issues';
import { IssuesProcessor } from '../shared/issues-processor';
import { projects, tasks } from '../shared/project-data';

const days = ref(30);
const periods = [{ label: '7 days', days: 7 }, { label: '14 days', days: 14 }, { label: '30 days', days: 30 }];
const distributionTypes = ['Enhancement', 'Feature', 'Others', 'SEV: Low', 'SEV: Medium', 'SEV: High'];
const summary = computed(() => IssuesProcessor.process(issues.value, days.value));
const metrics = computed(() => [
    { label: 'Issues created', value: summary.value.active.length, detail: 'Within selected period' },
    { label: 'Still open', value: summary.value.open, detail: 'Awaiting resolution' },
    { label: 'Closed', value: summary.value.closed, detail: 'Resolved issues' },
    { label: 'Close rate', value: `${Math.round(summary.value.closeRate.average * 100)}%`, detail: 'Of issues created' }
]);

function statusThemeColor(status: string) {
    return { 'On track': 'success', 'At risk': 'warning', 'On hold': 'base' }[status] || 'base';
}

onMounted(() => loadIssues());
</script>
