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
                  name="firstName"
                  :label="'First Name'"
                  :default-value="'John'"
                  :pattern="'[A-Za-z]+'"
                  :min-length="2"
                  :required="true"
                  :validation-message="'Please enter your first name!'"
                />
              </div>
              <div class="mb-3">
                <KInput
                  name="lastName"
                  :label="'Last Name'"
                  :default-value="'Smith'"
                  :pattern="'[A-Za-z]+'"
                  :min-length="2"
                  :required="true"
                  :validation-message="'Please enter your last name!'"
                />
              </div>
              <div>
                <MaskedTextBox
                  name="postcode"
                  :label="'Postcode (A9 9AA)'"
                  :required="true"
                  :mask="'A9 9AA'"
                  :validation-message="'Please enter your postcode!'"
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
import { MaskedTextBox, Input as KInput } from "@progress/kendo-vue-inputs";
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
