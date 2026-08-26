<template>
    <section class="page dashboard-page">
        <header class="page-header">
            <div>
                <p class="eyebrow">Portfolio overview</p>
                <h1>Delivery health</h1>
                <p class="page-description">A focused view of active work, delivery risk, and the team’s next commitments.</p>
            </div>
            <KButton theme-color="primary" @click="$router.push('/projects')">View projects</KButton>
        </header>

        <div class="kpi-grid" aria-label="Portfolio summary">
            <article v-for="item in kpis" :key="item.label" class="kpi-card">
                <span>{{ item.label }}</span>
                <strong>{{ item.value }}</strong>
                <small>{{ item.detail }}</small>
            </article>
        </div>

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
                                <span class="status-badge" :class="statusClass(project.status)">{{ project.status }}</span>
                                <div class="progress-track" :aria-label="`${project.progress}% complete`"><span :style="{ width: `${project.progress}%` }"></span></div>
                            </div>
                        </article>
                    </div>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>Upcoming deadlines</CardHeader>
                <CardBody>
                    <ol class="timeline">
                        <li><strong>Today</strong><span>Mobile navigation prototype review</span></li>
                        <li><strong>Aug 28</strong><span>Migration checklist sign-off</span></li>
                        <li><strong>Sep 12</strong><span>Mobile release candidate</span></li>
                    </ol>
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
            <Card>
                <CardHeader>Recent activity</CardHeader>
                <CardBody>
                    <ul class="compact-list">
                        <li><strong>Elena Rossi</strong><span>Completed accessibility acceptance criteria · 45m ago</span></li>
                        <li><strong>Noah Patel</strong><span>Flagged the mobile release as at risk · 2h ago</span></li>
                        <li><strong>Maya Chen</strong><span>Added a new migration milestone · Yesterday</span></li>
                    </ul>
                </CardBody>
            </Card>
        </div>
    </section>
</template>

<script>
import { Button } from '@progress/kendo-vue-buttons';
import { Card, CardBody, CardHeader } from '@progress/kendo-vue-layout';
import { projects, tasks } from '../shared/project-data';

export default {
    components: { KButton: Button, Card, CardBody, CardHeader },
    data: () => ({
        projects,
        tasks,
        kpis: [
            { label: 'Active projects', value: '12', detail: '+2 this quarter' },
            { label: 'Tasks due this week', value: '18', detail: '5 need review' },
            { label: 'Overdue tasks', value: '3', detail: 'Across 2 projects' },
            { label: 'Team utilization', value: '84%', detail: 'Healthy capacity' }
        ]
    }),
    methods: {
        statusClass(status) {
            return `status-${status.toLowerCase().replace(/\s+/g, '-')}`;
        }
    }
};
</script>
