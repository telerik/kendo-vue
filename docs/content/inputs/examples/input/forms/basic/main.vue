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
                />
              </div>
              <div class="mb-3">
                <KInput
                  :name="'password'"
                  type="password"
                  :label="'Password'"
                  :required="true"
                  :minlength="6"
                  :maxlength="18"
                />
              </div>
              <div class="mb-3">
                <KInput
                  :name="'confirmPassword'"
                  :type="'password'"
                  :label="'Confirm Password'"
                  :minlength="6"
                  :maxlength="18"
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
import { ref } from "vue";
import { Input as KInput } from "@progress/kendo-vue-inputs";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const success = ref(false);

const handleSubmit = (event) => {
    event.preventDefault();
    success.value = true;
    setTimeout(() => {
        success.value = false;
    }, 3000);
};
</script>
