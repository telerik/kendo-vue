import { createApp, defineComponent, type Component } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import DemoIndex from './DemoIndex.vue';
import DemoWrapper from './DemoWrapper.vue';

const pages: Record<string, () => Promise<{ default: Component }>> =
    import.meta.glob('./content/**/main.vue') as any;

function normalizePath(filePath: string): string {
    return filePath
        .replace(/^\.\/content\//, '')
        .replace(/\/main\.vue$/, '')
        .split('/')
        .filter((s) => s && s !== 'examples')
        .join('/');
}

interface DemoRoute {
    path: string;
    component: string;
    demo: string;
}

const demoRoutes: DemoRoute[] = Object.keys(pages)
    .map((filePath) => {
        const path = normalizePath(filePath);
        const parts = path.split('/');
        return {
            path,
            component: parts[0] || '',
            demo: parts.slice(1).join(' / ').replace(/-/g, ' ') || path,
        };
    })
    .sort((a, b) => a.path.localeCompare(b.path));

const routes = Object.entries(pages).map(([filePath, loader]) => ({
    path: '/' + normalizePath(filePath),
    component: defineComponent({
        setup() {
            return () => <DemoWrapper loader={loader} />;
        },
    }),
}));

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: defineComponent({
                setup() {
                    return () => <DemoIndex routes={demoRoutes} />;
                },
            }),
        },
        ...routes,
    ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
