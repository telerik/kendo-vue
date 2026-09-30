<template>
  <Card class="personal-info-card">
    <div class="personal-info-content">
      <div
        :style="{
          fontSize: '20px',
          letterSpacing: 'wide',
          fontWeight: '500',
        }"
        class="personal-info-title"
      >
        Personal Information
      </div>
      <div class="personal-info-form">
        <KForm
          :key="personalInfo"
          :initial-values="personalInfo"
          @submit="handleSubmit"
        >
          <PersonalInfoContent />
        </KForm>
      </div>
    </div>
  </Card>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { Card } from "@progress/kendo-vue-layout";
import { Form as KForm } from "@progress/kendo-vue-form";
import PersonalInfoContent from "./PersonalInfoContent.vue";
import { checkLocalStorageData } from "@/data/localStorageUtils";

const personalInfoKey = "personalInfo";
const personalInfo = ref(null);

onBeforeMount(() => {
  const storedPersonalInfo = checkLocalStorageData(personalInfoKey);

  if (storedPersonalInfo) {
    personalInfo.value = {
      ...storedPersonalInfo,
      birthday: new Date(storedPersonalInfo.birthday),
    };
  }
});

const handleSubmit = (dataItem) => {
  localStorage.setItem(personalInfoKey, JSON.stringify(dataItem));
};
</script>
<style scoped>
.personal-info-card { padding: var(--kendo-spacing-4); gap: var(--kendo-spacing-6); border-radius: var(--kendo-border-radius-xxl); }
.personal-info-content { display: grid; gap: var(--kendo-spacing-2); }
.personal-info-title { gap: var(--kendo-spacing-2); }
.personal-info-form { display: grid; gap: var(--kendo-spacing-6); }
</style>
