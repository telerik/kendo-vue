<template>
  <div>
    <KButton @click="loadNewUser">Load new user</KButton>
    <hr class="k-hr" />
    <KForm
      :initial-values="user"
      @submit="handleSubmit"
      :key="JSON.stringify(user)"
    >
      <FormContent />
    </KForm>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Form as KForm} from "@progress/kendo-vue-form";
import FormContent from "./FormContent.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const user = ref({
    firstName: "John",
    lastName: "Smith",
    email: "John.Smith@email.com",
});

function handleSubmit(dataItem) {
    alert(JSON.stringify(dataItem, null, 2));
}

function loadNewUser() {
    user.value = {
        firstName: "NewFirstName",
        lastName: "NewLastName",
        email: "NewEmails@email.com",
    };
}
</script>

