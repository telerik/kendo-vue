<template>
  <div style="display: flex; justify-content: center;">
    <div style="flex-direction: column; ">
      <k-form ref="form" :class="'form-element'" :initial-values="initialValues">
        <formcontent />
      </k-form>
    </div>
  </div>
</template>
<script>
import { Form } from '@progress/kendo-vue-form';
import FormContent from './FormContent.vue';

export default {
  components: {
    'k-form': Form,
    'formcontent': FormContent
  },
};
</script>