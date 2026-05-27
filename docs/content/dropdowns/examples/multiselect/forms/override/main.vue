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
                  :label="'Foods'"
                  name="foods"
                  :value="foods"
                  @change="handleChange"
                  :data-items="foodsItems"
                />
              </div>
              <div>
                <MultiSelect
                  :label="'Drinks'"
                  name="drinks"
                  :data-items="drinksItems"
                  :value="drinks"
                  @change="handleChange"
                  :valid="foods.length > 0 && drinks.length > 1"
                  :validation-message="
                    foods.length === 0
                      ? 'Pick something to eat first!'
                      : 'Please pick at least 2 drinks!'
                  "
                />
              </div>
              <label class="k-form-field">
                <span>Additional Comments</span>
                <TextArea
                  name="additionalComments"
                  :value="additionalComments"
                  @change="handleChange"
                />
              </label>
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
import { TextArea } from "@progress/kendo-vue-inputs";

const success = ref(false);
const foodsItems = foods;
const drinksItems = drinks;
const additionalComments = ref("");

function handleSubmit(event) {
    event.preventDefault();
    success.value = true;
    setTimeout(() => {
        success.value = false;
    }, 3000);
}

function handleChange(event) {
    const { name, value } = event.target;
    if (name === "foods") foods.value = value;
    if (name === "drinks") drinks.value = value;
    if (name === "additionalComments") additionalComments.value = value;
}
</script>
