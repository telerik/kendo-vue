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
                  :min="today"
                />
              </label>
              <label class="k-form-field">
                <span>Check-Out</span>
                <DatePicker
                  :name="'checkout'"
                  :required="true"
                  :min="today"
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
import { DatePicker } from "@progress/kendo-vue-dateinputs";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const success = ref(false);
const today = new Date();

function handleSubmit(event) {
    event.preventDefault();
    success.value = true;
    setTimeout(() => {
        success.value = false;
    }, 3000);
}
</script>
