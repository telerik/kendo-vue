<template>
  <div class="row example-wrapper">
    <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
      <div class="card">
        <div class="card-block">
          <form class="k-form" @submit="handleSubmit">
            <fieldset>
              <legend>Select your flight route:</legend>
              <div class="mb-3">
                <ComboBox
                  :style="{ width: '100%' }"
                  :label="'Departure Country'"
                  :name="'departureCountry'"
                  :data-items="countriesList"
                  :required="true"
                  :validation-message="departureValidationMessage"
                />
              </div>
              <div>
                <ComboBox
                  :style="{ width: '100%' }"
                  :label="'Arrival Country'"
                  :name="'arrivalCountry'"
                  :data-items="countriesList"
                  :required="true"
                  :validation-message="arrivalValidationMessage"
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
import countries from "./countries";
import { ComboBox } from "@progress/kendo-vue-dropdowns";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { ref } from "vue";

const departureValidationMessage = "Please select a departure country!";
const arrivalValidationMessage = "Please select an arrival country!";
const success = ref(false);
const countriesList = countries;

function handleSubmit(event) {
    event.preventDefault();
    success.value = true;
    setTimeout(() => {
        success.value = false;
    }, 3000);
}
</script>
