<template>
    <k-form
      :validator="firstOrLastNameValidator"
      @submit="handleSubmit">
      <formcontent />
   </k-form>
</template>
<script>
import { Form } from "@progress/kendo-vue-form";
import FormContent from './FormContent.vue';

const firstOrLastNameValidator = (values) => {
  if (values['user.firstName'] || values['user.lastName']) {
    return;
  }

  return {
    VALIDATION_SUMMARY: "Please fill at least one of the following fields.",
    ["user.firstName"]:
      "Please check the validation summary for more information.",
    ["user.lastName"]:
      "Please check the validation summary for more information.",
  };
};
export default {
    components: {
      'k-form': Form,
      'formcontent': FormContent
    },
    methods: {
      firstOrLastNameValidator: firstOrLastNameValidator,
      handleSubmit (dataItem) {
         alert(JSON.stringify(dataItem, null, 2));
      }
    }
};

</script>
