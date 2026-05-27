<template>
  <div class="row example-wrapper">
    <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
      <div class="card">
        <div class="card-block">
          <form class="k-form" @submit="handleSubmit">
            <fieldset>
              <legend>Add products to your basket:</legend>
              <div class="mb-3">
                <MultiSelect
                  :style="{ width: '100%' }"
                  :label="'Foods'"
                  name="foods"
                  :data-items="foodsItems"
                  :required="true"
                  :validation-message="foodsValidationMessage"
                />
              </div>
              <div>
                <MultiSelect
                  :style="{ width: '100%' }"
                  :label="'Drinks'"
                  name="drinks"
                  :data-items="drinksItems"
                  :required="true"
                  :validation-message="drinksValidationMessage"
                />
              </div>
            </fieldset>
            <KButton type="submit" :theme-color="'primary'">
              Add to basket
            </KButton>
          </form>
        </div>
      </div>
    </div>
    <div
      v-if="success"
      :class="'alert alert-success'"
      :style="{ position: 'absolute' }"
    >
      Form submitted!
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { MultiSelect } from "@progress/kendo-vue-dropdowns";
import { foods, drinks } from "./shop";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const success = ref(false);
const foodsItems = foods;
const drinksItems = drinks;
const foodsValidationMessage = "Please add foods to your basket!";
const drinksValidationMessage = "Please add drinks to your basket!";

function handleSubmit(event) {
    event.preventDefault();
    success.value = true;
    setTimeout(() => {
        success.value = false;
    }, 3000);
}
</script>
