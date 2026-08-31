<template>
    <section class="page">
        <header class="page-header">
            <div>
                <p class="eyebrow">{{ eyebrow }}</p>
                <h1>{{ title }}</h1>
                <p class="page-description">{{ description }}</p>
            </div>
            <KButton v-if="view === 'projects'" theme-color="primary">New project</KButton>
            <KButton v-if="view === 'tasks'" theme-color="primary">Add task</KButton>
        </header>

        <template v-if="view === 'projects'">
            <div class="toolbar">
                <KInput aria-label="Search projects" placeholder="Search projects" />
                <KButton fill-mode="outline">All statuses</KButton>
                <KButton fill-mode="outline">Priority</KButton>
            </div>
            <div class="project-grid">
                <article v-for="project in projects" :key="project.id" class="project-card">
                    <div class="card-meta"><KBadge class="status-badge" :theme-color="statusThemeColor(project.status)" size="small">{{ project.status }}</KBadge><span>{{ project.priority }} priority</span></div>
                    <h2><RouterLink :to="`/projects/${project.id}`">{{ project.name }}</RouterLink></h2>
                    <p>{{ project.description }}</p>
                    <div class="progress-track" :aria-label="`${project.progress}% complete`"><span :style="{ width: `${project.progress}%` }"></span></div>
                    <footer>{{ project.progress }}% complete · {{ project.team }} contributors · Due {{ project.deadline }}</footer>
                </article>
            </div>
        </template>

        <template v-else-if="view === 'project'">
            <nav class="breadcrumb" aria-label="Breadcrumb"><RouterLink to="/projects">Projects</RouterLink><span>/</span><span>{{ project.name }}</span></nav>
            <Card>
                <CardHeader>{{ project.name }}</CardHeader>
                <CardBody>
                    <p>{{ project.description }}</p>
                    <div class="card-meta"><KBadge class="status-badge" :theme-color="statusThemeColor(project.status)" size="small">{{ project.status }}</KBadge><span>{{ project.progress }}% complete · Due {{ project.deadline }}</span></div>
                    <div class="progress-track"><span :style="{ width: `${project.progress}%` }"></span></div>
                </CardBody>
            </Card>
            <div class="section-heading"><h2>Project tasks</h2><KButton fill-mode="outline">Board view</KButton></div>
            <Grid :data-items="tasks" :columns="taskColumns" />
        </template>

        <template v-else-if="view === 'task'">
            <nav class="breadcrumb" aria-label="Breadcrumb"><RouterLink to="/my-tasks">My tasks</RouterLink><span>/</span><span>{{ task.title }}</span></nav>
            <div class="detail-grid">
                <Card><CardHeader>{{ task.title }}</CardHeader><CardBody><h2>Description</h2><p>Review the current mobile navigation against the project goals and document decisions for the release team.</p><h2>Subtasks</h2><ul class="checklist"><li>Compare desktop and mobile navigation</li><li>Capture accessibility requirements</li><li>Share findings with engineering</li></ul></CardBody></Card>
                <Card><CardHeader>Task details</CardHeader><CardBody><dl class="detail-list"><dt>Status</dt><dd>{{ task.status }}</dd><dt>Priority</dt><dd>{{ task.priority }}</dd><dt>Assignee</dt><dd>{{ task.assignee }}</dd><dt>Due</dt><dd>{{ task.due }}</dd><dt>Project</dt><dd>{{ task.project }}</dd></dl></CardBody></Card>
            </div>
        </template>

        <template v-else-if="view === 'tasks'">
            <div class="toolbar"><KInput aria-label="Search assigned tasks" placeholder="Search my tasks" /><KButton fill-mode="outline">Due this week</KButton><KButton fill-mode="outline">All projects</KButton></div>
            <Grid :data-items="tasks" :columns="taskColumns" />
        </template>

        <template v-else-if="view === 'team'">
            <div class="member-grid">
                <article v-for="member in members" :key="member.name" class="project-card">
                    <div class="avatar">{{ initials(member.name) }}</div><h2>{{ member.name }}</h2><p>{{ member.role }}</p>
                    <KBadge class="status-badge" :theme-color="availabilityThemeColor(member.availability)" size="small">{{ member.availability }}</KBadge>
                    <div class="progress-track" :aria-label="`${member.workload}% workload`"><span :style="{ width: `${Math.min(member.workload, 100)}%` }"></span></div>
                    <footer>{{ member.workload }}% allocated this sprint</footer>
                </article>
            </div>
        </template>

        <template v-else-if="view === 'calendar'">
            <Card><CardHeader>Upcoming work</CardHeader><CardBody><ol class="timeline"><li v-for="task in tasks" :key="task.id"><strong>{{ task.due }}</strong><span>{{ task.title }} · {{ task.project }}</span></li></ol></CardBody></Card>
        </template>

        <template v-else-if="view === 'reports'">
            <div class="kpi-grid"><article v-for="metric in reportMetrics" :key="metric.label" class="kpi-card"><span>{{ metric.label }}</span><strong>{{ metric.value }}</strong><small>{{ metric.detail }}</small></article></div>
            <Card><CardHeader>Team productivity</CardHeader><CardBody><Grid :data-items="members" :columns="memberColumns" /></CardBody></Card>
        </template>

        <template v-else-if="view === 'notifications'">
            <div class="section-heading"><h2>Today</h2><KButton fill-mode="flat" @click="markAllRead">Mark all as read</KButton></div>
            <ul class="notification-list"><li v-for="notification in localNotifications" :key="notification.id" :class="{ unread: notification.unread }"><strong>{{ notification.title }}</strong><span>{{ notification.time }}</span></li></ul>
        </template>

        <template v-else-if="view === 'settings'">
            <form class="settings-form" @submit.prevent="saved = true">
                <Card><CardHeader>Workspace preferences</CardHeader><CardBody><label>Workspace name<KInput value="Northstar product team" /></label><label>Timezone<KInput value="Europe/Sofia" /></label><label>Default date format<KInput value="DD MMM YYYY" /></label><KButton theme-color="primary" type="submit">Save preferences</KButton><p v-if="saved" class="save-message" role="status">Preferences saved.</p></CardBody></Card>
                <Card><CardHeader>Notifications</CardHeader><CardBody><p>Task assignments, mentions, and due-date reminders are delivered to your notification center.</p><KButton fill-mode="outline">Manage notification rules</KButton></CardBody></Card>
            </form>
        </template>

        <template v-else-if="view === 'help'">
            <Card><CardHeader>How can we help?</CardHeader><CardBody><KInput aria-label="Search help articles" placeholder="Search project management help" /><h2>Popular topics</h2><ul class="compact-list"><li><strong>Planning a sprint</strong><span>Set capacity, assign work, and start a sprint.</span></li><li><strong>Managing project risk</strong><span>Use status and priority to surface blockers early.</span></li><li><strong>Working with task views</strong><span>Choose board, list, or timeline based on the work.</span></li></ul><KButton theme-color="primary">Contact support</KButton></CardBody></Card>
        </template>
    </section>
