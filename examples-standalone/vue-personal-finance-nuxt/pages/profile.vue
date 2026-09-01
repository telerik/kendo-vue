<template>
  <PageShell title="Your profile" description="Manage your personal details and linked banking preferences.">
    <PersonalInfo />
  </PageShell>
</template>

<script setup>
import PageShell from "@/components/common/PageShell.vue";
import PersonalInfo from "@/components/Settings/PersonalInfo.vue";
</script>
