<template>
    <main class="empty-state">
        <div aria-hidden="true" class="empty-state-icon">404</div>
        <p class="eyebrow">Not found</p>
        <h1>Page not found</h1>
        <p>The address may be outdated, or the page may have moved.</p>
        <KButton theme-color="primary" @click="$router.push('/')">Return to dashboard</KButton>
    </main>
</template>

<script>
import { Button } from '@progress/kendo-vue-buttons';
export default { components: { KButton: Button } };
</script>
