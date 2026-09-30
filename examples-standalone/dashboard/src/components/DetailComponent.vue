<template>
    <article class="issue-detail">
        <header>
            <span :class="['issue-state', dataItem.state]">{{ dataItem.state }}</span>
            <h2>{{ dataItem.title }} <small>#{{ dataItem.number }}</small></h2>
        </header>
        <dl>
            <div><dt>Created</dt><dd>{{ new Date(dataItem.created_at).toLocaleDateString() }}</dd></div>
            <div v-if="dataItem.closed_at"><dt>Closed</dt><dd>{{ new Date(dataItem.closed_at).toLocaleDateString() }}</dd></div>
            <div><dt>Milestone</dt><dd>{{ dataItem.milestone?.title || 'None' }}</dd></div>
            <div><dt>Author</dt><dd>{{ dataItem.user?.login || 'Unknown' }}</dd></div>
            <div><dt>Assignee</dt><dd>{{ dataItem.assignee?.login || 'Unassigned' }}</dd></div>
        </dl>
        <div v-if="dataItem.labels?.length" class="issue-labels">
            <span v-for="label in dataItem.labels" :key="label.id" class="issue-label">{{ label.name }}</span>
        </div>
        <h3>Description</h3>
        <p class="issue-description">{{ dataItem.body || 'No description provided.' }}</p>
        <a :href="dataItem.html_url" target="_blank" rel="noopener noreferrer">Open issue on GitHub ↗</a>
    </article>
</template>

<script setup lang="ts">
defineProps<{ dataItem: any }>();
</script>
