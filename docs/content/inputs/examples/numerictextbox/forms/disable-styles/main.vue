<template>
  <div class="row example-wrapper">
    <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
      <div class="card">
        <div class="card-block">
          <form class="k-form" @submit="handleSubmit">
            <fieldset>
              <legend>Please fill in the fields:</legend>
              <div class="mb-3">
                <KInput
                  :validity-styles="false"
                  :name="'firstName'"
                  :label="'First Name'"
                  :pattern="'[A-Za-z]+'"
                  :min-length="2"
                  :required="true"
                  :validation-message="firstNameValidationMessage"
                />
              </div>
              <div class="mb-3">
                <KInput
                  :validity-styles="false"
                  :name="'lastName'"
                  :label="'Last Name'"
                  :pattern="'[A-Za-z]+'"
                  :min-length="2"
                  :required="true"
                  :validation-message="lastNameValidationMessage"
                />
              </div>
              <div>
                <NumericTextBox
                  :validity-styles="false"
                  :name="'age'"
                  :label="'Age'"
                  :required="true"
                  :validation-message="ageValidationMessage"
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
import { NumericTextBox, Input as KInput } from "@progress/kendo-vue-inputs";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const firstNameValidationMessage = "Please enter your first name!";
const lastNameValidationMessage = "Please enter your last name!";
const ageValidationMessage = "Please enter your age!";
const success = ref(false);

function handleSubmit(event) {
    event.preventDefault();
    success.value = true;
    setTimeout(() => {
        success.value = false;
    }, 3000);
}
</script>
