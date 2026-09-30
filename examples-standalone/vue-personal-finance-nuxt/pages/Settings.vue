<template>
    <h1 class="page-title">Settings</h1>
    <div class="settings-layout">
        <div class="wide-panel">
            <PersonalInfo />
        </div>
        <div class="wide-panel">
          <CardInfo />
        </div>
    </div>
</template>
<script setup>
import PersonalInfo from "@/components/Settings/PersonalInfo.vue";
import CardInfo from "@/components/Settings/CardInfo.vue";
</script>
<style scoped>
.page-title { margin: 0; padding: var(--kendo-spacing-5); }
.settings-layout { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: var(--kendo-spacing-4); margin-bottom: var(--kendo-spacing-5); overflow: hidden; padding: var(--kendo-spacing-5); }
.wide-panel { grid-column: span 12 / span 12; display: flex; flex: 1 1 0; flex-direction: column; }
@media (min-width: 768px) { .page-title { padding-inline: var(--kendo-spacing-15); } .settings-layout { padding: var(--kendo-spacing-5); padding-inline: var(--kendo-spacing-15); } }
@media (min-width: 992px) { .settings-layout { gap: var(--kendo-spacing-6); } }
@media (min-width: 1200px) { .wide-panel { grid-column: span 6 / span 6; } }
</style>
