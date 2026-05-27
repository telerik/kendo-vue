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
                <DatePicker
                  :name="'checkin'"
                  :required="true"
                  :format="'dd-MMM-yyyy'"
                  :min="today"
                  :value="checkin"
                  @change="handleChange"
                  :validation-message="checkin === null
                    ? 'Check-In date is required!'
                    : 'Check-In date cannot be in the past!'"
                />
              </label>
              <label class="k-form-field">
                <span>Check-Out</span>
                <DatePicker
                  :validity-styles="false"
                  :name="'checkout'"
                  :required="true"
                  :format="'dd-MMM-yyyy'"
                  :valid="checkin !== null && checkout !== null && checkin.getTime() < checkout.getTime()"
                  :value="checkout"
                  @change="handleChange"
                  :validation-message="checkout === null
                    ? 'Check-Out date is required!'
                    : 'Check-Out date cannot be before Check-In date!'"
                />
              </label>
              <label class="k-form-field">
                <span>Additional Comments</span>
                <textarea
                  class="k-textarea"
                  :style="{ width: '100%' }"
                  :name="'additionalComments'"
                  :value="additionalComments"
                  @change="handleChange"
                ></textarea>
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
import { DatePicker } from "@progress/kendo-vue-dateinputs";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const checkin = ref(new Date(2022, 1, 20));
const checkout = ref(null);
const additionalComments = ref("");
const success = ref(false);
const today = new Date();

function handleChange(event) {
    const { name, value } = event.target;
    if (name === "checkin") checkin.value = value;
    else if (name === "checkout") checkout.value = value;
    else if (name === "additionalComments") additionalComments.value = value;
}

function handleSubmit(event) {
    event.preventDefault();
    success.value = true;
    setTimeout(() => {
        success.value = false;
    }, 3000);
}
</script>
