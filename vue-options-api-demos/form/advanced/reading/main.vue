<template>
    <k-form
      :initial-values="{
        userCount: 20,
        ticketCount: 100,
      }"
      @submit="handleSubmit">
      <formcontent />
   </k-form>
</template>
<script>
import { Form } from "@progress/kendo-vue-form";
import FormContent from './FormContent.vue';

export default {
    components: {
      'k-form': Form,
      'formcontent': FormContent
    },
    methods: {
      handleSubmit (dataItem) {
         alert(JSON.stringify(dataItem, null, 2));
      }
    }
};

</script>