</template>

<script>
import { Button } from '@progress/kendo-vue-buttons';
import { Grid } from '@progress/kendo-vue-grid';
import { Badge } from '@progress/kendo-vue-indicators';
import { Input } from '@progress/kendo-vue-inputs';
import { Card, CardBody, CardHeader } from '@progress/kendo-vue-layout';
import { members, notifications, projects, tasks } from '../shared/project-data';

export default {
    components: { KButton: Button, KInput: Input, KBadge: Badge, Grid, Card, CardBody, CardHeader },
    props: { view: { type: String, required: true } },
    data() {
        return {
            projects, tasks, members, localNotifications: notifications.map((notification) => ({ ...notification })), saved: false,
            taskColumns: [{ field: 'title', title: 'Task' }, { field: 'project', title: 'Project' }, { field: 'status', title: 'Status' }, { field: 'priority', title: 'Priority' }, { field: 'assignee', title: 'Assignee' }, { field: 'due', title: 'Due' }],
            memberColumns: [{ field: 'name', title: 'Member' }, { field: 'role', title: 'Role' }, { field: 'workload', title: 'Workload' }, { field: 'availability', title: 'Availability' }],
            reportMetrics: [{ label: 'Tasks completed', value: '86', detail: '+12% from last sprint' }, { label: 'On-time delivery', value: '91%', detail: 'Target: 90%' }, { label: 'Average cycle time', value: '3.8d', detail: '-0.6d this quarter' }, { label: 'Sprint velocity', value: '42', detail: 'Story points' }]
        };
    },
    computed: {
        project() { return projects.find((project) => project.id === Number(this.$route.params.id)) || projects[0]; },
        task() { return tasks.find((task) => task.id === Number(this.$route.params.id)) || tasks[0]; },
        title() { return { projects: 'Projects', project: this.project.name, task: this.task.title, tasks: 'My tasks', team: 'Team members', calendar: 'Calendar', reports: 'Reports & analytics', notifications: 'Notifications', settings: 'Settings & preferences', help: 'Help & support' }[this.view]; },
        eyebrow() { return { projects: 'Project directory', project: 'Project workspace', task: 'Work item', tasks: 'Assigned work', team: 'Directory', calendar: 'Schedule', reports: 'Delivery insights', notifications: 'Updates', settings: 'Account & workspace', help: 'Knowledge base' }[this.view]; },
        description() { return { projects: 'Browse, filter, and open the work that moves your portfolio forward.', project: 'Track delivery, review work, and keep the team aligned.', task: 'Work details, ownership, and delivery context in one place.', tasks: 'Prioritize the work assigned to you across every project.', team: 'See capacity and availability before assigning new work.', calendar: 'Review upcoming deadlines and delivery milestones.', reports: 'Monitor delivery trends and team capacity.', notifications: 'Stay informed about work that needs your attention.', settings: 'Control workspace defaults and notification behavior.', help: 'Find answers and get help with your project workspace.' }[this.view]; }
    },
    methods: {
        initials(name) { return name.split(' ').map((part) => part[0]).join(''); },
        statusThemeColor(status) { return { 'On track': 'success', 'At risk': 'warning', 'On hold': 'base' }[status] || 'base'; },
        availabilityThemeColor(availability) { return { Available: 'success', Limited: 'warning', 'Over allocated': 'error' }[availability] || 'base'; },
        markAllRead() { this.localNotifications.forEach((notification) => { notification.unread = false; }); }
    }
};
</script>
