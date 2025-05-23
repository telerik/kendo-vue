<template>
    <div>
        <Drawer
        :style="{height: '100%', minWidth: '576px'}"
        :mini-width="80"
        :items="drawerItems.map((item, index) => ({
        ...item,
        selected: index === selected,
      }))" :expanded="expanded" :mini="true" mode="overlay" position="start"
            @select="onSelect" @overlayclick="() => (expanded = false)">
            <DrawerContent :style="{ maxWidth: '1140px', margin: 'auto', paddingLeft: '48px' }">
                <slot />
            </DrawerContent>
        </Drawer>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Drawer, DrawerContent } from '@progress/kendo-vue-layout';
import {
    menuIcon,
    gridIcon,
    arrowsSwapIcon,
    dollarIcon,
    chartColumnStackedIcon,
    sparklesIcon,
    gearIcon,
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
        selected.value = newValue.itemIndex;
        navigateTo(newValue.itemTarget);
    }
});

const drawerItems = [
    { text: 'Menu', svgIcon: menuIcon },
    { separator: true },
    { text: 'Home', selected: true, route: '/', svgIcon: gridIcon },
    { text: 'Transactions', route: '/transactions', svgIcon: arrowsSwapIcon },
    { text: 'Investments', route: '/investments', svgIcon: dollarIcon },
    { text: 'Analytics', route: '/analytics', svgIcon: chartColumnStackedIcon },
    { text: 'AI Assistant', route: '/ai-assistant', svgIcon: sparklesIcon },
    { separator: true },
    { text: 'Settings', route: '/settings', svgIcon: gearIcon },
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