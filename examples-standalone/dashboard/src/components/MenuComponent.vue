<template>
    <div class="app-shell">
        <aside class="sidebar" :class="{ 'is-open': navigationOpen }">
            <RouterLink class="brand" to="/">
                <strong>Northstar</strong>
                <span>Project workspace</span>
            </RouterLink>
            <nav aria-label="Primary navigation">
                <RouterLink v-for="item in navigation" :key="item.to" :to="item.to" @click="navigationOpen = false">
                    <span>{{ item.label }}</span><span v-if="item.count" class="nav-count">{{ item.count }}</span>
                </RouterLink>
            </nav>
            <div class="sidebar-footer">
                <RouterLink to="/help">Help & support</RouterLink>
                <RouterLink to="/settings">Settings</RouterLink>
            </div>
        </aside>
        <div class="shell-content">
            <header class="topbar">
                <KButton class="menu-toggle" fill-mode="flat" aria-label="Toggle navigation" @click="navigationOpen = !navigationOpen">Menu</KButton>
                <KInput class="global-search" aria-label="Global search" placeholder="Search projects, tasks, and people" />
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
import { Input } from '@progress/kendo-vue-inputs';

export default {
    components: { KButton: Button, KInput: Input },
    data: () => ({
        navigationOpen: false,
        navigation: [
            { label: 'Dashboard', to: '/' },
            { label: 'Projects', to: '/projects' },
            { label: 'My tasks', to: '/my-tasks', count: '4' },
            { label: 'Team', to: '/team' },
            { label: 'Calendar', to: '/calendar' },
            { label: 'Reports', to: '/reports' }
        ]
    })
};
</script>
