<template>
  <div>
    <Stepper :value="step" @change="handleChange" :items="items" />
    <router-view />
    <span :style="{ 'margin-top': '40px' }" :class="'k-form-separator'" />
    <div
      :style="{
        'justify-content': 'space-between',
        'align-content': 'center',
      }"
      :class="'k-form-buttons'"
    >
      <span :style="{ 'align-self': 'center' }">Step {{ step + 1 }} of 3</span>
      <span>
        <span v-if="step !== 0">
          <k-button :style="{ 'margin-right': '16px' }" @click="prevButtonClick">Previous</k-button>
        </span>
        <k-button
          :theme-color="'primary'"
          @click="nextSubmitButtonClick"
        >{{ isLastStep ? 'Register' : 'Next' }}</k-button>
      </span>
    </div>
  </div>
</template>

<script>
import { Button } from "@progress/kendo-vue-buttons";
import { Stepper } from "@progress/kendo-vue-layout";

export default {
  name: "App",
  components: { Stepper, "k-button": Button },
  mounted() {
    this.$router.push(this.items[0].data);
  },
  computed: {
    isLastStep() {
      return this.items.length - 1 === this.step;
    },
  },
  data() {
    return {
      step: 0,
      items: [
        {
          label: "Home",
          data: {
            path: "/layout/wizard/routing/overview",
          },
        },
        {
          label: "Details",
          data: {
            path: "/layout/wizard/routing/user-details",
          },
        },
        {
          label: "Register",
          data: {
            path: "/layout/wizard/routing/register",
          },
        },
      ],
    };
  },
  methods: {
    handleChange(e) {
      this.step = e.value;
      this.$router.push(this.items[e.value].data);
    },
    onClick() {
      if (this.value <= 1) { this.value += 1; }
      this.$router.push(this.items[this.value].data);
    },
    nextSubmitButtonClick() {
      if (this.isLastStep) {
        alert("Registration completed!");
      }
      else {
        this.step += 1;
        this.$router.push(this.items[this.step].data);
      }
    },
    prevButtonClick() {
      this.step -= 1;
      this.$router.push(this.items[this.step].data);
    },
  },
};
</script>

<style>
</style>
