<template>
    <k-form
      :initial-values="{
        ownerName: 'Chuck Norris',
        phoneNumber: '(359) 884-12-33-21',
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
