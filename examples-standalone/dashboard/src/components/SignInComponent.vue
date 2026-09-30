<template>
    <main class="auth-page">
        <form class="auth-card" @submit.prevent="$router.push('/')">
            <p class="eyebrow">Northstar workspace</p>
            <h1>{{ isRegister ? 'Create your account' : 'Welcome back' }}</h1>
            <p>{{ isRegister ? 'Start organizing project work with your team.' : 'Sign in to continue to your projects.' }}</p>
            <label v-if="isRegister">Full name<KInput v-model="name" autocomplete="name" /></label>
            <label>Email<KInput v-model="email" type="email" autocomplete="email" required /></label>
            <label>Password<KInput v-model="password" type="password" :autocomplete="isRegister ? 'new-password' : 'current-password'" required /></label>
            <p v-if="isRegister" class="password-hint">Use at least 12 characters with a number and a symbol.</p>
            <KButton theme-color="primary" type="submit">{{ isRegister ? 'Create account' : 'Sign in' }}</KButton>
            <p class="auth-switch"><RouterLink :to="isRegister ? '/login' : '/register'">{{ isRegister ? 'Already have an account? Sign in' : 'Need an account? Register' }}</RouterLink></p>
        </form>
    </main>
</template>

<script>
import { Button } from '@progress/kendo-vue-buttons';
import { Input } from '@progress/kendo-vue-inputs';
export default {
    components: { KButton: Button, KInput: Input },
    props: { isRegister: { type: Boolean, default: false } },
    data: () => ({ name: '', email: '', password: '' })
};
</script>
