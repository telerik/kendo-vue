<template>
    <div class="app-shell">
        <aside class="sidebar" :class="{ 'is-open': navigationOpen }">
            <RouterLink class="brand" to="/">
                <strong>Kendo UI</strong>
                <span>Issue &amp; project dashboard</span>
            </RouterLink>
            <nav aria-label="Primary navigation">
                <RouterLink to="/" @click="navigationOpen = false">Dashboard</RouterLink>
                <RouterLink to="/issues" @click="navigationOpen = false">GitHub issues</RouterLink>
                <span class="nav-heading">Workspace</span>
                <RouterLink v-for="item in navigation" :key="item.to" :to="item.to" @click="navigationOpen = false">
                    <span>{{ item.label }}</span><span v-if="item.count" class="nav-count">{{ item.count }}</span>
                </RouterLink>
            </nav>
            <div class="sidebar-footer">
                <label for="dashboard-theme">Component theme</label>
                <DropDownList id="dashboard-theme" :data-items="themes" text-field="text" data-item-key="value"
                    :value="themes.find((item) => item.value === theme)" @change="$emit('themeChange', $event.value.value)" />
                <RouterLink to="/help">Help & support</RouterLink>
                <RouterLink to="/settings">Settings</RouterLink>
            </div>
        </aside>
        <div class="shell-content">
            <header class="topbar">
                <KButton class="menu-toggle" fill-mode="flat" aria-label="Toggle navigation" @click="navigationOpen = !navigationOpen">Menu</KButton>
                <span class="topbar-title">Overview / {{ $route.name }}</span>
                <div class="topbar-actions">
                    <RouterLink aria-label="View notifications" class="notification-link" to="/notifications">Notifications <span>2</span></RouterLink>
                    <RouterLink class="user-link" to="/profile">Maya Chen</RouterLink>
                </div>
            </header>
            <main class="content-area"><RouterView /></main>
        </div>
    </div>
</template>

<script>
import { Button } from '@progress/kendo-vue-buttons';
import { DropDownList } from '@progress/kendo-vue-dropdowns';

export default {
    components: { KButton: Button, DropDownList },
    props: { theme: { type: String, required: true } },
    emits: ['themeChange'],
    data: () => ({
        navigationOpen: false,
        themes: [
            { text: 'Meridian', value: 'meridian' },
            { text: 'Default', value: 'default' },
            { text: 'Bootstrap', value: 'bootstrap' },
            { text: 'Material', value: 'material' }
        ],
        navigation: [
            { label: 'Projects', to: '/projects' },
            { label: 'My tasks', to: '/my-tasks', count: '4' },
            { label: 'Team', to: '/team' },
            { label: 'Calendar', to: '/calendar' },
            { label: 'Reports', to: '/reports' }
        ]
    })
};
</script>
