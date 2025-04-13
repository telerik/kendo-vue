<template>
<div>
<kbutton @click="loadNewUser">
 Load new user
      </kbutton>
      <hr class="k-hr" />
    <k-form
      :initialValues="user"
      @submit="handleSubmit"
      :key="JSON.stringify(user)">
      <formcontent />
   </k-form>
   </div>
</template>
<script>
import { Form } from "@progress/kendo-vue-form";
import FormContent from './FormContent.vue';
import { Button } from "@progress/kendo-vue-buttons";

export default {
    components: {
      'k-form': Form,
      'formcontent': FormContent,
       kbutton: Button
    },
    data(){
      return {
        user: {
          firstName: "John",
          lastName: "Smith",
          email: "John.Smith@email.com",
        }
      };
    },
    methods: {
      handleSubmit (dataItem) {
         alert(JSON.stringify(dataItem, null, 2));
      },
      loadNewUser(){
        this.user = {
          firstName: "NewFirstName",
          lastName: "NewLastName",
          email: "NewEmails@email.com",
        };
      }
    }
};

</script>

