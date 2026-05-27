<template>
  <div class="row example-wrapper">
    <div class="row example-wrapper">
      <div class="col-xs-12 col-sm-8 offset-sm-2 example-col">
        <form class="k-form" @submit="handleSubmit">
          <fieldset class="k-form-fieldset">
            <legend class="k-form-legend">Create new account:</legend>
            <div class="mb-3">
              <KInput
                :name="'username'"
                :label="'First Name'"
                :pattern="'[A-Za-z]+'"
                :minLength="2"
                :required="true"
              />
            </div>
            <div class="mb-3">
              <KInput
                :name="'password'"
                type="password"
                :label="'Password'"
                :required="true"
                :minLength="6"
                :maxLength="18"
              />
            </div>
            <div class="mb-3">
              <Checkbox
                id="ch"
                name="checkbox"
                :required="true"
                :label-render="'myTemplate'"
              >
                <template #myTemplate>
                  <span>
                    By clicking <a href="#">Sign Up</a>, you agree to our
                    <a href="#">Terms and Conditions</a>.
                  </span>
                </template>
              </Checkbox>
            </div>
          </fieldset>
          <KButton type="submit" :theme-color="'primary'">Sign up</KButton>
        </form>
      </div>
      <div
        v-if="success"
        class="alert alert-success"
        :style="{ position: 'absolute' }"
      >
        Form submitted!
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Input as KInput, Checkbox } from "@progress/kendo-vue-inputs";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const success = ref(false);

function handleSubmit(event) {
    event.preventDefault();
    success.value = true;
    setTimeout(() => {
        success.value = false;
    }, 3000);
}
</script>
