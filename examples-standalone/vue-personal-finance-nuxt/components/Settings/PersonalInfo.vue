<template>
  <Card class="k-p-4 k-gap-6 k-rounded-xxl">
    <div class="k-d-grid k-gap-2">
      <div
        :style="{
          fontSize: '20px',
          letterSpacing: 'wide',
          fontWeight: '500',
        }"
        class="k-gap-2"
      >
        Personal Information
      </div>
      <div class="k-d-grid k-gap-6">
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
