import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './components/DashboardComponent.vue';
import WorkspaceView from './components/WorkspaceView.vue';
import Profile from './components/ProfileComponent.vue';
import SignIn from './components/SignInComponent.vue';
import NotFound from './components/NotFoundComponent.vue';

const workspace = (view) => ({ component: WorkspaceView, props: { view } });
const routes = [
    { path: '/', name: 'Dashboard', component: Dashboard },
    { path: '/projects', name: 'Projects', ...workspace('projects') },
    { path: '/projects/:id', name: 'Project', ...workspace('project') },
    { path: '/tasks/:id', name: 'Task', ...workspace('task') },
    { path: '/my-tasks', name: 'MyTasks', ...workspace('tasks') },
    { path: '/team', name: 'Team', ...workspace('team') },
    { path: '/calendar', name: 'Calendar', ...workspace('calendar') },
    { path: '/reports', name: 'Reports', ...workspace('reports') },
    { path: '/notifications', name: 'Notifications', ...workspace('notifications') },
    { path: '/settings', name: 'Settings', ...workspace('settings') },
    { path: '/help', name: 'Help', ...workspace('help') },
    { path: '/profile', name: 'Profile', component: Profile },
    { path: '/login', name: 'Login', component: SignIn },
    { path: '/register', name: 'Register', component: SignIn, props: { isRegister: true } },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
];

export default createRouter({ history: createWebHistory('/kendo-vue/dashboard/'), routes });
