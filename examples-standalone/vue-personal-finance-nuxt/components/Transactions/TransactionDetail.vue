<template>
  <div v-if="status" class="k-d-grid k-gap-3">
    <Label :editor-id="editorId">{{ label }}</Label>
    <StatusBadge :data-item="{ orderStatus: value }" :height="'28px'" />
  </div>
  <div
    v-if="label === 'Payment Method' && getPaymentMethodImage(value)"
    class="k-d-grid k-gap-2.5"
  >
    <Label :editor-id="editorId">{{ label }}</Label>
    <img :src="getPaymentMethodImage(value)" alt="Payment Method" />
  </div>
  <div v-if="!status && label !== 'Payment Method'" class="k-d-grid k-gap-1">
    <Label :editor-id="editorId">{{ label }}</Label>
    <DateInput
      v-if="label === 'Time'"
      :value="new Date(value)"
      :format="'hh:mm a MMMM d, yyyy'"
    />

    <TextBox
      v-else
      :id="editorId"
      :style="{
        backgroundColor: '#2A2A2A',
      }"
      :fillMode="'flat'"
      :rounded="'large'"
      :read-only="true"
      :value="value"
    />
  </div>
</template>
<script setup>
import { TextBox } from "@progress/kendo-vue-inputs";
import { Label } from "@progress/kendo-vue-labels";
import { DateInput } from "@progress/kendo-vue-dateinputs";
import StatusBadge from "@/components/common/StatusBadge.vue";

const getPaymentMethodImage = (method) => {
  switch (method) {
    case "Visa":
      return "./images/visa-logo.png";
    case "MasterCard":
      return "./images/mastercard-logo.png";
  }
};

defineProps({
  label: {
    type: String,
  },
  value: {
    type: String || Date,
  },
  status: {
    type: Boolean,
    default: false,
  },
  editorId: {
    type: String,
    default: "editorId",
  },
});
</script>
