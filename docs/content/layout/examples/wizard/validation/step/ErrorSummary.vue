<template>
  <div v-if="showStep1">Step1</div>
  <ul>
    <li v-if="formErrors.username">{{ formErrors.username }}</li>
    <li v-if="formErrors.email">{{ formErrors.email }}</li>
    <li v-if="formErrors.password">{{ formErrors.password }}</li>
  </ul>

  <p v-if="showStep2">Step2</p>
  <ul>
    <li v-if="formErrors.fullName">Full Name: {{ formErrors.fullName }}</li>
    <li v-if="formErrors.countryselected">
      Country: {{ formErrors.countryselected }}
    </li>
    <li v-if="formErrors.gender">Gender: {{ formErrors.gender }}</li>
  </ul>

  <p v-if="showStep3">Step3</p>
  <ul>
    <li v-if="formErrors.cardNumber">
      Card Number: {{ formErrors.cardNumber }}
    </li>
    <li v-if="formErrors.cvc">CVC code: {{ formErrors.cvc }}</li>
    <li v-if="formErrors.expireDate">
      Expire Date: {{ formErrors.expireDate }}
    </li>
    <li v-if="formErrors.cardHolder">
      Card Holder: {{ formErrors.cardHolder }}
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    formErrors: Object,
});

const showStep1 = computed(() =>
    ['username', 'email', 'password'].some((key) => props.formErrors[key])
);

const showStep2 = computed(() =>
    ['fullName', 'countryselected', 'gender'].some((key) => props.formErrors[key])
);

const showStep3 = computed(() =>
    ['cardNumber', 'cvc', 'expireDate', 'cardHolder'].some((key) => props.formErrors[key])
);
</script>
