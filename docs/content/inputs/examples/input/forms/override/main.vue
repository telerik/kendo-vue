<template>
  <div class="row example-wrapper">
    <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
      <div class="card">
        <div class="card-block">
          <form class="k-form" @submit="handleSubmit">
            <fieldset>
              <legend>Create new account:</legend>
              <div class="mb-3">
                <KInput
                  :name="'username'"
                  :label="'First Name'"
                  :pattern="'[A-Za-z]+'"
                  :minlength="2"
                  :required="true"
                  :validation-message="usernameValidationMessage"
                />
              </div>
              <div class="mb-3">
                <KInput
                  v-model="password"
                  :name="'password'"
                  type="password"
                  :label="'Password'"
                  :required="true"
                  :minlength="6"
                  :maxlength="18"
                  :validation-message="passwordValidationMessage"
                />
              </div>
              <div class="mb-3">
                <KInput
                  v-model="confirmPassword"
                  :name="'confirmPassword'"
                  :type="'password'"
                  :label="'Confirm Password'"
                  :valid="confirmValid"
                  :minlength="6"
                  :maxlength="18"
                  :validation-message="passwordValidationMessage"
                />
              </div>
              <div class="mb-3">
                <KInput
                  :name="'email'"
                  :type="'email'"
                  :label="'Email address'"
                  :required="true"
                />
              </div>
            </fieldset>
            <KButton type="submit" :theme-color="'primary'">Search</KButton>
          </form>
        </div>
      </div>
    </div>
    <div
      v-if="success"
      class="alert alert-success"
      :style="{ position: 'absolute' }"
    >
      Form submitted!
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Input as KInput } from "@progress/kendo-vue-inputs";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const usernameValidationMessage = "Your username should contain only letters!";
const passwordValidationMessage =
  "Please enter password between 6 and 16 characters!";
const password = ref("");
const confirmPassword = ref("");
const success = ref(false);

const confirmValid = computed(() => {
    return password.value && password.value === confirmPassword.value;
});

const handleSubmit = (event) => {
    event.preventDefault();
    success.value = true;
    setTimeout(() => {
        success.value = false;
    }, 3000);
};
</script>
