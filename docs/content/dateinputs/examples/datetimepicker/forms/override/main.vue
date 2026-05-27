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
                  :spinners="true"
                  :min="now"
                  :value="departure"
                  @change="handleChange"
                  :validation-message="departure === null
                    ? 'Departure time is required!'
                    : 'Departure time cannot be in the past!'"
                />
              </label>
              <label class="k-form-field">
                <span>Arrival</span>
                <DateTimePicker
                  :name="'arrival'"
                  :required="true"
                  :spinners="true"
                  :valid="departure !== null && arrival !== null && departure.getTime() < arrival.getTime()"
                  :value="arrival"
                  @change="handleChange"
                  :validation-message="arrival === null
                    ? 'Arrival time is required!'
                    : 'Arrival time cannot be before Departure time!'"
                />
              </label>
              <label class="k-form-field">
                <span>Additional Comments</span>
                <textarea
                  class="k-textarea"
                  :style="{ width: '100%' }"
                  name="additionalComments"
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
    <div v-if="success" class="alert alert-success" :style="{ position: 'absolute' }">
      Form submitted!
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DateTimePicker } from '@progress/kendo-vue-dateinputs';
import { Button as KButton } from "@progress/kendo-vue-buttons";;

const departure = ref(null);
const arrival = ref(null);
const additionalComments = ref('');
const success = ref(false);
const now = ref(new Date());

function handleSubmit(event) {
    event.preventDefault();
    success.value = true;
    setTimeout(() => {
        success.value = false;
    }, 3000);
}

function handleChange(event) {
    const { name, value } = event.target;
    if (name === 'departure') departure.value = value;
    if (name === 'arrival') arrival.value = value;
    if (name === 'additionalComments') additionalComments.value = value;
}
</script>
