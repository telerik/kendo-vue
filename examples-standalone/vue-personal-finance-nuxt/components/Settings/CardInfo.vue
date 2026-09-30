<template>
  <Card class="card-info-card">
    <div class="card-info-content">
      <div
        :style="{
          fontSize: '20px',
          letterSpacing: 'wide',
          fontWeight: '500',
        }"
        class="card-info-title"
      >
        Card Information
      </div>
      <div class="card-info-form">
        <KForm
          :key="cardInfo"
          :initial-values="cardInfo"
          @submit="handleSubmit"
        >
          <CardInfoContent />
        </KForm>
      </div>
    </div>
  </Card>
</template>
<script setup>
import { ref, onBeforeMount } from "vue";
import { Card } from "@progress/kendo-vue-layout";
import { Form as KForm } from "@progress/kendo-vue-form";
import CardInfoContent from "./CardInfoContent.vue";
import { checkLocalStorageData } from "@/data/localStorageUtils";

const cardInfoKey = "cardInfo";
const cardInfo = ref(null);

onBeforeMount(() => {
  const storedCardInfo = checkLocalStorageData(cardInfoKey);
  
  if (storedCardInfo) {
    cardInfo.value = {
      ...storedCardInfo,
      expiryDate: new Date(storedCardInfo.expiryDate),
    };
  }
});

const handleSubmit = (dataItem) => {
  localStorage.setItem(cardInfoKey, JSON.stringify(dataItem));
};

</script>
<style scoped>
.card-info-card { height: 100%; padding: var(--kendo-spacing-4); gap: var(--kendo-spacing-6); border-radius: var(--kendo-border-radius-xxl); }
.card-info-content { display: grid; gap: var(--kendo-spacing-2); }
.card-info-title { gap: var(--kendo-spacing-2); }
.card-info-form { display: grid; gap: var(--kendo-spacing-6); }
</style>
