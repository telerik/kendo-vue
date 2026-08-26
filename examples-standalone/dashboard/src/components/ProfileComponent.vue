<template>
    <section class="page profile-page">
        <header class="page-header">
            <div><p class="eyebrow">Account</p><h1>Your profile</h1><p class="page-description">Keep your personal details and working preferences current.</p></div>
        </header>
        <form class="settings-form" @submit.prevent="saved = true">
            <Card><CardHeader>Personal information</CardHeader><CardBody>
                <label>Full name<KInput v-model="profile.name" /></label>
                <label>Email<KInput v-model="profile.email" type="email" /></label>
                <label>Role<KInput v-model="profile.role" /></label>
                <label>Department<KInput v-model="profile.department" /></label>
                <KButton theme-color="primary" type="submit">Save profile</KButton>
                <p v-if="saved" class="save-message" role="status">Profile saved.</p>
            </CardBody></Card>
            <Card><CardHeader>Security</CardHeader><CardBody>
                <p>Change your password or review active workspace access from security settings.</p>
                <KButton fill-mode="outline" @click.prevent="$router.push('/settings')">Open security settings</KButton>
            </CardBody></Card>
        </form>
    </section>
</template>

<script>
import { Button } from '@progress/kendo-vue-buttons';
import { Input } from '@progress/kendo-vue-inputs';
import { Card, CardBody, CardHeader } from '@progress/kendo-vue-layout';
export default {
    components: { KButton: Button, KInput: Input, Card, CardBody, CardHeader },
    data: () => ({ saved: false, profile: { name: 'Maya Chen', email: 'maya.chen@example.com', role: 'Product manager', department: 'Product' } })
};
</script>
