<template>
  <div class="row example-wrapper">
    <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
      <div class="card">
        <div class="card-block">
          <form class="k-form" @submit="handleSubmit">
            <fieldset>
              <legend>Select your flight route:</legend>
              <div class="mb-3">
                <AutoComplete
                  :style="{ width: '100%' }"
                  label="Departure Country"
                  v-model="departureCountry"
                  @change="handleChange"
                  name="departureCountry"
                  :data-items="countries"
                  :required="true"
                />
              </div>
              <div>
                <AutoComplete
                  :validity-styles="false"
                  :style="{ width: '100%' }"
                  label="Arrival Country"
                  v-model="arrivalCountry"
                  @change="handleChange"
                  name="arrivalCountry"
                  :data-items="countries"
                  :required="true"
                  :valid="valid"
                  :validation-message="validationMessage"
                />
              </div>
              <label class="k-form-field">
                <span>Additional Comments</span>
                <textarea
                  class="k-textarea"
                  :style="{ width: '100%' }"
                  name="additionalComments"
                  v-model="additionalComments"
                />
              </label>
            </fieldset>
            <KButton type="submit" theme-color="primary">Search</KButton>
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
import countries from "./countries";
import { AutoComplete } from "@progress/kendo-vue-dropdowns";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const departureCountry = ref(null);
const arrivalCountry = ref(null);
const additionalComments = ref("");
const success = ref(false);

const valid = computed(() => departureCountry.value !== null && arrivalCountry.value !== null);
const validationMessage = computed(() =>
    departureCountry.value === null
        ? "Please select a Departure Country first!"
        : "Please select an Arrival Country"
);

const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "departureCountry") departureCountry.value = value;
    if (name === "arrivalCountry") arrivalCountry.value = value;
};

const handleSubmit = (event) => {
    event.preventDefault();
    success.value = true;
    setTimeout(() => {
        success.value = false;
    }, 3000);
};
</script>
