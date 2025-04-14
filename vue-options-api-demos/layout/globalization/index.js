import { createWebHistory, createRouter } from 'vue-router';
import Avatar from './AvatarComponent.vue';
import Card from './CardComponent.vue';
import Menu from './MenuComponent.vue';
import Splitter from './SplitterComponent.vue';
import PanelBar from './PanelBarComponent.vue';
import TabStrip from './TabStripComponent.vue';
import TileLayout from './TileLayoutComponent.vue';

const routes = [
    {
        path: '/layout/globalization/avatar',
        name: 'Avatar',
        component: Avatar,
    },
    {
        path: '/layout/globalization/card',
        name: 'Card',
        component: Card,
    },
    {
        path: '/layout/globalization/menu',
        name: 'Menu',
        component: Menu,
    },
    {
        path: '/layout/globalization/panelbar',
        name: 'PanelBar',
        component: PanelBar,
    },
    {
        path: '/layout/globalization/splitter',
        name: 'Splitter',
        component: Splitter,
    },
    {
        path: '/layout/globalization/tabstrip',
        name: 'TabStrip',
        component: TabStrip,
    },
    {
        path: '/layout/globalization/tilelayout',
        name: 'TileLayout',
        component: TileLayout,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
