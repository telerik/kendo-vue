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
                  :min-length="2"
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
                  :min-length="6"
                  :max-length="18"
                  :validation-message="passwordValidationMessage"
                />
              </div>
              <div class="mb-3">
                <KInput
                  v-model="confirmPassword"
                  :name="'confirmPassword'"
                  :type="'password'"
                  :style="{ width: '100%' }"
                  :label="'Confirm Password'"
                  :valid="confirmValid"
                  :min-length="6"
                  :max-length="18"
                  :validation-message="passwordValidationMessage"
                />
              </div>
              <div class="mb-3">
                <KInput
                  :style="{ width: '230px' }"
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

function handleSubmit(event) {
    event.preventDefault();
    success.value = true;
    setTimeout(() => {
        success.value = false;
    }, 3000);
}
</script>
