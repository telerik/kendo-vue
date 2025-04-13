<template>
  <k-form :initialValues="formValue" @submit="handleSubmit">
    <formcontent />
  </k-form>
</template>

<script>
import { Form } from '@progress/kendo-vue-form';
import FormContent from './FormContent.vue';

export default {
  components: {
    'k-form': Form,
    formcontent: FormContent,
  },
  data() {
    return {
      formValue: { gender: 'Male' }
    }
  },
  methods: {
    handleSubmit(dataItem) {
      alert(JSON.stringify(dataItem, null, 2));
    },
  },
};
</script>
