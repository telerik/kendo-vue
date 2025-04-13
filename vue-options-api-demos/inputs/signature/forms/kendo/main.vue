<template>
  <div :style="{ display: 'flex', justifyContent: 'center' }">
    <k-form @submit="handleSubmit">
      <formcontent />
    </k-form>
  </div>
</template>

<script>
import { Form } from "@progress/kendo-vue-form";
import FormContent from "./FormContent.vue";

export default {
  components: {
    "k-form": Form,
    formcontent: FormContent,
  },
  methods: {
    handleSubmit(dataItem) {
      alert(JSON.stringify(dataItem, null, 2));
    },
  },
};
</script>
