import { createWebHistory, createRouter } from 'vue-router';
import Avatar from './Avatar';
import BottomNavigation from './BottomNavigation';
import Card from './Card';
import ContextMenu from './ContextMenu';
import GridLayout from './GridLayout';
import ExpansionPanel from './ExpansionPanel';
import Menu from './Menu';
import Splitter from './Splitter';
import StackLayout from './StackLayout';
import Stepper from './Stepper';
import PanelBar from './PanelBar';
import TabStrip from './TabStrip';
import TileLayout from './TileLayout';
import Wizard from './Wizard';

const routes = [
    {
        path: '/layout/overview/avatar',
        name: 'Avatar',
        component: Avatar,
    },
    {
        path: '/layout/overview/bottomnavigation',
        name: 'BottomNavigation',
        component: BottomNavigation,
    },
    {
        path: '/layout/overview/card',
        name: 'Card',
        component: Card,
    },
    {
        path: '/layout/overview/contextmenu',
        name: 'ContextMenu',
        component: ContextMenu,
    },
    {
        path: '/layout/overview/expansionpanel',
        name: 'ExpansionPanel',
        component: ExpansionPanel,
    },
    {
        path: '/layout/overview/gridlayout',
        name: 'GridLayout',
        component: GridLayout,
    },
    {
        path: '/layout/overview/menu',
        name: 'Menu',
        component: Menu,
    },
    {
        path: '/layout/overview/panelbar',
        name: 'PanelBar',
        component: PanelBar,
    },
    {
        path: '/layout/overview/splitter',
        name: 'Splitter',
        component: Splitter,
    },
    {
        path: '/layout/overview/stacklayout',
        name: 'StackLayout',
        component: StackLayout,
    },
    {
        path: '/layout/overview/stepper',
        name: 'Stepper',
        component: Stepper,
    },
    {
        path: '/layout/overview/tabstrip',
        name: 'TabStrip',
        component: TabStrip,
    },
    {
        path: '/layout/overview/tilelayout',
        name: 'TileLayout',
        component: TileLayout,
    },
    {
        path: '/layout/overview/wizard',
        name: 'Wizard',
        component: Wizard,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
