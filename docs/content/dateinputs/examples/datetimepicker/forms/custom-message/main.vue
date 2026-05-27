<template>
  <div class="row example-wrapper">
    <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
      <div class="card">
        <div class="card-block">
          <form class="k-form" @submit="handleSubmit">
            <fieldset>
              <legend>Please select the time of your flight:</legend>
              <label class="k-form-field">
                <span>Departure</span>
                <DateTimePicker
                  :name="'departure'"
                  :required="true"
                  :min="today"
                  :validation-message="checkInValidationMessage"
                />
              </label>
              <label class="k-form-field">
                <span>Arrival</span>
                <DateTimePicker
                  :name="'arrival'"
                  :required="true"
                  :validation-message="checkOutValidationMessage"
                />
              </label>
            </fieldset>
            <KButton type="submit" :theme-color="'primary'">Search</KButton>
          </form>
        </div>
      </div>
    </div>
    <div v-if="success" class="alert alert-success" :style="{ position: 'absolute' }">
      Form submitted!
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DateTimePicker } from '@progress/kendo-vue-dateinputs';
import { Button as KButton } from "@progress/kendo-vue-buttons";;

const success = ref(false);
const today = ref(new Date());
const checkInValidationMessage = ref('Times in the past are not valid Departure times.');
const checkOutValidationMessage = ref('The Arrival time is required.');

function handleSubmit(event) {
    event.preventDefault();
    success.value = true;
    setTimeout(() => {
        success.value = false;
    }, 3000);
}
</script>
