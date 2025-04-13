<template>
  <div class="row example-wrapper">
    <div class="col-xs-12 col-sm-6 offset-sm-3 example-col">
      <div class="card">
        <div class="card-block">
          <form class="k-form" @submit="handleSubmit">
            <fieldset>
              <legend>Add products to your basket:</legend>
              <div class="mb-3">
                <multiselect
                  :label="'Foods'"
                  name="foods"
                  :value="foods"
                  @change="handleChange"
                  :data-items="foodsItems"
                ></multiselect>
              </div>
              <div>
                <multiselect
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
                ></multiselect>
              </div>
              <label class="k-form-field">
                <span>Additional Comments</span>
                <KTextArea
                  name="additionalComments"
                  :value="additionalComments"
                  @change="handleChange"
                ></KTextArea>
              </label>
            </fieldset>
            <kbutton type="submit" :theme-color="'primary'"
              >Add to basket</kbutton
            >
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
<script>
import { MultiSelect } from "@progress/kendo-vue-dropdowns";
import { foods, drinks } from "./shop";
import { Button } from "@progress/kendo-vue-buttons";
import { TextArea } from "@progress/kendo-vue-inputs";

export default {
  components: {
    multiselect: MultiSelect,
    kbutton: Button,
    KTextArea: TextArea,
  },
  data() {
    return {
      success: false,
      foodsItems: foods,
      drinksItems: drinks,
      drinks: [],
      foods: [],
      additionalComments: "",
    };
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      this.success = true;
      setTimeout(() => {
        this.success = false;
      }, 3000);
    },
    handleChange(event) {
      this[event.target.name] = event.target.value;
    },
  },
};
</script>
