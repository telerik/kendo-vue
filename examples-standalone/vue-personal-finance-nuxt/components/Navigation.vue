<template>
    <div class="app-navigation">
        <Drawer
        :mini-width="80"
        :items="drawerItems.map((item, index) => ({
        ...item,
        selected: index === selected,
      }))" :expanded="expanded" :mini="true" mode="overlay" position="start"
            @select="onSelect" @overlayclick="() => (expanded = false)">
            <DrawerContent>
                <div class="app-content-shell">
                    <slot />
                </div>
            </DrawerContent>
        </Drawer>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { Drawer, DrawerContent } from '@progress/kendo-vue-layout';
import {
    menuIcon,
    gridIcon,
    arrowsSwapIcon,
    dollarIcon,
    chartColumnStackedIcon,
    sparklesIcon,
    gearIcon,
    bankIcon,
    banknoteIcon,
    documentManagerIcon,
} from '@progress/kendo-svg-icons';

const expanded = ref(false);
const selected = ref(2);

const props = defineProps({
    goToRoute:{
        type: Object,
    }
})

watch(() => props.goToRoute, (newValue) => {
    if (newValue) {
        const itemIndex = drawerItems.findIndex((item) => item.route === newValue.itemTarget);
        selected.value = itemIndex >= 0 ? itemIndex : selected.value;
        navigateTo(newValue.itemTarget);
    }
});

const drawerItems = [
    { text: 'Menu', svgIcon: menuIcon },
    { separator: true },
    { text: 'Home', selected: true, route: '/', svgIcon: gridIcon },
    { text: 'Accounts', route: '/accounts/checking', svgIcon: bankIcon },
    { text: 'Transactions', route: '/transactions', svgIcon: arrowsSwapIcon },
    { text: 'Cards', route: '/cards', svgIcon: banknoteIcon },
    { text: 'Statements', route: '/statements', svgIcon: documentManagerIcon },
    { text: 'Transfer funds', route: '/transfers', svgIcon: arrowsSwapIcon },
    { text: 'Budget planner', route: '/budgets', svgIcon: chartColumnStackedIcon },
    { text: 'Investments', route: '/investments', svgIcon: dollarIcon },
    { text: 'Analytics', route: '/analytics', svgIcon: chartColumnStackedIcon },
    { text: 'AI Assistant', route: '/ai-assistant', svgIcon: sparklesIcon },
    { separator: true },
    { text: 'Profile', route: '/profile', svgIcon: gearIcon },
    { text: 'Settings', route: '/settings', svgIcon: gearIcon },
    { text: 'Help & support', route: '/help', svgIcon: menuIcon },
];

const onSelect = async (e) => {
    if (e.itemIndex === 0) {
        expanded.value = !expanded.value;
        return;
    }

    selected.value = e.itemIndex;
    const route = drawerItems[e.itemIndex].route;
    if (route) {
        await navigateTo(route);
    }
};
</script>
<style scoped>
.app-navigation {
    min-height: 100vh;
    width: 100%;
}

.app-navigation :deep(.k-drawer) {
    background: var(--kendo-color-surface-alt);
}

.app-content-shell {
    box-sizing: border-box;
    width: min(1140px, calc(100% - var(--kendo-spacing-20)));
    max-width: 1140px;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: max(var(--kendo-spacing-20), calc((100% - var(--kendo-spacing-20) - 1140px) / 2 + var(--kendo-spacing-20)));
    padding-inline: var(--kendo-spacing-15);
}

@media (max-width: 767px) {
    .app-content-shell {
        padding-inline: var(--kendo-spacing-5);
    }
}
</style>