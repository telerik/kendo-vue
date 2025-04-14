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
<script>
export default {
  props: {
    formErrors: Object,
  },
  computed: {
    showStep1() {
      return (
        this.formErrors.username ||
        this.formErrors.email ||
        this.formErrors.password
      );
    },
    showStep2() {
      return (
        this.formErrors.fullName ||
        this.formErrors.countryselected ||
        this.formErrors.gender
      );
    },
    showStep3() {
      return (
        this.formErrors.cardNumber ||
        this.formErrors.cvc ||
        this.formErrors.expireDate ||
        this.formErrors.cardHolder
      );
    },
  },
};
</script>
