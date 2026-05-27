<template>
  <div class="row example-wrapper">
    <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
      <div class="card">
        <div class="card-block">
          <form class="k-form" @submit="handleSubmit">
            <fieldset>
              <legend>Please select dates of your stay:</legend>
              <label class="k-form-field">
                <span>Check-In</span>
                <DateInput
                  :name="'checkin'"
                  :default-value="new Date(2018, 1, 20)"
                  :required="true"
                  :min="today"
                  :validation-message="checkInValidationMessage"
                />
              </label>
              <label class="k-form-field">
                <span>Check-Out</span>
                <DateInput
                  :name="'checkout'"
                  :required="true"
                  :min="today"
                  :validation-message="checkOutValidationMessage"
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
import { ref } from "vue";
import { DateInput } from "@progress/kendo-vue-dateinputs";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const success = ref(false);
const today = ref(new Date());
const checkInValidationMessage = ref(
    "Dates in the past are not valid Check-In dates."
);
const checkOutValidationMessage = ref(
    "The Check-Out date is required."
);

function handleSubmit(event) {
    event.preventDefault();
    success.value = true;
    setTimeout(() => {
        success.value = false;
    }, 3000);
}
</script>
