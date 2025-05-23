<template>
  <Card class="k-p-4 k-gap-6 k-rounded-xxl k-h-full">
    <div class="k-d-grid k-gap-2">
      <div
        :style="{
          fontSize: '20px',
          letterSpacing: 'wide',
          fontWeight: '500',
        }"
        class="k-gap-2"
      >
        Card Information
      </div>
      <div class="k-d-grid k-gap-6">
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
