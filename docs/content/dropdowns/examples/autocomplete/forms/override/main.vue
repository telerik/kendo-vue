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
                  :label="'Departure Country'"
                  :value="departureCountry"
                  @change="handleChange"
                  :name="'departureCountry'"
                  :data-items="countries"
                  :required="true"
                />
              </div>
              <div>
                <AutoComplete
                  :style="{ width: '100%' }"
                  :label="'Arrival Country'"
                  :value="arrivalCountry"
                  @change="handleChange"
                  :name="'arrivalCountry'"
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
import { AutoComplete } from "@progress/kendo-vue-dropdowns";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { ref, computed } from "vue";

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

function handleChange(event) {
    if (event.target.name === "departureCountry") {
        departureCountry.value = event.value;
    } else if (event.target.name === "arrivalCountry") {
        arrivalCountry.value = event.value;
    }
}

function handleSubmit(event) {
    event.preventDefault();
    success.value = true;
    setTimeout(() => {
        success.value = false;
    }, 3000);
}
</script>
