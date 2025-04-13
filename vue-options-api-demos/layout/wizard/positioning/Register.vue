<template>
  <form-element :style="{
    width: '750px',
    margin: '0 auto',
  }">
    <h3>Click on the "Register" button to complete your registration.</h3>
  </form-element>
</template>
<script>
import { FormElement } from '@progress/kendo-vue-form';

export default {
  components: {
    'form-element': FormElement,
  },
};
</script>
