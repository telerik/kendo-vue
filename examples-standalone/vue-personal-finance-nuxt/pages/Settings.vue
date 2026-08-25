<template>
    <h1 class="page-title">Settings</h1>
    <div class="settings-layout">
        <div class="wide-panel">
            <PersonalInfo />
        </div>
        <div class="narrow-panel">
            <Calendar />
        </div>
        <div class="wide-panel">
          <CardInfo />
        </div>
        <div class="narrow-panel">
          <Weather />
        </div>
    </div>
</template>
<script setup>
import Calendar from "@/components/Settings/Calendar.vue";
import PersonalInfo from "@/components/Settings/PersonalInfo.vue";
import CardInfo from "@/components/Settings/CardInfo.vue";
import Weather from "@/components/Settings/Weather.vue";
</script>
<style scoped>
.page-title { margin: 0; padding: var(--kendo-spacing-5); }
.settings-layout { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: var(--kendo-spacing-4); margin-bottom: var(--kendo-spacing-5); overflow: hidden; padding: var(--kendo-spacing-5); }
.wide-panel, .narrow-panel { grid-column: span 12 / span 12; display: flex; flex: 1 1 0; flex-direction: column; }
.narrow-panel { gap: var(--kendo-spacing-1); height: 100%; }
@media (min-width: 768px) { .page-title { padding-inline: var(--kendo-spacing-15); } .settings-layout { padding: var(--kendo-spacing-5); padding-inline: var(--kendo-spacing-15); } }
@media (min-width: 1024px) { .settings-layout { gap: var(--kendo-spacing-6); } }
@media (min-width: 1280px) { .wide-panel { grid-column: span 7 / span 7; } .narrow-panel { grid-column: span 5 / span 5; } }
</style>