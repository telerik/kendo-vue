<template>
    <div class="app-shell">
        <aside id="dashboard-navigation" class="sidebar" :class="{ 'is-open': navigationOpen }"
            :inert="isMobileViewport && !navigationOpen" :aria-hidden="isMobileViewport && !navigationOpen">
            <RouterLink class="brand" to="/" @click="closeNavigation">
                <strong>Kendo UI</strong>
                <span>Issue &amp; project dashboard</span>
            </RouterLink>
            <nav aria-label="Primary navigation">
                <Drawer :items="mainItems.map(item => ({ ...item, selected: $route.path === item.to }))"
                    :expanded="true" :width="208" mode="push" @select="selectMainItem" />
                <span class="nav-heading">Workspace</span>
                <Drawer :items="navigation.map(item => ({ ...item, selected: $route.path === item.to }))"
                    :expanded="true" :width="208" mode="push" @select="selectWorkspaceItem" />
            </nav>
            <div class="sidebar-footer">
                <label for="dashboard-theme">Component theme</label>
                <DropDownList id="dashboard-theme" :data-items="themes" text-field="text" data-item-key="value"
                    :value="themes.find((item) => item.value === theme)" @change="$emit('themeChange', $event.value.value)" />
                <RouterLink to="/help" @click="closeNavigation">Help & support</RouterLink>
                <RouterLink to="/settings" @click="closeNavigation">Settings</RouterLink>
            </div>
        </aside>
        <button v-if="navigationOpen && isMobileViewport" type="button" class="sidebar-backdrop" tabindex="-1" aria-label="Close navigation" @click="closeNavigation"></button>
        <div class="shell-content">
            <header class="topbar">
                <KButton ref="menuToggle" class="menu-toggle" fill-mode="flat" aria-label="Toggle navigation"
                    aria-controls="dashboard-navigation" :aria-expanded="navigationOpen" @click="navigationOpen ? closeNavigation() : openNavigation()">Menu</KButton>
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
import { Drawer } from '@progress/kendo-vue-layout';

export default {
    components: { KButton: Button, DropDownList, Drawer },
    props: { theme: { type: String, required: true } },
    emits: ['themeChange'],
    data: () => ({
        navigationOpen: false,
        isMobileViewport: typeof window !== 'undefined' && window.innerWidth < 992,
        mainItems: [
            { text: 'Dashboard', to: '/' },
            { text: 'GitHub issues', to: '/issues' }
        ],
        themes: [
            { text: 'Meridian', value: 'meridian' },
            { text: 'Default', value: 'default' },
            { text: 'Bootstrap', value: 'bootstrap' },
            { text: 'Material', value: 'material' }
        ],
        navigation: [
            { text: 'Projects', to: '/projects' },
            { text: 'My tasks', to: '/my-tasks' },
            { text: 'Team', to: '/team' },
            { text: 'Calendar', to: '/calendar' },
            { text: 'Reports', to: '/reports' }
        ]
    }),
    watch: {
        '$route.path'() { this.navigationOpen = false; }
    },
    mounted() {
        window.addEventListener('keydown', this.handleKeydown);
        window.addEventListener('resize', this.updateViewport);
    },
    beforeUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
        window.removeEventListener('resize', this.updateViewport);
    },
    methods: {
        selectMainItem(event) {
            this.selectItem(event, this.mainItems);
        },
        selectWorkspaceItem(event) {
            this.selectItem(event, this.navigation);
        },
        selectItem(event, items) {
            const destination = items[event.itemIndex]?.to;
            this.closeNavigation();
            if (destination) this.$router.push(destination);
        },
        openNavigation() {
            this.navigationOpen = true;
            this.$nextTick(() => this.$el.querySelector('.sidebar .k-drawer-item')?.focus());
        },
        closeNavigation() {
            if (!this.navigationOpen) return;
            this.navigationOpen = false;
            this.$nextTick(() => this.$refs.menuToggle?.$el?.focus());
        },
        handleKeydown(event) {
            if (event.key === 'Escape' && this.navigationOpen) this.closeNavigation();
        },
        updateViewport() {
            this.isMobileViewport = window.innerWidth < 992;
            if (!this.isMobileViewport) this.navigationOpen = false;
        }
    }
};
</script>
